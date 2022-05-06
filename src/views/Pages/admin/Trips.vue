<template>
  <div>
    <b-row>
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
              :total-driver="allReservasBookingPending"
              sub-all-driver="Reservations to accept"
          ></StatisticCardWithAreaChart>
        </router-link>
      </b-col>
      <b-col
          lg="3"
          sm="6"
      >
        <router-link style="color: #6e6b7b" :to="{name:'reservation-to-cancel'}">
          <StatisticCardWithAreaChart
              statistic="Reservations to cancel"
              :chart-data="series"
              icon="XCircleIcon"
              color="warning"
              statistic-title="View all reservations to cancel"
              :total-driver="allReservasBookingPendingtoCanceled"
              sub-all-driver="Reservations to cancel"
          ></StatisticCardWithAreaChart>
        </router-link>
      </b-col>
      <b-col
          lg="3"
          sm="6"
      >
        <router-link style="color: #6e6b7b" :to="{ name:'reservation-in-progress'}">
          <StatisticCardWithAreaChart
              statistic="Reservations in progess"
              :chart-data="series"
              icon="TruckIcon"
              statistic-title="Manage booked in progress"
              :total-driver="allReservasInProgress"
              sub-all-driver="Reservations in progress"
          ></StatisticCardWithAreaChart>
        </router-link>
      </b-col>
      <b-col
          lg="3"
          sm="6"
      >
        <router-link style="color: #6e6b7b" :to="{name:'completed-trips'}">
          <StatisticCardWithAreaChart
              statistic="Completed trips"
              :chart-data="series"
              icon="CheckCircleIcon"
              statistic-title="Manage all completed trips"
              :total-driver="allReservasCompleted"
              sub-all-driver="Completed trips"
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
              :total-driver="allReservasBookingCanceled"
              sub-all-driver="Canceled reservations"
              :chart-data="ordersRecevied"
              statistic-title="Manage canceled reservations"
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
      allReservasBookingPending: 0,
      allReservasBookingPendingtoCanceled: 0,
      allReservasInProgress: 0,
      allReservasCompleted: 0,
      allReservasBookingCanceled: 0,

      // allreservasbooking: 0,
      //
      // allreservasbookingAcepted: 0,


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
    //Viajes Pendiente
    getLisAceptBooking() {
      this.$http.get(`admin/panel/booking/list?status=0`).then((response) => {
        let dataLenghtPending = response.data.data;
        this.allReservasBookingPending = dataLenghtPending.length;
        // console.log(this.allReservasBookingPending)
      })
    },
    //Pendiente de cancelación
    getListPendingCanceledBooking() {
      this.$http.get(`admin/panel/booking/list?status=1`).then((response) => {
        let dataLenghtPendingtoCanceled = response.data.data;
        this.allReservasBookingPendingtoCanceled = dataLenghtPendingtoCanceled.length;
        // console.log(this.allReservasBookingPendingtoCanceled)
      })
    },
    //En progreso
    getListBookingInProgress() {
      this.$http.get(`admin/panel/booking/list?status=2`).then((response) => {
        let dataLenghtInProgress = response.data.data;
        this.allReservasInProgress = dataLenghtInProgress.length;
        // console.log(this.allReservasInProgress)
      })
    },
    //Completado
    getListCompleted() {
      this.$http.get(`admin/panel/booking/list?status=3`).then((response) => {
        let dataLenghtCompleted = response.data.data;
        this.allReservasCompleted = dataLenghtCompleted.length;
        // console.log(this.allReservasCompleted)
      })
    },
    //Viajes Cancelados = 4
    getListBookingCanceled() {
      this.$http.get(`admin/panel/booking/list?status=4`).then((response) => {
        let dataLenghBookingCanceled = response.data.data;
        this.allReservasBookingCanceled = dataLenghBookingCanceled.length;
        // console.log(this.allReservasBookingCanceled)
      })
    }
  },
  mounted() {
    this.getListBookingInProgress();
    this.getListCompleted();
    this.getLisAceptBooking();
    this.getListPendingCanceledBooking();
    this.getListBookingCanceled();
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
