<template>
  <div>
    <b-row>
      <b-col
          lg="6"
          md="12"
      >
        <b-card class="cols-12 card card-congratulations" text-variant="center">
          <!--      <b-card-text>All the best for your new project.</b-card-text>-->
          <!-- images -->
          <b-img
              :src="require('@/assets/images/elements/decore-left.png')"
              class="congratulations-img-left"
          />
          <b-img
              :src="require('@/assets/images/elements/decore-right.png')"
              class="congratulations-img-right"
          />
          <b-avatar
              variant="primary"
              size="70"
              class="shadow mb-2"
          >
            <feather-icon
                size="28"
                icon="AwardIcon"
            />
          </b-avatar>
          <h1 class="mb-1 mt-50 text-white text-center">
            Welcome, {{ $store.getters['Users/userData'].user.name }}
          </h1>
          <b-card-text class="m-auto w-75 text-center pb-2">
            We are happy to have you!
          </b-card-text>
        </b-card>
      </b-col>
      <b-col
          lg="3"
          sm="6"
      >
        <router-link style="color: #6e6b7b" :to="{name:'all-patient'}">
          <StatisticCardWithAreaChart
              statistic="Patients"
              :chart-data="series"
              icon="UsersIcon"
              statistic-title="Go to patients management"
          ></StatisticCardWithAreaChart>
        </router-link>
      </b-col>

      <b-col
          lg="3"
          sm="6"
      >
        <router-link style="color: #6e6b7b" :to="{name:'bookings'}">
          <StatisticCardWithAreaChart
              icon="MapPinIcon"
              statistic="Bookings"
              color="warning"
              :chart-data="ordersRecevied"
              statistic-title="Manage all your bookings"
          ></StatisticCardWithAreaChart>
        </router-link>
      </b-col>
    </b-row>
    <b-row>
      <b-col
          lg="3"
          sm="6"
      >
        <router-link style="color: #6e6b7b" :to="{name:'billing'}">
          <StatisticCardWithAreaChart
              statistic="Billing"
              :chart-data="series"
              icon="DollarSignIcon"
              statistic-title="Manage your billing"
          ></StatisticCardWithAreaChart>
        </router-link>
      </b-col>
      <b-col
          lg="3"
          sm="6"
      >
        <router-link style="color: #6e6b7b" :to="{name:'profile'}">
          <StatisticCardWithAreaChart
              icon="UserIcon"
              statistic="Profile"
              color="warning"
              :chart-data="ordersRecevied"
              statistic-title="Manage your profile"
          ></StatisticCardWithAreaChart>
        </router-link>
      </b-col>
      <b-col
          lg="3"
          sm="6"
      >
        <router-link style="color: #6e6b7b" :to="{name:'request-service'}">
          <StatisticCardWithAreaChart
              statistic="Book a Ride"
              :chart-data="series"
              icon="CreditCardIcon"
              statistic-title="Start booking a ride for your patients"
          ></StatisticCardWithAreaChart>
        </router-link>
      </b-col>
      <b-col
          lg="3"
          sm="6"
      >
        <StatisticCardWithAreaChart
            icon="SettingsIcon"
            statistic="Support"
            color="warning"
            :chart-data="ordersRecevied"
            statistic-title="Get in touch with Amera support team"
        ></StatisticCardWithAreaChart>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {BButton, BCard, BCardText, BCol, BRow, BImg, BAvatar} from 'bootstrap-vue';
import StatisticCardWithAreaChart from "@core/components/statistics-cards/StatisticCardWithAreaChart";

export default {
  components: {
    BCard,
    BCardText,
    BButton,
    BCol,
    BRow,
    BImg,
    BAvatar,

    StatisticCardWithAreaChart,
  },
  data() {
    return {
      listClients: {},
      subscribersGained: {

        analyticsData: {
          subscribers: 92600,
        },
      },
      series: [
        {
          name: '',
          data: [28, 40, 36, 52, 38, 60, 55],
        },
      ],
      ordersRecevied: [
        {
          name: '',
          data: [10, 15, 8, 15, 7, 12, 8],
        },
      ],
    }
  },

  methods: {
    getClientes() {
      this.$http.get(`ca/${this.$store.getters['Users/userData'].user.corporate_account.id}/panel/client/search`).then((response) => {
        this.listClients = response.data.data;
        this.listClients.length.push(this.series.data)
      }).catch((res) => console.log(res.data))
    },
  },

  mounted() {
    this.getClientes()
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/variables/variables-components.scss";

.icono-medalla {
  margin: 0 254px;
}
</style>
<style>
@media only screen and (max-width: 600px) {
  .opcorporate {
    flex-direction: column;
  }
}
</style>

