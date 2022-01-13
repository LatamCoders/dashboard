<template>
  <div
      id="user-profile"
  >
    <b-card>
      <b-row>
        <b-col class="d-flex">
          <b-img
              style="border-radius: 5px"
              src="@/assets/images/avatars/6-small.png"
          ></b-img>
          <div class="cols-12 col-xl-8">
            <span class="name-corporative">Jhon alphon</span>
            <div>
              <b-button
                  class="mt-2 ml-1"
                  variant="success"
              >Pass
              </b-button>
              <b-button
                  class="mt-2 ml-1"
                  variant="danger"
              >To refuse
              </b-button>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col md="4">
          <b-form-group
              label="Name"
          >
            <b-form-input
                value="Jhon alphon"
                disabled
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
              label="Email"
          >
            <b-form-input
                value="Dickerson@mail.com"
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
                value="Driver"
                disabled
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
              label="Home Address"
          >
            <b-form-input
                value="New york city"
                disabled
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
              label="Date Of Birds"
          >
            <b-form-input
                value="03/08/2022"
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
                value="6555122"
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
              label="Documents"
          >
            <b-form-file id="file-default"/>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
              label="Vehicle images">
            <div class="d-flex"
                 style="gap: 10px"
            >
              <div>
                <b-img
                    style="border-radius: 5px"
                    src="@/assets/images/avatars/6-small.png"
                ></b-img>
              </div>
              <div>
                <b-img
                    style="border-radius: 5px"
                    src="@/assets/images/avatars/6-small.png"
                ></b-img>
              </div>
            </div>
          </b-form-group>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { BRow, BCol, BCard, BImg, BButton, BFormGroup, BFormInput, BFormFile, } from 'bootstrap-vue'
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
    BFormFile,
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
