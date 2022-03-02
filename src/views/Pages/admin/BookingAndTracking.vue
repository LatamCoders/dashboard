<template>
  <div>
    <b-row>
      <b-col
          cols="12"
          xl="12"
          class="opbooking"
      >
        <b-card class="cols-12 col-xl-3" title="Approve drivers">
          <!--      <b-card-text>All the best for your new project.</b-card-text>-->
          <b-card-text>
            <b-button
                type="submit"
                variant="primary"
                class="sigin"
                to="/booking/approve-drivers"
            >Approve
            </b-button>
          </b-card-text>
        </b-card>
        <b-card class="cols-12 col-xl-3" title="Assign driver">
          <b-card-text>
            <b-button
                type="submit"
                variant="primary"
                class="sigin"
                to="/booking/assign-driver"
            >
              Assign
            </b-button>
          </b-card-text>
        </b-card>
<!--        <b-card class="cols-12 col-xl-3" title="Book a trip">-->
<!--          <b-card-text>-->
<!--            <b-button-->
<!--                type="submit"-->
<!--                variant="primary"-->
<!--                class="sigin"-->
<!--                to="request-service"-->
<!--            >-->
<!--              Book-->
<!--            </b-button>-->
<!--          </b-card-text>-->
<!--        </b-card>-->
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {
  BButton,
  BCard,
  BCardText,
  BCol,
  BRow,
} from 'bootstrap-vue'
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
  .opbooking {
    flex-direction: column;
  }
}
</style>
