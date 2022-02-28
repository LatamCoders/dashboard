<template>
  <div>
    <b-row>
      <b-col
          cols="12"
          xl="12"
          class="optrips"
      >
        <b-card class="cols-12 col-xl-3" title="See providers">
          <b-card-text>
            <b-button
                type="submit"
                variant="primary"
                class="sigin"
                :to="{name: 'providers'}"
            >See
            </b-button>
          </b-card-text>
        </b-card>
        <!--        <b-card class="cols-12 col-xl-3" title="Assign Driver">-->
        <!--          <b-card-text>-->
        <!--            <b-button-->
        <!--                type="submit"-->
        <!--                variant="primary"-->
        <!--                class="sigin"-->
        <!--            >Assign-->
        <!--            </b-button>-->
        <!--          </b-card-text>-->
        <!--        </b-card>-->
        <b-card class="cols-12 col-xl-3" title="Reservations to accept">
          <b-card-text>
            <b-button
                type="submit"
                variant="primary"
                class="sigin"
                :to="{name: 'reservation-to-accepted'}"
            >
              View list to accept
            </b-button>
          </b-card-text>
        </b-card>
        <b-card class="cols-12 col-xl-3" title="Book a trip">
          <b-card-text>
            <b-button
                type="submit"
                variant="primary"
                class="sigin"
                :to="{name: 'request-service'}"
            >
              Reserve
            </b-button>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BButton, BCard, BCardText, BCol, BRow, } from 'bootstrap-vue'

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
