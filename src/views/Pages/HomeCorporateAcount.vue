<template>
  <div>
    <b-row>
      <b-col
          cols="12"
          xl="12"
          class="d-flex opcorporate justify-content-center"
      >
        <b-card class="cols-12 col-xl-3" title="Create a patient">
          <!--      <b-card-text>All the best for your new project.</b-card-text>-->
          <b-card-text>
            <b-button
                type="submit"
                variant="primary"
                class="sigin"
                to="/create-patient">Create user
            </b-button>
          </b-card-text>
        </b-card>
        <b-card class="cols-12 col-xl-3" title="View all patient">
          <b-card-text>
            <b-button
                type="submit"
                variant="primary"
                class="sigin"
                to="/all-patient">
              View all patient
            </b-button>
          </b-card-text>
        </b-card>
        <b-card class="cols-12 col-xl-3" title="Request a trip">
          <b-card-text>
            <b-button
                type="submit"
                variant="primary"
                class="sigin"
                to="/request-service"
            >
              Request
            </b-button>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
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
    return {

    }
  },
}
</script>

<style>

</style>
