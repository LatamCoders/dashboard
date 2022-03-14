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
        <router-link style="color: #6e6b7b" :to="{name:'providers'}">
          <StatisticCardWithAreaChart
              statistic="See providers drivers"
              :chart-data="series"
              icon="UsersIcon"
              statistic-title="View all providers drivers"

          ></StatisticCardWithAreaChart>
        </router-link>
      </b-col>

      <b-col
          lg="3"
          sm="6"
      >
        <router-link style="color: #6e6b7b" :to="{name:'reservation-to-accepted'}">
          <StatisticCardWithAreaChart
              icon="CalendarIcon"
              statistic="Reservations to accept"
              color="warning"
              :chart-data="ordersRecevied"
              statistic-title="View all reservations to accept"
          ></StatisticCardWithAreaChart>
        </router-link>
      </b-col>
      <b-col
          lg="3"
          sm="6"
      >
        <router-link style="color: #6e6b7b" :to="{name:'clients'}">

          <StatisticCardWithAreaChart
              icon="HomeIcon"
              statistic="See providers corporate account"
              :chart-data="ordersRecevied"
              statistic-title="View all providers corporate account"

          ></StatisticCardWithAreaChart>
        </router-link>
      </b-col>
    </b-row>

  </div>
</template>

<script>
import { BButton, BCard, BCardText, BCol, BRow, BImg, BAvatar, } from 'bootstrap-vue'
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
}
</script>

<style lang="scss">
@import "src/assets/scss/variables/variables-components.scss";

@media only screen and (max-width: 600px) {
  .optrips {
    flex-direction: column;
  }
}
</style>
