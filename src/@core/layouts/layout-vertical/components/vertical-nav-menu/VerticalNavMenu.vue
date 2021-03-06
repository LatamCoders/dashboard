<template>
  <div
      class="main-menu menu-fixed menu-accordion menu-shadow"
      :class="[
      { 'expanded': !isVerticalMenuCollapsed || (isVerticalMenuCollapsed && isMouseHovered) },
      skin === 'semi-dark' ? 'menu-dark' : 'menu-light'
    ]"
      @mouseenter="updateMouseHovered(true)"
      @mouseleave="updateMouseHovered(false)"
  >
    <!-- main menu header-->
    <div class="navbar-header expanded" style="margin-bottom: 10px">
      <slot
          name="header"
          :toggleVerticalMenuActive="toggleVerticalMenuActive"
          :toggleCollapsed="toggleCollapsed"
          :collapseTogglerIcon="collapseTogglerIcon"
      >
        <ul class="nav navbar-nav flex-row">

          <!-- Logo & Text -->
          <li class="nav-item mr-auto">
            <b-link
                :to="$store.getters['Users/userData'].user.role.id === 3 ? {name: 'home-corporate-account'} : {name: 'home-admin'}"
                class="brand-logo">
              <b-img src="@/assets/images/logo/amera-main.png" height="63"></b-img>
            </b-link>
          </li>

          <!-- Toggler Button -->
          <li class="nav-item nav-toggle">
            <b-link class="nav-link modern-nav-toggle">
              <feather-icon
                  icon="XIcon"
                  size="20"
                  class="d-block d-xl-none"
                  @click="toggleVerticalMenuActive"
              />
              <feather-icon
                  :icon="collapseTogglerIconFeather"
                  size="20"
                  class="d-none d-xl-block collapse-toggle-icon"
                  @click="toggleCollapsed"
              />
            </b-link>
          </li>
        </ul>
      </slot>
    </div>
    <!-- / main menu header-->

    <!-- Shadow -->
    <div
        :class="{'d-block': shallShadowBottom}"
        class="shadow-bottom"
    />

    <!-- main menu content-->
    <vue-perfect-scrollbar
        :settings="perfectScrollbarSettings"
        class="main-menu-content scroll-area"
        tagname="ul"
        @ps-scroll-y="evt => { shallShadowBottom = evt.srcElement.scrollTop > 0 }"
    >
      <vertical-nav-menu-items
          v-if="this.$store.getters['Users/userData'].user.role.id === 3"
          :items="navMenuItemsSuper.filter(value => value.meta.permission === '3')"
          class="navigation navigation-main"
      />
      <vertical-nav-menu-items
          v-if="this.$store.getters['Users/userData'].user.role.id === 2"
          :items="navMenuItemsAdmin"
          class="navigation navigation-main"
      />
      <vertical-nav-menu-items
          v-if="this.$store.getters['Users/userData'].user.role.id === 1"
          :items="navMenuItemsSuper.filter(value => value.meta.permission === '2')"
          class="navigation navigation-main"
      />

      <div style="position: absolute;top: 80%;margin-left: 16px;"
           v-if="this.$store.getters['Users/userData'].user.role.id === 3">

        <a href="https://www.amerasolutions.com/" target="_blank">
          <h4 style="color: white; font-size: 1.1rem; font-weight: lighter">Website:
            <span style="font-weight: 500">{{ infoContact.website }} </span></h4>
        </a>

        <a href="mailto:amera@myamera.com" target="_blank">
          <h4 style="color: white; font-size: 1.1rem; font-weight: lighter">Email: <br>
            <span style="font-weight: 500"> {{ infoContact.email }} </span></h4>
        </a>

        <a href="tel:8552637215" target="_blank">
          <h4 style="color: white; font-size: 1.1rem; font-weight: lighter">Phone number: <br>
            <span style="font-weight: 500">{{ infoContact.phone_number }}</span></h4>
        </a>
      </div>

    </vue-perfect-scrollbar>
    <!-- /main menu content-->
  </div>
</template>

<script>
import navMenuItems from '@/navigation/vertical/index.js'
import navMenuItemsAdmin from '@/navigation/vertical/infocontact.js'
import navMenuItemsSuper from '@/navigation/vertical/infosuperadmin.js'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import {BLink, BImg} from 'bootstrap-vue'
import {provide, computed, ref, onBeforeMount, onMounted} from '@vue/composition-api'
import useAppConfig from '@core/app-config/useAppConfig'
import {$themeConfig} from '@themeConfig'
import VerticalNavMenuItems from './components/vertical-nav-menu-items/VerticalNavMenuItems.vue'
import useVerticalNavMenu from './useVerticalNavMenu'
import {useStore} from 'vuex'
import axios from "axios";


export default {
  components: {
    VuePerfectScrollbar,
    VerticalNavMenuItems,
    BLink,
    BImg,
  },
  props: {
    isVerticalMenuActive: {
      type: Boolean,
      required: true,
    },
    toggleVerticalMenuActive: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const {
      isMouseHovered,
      isVerticalMenuCollapsed,
      collapseTogglerIcon,
      toggleCollapsed,
      updateMouseHovered,
    } = useVerticalNavMenu(props)

    // const store = useStore();
    const {skin} = useAppConfig()


    // const filtroRoles = () => {
    //   if (store.role.id === 1){}
    //
    //     let v = this.navMenuItemsSuper.map( value => value.meta.permission === '2')
    //   console.log(v)
    // }

    // Shadow bottom is UI specific and can be removed by user => It's not in `useVerticalNavMenu`
    const shallShadowBottom = ref(false)

    provide('isMouseHovered', isMouseHovered)

    const perfectScrollbarSettings = {
      maxScrollbarLength: 60,
      wheelPropagation: false,
    }

    const collapseTogglerIconFeather = computed(() => (collapseTogglerIcon.value === 'unpinned' ? 'CircleIcon' : 'DiscIcon'))

    // App Name
    const {appName, appLogoImage} = $themeConfig.app


    // onMounted(() =>{
    //   let filt = this.navMenuItemsSuper.map(value => value.meta.permission === 1);
    //   console.log(filt)
    // })
    let infoContact = ref({});

    const getContactUs = () => {
      axios.get(`https://amera.losolivoscartagena.com/api/v1/contactUs`).then((response) => {
        infoContact.value = response.data.data;
      })
    }

    onMounted(() => getContactUs());

    return {
      navMenuItems,
      navMenuItemsAdmin,
      navMenuItemsSuper,
      perfectScrollbarSettings,
      isVerticalMenuCollapsed,
      collapseTogglerIcon,
      toggleCollapsed,
      isMouseHovered,
      updateMouseHovered,
      collapseTogglerIconFeather,

      // Shadow Bottom
      shallShadowBottom,

      // Skin
      skin,

      // App Name
      appName,
      appLogoImage,

      infoContact,
    }
  },
}
</script>

<style lang="scss">
@import "~@core/scss/base/core/menu/menu-types/vertical-menu.scss";

.main-menu {
  background-color: #332B7B !important;
}

.main-menu.menu-light .navigation {
  background-color: #332b7b !important;
}

a.nav-link.modern-nav-toggle {
  color: white !important;
}

.main-menu.menu-light .navigation li a {
  color: white !important;
}

[dir] .main-menu.menu-light .navigation > li.open:not(.menu-item-closing) > a, [dir] .main-menu.menu-light .navigation > li.sidebar-group-active > a {
  background: white;
  color: #6559d6 !important;
}
</style>
