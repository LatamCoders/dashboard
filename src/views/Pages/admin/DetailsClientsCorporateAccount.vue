<template>
  <div
      id="user-profile"
  >
    <component :is="infoUser === undefined ? 'b-card' : 'b-card'">

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
              :user-data="infoCompleta"
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
              :info-user="infoCompleta.corporate_account_personal_info"
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
          <user-edit-tab-social :info-payment="infoCompleta.corporate_account_payment_method" class="mt-2 pt-75"/>
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
          <list-patient-c-a :info-payment="infoCompleta" class="mt-2 pt-75"/>
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
      infoCompleta: [],
    }
  },
  methods: {
    getInformationCorporate() {
      // this.infoUser = this.$route.params.item
      // console.log(this.infoUser)
      this.$http.get('/admin/panel/ca/list').then((response) => {
        this.listClients = response.data.data;

        for (let ver of this.listClients){
          this.information = ver;
          if (this.$route.params.id === this.information.id){
            this.infoCompleta = this.information
            console.log(this.infoCompleta)
          }
        }

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
