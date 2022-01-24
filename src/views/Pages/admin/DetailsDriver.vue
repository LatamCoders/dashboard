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
              :user-vehicle="infoUser"
              class="mt-2 pt-75"
          />
        </b-tab>

        <!-- Tab: Social -->
        <b-tab>
          <template #title>
            <feather-icon
                icon="Share2Icon"
                size="16"
                class="mr-0 mr-sm-50"
            />
            <span class="d-none d-sm-inline">Driver documents</span>
          </template>
          <user-details-driver-documents class="mt-2 pt-75"/>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import { BRow, BCol, BCard, BImg, BButton, BFormGroup, BFormInput, BFormFile, BTabs, BTab, } from 'bootstrap-vue'
import UserDetailsVehicleDriver from "@core/components/user-approve-driver/UserDetailsVehicleDriver";
import UserDetailsAccount from "@core/components/user-approve-driver/UserDetailsAccount";
import UserDetailsDriverDocuments from "@core/components/user-approve-driver/UserDetailsDriverDocuments";
/* eslint-disable global-require */
export default {
  components: {
    UserDetailsDriverDocuments,
    UserDetailsAccount,
    UserDetailsVehicleDriver,
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
      infoUser: {
        type_car: 'Mazda',
        color: 'Red',
        year: '2000',
        plate_number: 'n25154s',
        vin_number: '45544445',
      },
    }
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
