<template>
  <div
      id="user-profile"
  >
    <component :is="info.corporate_account === undefined ? 'div' : 'b-card'">

      <!-- Alert: No item found -->
<!--      <b-alert-->
<!--          variant="danger"-->
<!--          :show="info.corporate_account === undefined"-->
<!--      >-->
<!--        <h4 class="alert-heading">-->
<!--          Error fetching user data-->
<!--        </h4>-->
<!--      </b-alert>-->

      <b-tabs
          v-if="info.corporate_account"
          pills
      >

        <!-- Tab: Account -->
        <b-tab active>
          <template #title>
            <feather-icon
                icon="UserIcon"
                size="16"
                class="mr-0 mr-sm-50"
            />
            <span class="d-none d-sm-inline">Account</span>
          </template>
          <user-edit-tab-account
              :user-data="info"
              class="mt-2 pt-75"
          />
        </b-tab>

        <!-- Tab: Information -->
        <b-tab>
          <template #title>
            <feather-icon
                icon="InfoIcon"
                size="16"
                class="mr-0 mr-sm-50"
            />
            <span class="d-none d-sm-inline">Information</span>
          </template>
          <user-edit-tab-information
              :info-user="info.corporate_account.corporate_account_personal_info"
              class="mt-2 pt-75"/>
        </b-tab>

        <!-- Tab: Social -->
        <b-tab>
          <template #title>
            <feather-icon
                icon="Share2Icon"
                size="16"
                class="mr-0 mr-sm-50"
            />
            <span class="d-none d-sm-inline">Social</span>
          </template>
          <user-edit-tab-social class="mt-2 pt-75"/>
        </b-tab>
      </b-tabs>
    </component>

  </div>
</template>

<script>
import {BRow, BCol, BCard, BImg, BButton, BFormGroup, BFormInput, BTabs, BTab, BCardText, BAlert,} from 'bootstrap-vue'
import UserEditTabAccount from "@core/components/user/UserEditTabAccount";
import UserEditTabInformation from "@core/components/user/UserEditTabInformation";
import UserEditTabSocial from "@core/components/user/UserEditTabSocial";

/* eslint-disable global-require */
export default {
  components: {
    BRow,
    BCol,
    BCard,
    BImg,
    BButton,
    BFormGroup,
    BFormInput,
    BTabs,
    BTab,
    BCardText,
    BAlert,

    //componente
    UserEditTabAccount,
    UserEditTabInformation,
    UserEditTabSocial,
  },
  data() {
    return {
      info: {},
    }
  },
  created() {

  },
  mounted() {
    this.info = this.$store.getters["Users/userData"].user;
    // console.log(this.info)
  }
}
/* eslint-disable global-require */
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-profile.scss';

.name-corporative {
  margin-left: 15px;
  font-weight: bold;
  font-size: 1.1rem;
}

.rol-persona {
  margin-left: 15px;
  font-size: 0.9rem;
}
</style>
