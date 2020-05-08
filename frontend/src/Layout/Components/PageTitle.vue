<template>
    <div class="app-page-title">
        <div class="page-title-wrapper">
            <div class="page-title-heading">
                <div class="page-title-icon">
                    <i :class="icon"/>
                </div>
                <div>
                    {{heading}}
                    <div
                        class="page-title-subheading">
                        {{subheading}}
                    </div>
                </div>
            </div>
            <div class="page-title-actions" v-if="heading !== 'User Settings' && heading !== 'Organisation'">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <a href="javascript:void(0);" style="font-size: 22px" @click="onRefresh"><font-awesome-icon icon="sync" class="mr-3" v-on="on"/></a>
                    </template>
                    <span>
                        Refresh
                    </span>
                </v-tooltip>
                
                
                <!-- <button type="button" class="btn-shadow d-inline-flex align-items-center btn btn-success">
                    <font-awesome-icon class="mr-2" icon="plus"/>
                    Create New
                </button> -->
            </div>
        </div>
    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faStar,
        faPlus,
        faSync
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faStar,
        faPlus,
        faSync
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
        props: {
            icon: String,
            heading: String,
            subheading: String,

        },

        methods: {
            onRefresh() {
                if (this.heading === 'Main Page')
                    window.getApp.$emit('MAIN_PAGE_REFRESH');
                    
                if (this.heading === 'Digital Wallet')
                    window.getApp.$emit('DIGITAL_WALLET_REFRESH');

                else if (this.heading === 'Orders')
                    window.getApp.$emit('ORDERS_REFRESH');

                else if (this.heading === 'Current Month Summary')
                    window.getApp.$emit('SUMMARY_REFRESH');

                else if (this.heading === 'Billing')
                    window.getApp.$emit('BILLING_REFRESH');

                else if (this.heading === 'User Logs')
                    window.getApp.$emit('USER_LOGS_REFRESH');
                
            }
        }
    }
</script>
