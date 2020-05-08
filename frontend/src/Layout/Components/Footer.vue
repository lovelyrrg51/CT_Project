<template>
    <div class="app-footer">
        <div class="app-footer__inner">
            <div class="app-footer-center">
                Copyright © SIMAnywhere 2020
            </div>
            <!-- <div class="app-footer-left">
                <FooterDots/>
            </div>
            <div class="app-footer-right">
                <FooterMenu/>
            </div> -->
        </div>
    </div>
</template>

<script>
    import FooterDots from './Footer/FooterDots';
    import FooterMenu from './Footer/FooterMenu';

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faEllipsisV,
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faEllipsisV,
    );
    export default {
        name: "Footer",
        components: {
            FooterDots,
            FooterMenu,
        }
    };
</script>
