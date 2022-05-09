<template>
  <div
      id="user-profile"
  >
    <b-card>
      <b-tabs
          pills
          class="mb-2"
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
          <user-details-account
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
            <span class="d-none d-sm-inline">Vehicle</span>
          </template>
          <user-details-vehicle-driver
              class="mt-2 pt-75"
          />
        </b-tab>

        <!-- Tab: Social -->
        <b-tab>
          <template #title>
            <feather-icon
                icon="FolderIcon"
                size="16"
                class="mr-0 mr-sm-50"
            />
            <span class="d-none d-sm-inline">Driver documents</span>
          </template>
          <user-details-driver-documents
              class="mt-2 pt-75"
          />
        </b-tab>

        <!-- Tab: Reservas -->
        <b-tab >
          <template #title>
            <feather-icon
                icon="TruckIcon"
                size="16"
                class="mr-0 mr-sm-50"
            />
            <span class="d-none d-sm-inline">Reservas</span>
          </template>
          <reservas-asignadas-al-driver
              :info-payment="infoUser.booking"
              class="mt-2 pt-75"/>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import {BRow, BCol, BCard, BImg, BButton, BFormGroup, BFormInput, BFormFile, BTabs, BTab,} from 'bootstrap-vue'
import UserDetailsVehicleDriver from "@core/components/user-approve-driver/UserDetailsVehicleDriver";
import UserDetailsAccount from "@core/components/user-approve-driver/UserDetailsAccount";
import UserDetailsDriverDocuments from "@core/components/user-approve-driver/UserDetailsDriverDocuments";
import ReservasAsignadasAlDriver from '@core/components/user-approve-driver/ReservasAsignadasAlDriver'
import BtnValidationDocsDriver from "@core/components/buttonsValidationDocsDriver/BtnValidationDocsDriver";
/* eslint-disable global-require */
export default {
  components: {
    UserDetailsDriverDocuments,
    UserDetailsAccount,
    UserDetailsVehicleDriver,
    ReservasAsignadasAlDriver,
    BtnValidationDocsDriver,
    BRow,
    BCol,
    BCard,
    BImg,
    BButton,
    BFormGroup,
    BFormInput,
    BFormFile,
    BTabs,
    BTab,
  },
  data() {
    return {
      infoUser: {},
      userId: 0,
    }
  },
  methods: {
    getInformationDriver() {
      this.$store.commit('Users/usersData', '')
      this.$swal({
        title: 'Please, wait...',
        didOpen: () => {
          this.$swal.showLoading()
        },
      })
      this.userId = parseInt(this.$route.params.id);
      this.$http.get(`admin/panel/driver/${this.userId}/info`).then((response) => {
        this.infoUser = response.data.data;
        this.$store.commit('Users/usersData', this.infoUser)
        this.$swal.close();
      }).catch((error) => {
        this.$swal({
          title: error.response.data.data,
          icon: 'error',
          customClass: {
            confirmButton: 'btn btn-primary',
          },
          buttonsStyling: false,
        })
      })
    },
    // refreshInfo(value) {
    //   if (value) this.getInformationDriver()
    // }
  },
  mounted() {
    this.getInformationDriver()
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
