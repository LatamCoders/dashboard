<template>
  <div>
    <b-row>
      <b-col
          lg="3"
          sm="6"
      >
        <router-link style="color: #6e6b7b" :to="{name:'booked-trips'}">
          <StatisticCardWithAreaChart
              statistic="Booked trip"
              :chart-data="series"
              icon="FileTextIcon"
              statistic-title="Manage booked trips"
              :total-driver="allreservasbooking"
              sub-all-driver="Booked trips"
          ></StatisticCardWithAreaChart>
        </router-link>
      </b-col>
      <b-col
          lg="3"
          sm="6"
      >
        <router-link style="color: #6e6b7b" :to="{name:'canceled-reservations'}">
          <StatisticCardWithAreaChart
              icon="XCircleIcon"
              statistic="Canceled reservations"
              color="warning"
              :total-driver="allreservasbookingCanceled"
              sub-all-driver="Canceled reservations"
              :chart-data="ordersRecevied"
              statistic-title="Manage canceled reservations"
          ></StatisticCardWithAreaChart>
        </router-link>
      </b-col>
      <b-col
          lg="3"
          sm="6"
      >
        <router-link style="color: #6e6b7b" :to="{name:'reservation-to-accepted'}">
          <StatisticCardWithAreaChart
              statistic="Reservations to accept"
              :chart-data="series"
              icon="BellIcon"
              statistic-title="View all reservations to accept"
              :total-driver="allreservasbookingAcepted"
              sub-all-driver="Reservations to accept"
          ></StatisticCardWithAreaChart>
        </router-link>
      </b-col>
    </b-row>

    <!--    <router-view></router-view>-->
  </div>
</template>

<script>
import {BButton, BCard, BCardText, BCol, BRow,} from 'bootstrap-vue'
import StatisticCardWithAreaChart from "@core/components/statistics-cards/StatisticCardWithAreaChart";

export default {
  components: {
    BCard,
    BCardText,
    BButton,
    BCol,
    BRow,

    StatisticCardWithAreaChart,
  },
  data() {
    return {
      allreservasbooking: 0,
      allreservasbookingCanceled: 0,
      allreservasbookingAcepted: 0,
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
    getListBooking() {
      this.$http.get(`admin/panel/booking/list?status=2`).then((response) => {
        let dataLenght = response.data.data;
        this.allreservasbooking = dataLenght.length;
        console.log(this.allreservasbooking)
      })
    },
    getLisCanceledBooking() {
      this.$http.get(`admin/panel/booking/list?status=3`).then((response) => {
        let dataLenghtCanceled = response.data.data;
        this.allreservasbookingCanceled = dataLenghtCanceled.length;
        console.log(this.allreservasbookingCanceled)
      })
    },
    getLisAceptBooking() {
      this.$http.get(`admin/panel/booking/list?status=0`).then((response) => {
        let dataLenghtAcepted = response.data.data;
        this.allreservasbookingAcepted = dataLenghtAcepted.length;
        console.log(this.allreservasbookingAcepted)
      })
    }
  },
  mounted() {
    this.getListBooking();
    this.getLisCanceledBooking();
    this.getLisAceptBooking();
  }
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
