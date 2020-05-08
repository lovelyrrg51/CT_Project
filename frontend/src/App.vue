<template>
  <div id="app">
    <nav>
        <!-- <router-link to='/'>Login</router-link>
        <router-link to='/dashboard'>Dashboard</router-link> -->
    </nav>
    <router-view />
  </div>
</template>

<script>
  const default_layout = "userpages";

  export default {
    computed: {
      layout() {
        return (this.$route.meta.layout || default_layout) + '-layout';
      }
    },

    created () {
      this.$store.dispatch('setWindowWidth', window.innerWidth);
      window.getApp = this;
      window.addEventListener("resize", this.windowResizeHandler);
    },
  
    methods: {
      windowResizeHandler ( e ) {
        this.$store.dispatch('setWindowWidth', window.innerWidth);
      },
    }
  }
</script>

<style lang="scss">
  @import "assets/app/app.css";
  @import "assets/base.scss";
</style>
