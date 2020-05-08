<template>
  <div>
    <b-card>
      <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
      <!-- Main table element -->
      <b-table show-empty
               stacked="md"
               :items="mainData"
               :fields="fields"
               :current-page="currentPage"
               :per-page="perPage"
               :filter="filter"
               :sort-by.sync="sortBy"
               :sort-desc.sync="sortDesc"
               :sort-direction="sortDirection"
      >
        <template slot="id" slot-scope="row">{{row.value.first}} {{row.value.last}}</template>
        <template slot="companyId" slot-scope="row">{{row.value.first}} {{row.value.last}}</template>
        <template slot="stationId" slot-scope="row">{{row.value.first}} {{row.value.last}}</template>
        <template slot="cameraId" slot-scope="row">{{row.value.first}} {{row.value.last}}</template>
        <template slot="message" slot-scope="row">{{row.value.first}} {{row.value.last}}</template>                        
        <template slot="createdAt" slot-scope="row">{{row.value.first}} {{row.value.last}}</template>                        
        <template slot="updatedAt" slot-scope="row">{{row.value.first}} {{row.value.last}}</template>                        
      </b-table>

      <b-row>
        <b-col md="6" class="my-1">
          <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
  import PageTitle from "./PageTitle.vue";
  import io from "socket.io-client";

  export default {
    components: {
      PageTitle,
    },

    created() {
      this.socket = io('http://localhost:3000');
      this.socket.on('connect', this.sockOnConnect);
      this.socket.on('messages', this.sockOnMessage);

      this.axios.post('/api/message/get_messages').then((response) => {
        if(response.data.status === 'success'){
          this.$store.dispatch('setMainData', response.data.Messages);
        }
      }).catch((error) => {
        console.log(error);
      });
    },

    data: () => ({
      heading: 'Dashboard',
      subheading: 'Dashboard which shows the all messages from Camera.',
      icon: 'pe-7s-notebook icon-gradient bg-mixed-hopes',

      items: [],
      fields: [
        { key: 'id', label: 'Message ID', sortable: true, sortDirection: 'desc' },
        { key: 'companyId', label: 'Company ID', sortable: true, sortDirection: 'desc' },
        { key: 'stationId', label: 'Station ID', sortable: true, sortDirection: 'desc' },
        { key: 'cameraId', label: 'Camera ID', sortable: true, sortDirection: 'desc' },
        { key: 'message', label: 'Message', sortable: true, sortDirection: 'desc' },
        { key: 'createdAt', label: 'Created At', sortable: true, sortDirection: 'desc' },
        { key: 'updatedAt', label: 'Updated At', sortable: true, sortDirection: 'desc' }      
      ],
      currentPage: 1,
      perPage: 30,
      totalRows: 0,
      pageOptions: [ 5, 10, 15, 20],
      sortBy: null,
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      modalInfo: { title: '', content: '' },

      socket: null,
      isConnected: false,
      socketMessage: '',
      messages: [],
    }),

    computed: {
      sortOptions () {
        // Create an options list from our fields
        return this.fields
        .filter(f => f.sortable)
        .map(f => { return { text: f.label, value: f.key } })
      },
      mainData () {
        return this.$store.getters.getMainData;
      }     
    },

    methods: {
      info (item, index, button) {
        this.modalInfo.title = `Row index: ${index}`
        this.modalInfo.content = JSON.stringify(item, null, 2)
        this.$root.$emit('bv::show::modal', 'modalInfo', button)
      },

      getRealtimeData() {
      },
      sockOnConnect() {
        console.log('connected');
      },
      sockOnMessage(data) {
        console.log(data);
        this.mainData.push(data.message);
      }
    }
  }
</script>
