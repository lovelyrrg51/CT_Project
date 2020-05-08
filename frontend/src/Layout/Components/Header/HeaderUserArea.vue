<template>
    <div class="d-flex">
        <div class="header-btn-lg pr-0">
            <div class="widget-content p-0">
                <div class="widget-content-wrapper">
                    <div class="icon-wrapper icon-wrapper-alt rounded-circle">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <img width="42" class="rounded-circle" src="@/assets/images/avatars/1.jpg" alt="" style="cursor: pointer;" v-on="on" @click="logOut">
                            </template>
                            <span>
                                Logged User (click to logout)
                            </span>
                        </v-tooltip>
                    </div>
                    <!-- <div class="widget-content-left">
                        <b-dropdown toggle-class="p-0 mr-2" menu-class="dropdown-menu-lg" variant="link" no-caret right>
                            <span slot="button-content">
                                <div class="icon-wrapper icon-wrapper-alt rounded-circle">
                                    <img width="42" class="rounded-circle" src="@/assets/images/avatars/1.jpg" alt="">
                                </div>
                            </span>
                            <div class="dropdown-menu-header">
                                <div class="dropdown-menu-header-inner bg-info">
                                    <div class="menu-header-image opacity-2 dd-header-bg-6"></div>
                                    <div class="menu-header-content text-left">
                                        <div class="widget-content p-0">
                                            <div class="widget-content-wrapper">
                                                <div class="widget-content-left mr-3">
                                                    <img width="42" class="rounded-circle" src="@/assets/images/avatars/1.jpg" alt="">
                                                </div>
                                                <div class="widget-content-left">
                                                    <div class="widget-heading">Andrei Vlazimir</div>
                                                    <div class="widget-subheading opacity-8">Senior Web Developer</div>
                                                </div>
                                                <div class="widget-content-right mr-2">
                                                    <button class="btn-pill btn-shadow btn-shine btn btn-focus">Logout</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="scroll-area-xs" style="height: 265px;">
                                <VuePerfectScrollbar class="scrollbar-container" v-once>
                                    <ul class="nav flex-column">
                                        <li class="nav-item-header nav-item">My Account</li>
                                        <li class="nav-item"><a href="/user-settings" class="nav-link">User Settings
                                        </a></li>
                                        <li class="nav-item"><a href="/organisation" class="nav-link">Organisation</a></li>
                                        <li class="nav-item"><a href="/digital-wallet" class="nav-link">Digital Wallet</a></li>
                                        <li class="nav-item"><a href="/orders" class="nav-link">Orders</a></li>
                                        <li class="nav-item"><a href="/cur-month-summary" class="nav-link">Current Month Summary</a></li>
                                        <li class="nav-item"><a href="/billing" class="nav-link">Billing</a></li>
                                        <li class="nav-item"><a href="/user-logs" class="nav-link">User Logs</a></li>
                                    </ul>
                                </VuePerfectScrollbar>
                            </div>
                        </b-dropdown>
                    </div> -->
                    <div class="widget-content-left  header-user-info">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <div class="widget-heading" style="cursor: pointer;" v-on="on" @click="logOut">{{userName}}</div>
                            </template>
                            <span>
                                Logged User (click to logout)
                            </span>
                        </v-tooltip>
                        
                        <!-- <div class="widget-subheading">VP People Manager</div> -->
                    </div>
                    <!-- <div class="widget-content-right header-user-info ml-3">
                        <b-btn v-b-tooltip.hover title="Tooltip Example" class="btn-shadow p-1" size="sm" variant="info">
                            <font-awesome-icon icon="calendar-alt" class="mr-1 ml-1"/>
                        </b-btn>
                    </div> -->
                </div>
            </div>
        </div>

        <!-- <div class="header-btn-lg">
            <button type="button" class="hamburger hamburger--elastic" v-bind:class="{ 'is-active': showDrawerSection }"
                    v-on:click="showDrawerSection = !showDrawerSection">
                <span class="hamburger-box"><span class="hamburger-inner"></span></span>
            </button>
        </div> -->

        <!-- <div class="app-drawer-wrapper" v-bind:class="{ 'drawer-open': showDrawerSection }">
            <div class="drawer-nav-btn">
                <button type="button" class="hamburger hamburger--elastic" v-bind:class="{ 'is-active': showDrawerSection }" v-on:click="showDrawerSection = !showDrawerSection">
                    <span class="hamburger-box"><span class="hamburger-inner"></span></span></button>
            </div>
            <div class="drawer-content-wrapper">
                <VuePerfectScrollbar class="scrollbar-container" v-once>
                    <h3 class="drawer-heading">Servers Status</h3>
                    <div class="drawer-section">
                        <div class="row">
                            <div class="col">
                                <div class="progress-box">
                                    <h4>Server Load 1</h4>
                                    <vue-circle
                                        :progress="21"
                                        :size="104"
                                        :reverse="false"
                                        line-cap="round"
                                        :fill="fill1"
                                        empty-fill="rgba(0, 0, 0, .08)"
                                        :animation-start-value="0.0"
                                        :start-angle="90"
                                        insert-mode="append"
                                        :thickness="7"
                                        :show-percent="true">
                                    </vue-circle>
                                </div>
                            </div>
                            <div class="col">
                                <div class="progress-box">
                                    <h4>Server Load 2</h4>
                                    <vue-circle
                                        :progress="34"
                                        :size="104"
                                        :reverse="false"
                                        line-cap="round"
                                        :fill="fill2"
                                        empty-fill="rgba(0, 0, 0, .08)"
                                        :animation-start-value="0.0"
                                        :start-angle="90"
                                        insert-mode="append"
                                        :thickness="7"
                                        :show-percent="true">
                                    </vue-circle>
                                </div>
                            </div>
                            <div class="col">
                                <div class="progress-box">
                                    <h4>Server Load 3</h4>
                                    <vue-circle
                                        :progress="16"
                                        :size="104"
                                        :reverse="false"
                                        line-cap="round"
                                        :fill="fill3"
                                        empty-fill="rgba(0, 0, 0, .08)"
                                        :animation-start-value="0.0"
                                        :start-angle="90"
                                        insert-mode="append"
                                        :thickness="7"
                                        :show-percent="true">
                                    </vue-circle>
                                </div>
                            </div>
                        </div>
                        <div class="divider"></div>
                        <div class="mt-3">
                            <h5 class="text-center card-title">Live Statistics</h5>
                            <div class="text-center">
                                <trend
                                    :data="[0, 8, 5, 7, 7, 8, 5, 2, 7, 8]"
                                    :gradient="['var(--success)']"
                                    stroke-width="3"
                                    :height="80"
                                    stroke-linecap="round"
                                    auto-draw
                                    smooth>
                                </trend>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="widget-chart p-0">
                                        <div class="widget-chart-content">
                                            <div class="widget-numbers text-warning fsize-3">43</div>
                                            <div class="widget-subheading pt-1">Packages</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="widget-chart p-0">
                                        <div class="widget-chart-content">
                                            <div class="widget-numbers text-danger fsize-3">65</div>
                                            <div class="widget-subheading pt-1">Dropped</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="widget-chart p-0">
                                        <div class="widget-chart-content">
                                            <div class="widget-numbers text-success fsize-3">18</div>
                                            <div class="widget-subheading pt-1">Invalid</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="divider"></div>
                            <div class="text-center mt-2 d-block">
                                <button class="mr-2 border-0 btn-transition btn btn-outline-danger">Escalate Issue</button>
                                <button class="border-0 btn-transition btn btn-outline-success">Support Center</button>
                            </div>
                        </div>
                    </div>
                    <h3 class="drawer-heading">File Transfers</h3>
                    <div class="drawer-section p-0">
                        <div class="files-box">
                            <ul class="list-group list-group-flush">
                                <li class="pt-2 pb-2 pr-2 list-group-item">
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left opacity-6 fsize-2 mr-3 text-primary center-elem">
                                                <font-awesome-icon icon="file-alt" />
                                            </div>
                                            <div class="widget-content-left">
                                                <div class="widget-heading font-weight-normal">TPSReport.docx</div>
                                            </div>
                                            <div class="widget-content-right widget-content-actions">
                                                <button class="btn-icon btn-icon-only btn btn-link btn-sm">
                                                    <font-awesome-icon icon="cloud-download-alt" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="pt-2 pb-2 pr-2 list-group-item">
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left opacity-6 fsize-2 mr-3 text-warning center-elem">
                                                <font-awesome-icon icon="file-archive" />
                                            </div>
                                            <div class="widget-content-left">
                                                <div class="widget-heading font-weight-normal">Latest_photos.zip</div>
                                            </div>
                                            <div class="widget-content-right widget-content-actions">
                                                <button class="btn-icon btn-icon-only btn btn-link btn-sm">
                                                    <font-awesome-icon icon="cloud-download-alt" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="pt-2 pb-2 pr-2 list-group-item">
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left opacity-6 fsize-2 mr-3 text-danger center-elem">
                                                <font-awesome-icon icon="file-pdf" />
                                            </div>
                                            <div class="widget-content-left">
                                                <div class="widget-heading font-weight-normal">Annual Revenue.pdf</div>
                                            </div>
                                            <div class="widget-content-right widget-content-actions">
                                                <button class="btn-icon btn-icon-only btn btn-link btn-sm">
                                                    <font-awesome-icon icon="cloud-download-alt" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="pt-2 pb-2 pr-2 list-group-item">
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left opacity-6 fsize-2 mr-3 text-success center-elem">
                                                <font-awesome-icon icon="file-excel" />
                                            </div>
                                            <div class="widget-content-left">
                                                <div class="widget-heading font-weight-normal">Analytics_GrowthReport.xls</div>
                                            </div>
                                            <div class="widget-content-right widget-content-actions">
                                                <button class="btn-icon btn-icon-only btn btn-link btn-sm">
                                                    <font-awesome-icon icon="cloud-download-alt" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h3 class="drawer-heading">Tasks in Progress</h3>
                    <div class="drawer-section p-0">
                        <div class="todo-box">
                            <ul class="todo-list-wrapper list-group list-group-flush">
                                <li class="list-group-item">
                                    <div class="todo-indicator bg-warning"></div>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left mr-2">
                                                <div class="custom-checkbox custom-control">
                                                    <input type="checkbox" id="exampleCustomCheckbox1266" class="custom-control-input">
                                                    <label class="custom-control-label" for="exampleCustomCheckbox1266">&nbsp;</label></div>
                                            </div>
                                            <div class="widget-content-left">
                                                <div class="widget-heading">Wash the car
                                                    <div class="badge badge-danger ml-2">Rejected</div>
                                                </div>
                                                <div class="widget-subheading"><i>Written by Bob</i></div>
                                            </div>
                                            <div class="widget-content-right widget-content-actions">
                                                <button class="border-0 btn-transition btn btn-outline-success">
                                                    <font-awesome-icon icon="check" />
                                                </button>
                                                <button class="border-0 btn-transition btn btn-outline-danger">
                                                    <font-awesome-icon icon="trash-alt" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="todo-indicator bg-focus"></div>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left mr-2">
                                                <div class="custom-checkbox custom-control">
                                                    <input type="checkbox" id="exampleCustomCheckbox1666" class="custom-control-input">
                                                    <label class="custom-control-label" for="exampleCustomCheckbox1666">&nbsp;</label></div>
                                            </div>
                                            <div class="widget-content-left">
                                                <div class="widget-heading">Task with hover dropdown menu</div>
                                                <div class="widget-subheading">
                                                    <div>By Johnny
                                                        <div class="badge badge-pill badge-info ml-2">NEW</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="widget-content-right widget-content-actions">
                                                <div class="d-inline-block">
                                                    <b-dropdown toggle-class="btn-icon btn-icon-only border-0 btn-transition" variant="link" no-caret>
                                                        <span slot="button-content"><font-awesome-icon icon="ellipsis-h" /></span>
                                                        <div>
                                                            <button type="button" disabled="" tabindex="-1" class="disabled dropdown-item">Action</button>
                                                            <button type="button" tabindex="0" class="dropdown-item">Another Action</button>
                                                            <div tabindex="-1" class="dropdown-divider"></div>
                                                            <button type="button" tabindex="0" class="dropdown-item">Another Action</button>
                                                        </div>
                                                    </b-dropdown>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="todo-indicator bg-primary"></div>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left mr-2">
                                                <div class="custom-checkbox custom-control">
                                                    <input type="checkbox" id="exampleCustomCheckbox4777" class="custom-control-input">
                                                    <label class="custom-control-label" for="exampleCustomCheckbox4777">&nbsp;</label></div>
                                            </div>
                                            <div class="widget-content-left flex2">
                                                <div class="widget-heading">Badge on the right task</div>
                                                <div class="widget-subheading">This task has show on hover actions!</div>
                                            </div>
                                            <div class="widget-content-right widget-content-actions">
                                                <button class="border-0 btn-transition btn btn-outline-success">
                                                    <font-awesome-icon icon="check" />
                                                </button>
                                            </div>
                                            <div class="widget-content-right ml-3">
                                                <div class="badge badge-pill badge-success">Latest Task</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="todo-indicator bg-info"></div>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left mr-2">
                                                <div class="custom-checkbox custom-control">
                                                    <input type="checkbox" id="exampleCustomCheckbox2444" class="custom-control-input">
                                                    <label class="custom-control-label" for="exampleCustomCheckbox2444">&nbsp;</label></div>
                                            </div>
                                            <div class="widget-content-left mr-3">
                                                <div class="widget-content-left"><img width="42" class="rounded" src="@/assets/images/avatars/1.jpg" alt=""/></div>
                                            </div>
                                            <div class="widget-content-left">
                                                <div class="widget-heading">Go grocery shopping</div>
                                                <div class="widget-subheading">A short description ...</div>
                                            </div>
                                            <div class="widget-content-right widget-content-actions">
                                                <button class="border-0 btn-transition btn btn-sm btn-outline-success">
                                                    <font-awesome-icon icon="check" />
                                                </button>
                                                <button class="border-0 btn-transition btn btn-sm btn-outline-danger">
                                                    <font-awesome-icon icon="trash-alt" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="todo-indicator bg-success"></div>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left mr-2">
                                                <div class="custom-checkbox custom-control">
                                                    <input type="checkbox" id="exampleCustomCheckbox3222" class="custom-control-input">
                                                    <label class="custom-control-label" for="exampleCustomCheckbox3222">&nbsp;</label></div>
                                            </div>
                                            <div class="widget-content-left flex2">
                                                <div class="widget-heading">Development Task</div>
                                                <div class="widget-subheading">Finish React ToDo List App</div>
                                            </div>
                                            <div class="widget-content-right">
                                                <div class="badge badge-warning mr-2">69</div>
                                            </div>
                                            <div class="widget-content-right">
                                                <button class="border-0 btn-transition btn btn-outline-success">
                                                    <font-awesome-icon icon="check" />
                                                </button>
                                                <button class="border-0 btn-transition btn btn-outline-danger">
                                                    <font-awesome-icon icon="trash-alt" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h3 class="drawer-heading">Urgent Notifications</h3>
                    <div class="drawer-section">
                        <div class="notifications-box">
                            <div class="vertical-time-simple vertical-without-time vertical-timeline vertical-timeline--one-column">
                                <div class="vertical-timeline-item dot-danger vertical-timeline-element">
                                    <div><span class="vertical-timeline-element-icon bounce-in"></span>
                                        <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">All Hands Meeting</h4><span class="vertical-timeline-element-date"></span></div>
                                    </div>
                                </div>
                                <div class="vertical-timeline-item dot-warning vertical-timeline-element">
                                    <div><span class="vertical-timeline-element-icon bounce-in"></span>
                                        <div class="vertical-timeline-element-content bounce-in"><p>Yet another one, at <span class="text-success">15:00 PM</span></p><span class="vertical-timeline-element-date"></span></div>
                                    </div>
                                </div>
                                <div class="vertical-timeline-item dot-success vertical-timeline-element">
                                    <div><span class="vertical-timeline-element-icon bounce-in"></span>
                                        <div class="vertical-timeline-element-content bounce-in">
                                            <h4 class="timeline-title">Build the production release
                                                <div class="badge badge-danger ml-2">NEW</div>
                                            </h4>
                                            <span class="vertical-timeline-element-date"></span></div>
                                    </div>
                                </div>
                                <div class="vertical-timeline-item dot-primary vertical-timeline-element">
                                    <div><span class="vertical-timeline-element-icon bounce-in"></span>
                                        <div class="vertical-timeline-element-content bounce-in">
                                            <h4 class="timeline-title">Something not important
                                                <div class="avatar-wrapper mt-2 avatar-wrapper-overlap">
                                                    <div class="avatar-icon-wrapper avatar-icon-sm">
                                                        <div class="avatar-icon"><img
                                                            src="@/assets/images/avatars/1.jpg"
                                                            alt=""></div>
                                                    </div>
                                                    <div class="avatar-icon-wrapper avatar-icon-sm">
                                                        <div class="avatar-icon"><img
                                                            src="@/assets/images/avatars/2.jpg"
                                                            alt=""></div>
                                                    </div>
                                                    <div class="avatar-icon-wrapper avatar-icon-sm">
                                                        <div class="avatar-icon"><img
                                                            src="@/assets/images/avatars/3.jpg"
                                                            alt=""></div>
                                                    </div>
                                                    <div class="avatar-icon-wrapper avatar-icon-sm">
                                                        <div class="avatar-icon"><img
                                                            src="@/assets/images/avatars/4.jpg"
                                                            alt=""></div>
                                                    </div>
                                                    <div class="avatar-icon-wrapper avatar-icon-sm">
                                                        <div class="avatar-icon"><img
                                                            src="@/assets/images/avatars/5.jpg"
                                                            alt=""></div>
                                                    </div>
                                                    <div class="avatar-icon-wrapper avatar-icon-sm">
                                                        <div class="avatar-icon"><img
                                                            src="@/assets/images/avatars/6.jpg"
                                                            alt=""></div>
                                                    </div>
                                                    <div class="avatar-icon-wrapper avatar-icon-sm">
                                                        <div class="avatar-icon"><img
                                                            src="@/assets/images/avatars/7.jpg"
                                                            alt=""></div>
                                                    </div>
                                                    <div class="avatar-icon-wrapper avatar-icon-sm">
                                                        <div class="avatar-icon"><img
                                                            src="@/assets/images/avatars/8.jpg"
                                                            alt=""></div>
                                                    </div>
                                                    <div class="avatar-icon-wrapper avatar-icon-sm avatar-icon-add">
                                                        <div class="avatar-icon"><i>+</i></div>
                                                    </div>
                                                </div>
                                            </h4>
                                            <span class="vertical-timeline-element-date"></span></div>
                                    </div>
                                </div>
                                <div class="vertical-timeline-item dot-info vertical-timeline-element">
                                    <div><span class="vertical-timeline-element-icon bounce-in"></span>
                                        <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">This dot has an info state</h4><span class="vertical-timeline-element-date"></span></div>
                                    </div>
                                </div>
                                <div class="vertical-timeline-item dot-dark vertical-timeline-element">
                                    <div><span class="vertical-timeline-element-icon is-hidden"></span>
                                        <div class="vertical-timeline-element-content is-hidden"><h4 class="timeline-title">This dot has a dark state</h4><span class="vertical-timeline-element-date"></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </VuePerfectScrollbar>
            </div>
        </div> -->
        <b-modal
            id="modal-confirm-logout"
            title="CT Project Client v1.0"
            no-close-on-backdrop
            centered
            >
            <b-container fluid>
                <b-row class="mb-3 mt-3 text-center">
                    <b-col cols="2" class="text-right">
                        <img src="@/assets/images/some/question.png">
                    </b-col>
                    <b-col cols="10" class="m-auto text-left">
                        <h5>Are you sure you want to log out?</h5>
                    </b-col>
                </b-row>
            </b-container>

            <template v-slot:modal-footer>
                <div class="w-100 text-right">
                    <b-button
                        variant="primary"
                        size="md"
                        class="mr-2"
                        @click="doConfirmLogout"
                    >
                        Yes
                    </b-button>
                    <b-button
                        variant="secondary"
                        size="md"
                        @click="$bvModal.hide('modal-confirm-logout')"
                    >
                        No
                    </b-button>
                </div>
            </template>
        </b-modal>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faAngleDown,
        faCalendarAlt,
        faTrashAlt,
        faCheck,
        faFileAlt,
        faCloudDownloadAlt,
        faFileExcel,
        faFilePdf,
        faFileArchive,
        faEllipsisH,
    } from '@fortawesome/free-solid-svg-icons'

    library.add(
        faAngleDown,
        faCalendarAlt,
        faTrashAlt,
        faCheck,
        faFileAlt,
        faCloudDownloadAlt,
        faFileExcel,
        faFilePdf,
        faFileArchive,
        faEllipsisH,
    );

    export default {
        components: {
            VuePerfectScrollbar,
        },
        data: () => ({
            fill1: {gradient: ["#00b09b", "#96c93d"]},
            fill2: {gradient: ["#ff0844", "#ffb199"]},
            fill3: {gradient: ["#f6d365", "#fda085"]},
            showDrawerSection: false,
        }),

        computed: {
           userName () {
               let user = this.$store.getters.getUser;
               return user.name;
           }
        },

        methods: {
            logOut() {
                this.$bvModal.show('modal-confirm-logout');
            },

            doConfirmLogout() {
                this.$store.dispatch('setLoginFlag', false);
                this.$bvModal.hide('modal-confirm-logout');
                this.$router.push('/');
            }
        }
    }


</script>
