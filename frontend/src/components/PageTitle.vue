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
                        <a href="javascript:void(0);" style="font-size: 22px" @click="onLogout"><font-awesome-icon icon="sign-out-alt" class="mr-3" v-on="on"/></a>
                    </template>
                    <span>
                        Log out
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
        faSync,
        faSignOutAlt
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faStar,
        faPlus,
        faSync,
        faSignOutAlt
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
            onLogout() {
                this.$store.dispatch('setLoginFlag', false);
                this.$router.push('/');
                
            }
        }
    }
</script>
