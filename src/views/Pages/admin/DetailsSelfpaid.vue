<template>
  <component :is="'b-card'">

    <!-- Alert: No item found -->
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
          <span class="d-none d-sm-inline">Selfpaid profile</span>
        </template>
        <profile-selfpaids
            class="mt-2 pt-75"
        />
      </b-tab>

      <!-- Tab: profile CA -->
      <b-tab v-if="$store.getters['Users/usersData'].corporate_account !== null">
        <template #title>
          <feather-icon
              icon="UserIcon"
              size="16"
              class="mr-0 mr-sm-50"
          />
          <span class="d-none d-sm-inline">Corporate account information</span>
        </template>
        <profile-corporate-account-self
            class="mt-2 pt-75"
        />
      </b-tab>

      <!-- Tab: Bookings -->
      <b-tab v-if="$store.getters['Users/usersData'].booking.length !== 0">
        <template #title>
          <feather-icon
              icon="UserIcon"
              size="16"
              class="mr-0 mr-sm-50"
          />
          <span class="d-none d-sm-inline">Bookings information</span>
        </template>
        <selfpaids-bookings
            class="mt-2 pt-75"
        />
      </b-tab>
    </b-tabs>
  </component>
</template>

<script>
import {
  BTab, BTabs, BCard, BAlert, BLink,
} from 'bootstrap-vue'
import ProfileSelfpaids from "@core/components/user-details-selfpaids/ProfileSelfpaids";
import ProfileCorporateAccountSelf from "@core/components/user-details-selfpaids/ProfileCorporateAccountSelf";
import SelfpaidsBookings from "@core/components/user-details-selfpaids/SelfpaidsBookings";

export default {
  name: "DetailsSelfpaid",
  components: {
    BTab,
    BTabs,
    BCard,
    BAlert,
    BLink,

    ProfileSelfpaids,
    ProfileCorporateAccountSelf,
    SelfpaidsBookings

  },
  data() {
    return {
      dataSelfpaids: {},
      selfpayId: '',
    }
  },
  methods: {
    getInfoSelfpaid() {
      this.$store.commit('Users/usersData', '')
      this.$swal({
        title: 'Please, wait...',
        didOpen: () => {
          this.$swal.showLoading()
        },
      })
      this.selfpayId = this.$route.params.client_id;
      this.$http.get(`admin/panel/selfpay/${this.selfpayId}/info`).then((response) => {
        this.dataSelfpaids = response.data.data;
        this.$store.commit('Users/usersData', this.dataSelfpaids)
        this.$swal.close();
      }).catch((error) => {
        console.log(error)
      })
    },
  },
  mounted() {
    this.getInfoSelfpaid()
  }
}
</script>

<style scoped>

</style>