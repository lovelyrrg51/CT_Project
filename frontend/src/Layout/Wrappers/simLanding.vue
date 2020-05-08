<template>
  <div data-spy="scroll" data-offset="80">
    <!-- <Loader /> -->
    <HeaderStyle1 :logo-img="logo" :nav-item-list="navItems" :styled-logo="true" class-name="header-one">
      <TopbarStyle1 slot="topBar">
        <ul slot="leftLinks">
          <!-- <li><a href="#"><i class="fa fa-phone iq-mr-10" aria-hidden="true" /><span class="iq-font-white">+1234567890</span></a></li> -->
        </ul>
        <ul slot="rightLinks">
          <li><a href="#"><img src="../../assets/images/icon/lang_brazil.png" style="width: 32px;"/></a></li>
          <li><a href="#"><img src="../../assets/images/icon/lang_usa.png" style="width: 32px;"/></a></li>
          <li><a href="#"><img src="../../assets/images/icon/lang_spain.png" style="width: 32px;"/></a></li>
        </ul>
      </TopbarStyle1>
    </HeaderStyle1>
    <div>
      <b-modal id="modal-success" hide-header hide-footer centered>
        <p class="text-center">Success!</p>
      </b-modal>
      <b-modal id="modal-fail" title="Info" hide-footer centered>
        <p class="text-center">Failed!</p>
      </b-modal>
    </div>
    <slot></slot>
  </div>
</template>
<script>
import logoImg from '../../assets/images/logo.png'
export default {
  name: 'SimLanding',
  head () {
    return {
      bodyAttrs: {
        'data-spy': 'scroll',
        'data-offset': '80'
      }
    }
  },
  data () {
    return {
      styleLogo: false,
      logo: logoImg,
      navItems: [
        { href: '#iq-home', title: 'Home' },
        { href: '#features', title: 'Features' },
        { href: '#plans', title: 'Plans & Coverage' },
        { href: '#aboutus', title: 'About Us' },
        { href: '#contact', title: 'Contact' },
        { href: '#login', title: 'Login' }
      ]
    }
  },
  mounted () {
  }
}
</script>
<style>
  @import url('../../assets/css/color/style.css');
</style>
