<template>
    <div class="footer-dots">
        <b-dropdown toggle-class="dot-btn-wrapper" menu-class="dropdown-menu-xl" dropup variant="link" no-caret>
            <span slot="button-content">
                <i class="dot-btn-icon lnr-bullhorn icon-gradient bg-mean-fruit"></i>
                <div class="badge badge-dot badge-abs badge-dot-sm badge-danger">Notifications</div>
            </span>
            <div class="dropdown-menu-header mb-0">
                <div class="dropdown-menu-header-inner bg-deep-blue">
                    <div class="menu-header-image opacity-1 dd-header-bg-2"></div>
                    <div class="menu-header-content text-dark">
                        <h5 class="menu-header-title">Notifications</h5>
                        <h6 class="menu-header-subtitle">You have <b>21</b> unread messages</h6>
                    </div>
                </div>
            </div>
            <div class="nav-justified">
                <b-tabs class="card-header-tab-animation" card>
                    <b-tab title="Messages" class="p-3" active>
                        <div class="scroll-gradient">
                            <div class="scroll-area-sm">
                                <VuePerfectScrollbar class="scrollbar-container" v-once>
                                    <div class="vertical-time-simple vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                                        <div class="vertical-timeline-item vertical-timeline-element">
                                            <div><span class="vertical-timeline-element-icon bounce-in"></span>
                                                <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">All Hands Meeting</h4><span class="vertical-timeline-element-date"></span></div>
                                            </div>
                                        </div>
                                        <div class="vertical-timeline-item vertical-timeline-element">
                                            <div><span class="vertical-timeline-element-icon bounce-in"></span>
                                                <div class="vertical-timeline-element-content bounce-in"><p>Another meeting today, at <b class="text-danger">12:00 PM</b></p><span class="vertical-timeline-element-date"></span></div>
                                            </div>
                                        </div>
                                        <div class="vertical-timeline-item vertical-timeline-element">
                                            <div><span class="vertical-timeline-element-icon bounce-in"></span>
                                                <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">Build the production release</h4><span class="vertical-timeline-element-date"></span></div>
                                            </div>
                                        </div>
                                        <div class="vertical-timeline-item vertical-timeline-element">
                                            <div><span class="vertical-timeline-element-icon bounce-in"></span>
                                                <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">All Hands Meeting</h4><span class="vertical-timeline-element-date"></span></div>
                                            </div>
                                        </div>
                                        <div class="vertical-timeline-item vertical-timeline-element">
                                            <div><span class="vertical-timeline-element-icon bounce-in"></span>
                                                <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title text-success">FontAwesome Icons</h4><span class="vertical-timeline-element-date"></span></div>
                                            </div>
                                        </div>
                                        <div class="vertical-timeline-item vertical-timeline-element">
                                            <div><span class="vertical-timeline-element-icon bounce-in"></span>
                                                <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">Build the production release</h4><span class="vertical-timeline-element-date"></span></div>
                                            </div>
                                        </div>
                                        <div class="vertical-timeline-item vertical-timeline-element">
                                            <div><span class="vertical-timeline-element-icon bounce-in"></span>
                                                <div class="vertical-timeline-element-content bounce-in"><p>Another meeting today, at <b class="text-warning">12:00 PM</b></p><span class="vertical-timeline-element-date"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </VuePerfectScrollbar>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab title="Events" class="p-3">
                        <div class="scroll-gradient">
                            <div class="scroll-area-sm">
                                <VuePerfectScrollbar class="scrollbar-container" v-once>
                                    <div class="vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                                        <div class="vertical-timeline-item vertical-timeline-element">
                                            <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-success"> </i></span>
                                                <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">All Hands Meeting</h4>
                                                    <p>Lorem ipsum dolor sic amet, today at <a href="javascript:void(0);">12:00 PM</a></p><span class="vertical-timeline-element-date"></span></div>
                                            </div>
                                        </div>
                                        <div class="vertical-timeline-item vertical-timeline-element">
                                            <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-warning"> </i></span>
                                                <div class="vertical-timeline-element-content bounce-in"><p>Another meeting today, at <b class="text-danger">12:00 PM</b></p>
                                                    <p>Yet another one, at <span class="text-success">15:00 PM</span></p><span class="vertical-timeline-element-date"></span></div>
                                            </div>
                                        </div>
                                        <div class="vertical-timeline-item vertical-timeline-element">
                                            <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-danger"> </i></span>
                                                <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">Build the production release</h4>
                                                    <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p><span class="vertical-timeline-element-date"></span></div>
                                            </div>
                                        </div>
                                        <div class="vertical-timeline-item vertical-timeline-element">
                                            <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-primary"> </i></span>
                                                <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title text-success">Something not important</h4>
                                                    <p>Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p><span class="vertical-timeline-element-date"></span></div>
                                            </div>
                                        </div>
                                        <div class="vertical-timeline-item vertical-timeline-element">
                                            <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-success"> </i></span>
                                                <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">All Hands Meeting</h4>
                                                    <p>Lorem ipsum dolor sic amet, today at <a href="javascript:void(0);">12:00 PM</a></p><span class="vertical-timeline-element-date"></span></div>
                                            </div>
                                        </div>
                                        <div class="vertical-timeline-item vertical-timeline-element">
                                            <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-warning"> </i></span>
                                                <div class="vertical-timeline-element-content bounce-in"><p>Another meeting today, at <b class="text-danger">12:00 PM</b></p>
                                                    <p>Yet another one, at <span class="text-success">15:00 PM</span></p><span class="vertical-timeline-element-date"></span></div>
                                            </div>
                                        </div>
                                        <div class="vertical-timeline-item vertical-timeline-element">
                                            <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-danger"> </i></span>
                                                <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">Build the production release</h4>
                                                    <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p><span class="vertical-timeline-element-date"></span></div>
                                            </div>
                                        </div>
                                        <div class="vertical-timeline-item vertical-timeline-element">
                                            <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-primary"> </i></span>
                                                <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title text-success">Something not important</h4>
                                                    <p>Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p><span class="vertical-timeline-element-date"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </VuePerfectScrollbar>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab title="Status" class="pt-3">
                        <div>
                            <div class="no-results">
                                <div class="swal2-icon swal2-success swal2-animate-success-icon">
                                    <div class="swal2-success-circular-line-left" style="background-color: rgb(255, 255, 255);"></div>
                                    <span class="swal2-success-line-tip"></span>
                                    <span class="swal2-success-line-long"></span>
                                    <div class="swal2-success-ring"></div>
                                    <div class="swal2-success-fix" style="background-color: rgb(255, 255, 255);"></div>
                                    <div class="swal2-success-circular-line-right" style="background-color: rgb(255, 255, 255);"></div>
                                </div>
                                <div class="results-subtitle">All caught up!</div>
                                <div class="results-title">There are no system errors!</div>
                            </div>
                        </div>
                    </b-tab>
                </b-tabs>
                <ul class="nav flex-column">
                    <li class="nav-item-divider nav-item mt-0"></li>
                    <li class="nav-item-btn text-center nav-item">
                        <button class="btn-shadow btn-wide btn-pill btn btn-focus btn-sm">View Latest Changes</button>
                    </li>
                </ul>
            </div>
        </b-dropdown>
        <div class="dots-separator"></div>
        <b-dropdown toggle-class="dot-btn-wrapper" variant="link" no-caret dropup>
            <span slot="button-content">
                <i class="dot-btn-icon lnr-earth icon-gradient bg-happy-itmeo"></i>
            </span>
            <div class="dropdown-menu-header">
                <div class="dropdown-menu-header-inner pt-4 pb-4 bg-focus">
                    <div class="menu-header-image opacity-05 dd-header-bg-4"></div>
                    <div class="menu-header-content text-center text-white"><h6 class="menu-header-subtitle mt-0">Choose Language</h6></div>
                </div>
            </div>
            <button type="button" tabindex="0" class="dropdown-item">
                <country-flag country="US" class="mr-3 opacity-8"/>
                <span>USA</span>
            </button>
            <button type="button" tabindex="0" class="dropdown-item">
                <country-flag country="ES" class="mr-3 opacity-8"/>
                <span>Spain</span>
            </button>
            <div tabindex="-1" class="dropdown-divider"></div>
            <h6 tabindex="-1" class="dropdown-header">Others</h6>
            <button type="button" tabindex="0" class="dropdown-item active">
                <country-flag country="DE" class="mr-3 opacity-8"/>
                <span>Germany</span>
            </button>
            <button type="button" tabindex="0" class="dropdown-item">
                <country-flag country="IT" class="mr-3 opacity-8"/>
                <span>Italy</span>
            </button>
        </b-dropdown>
        <div class="dots-separator"></div>
        <b-dropdown toggle-class="dot-btn-wrapper" menu-class="dropdown-menu-xl" variant="link" no-caret dropup>
            <span slot="button-content">
                <i class="dot-btn-icon lnr-pie-chart icon-gradient bg-love-kiss"></i>
                <div class="badge badge-dot badge-abs badge-dot-sm badge-warning">Notifications</div>
            </span>
            <div class="dropdown-menu-header">
                <div class="dropdown-menu-header-inner bg-premium-dark">
                    <div class="menu-header-image dd-header-bg-7"></div>
                    <div class="menu-header-content text-white">
                        <h5 class="menu-header-title">Users Online</h5>
                        <h6 class="menu-header-subtitle">Recent Account Activity Overview</h6>
                    </div>
                </div>
            </div>
            <div class="widget-chart">
                <div class="widget-chart-content">
                    <div class="icon-wrapper rounded-circle">
                        <div class="icon-wrapper-bg opacity-9 bg-focus"></div>
                        <i class="lnr-users text-white"></i></div>
                    <div class="widget-numbers"><span>344k</span></div>
                    <div class="widget-subheading pt-2">Profile views since last login</div>
                </div>
            </div>
            <ul class="nav flex-column">
                <li class="nav-item-divider mt-0 nav-item"></li>
                <li class="nav-item-btn text-center nav-item">
                    <button class="btn-shine btn-wide btn-pill btn btn-warning btn-sm">
                        <font-awesome-icon class="mr-2" icon="cog"/>
                        Refresh List
                    </button>
                </li>
            </ul>
        </b-dropdown>
    </div>
</template>

<script>

    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import CountryFlag from 'vue-country-flag'

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faArrowUp,
        faCog,
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faArrowUp,
        faCog,
    );

    export default {
        components: {
            VuePerfectScrollbar,
            CountryFlag,
            'font-awesome-icon': FontAwesomeIcon,
        },
        data: () => ({}),
        methods: {}
    }
</script>

