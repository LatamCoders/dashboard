<template>
  <div>
    <b-row class="row-container" style="margin-top: 15px;">
      <b-col
          lg="3"
          sm="6"
      >
        <router-link style="color: #6e6b7b" :to="{name:'PaymentsMade'}">
          <StatisticCardWithAreaChart
              statistic="Payments accepted"
              :chart-data="series"
              icon="DollarSignIcon"
              :total-driver="null"
              statistic-title="Manage your payments made"
          ></StatisticCardWithAreaChart>
        </router-link>
      </b-col>
      <b-col
          lg="3"
          sm="6"
      >
        <router-link style="color: #6e6b7b" :to="{name:'PaymentsToBeMade'}">
          <StatisticCardWithAreaChart
              icon="CreditCardIcon"
              statistic="Payments to be made"
              color="warning"
              :total-driver="null"
              :chart-data="ordersRecevied"
              statistic-title="Manage your payments to be made"
          ></StatisticCardWithAreaChart>
        </router-link>
      </b-col>
      <b-col
          lg="3"
          sm="6"
      >
        <router-link style="color: #6e6b7b" :to="{name:'RefusedPayments'}">
          <StatisticCardWithAreaChart
              statistic="Refused Payments"
              :chart-data="series"
              icon="RotateCcwIcon"
              :total-driver="null"
              statistic-title="Manage your refused payments"
          ></StatisticCardWithAreaChart>
        </router-link>
      </b-col>
      <b-col
          lg="3"
          sm="6"
      >
        <router-link style="color: #6e6b7b" :to="{ name: 'Payments' }">
          <StatisticCardWithAreaChart
              icon="SettingsIcon"
              statistic="Generate payment"
              color="warning"
              :total-driver="null"
              :chart-data="ordersRecevied"
              statistic-title="Payment to the drivers"
          ></StatisticCardWithAreaChart>
        </router-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {BButton, BCard, BCardText, BCol, BRow, BImg, BAvatar} from 'bootstrap-vue';
import StatisticCardWithAreaChart from "@core/components/statistics-cards/StatisticCardWithAreaChart";

export default {
  name: 'Billing',
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
      listClients: [],
      allPatient: 0,
      user: 0,
      allBooking: 0,

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
        this.allPatient = this.listClients.length;
        // console.log(this.allPatient)
      }).catch((res) => console.log(res.data))
    },
    getBookings() {
      this.user = parseInt(this.$store.getters["Users/userData"].user.corporate_account.id)
      this.$http.get(`ca/${this.user}/panel/booking/list`).then((response) => {
        let listBooking = response.data.data;
        this.allBooking = listBooking.length;


      }).catch((res) => console.log(res.data))
    },

  },

  mounted() {
    this.getClientes()
    this.getBookings();
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/variables/variables-components.scss";

.icono-medalla {
  margin: 0 254px;
}

.card {
  height: 100%;
}
</style>
<style>
@media only screen and (max-width: 600px) {
  .opcorporate {
    flex-direction: column;
  }

  .row-container {
    gap: 10px;
  }
}

@media only screen and (min-width: 601px) and (max-width: 940px) {
  .row-container {
    row-gap: 10px;
  }
}
</style>

