<template>
  <div>
    <b-row>
      <b-col
          cols="12"
          xl="12"
          class="opcorporate"
      >
        <b-card class="cols-12 col-xl-5 card card-congratulations">
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
              class="shadow mb-2 icono-medalla"
          >
            <feather-icon
                size="28"
                icon="AwardIcon"
            />
          </b-avatar>
          <h1 class="mb-0 mt-50 text-white text-center">
            Welcome, {{ $store.getters['Users/userData'].user.name }}
          </h1>
          <b-card-text class="m-auto w-75 text-center pb-2">
            We are happy to have you!
          </b-card-text>
          <!--/ images -->
          <!--          <b-card-text>-->
          <!--            <b-button-->
          <!--                type="submit"-->
          <!--                variant="primary"-->
          <!--                class="sigin"-->
          <!--                :to="{ name: 'create-patient' }"-->
          <!--            >Create user-->
          <!--            </b-button>-->
          <!--          </b-card-text>-->
        </b-card>

        <StatisticCardWithAreaChart
            statistic="Patients"
            :chart-data="listClients"
            icon="UsersIcon"
        ></StatisticCardWithAreaChart>

        <!--        <b-card class="cols-12 col-xl-3" title="View all patient">-->
        <!--          <b-card-text>-->
        <!--            <b-button-->
        <!--                type="submit"-->
        <!--                variant="primary"-->
        <!--                class="sigin"-->
        <!--                :to="{ name: 'all-patient' }"-->
        <!--            >-->
        <!--              View all patient-->
        <!--            </b-button>-->
        <!--          </b-card-text>-->
        <!--        </b-card>-->
        <!--        <b-card class="cols-12 col-xl-3" title="Request a trip">-->
        <!--          <b-card-text>-->
        <!--            <b-button-->
        <!--                type="submit"-->
        <!--                variant="primary"-->
        <!--                class="sigin"-->
        <!--                :to="{name: 'request-service' }"-->
        <!--            >-->
        <!--              Request-->
        <!--            </b-button>-->
        <!--          </b-card-text>-->
        <!--        </b-card>-->
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
    }
  },

  methods: {
    getClientes() {
      this.$http.get(`ca/${this.$store.getters['Users/userData'].user.corporate_account.id}/panel/client/search`).then((response) => {
        this.listClients = response.data.data;
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

