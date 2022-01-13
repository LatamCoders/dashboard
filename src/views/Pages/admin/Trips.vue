<template>
  <div>
    <b-row>
      <b-col
          cols="12"
          xl="12"
          class="optrips"
      >
        <b-card class="cols-12 col-xl-3" title="Booked trip">
          <!--      <b-card-text>All the best for your new project.</b-card-text>-->
          <b-card-text>
            <b-button
                type="submit"
                variant="primary"
                class="sigin"
                to="/trips/booked-trips">view booked trip
            </b-button>
          </b-card-text>
        </b-card>
        <b-card class="cols-12 col-xl-3" title="Canceled reservations">
          <b-card-text>
            <b-button
                type="submit"
                variant="primary"
                class="sigin"
                to="/trips/canceled-reservations">
              view all canceled reservations
            </b-button>
          </b-card-text>
        </b-card>
        <b-card class="cols-12 col-xl-3" title="Reservations to accept">
          <b-card-text>
            <b-button
                type="submit"
                variant="primary"
                class="sigin"
                to="/trips/reservation-to-accepted"
            >
              Request
            </b-button>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <!--    <router-view></router-view>-->
  </div>
</template>

<script>
import {BButton, BCard, BCardText, BCol, BRow,} from 'bootstrap-vue'
export default {
  components: {
    BCard,
    BCardText,
    BButton,
    BCol,
    BRow,
  },
  data() {
    return {}
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
