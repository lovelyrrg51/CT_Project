<template>
    <div :class="headerbg" class="app-header header-shadow">
        <div class="logo-src"/>
        <div class="app-header__content">
            <!-- <div class="app-header-left">
                <SearchBox/>
                <MegaMenu/>
            </div> -->
            <div class="app-header-right">
                <!-- <HeaderDots/> -->
                <UserArea/>
            </div>
        </div>
        <div class="app-header__mobile-menu">
            <div>
                <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" v-bind:class="{ 'is-active' : isOpen }" @click="toggleMobile('closed-sidebar-open')">
                    <img width="36" src="@/assets/images/logo-mini.png" alt="" style="cursor: pointer;">
                    <!-- <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span> -->
                </button>
            </div>
        </div>
        <div class="app-header__menu">
            <span>
                <img width="32" class="rounded-circle" src="@/assets/images/avatars/1.jpg" alt="" style="cursor: pointer;" @click="logOut">
                <!-- <b-button class="btn-icon btn-icon-only" variant="primary" size="sm" v-bind:class="{ 'active' : isOpenMobileMenu }" @click="toggleMobile2('header-menu-open')">
                    <div class="btn-icon-wrapper">
                        <font-awesome-icon icon="ellipsis-v"/>
                    </div>
                </b-button> -->
            </span>
        </div>
    </div>
</template>

<script>

    import SearchBox from './Header/SearchBox';
    import MegaMenu from './Header/MegaMenu';
    import HeaderDots from './Header/HeaderDots';
    import UserArea from './Header/HeaderUserArea';

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faEllipsisV,
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faEllipsisV,
    );
    export default {
        name: "Header",
        components: {
            SearchBox,
            MegaMenu,
            HeaderDots,
            UserArea,
            'font-awesome-icon': FontAwesomeIcon,
        },

        data() {
            return {
                isOpen: false,
                isOpenMobileMenu: false,
            }
        },
        props: {
            headerbg: String,

        },
        created () {
            localStorage.isMobileOpen = false;
        },
        methods: {
            toggleMobile(className) {
                const el = document.body;
                // this.isOpen = !this.isOpen;
                this.isOpen = true;

                if (this.isOpen) {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },

            toggleMobile2(className) {
                const el = document.body;
                this.isOpenMobileMenu = !this.isOpenMobileMenu;

                if (this.isOpenMobileMenu) {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },

            logOut () {
                this.$bvModal.show('modal-confirm-logout');
            }
        }
    };
</script>
