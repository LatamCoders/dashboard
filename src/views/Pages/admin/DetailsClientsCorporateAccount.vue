<template>
  <div
      id="user-profile"
  >
    <component :is="listClients === undefined ? 'b-card' : 'b-card'">

      <b-tabs
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
          <user-profile-client-corporate-acount
              :user-data="listClients"
              class="mt-2 pt-75"
          />
        </b-tab>

        <!-- Tab: Information -->
        <b-tab >
          <template #title>
            <feather-icon
                icon="InfoIcon"
                size="16"
                class="mr-0 mr-sm-50"
            />
            <span class="d-none d-sm-inline">Information</span>
          </template>
          <user-edit-tab-information
              :info-user="listClients.corporate_account_personal_info"
              class="mt-2 pt-75"/>
        </b-tab>

        <!-- Tab: Social -->
        <b-tab >
          <template #title>
            <feather-icon
                icon="CreditCardIcon"
                size="16"
                class="mr-0 mr-sm-50"
            />
            <span class="d-none d-sm-inline">Payment method</span>
          </template>
          <user-edit-tab-social :info-payment="listClients.corporate_account_payment_method" class="mt-2 pt-75"/>
        </b-tab>

        <!-- Tab: Pacientes de la clínica -->
        <b-tab>
          <template #title>
            <feather-icon
                icon="UsersIcon"
                size="16"
                class="mr-0 mr-sm-50"
            />
            <span class="d-none d-sm-inline">Patients</span>
          </template>
          <list-patient-c-a :info-payment="listClients" class="mt-2 pt-75"/>
        </b-tab>
      </b-tabs>
    </component>

  </div>
</template>

<script>
import {BRow, BCol, BCard, BImg, BButton, BFormGroup, BFormInput, BTabs, BTab, BCardText, BAlert,} from 'bootstrap-vue'
import UserProfileClientCorporateAcount from '@core/components/CA/UserProfileClientCorporateAcount'
import UserEditTabInformation from "@core/components/user/UserEditTabInformation";
import UserEditTabSocial from "@core/components/user/UserEditTabSocial";
import ListPatientCA from '@core/components/CA/ListPatientCA'
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
    UserProfileClientCorporateAcount,
    UserEditTabInformation,
    UserEditTabSocial,
    ListPatientCA,
  },
  name: 'DetailsClientsCorporateAccount',
  data() {
    return {
      infomation: '',
      idCA: 0,
      listClients: [],
    }
  },
  methods: {
    getInformationCorporate() {
      this.idCA = parseInt(this.$route.params.id);
      this.$http.get(`admin/panel/ca/${this.idCA}/info`).then((response) => {
        this.listClients = response.data.data;
      }).catch((res) => console.log(res.data))
    }
  },
  mounted() {

    this.getInformationCorporate()
  },
  created() {
  },
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
</style>
