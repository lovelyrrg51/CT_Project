<template>
    <div :class="sidebarbg" class="app-sidebar sidebar-shadow" @mouseover="toggleSidebarHover('add','closed-sidebar-open')" @mouseleave="toggleSidebarHover('remove','closed-sidebar-open')">
        <div class="app-header__logo">
            <div class="logo-src"/>
            <div class="header__pane ml-auto">
                <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" v-bind:class="{ 'is-active' : isOpen }" @click="toggleBodyClass('closed-sidebar')">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>
        <div class="app-sidebar-content">
            <VuePerfectScrollbar class="app-sidebar-scroll" v-once>
                <sidebar-menu showOneChild :menu="menu" @item-click="onItemClick"/>
            </VuePerfectScrollbar>
        </div>

    </div>
</template>

<script>
    import {SidebarMenu} from 'vue-sidebar-menu'
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    export default {
        components: {
            SidebarMenu,
            VuePerfectScrollbar
        },
        data() {
            return {
                isOpen: false,
                sidebarActive: false,

                menu: [
                    // {
                    //     header: true,
                    //     title: 'Main Navigation',
                    // },
                    {
                        icon: 'pe-7s-home',
                        title: 'Main Page',
                        href: '/mainpage',
                    },
                    {
                        icon: 'pe-7s-user',
                        title: 'User Settings',
                        href: '/user-settings',
                    },
                    {
                        icon: 'pe-7s-network',
                        title: 'Organisation',
                        href: '/organisation',
                    },
                    {
                        icon: 'pe-7s-wallet',
                        title: 'Digital Wallet',
                        href: '/digital-wallet',
                    },
                    {
                        icon: 'pe-7s-shopbag',
                        title: 'Orders',
                        href: '/orders',
                    },
                    {
                        icon: 'pe-7s-graph2',
                        title: 'Current Month Summary',
                        href: '/cur-month-summary',
                    },
                    {
                        icon: 'pe-7s-note2',
                        title: 'Billing',
                        href: '/billing',
                    },
                    {
                        icon: 'pe-7s-users',
                        title: 'User Logs',
                        href: '/user-logs',
                    },
                    // {
                    //     title: 'Dashboards',
                    //     icon: 'pe-7s-rocket',
                    //     child: [
                    //         {
                    //             href: '/dashboards/analytics',
                    //             title: 'Analytics',
                    //         },
                    //         {
                    //             href: '/dashboards/advertisement',
                    //             title: 'Advertisement',
                    //         },
                    //         {
                    //             href: '/dashboards/management',
                    //             title: 'Management',
                    //         },
                    //         {
                    //             href: '/dashboards/helpdesk',
                    //             title: 'Helpdesk',
                    //         },
                    //         {
                    //             href: '/dashboards/monitoring',
                    //             title: 'Monitoring',
                    //         },
                    //         {
                    //             href: '/dashboards/crypto',
                    //             title: 'Crypto',
                    //         },
                    //         {
                    //             href: '/dashboards/project-management',
                    //             title: 'Project Management',
                    //         },
                    //         {
                    //             href: '/dashboards/product',
                    //             title: 'Product',
                    //         },
                    //         {
                    //             href: '/dashboards/statistics',
                    //             title: 'Statistics',
                    //         },
                    //     ]
                    // },
                    // {
                    //     title: 'Pages',
                    //     icon: 'pe-7s-browser',
                    //     child: [
                    //         {
                    //             href: '/pages/login',
                    //             title: 'Login',
                    //         },
                    //         {
                    //             href: '/pages/login-boxed',
                    //             title: 'Login Boxed',
                    //         },
                    //         {
                    //             href: '/pages/register',
                    //             title: 'Register',
                    //         },
                    //         {
                    //             href: '/pages/register-boxed',
                    //             title: 'Register Boxed',
                    //         },
                    //         {
                    //             href: '/pages/forgot-password',
                    //             title: 'Forgot Password',
                    //         },
                    //         {
                    //             href: '/pages/forgot-password-boxed',
                    //             title: 'Forgot Password Boxed',
                    //         },
                    //     ]
                    // },
                    // {
                    //     title: 'Applications',
                    //     icon: 'pe-7s-plugin',
                    //     child: [
                    //         {
                    //             href: '/apps/mailbox',
                    //             title: 'Mailbox',
                    //         },
                    //         {
                    //             href: '/apps/chat',
                    //             title: 'Chat',
                    //         },
                    //         {
                    //             title: 'Forums Section',
                    //             child: [
                    //                 {
                    //                     href: '/apps/forums-listing',
                    //                     title: 'Listing',
                    //                 },
                    //                 {
                    //                     href: '/apps/forums-threads',
                    //                     title: 'Threads',
                    //                 },
                    //                 {
                    //                     href: '/apps/forums-discussion',
                    //                     title: 'Discussions',
                    //                 },
                    //             ]
                    //         },
                    //     ]
                    // },
                    // {
                    //     header: true,
                    //     title: 'UI Components',
                    // },
                    // {
                    //     icon: 'pe-7s-diamond',
                    //     title: 'Elements',
                    //     child: [
                    //         {
                    //             title: 'Buttons',
                    //             child: [
                    //                 {
                    //                     title: 'Standard',
                    //                     href: '/elements/buttons-standard',
                    //                 },
                    //                 {
                    //                     title: 'Pills',
                    //                     href: '/elements/buttons-pills',

                    //                 },
                    //                 {
                    //                     title: 'Square',
                    //                     href: '/elements/buttons-square',

                    //                 },
                    //                 {
                    //                     title: 'Shadow',
                    //                     href: '/elements/buttons-shadow',

                    //                 },
                    //                 {
                    //                     title: 'With Icons',
                    //                     href: '/elements/buttons-icons',
                    //                 },
                    //             ]
                    //         },
                    //         {
                    //             title: 'Dropdowns',
                    //             href: '/elements/dropdowns',
                    //         },
                    //         {
                    //             title: 'Icons',
                    //             href: '/elements/icons',
                    //         },
                    //         {
                    //             title: 'Badges',
                    //             href: '/elements/badges-labels',
                    //         },
                    //         {
                    //             title: 'Cards',
                    //             href: '/elements/cards',
                    //         },
                    //         {
                    //             title: 'Loading Indicators',
                    //             href: '/elements/loaders',
                    //         },
                    //         {
                    //             title: 'List Groups',
                    //             href: '/elements/list-group',
                    //         },
                    //         {
                    //             title: 'Navigation Menus',
                    //             href: '/elements/navigation',
                    //         },
                    //         {
                    //             title: 'Timeline',
                    //             href: '/elements/timelines',
                    //         },
                    //         {
                    //             title: 'Utilities',
                    //             href: '/elements/utilities',
                    //         },
                    //     ],
                    // },
                    // {
                    //     icon: 'pe-7s-car',
                    //     title: 'Components',
                    //     child: [
                    //         {
                    //             title: 'Tabs',
                    //             href: '/components/tabs',
                    //         },
                    //         {
                    //             title: 'Accordions',
                    //             href: '/components/accordions',
                    //         },
                    //         {
                    //             title: 'Sweet Alerts',
                    //             href: '/components/swal-alerts',
                    //         },
                    //         {
                    //             title: 'Modals',
                    //             href: '/components/modals',
                    //         },
                    //         {
                    //             title: 'Progress Bar',
                    //             href: '/components/progress-bar',
                    //         },
                    //         {
                    //             title: 'Tooltips & Popovers',
                    //             href: '/components/tooltips-popovers',
                    //         },
                    //         {
                    //             title: 'Carousel',
                    //             href: '/components/carousel',
                    //         },
                    //         {
                    //             title: 'Calendar',
                    //             href: '/components/calendar',
                    //         },
                    //         {
                    //             title: 'Pagination',
                    //             href: '/components/pagination',
                    //         },
                    //         {
                    //             title: 'Count Up',
                    //             href: '/components/count-up',
                    //         },
                    //         {
                    //             title: 'Scrollable',
                    //             href: '/components/scrollable-elements',
                    //         },
                    //         {
                    //             title: 'Maps',
                    //             href: '/components/maps',
                    //         },
                    //         {
                    //             title: 'Ratings',
                    //             href: '/components/ratings',
                    //         },
                    //         {
                    //             title: 'Image Crop',
                    //             href: '/components/image-crop',
                    //         },
                    //     ],
                    // },
                    // {
                    //     icon: 'pe-7s-display2',
                    //     title: 'Tables',
                    //     child: [
                    //         {
                    //             title: 'Regular Tables',
                    //             href: '/tables/regular-tables',
                    //         },
                    //         {
                    //             title: 'Dynamic Tables',
                    //             href: '/tables/dynamic-tables',
                    //         },
                    //     ]
                    // },
                    // {
                    //     header: true,
                    //     title: 'Material Components',
                    // },
                    // {
                    //     icon: 'pe-7s-diamond',
                    //     title: 'Form Controls',
                    //     child: [
                    //         {
                    //             title: 'Autocompletes',
                    //             href: '/material-components/autocompletes',
                    //         },
                    //         {
                    //             title: 'Combobox',
                    //             href: '/material-components/combobox',
                    //         },
                    //         {
                    //             title: 'Forms',
                    //             href: '/material-components/forms',
                    //         },
                    //         {
                    //             title: 'Selects',
                    //             href: '/material-components/selects',
                    //         },
                    //         {
                    //             title: 'Selection controls',
                    //             href: '/material-components/selection-controls',
                    //         },
                    //         {
                    //             title: 'Sliders',
                    //             href: '/material-components/sliders',
                    //         },
                    //         {
                    //             title: 'Textareas',
                    //             href: '/material-components/textareas',
                    //         },
                    //         {
                    //             title: 'Text fields',
                    //             href: '/material-components/text-fields',
                    //         },
                    //         {
                    //             title: 'Datepickers',
                    //             href: '/material-components/datepickers',
                    //         },
                    //         {
                    //             title: 'Timepickers',
                    //             href: '/material-components/timepickers',
                    //         },
                    //     ]
                    // },
                    // {
                    //     icon: 'pe-7s-diamond',
                    //     title: 'Navigation',
                    //     child: [
                    //         {
                    //             title: 'Breadcrumbs',
                    //             href: '/material-components/breadcrumbs',
                    //         },
                    //         {
                    //             title: 'Menus',
                    //             href: '/material-components/menus',
                    //         },
                    //         {
                    //             title: 'Navigation drawers',
                    //             href: '/material-components/navigation-drawers',
                    //         },
                    //         {
                    //             title: 'Toolbars',
                    //             href: '/material-components/toolbars',
                    //         },
                    //     ]
                    // },
                    // {
                    //     icon: 'pe-7s-diamond',
                    //     title: 'Layout',
                    //     child: [
                    //         {
                    //             title: 'Cards',
                    //             href: '/material-components/cards',
                    //         },
                    //         {
                    //             title: 'Tabs',
                    //             href: '/material-components/tabs',
                    //         },
                    //         {
                    //             title: 'Subheaders',
                    //             href: '/material-components/subheaders',
                    //         },
                    //         {
                    //             title: 'Timelines',
                    //             href: '/material-components/timelines',
                    //         },
                    //         {
                    //             title: 'Groups',
                    //             href: '/material-components/groups',
                    //         },
                    //     ]
                    // },
                    // {
                    //     icon: 'pe-7s-diamond',
                    //     title: 'Buttons & Indicators',
                    //     child: [
                    //         {
                    //             title: 'Buttons',
                    //             href: '/material-components/buttons',
                    //         },
                    //         {
                    //             title: 'Hover',
                    //             href: '/material-components/hover',
                    //         },
                    //         {
                    //             title: 'Icons',
                    //             href: '/material-components/icons',
                    //         },
                    //         {
                    //             title: 'Images',
                    //             href: '/material-components/images',
                    //         },
                    //         {
                    //             title: 'Lists',
                    //             href: '/material-components/lists',
                    //         },
                    //         {
                    //             title: 'Progress',
                    //             href: '/material-components/progress',
                    //         },
                    //         {
                    //             title: 'Paginations',
                    //             href: '/material-components/paginations',
                    //         },
                    //         {
                    //             title: 'Sparklines',
                    //             href: '/material-components/sparklines',
                    //         },
                    //         {
                    //             title: 'Steppers',
                    //             href: '/material-components/steppers',
                    //         },
                    //     ]
                    // },
                    // {
                    //     icon: 'pe-7s-diamond',
                    //     title: 'Popups & Modals',
                    //     child: [
                    //         {
                    //             title: 'Bottom Navigation',
                    //             href: '/material-components/bottom-navigation',
                    //         },
                    //         {
                    //             title: 'Bottom Sheets',
                    //             href: '/material-components/bottom-sheets',
                    //         },
                    //         {
                    //             title: 'Dialogs',
                    //             href: '/material-components/dialogs',
                    //         },
                    //         {
                    //             title: 'Sheets',
                    //             href: '/material-components/sheets',
                    //         },
                    //         {
                    //             title: 'Snackbars',
                    //             href: '/material-components/snackbars',
                    //         },
                    //     ]
                    // },
                    // {
                    //     icon: 'pe-7s-diamond',
                    //     title: 'Components',
                    //     child: [
                    //         {
                    //             title: 'Calendars',
                    //             href: '/material-components/calendars',
                    //         },
                    //         {
                    //             title: 'Carousels',
                    //             href: '/material-components/carousels',
                    //         },
                    //         {
                    //             title: 'Alerts',
                    //             href: '/material-components/alerts',
                    //         },
                    //         {
                    //             title: 'Avatars',
                    //             href: '/material-components/avatars',
                    //         },
                    //         {
                    //             title: 'Badges',
                    //             href: '/material-components/badges',
                    //         },
                    //         {
                    //             title: 'Chips',
                    //             href: '/material-components/chips',
                    //         },
                    //         {
                    //             title: 'Data iterator',
                    //             href: '/material-components/data-iterator',
                    //         },
                    //         {
                    //             title: 'Data tables',
                    //             href: '/material-components/data-tables',
                    //         },
                    //         {
                    //             title: 'Dividers',
                    //             href: '/material-components/dividers',
                    //         },
                    //         {
                    //             title: 'Expansion panels',
                    //             href: '/material-components/expansion-panels',
                    //         },
                    //         {
                    //             title: 'Footer',
                    //             href: '/material-components/footer',
                    //         },
                    //         {
                    //             title: 'Parallax',
                    //             href: '/material-components/parallax',
                    //         },
                    //         {
                    //             title: 'Ratings',
                    //             href: '/material-components/ratings',
                    //         },
                    //         {
                    //             title: 'Tooltips',
                    //             href: '/material-components/tooltips',
                    //         },
                    //         {
                    //             title: 'Treeview',
                    //             href: '/material-components/treeview',
                    //         },
                    //         {
                    //             title: 'Ripples',
                    //             href: '/material-components/ripples',
                    //         },
                    //     ]
                    // },
                    // {
                    //     header: true,
                    //     title: 'Dashboard Boxes',
                    // },
                    // {
                    //     icon: 'pe-7s-graph2',
                    //     title: 'Chart Boxes',
                    //     child: [
                    //         {
                    //             title: 'Variation 1',
                    //             href: '/widgets/chart-boxes',
                    //         },
                    //         {
                    //             title: 'Variation 2',
                    //             href: '/widgets/chart-boxes-2',
                    //         },
                    //         {
                    //             title: 'Variation 3',
                    //             href: '/widgets/chart-boxes-3',
                    //         },
                    //     ]
                    // },
                    // {
                    //     icon: 'pe-7s-id',
                    //     title: 'Profile Boxes',
                    //     href: '/widgets/profile-boxes',
                    // },
                    // {
                    //     header: true,
                    //     title: 'Forms',
                    // },
                    // {
                    //     icon: 'pe-7s-light',
                    //     title: 'Elements',
                    //     child: [
                    //         {
                    //             title: 'Controls',
                    //             href: '/forms/controls',
                    //         },
                    //         {
                    //             title: 'Layouts',
                    //             href: '/forms/layouts',
                    //         },
                    //         {
                    //             title: 'Validation',
                    //             href: '/forms/validation',
                    //         },
                    //         {
                    //             title: 'Wizards',
                    //             href: '/forms/wizards',
                    //         },
                    //         {
                    //             title: 'Sticky Form Headers',
                    //             href: '/forms/sticky-headers',
                    //         },
                    //     ],
                    // },
                    // {
                    //     icon: 'pe-7s-joy',
                    //     title: 'Widgets',
                    //     child: [
                    //         {
                    //             title: 'Datepicker',
                    //             href: '/forms/datepicker',
                    //         },
                    //         {
                    //             title: 'Range Slider',
                    //             href: '/forms/range-slider',
                    //         },
                    //         {
                    //             title: 'Input Selects',
                    //             href: '/forms/input-selects',
                    //         },
                    //         {
                    //             title: 'Toggle Switch',
                    //             href: '/forms/toggle-switch',
                    //         },
                    //         {
                    //             title: 'WYSIWYG Editors',
                    //             href: '/forms/wysiwyg-editors',
                    //         },
                    //         {
                    //             title: 'Input Mask',
                    //             href: '/forms/input-mask',
                    //         },
                    //         {
                    //             title: 'Clipboard',
                    //             href: '/forms/clipboard',
                    //         },
                    //         {
                    //             title: 'Textarea Autosize',
                    //             href: '/forms/textarea-autosize',
                    //         },
                    //         {
                    //             title: 'Color Picker',
                    //             href: '/forms/colorpicker',
                    //         },
                    //         {
                    //             title: 'Dropzone',
                    //             href: '/forms/dropzone',
                    //         },
                    //     ],
                    // },
                    // {
                    //     header: true,
                    //     title: 'Charts',
                    // },
                    // {
                    //     icon: 'pe-7s-graph2',
                    //     title: 'ChartJS',
                    //     href: '/charts/chartjs',
                    // },
                    // {
                    //     icon: 'pe-7s-graph',
                    //     title: 'Apex Charts',
                    //     href: '/charts/apexcharts',
                    // },
                    // {
                    //     icon: 'pe-7s-gleam',
                    //     title: 'Gauges',
                    //     href: '/charts/gauges',
                    // },
                    // {
                    //     icon: 'pe-7s-graph1',
                    //     title: 'Chart Sparklines',
                    //     href: '/charts/sparklines',
                    // },
                ],
                collapsed: true,

                windowWidth: 0,

            }
        },
        props: {
            sidebarbg: String,

        },
        methods: {

            toggleBodyClass(className) {
                const el = document.body;
                this.isOpen = !this.isOpen;

                if (this.isOpen) {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
            toggleSidebarHover(add, className) {
                const el = document.body;
                this.sidebarActive = !this.sidebarActive;

                this.windowWidth = document.documentElement.clientWidth;

                if (this.windowWidth > '992') {
                    if (add === 'add') {
                        el.classList.add(className);
                    } else {
                        el.classList.remove(className);
                    }
                }
            },
            getWindowWidth() {
                const el = document.body;

                this.windowWidth = document.documentElement.clientWidth;

                el.classList.add('closed-sidebar', 'closed-sidebar-md');

                // if (this.windowWidth < '1350') {
                //     el.classList.add('closed-sidebar', 'closed-sidebar-md');
                // } else {
                //     el.classList.remove('closed-sidebar', 'closed-sidebar-md');
                // }
            },

            onItemClick(event, item) {
                const el = document.body;
                el.classList.remove('closed-sidebar-open');
            }
        },
        mounted() {
            this.$nextTick(function () {
                window.addEventListener('resize', this.getWindowWidth);

                //Init
                this.getWindowWidth()
            })
        },

        beforeDestroy() {
            window.removeEventListener('resize', this.getWindowWidth);
        }        
    }
</script>
