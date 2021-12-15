<template>
  <div
      id="user-profile"
  >
    <b-card>
      <b-row>
        <b-col class="d-flex">
          <b-img
              style="border-radius: 5px"
              src="@/assets/images/avatars/13-small.png"></b-img>
          <div class="cols-12 col-xl-8">
            <span class="name-corporative">Orlando Health</span>
            <div>
              <b-button
                  class="mt-2 ml-1"
                  variant="primary"
              >Update</b-button>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col md="4">
          <b-form-group
              label="Company Legal Name"
          >
            <b-form-input
                value="Orlando Health"
                disabled
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
              label="Email"
          >
            <b-form-input
                value="orlando.healt@email.com"
                disabled
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
              label="DBA"
          >
            <b-form-input
                value="658921"
                disabled
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col md="4">
          <b-form-group
              label="Company Type"
          >
            <b-form-input
                value="Corporative"
                disabled
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
              label="Nature of Business"
          >
            <b-form-input
                value="local"
                disabled
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
              label="Billing Address"
          >
            <b-form-input
                value="New york city"
                disabled
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col md="4">
          <b-form-group
              label="Telephone Number"
          >
            <b-form-input
                value="3155566"
                disabled
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
              label="Fax Number"
          >
            <b-form-input
                value="6522222"
                disabled
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
              label="Website"
          >
            <b-form-input
                value="www.orlandohealth.com"
                disabled
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import {BRow, BCol, BCard, BImg, BButton, BFormGroup, BFormInput} from 'bootstrap-vue'

/* eslint-disable global-require */
export default {
  components: {
    BRow,
    BCol,
    BCard,
    BImg,
    BButton,
    BFormGroup,
    BFormInput,

  },
  data() {
    return {}
  },
  created() {

  },
}
/* eslint-disable global-require */
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-profile.scss';

.name-corporative {
  margin-left: 15px;
  font-weight: bold;
  font-size: 1.1rem;
}
</style>
