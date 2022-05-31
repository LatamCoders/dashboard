<template>
  <div class="navbar-container d-flex content align-items-center">

    <!-- Nav Menu Toggler -->
    <ul class="nav navbar-nav d-xl-none">
      <li class="nav-item">
        <b-link
            class="nav-link"
            @click="toggleVerticalMenuActive"
        >
          <feather-icon
              icon="MenuIcon"
              size="21"
          />
        </b-link>
      </li>
    </ul>

    <!-- Left Col -->
    <div class="bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex">
      <!--      <dark-Toggler class="d-none d-lg-block"/>-->
      <feather-icon
          icon="ArrowLeftCircleIcon"
          size="2x"
          class="mr-0 mr-sm-50"
          @click="returnWindows"
          style="color: #9186f2; cursor: pointer"
          tooltip="return"
      ></feather-icon>
    </div>

    <b-navbar-nav class="nav align-items-center ml-auto">
      <b-nav-item-dropdown
          right
          toggle-class="d-flex align-items-center dropdown-user-link"
          class="dropdown-user"
      >
        <template #button-content>
          <div class="d-sm-flex d-none user-nav">
            <p class="user-name font-weight-bolder mb-0">
              {{ $store.getters['Users/userData'].user.name }}
            </p>
            <span class="user-status"> {{ $store.getters['Users/userData'].user.role.role }} </span>
          </div>
          <b-avatar
              size="40px"
              rounded
              class="backgroundProfile-navbar"
          >
            <p class="text-name-navbar">
              {{ ProfileName($store.getters['Users/userData'].user.name) }}
            </p>
          </b-avatar>
        </template>

        <b-dropdown-item link-class="d-flex align-items-center">
          <router-link :to="{name: 'profile' }" style="width: 100%">
            <feather-icon
                size="16"
                icon="UserIcon"
                class="mr-50"
            />
            <span>Profile</span>
          </router-link>
        </b-dropdown-item>

        <!--        <b-dropdown-item link-class="d-flex align-items-center">-->
        <!--          <feather-icon-->
        <!--              size="16"-->
        <!--              icon="MailIcon"-->
        <!--              class="mr-50"-->
        <!--          />-->
        <!--          <span>Inbox</span>-->
        <!--        </b-dropdown-item>-->

        <!--        <b-dropdown-item link-class="d-flex align-items-center">-->
        <!--          <feather-icon-->
        <!--              size="16"-->
        <!--              icon="CheckSquareIcon"-->
        <!--              class="mr-50"-->
        <!--          />-->
        <!--          <span>Task</span>-->
        <!--        </b-dropdown-item>-->

        <!--        <b-dropdown-item link-class="d-flex align-items-center">-->
        <!--          <feather-icon-->
        <!--              size="16"-->
        <!--              icon="MessageSquareIcon"-->
        <!--              class="mr-50"-->
        <!--          />-->
        <!--          <span>Chat</span>-->
        <!--        </b-dropdown-item>-->

        <b-dropdown-divider/>
        <b-dropdown-item link-class="d-flex align-items-center" @click="logOut">
          <feather-icon
              size="16"
              icon="LogOutIcon"
              class="mr-50"
          />
          <span>Logout</span>
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </div>
</template>

<script>
import {
  BLink, BNavbarNav, BNavItemDropdown, BDropdownItem, BDropdownDivider, BAvatar, BButton,
} from 'bootstrap-vue'
import DarkToggler from '@core/layouts/components/app-navbar/components/DarkToggler.vue'
import {email, required} from '@core/utils/validations/validations'

export default {
  components: {
    BLink,
    BNavbarNav,
    BNavItemDropdown,
    BDropdownItem,
    BDropdownDivider,
    BAvatar,
    BButton,

    // Navbar Components
    DarkToggler,
  },
  data() {
    return {}
  },
  methods: {
    ProfileName(name) {
      return name.charAt(0)
          .toUpperCase() + name.charAt(1)
          .toUpperCase()
    },
    logOut() {
      this.$swal({
        title: 'Please, wait...',
        didOpen: () => {
          this.$swal.showLoading()
        }
      })
      this.$store.dispatch('Users/destroyToken', '/auth/users/logout')
          .then(() => {

            this.$swal({
              icon: 'success',
              title: 'Logout successfully',
              customClass: {
                confirmButton: 'btn btn-primary',
              },
              buttonsStyling: false,
            })
            this.$router.push({name: 'login'})

          }).catch((error) => {
        this.$swal({
          icon: 'error',
          title: error.response,
          customClass: {
            confirmButton: 'btn btn-primary',
          },
          buttonsStyling: false,
        })

      })

    },
    returnWindows() {
      window.history.back()
    }

  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {
      },
    },
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';

.text-name-navbar {
  font-size: 1.1rem;
  margin-bottom: 0 !important;
}

.backgroundProfile-navbar {
  background-color: $primary;
  border-radius: 100% !important;
}
</style>
