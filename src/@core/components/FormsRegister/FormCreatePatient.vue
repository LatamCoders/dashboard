<template>
  <div class="cols-12 col-xl-8 d-flex justify-content-center"
       style="margin: 0 auto">
    <form-wizard
        color="#7367F0"
        :title="null"
        :subtitle="null"
        finish-button-text="Submit"
        back-button-text="Previous"
        class="steps-transparent mb-3 d-flex justify-content-center flex-xl-column formcreatepatient"
        @on-complete="formSubmitted"

    >
      <!-- account detail tab -->
      <tab-content
          title="Account Details"
          icon=""
      >
        <b-row>
          <b-col
              cols="12"
              class="mb-2"
          >
            <h5 class="mb-0">
              Account Details
            </h5>
            <small class="text-muted">
              Enter Your Account Details.
            </small>
          </b-col>
          <b-col md="6">
            <b-form-group
                label="Name"
                label-for="i-name"
            >
              <b-form-input
                  id="i-name"
                  placeholder="johndoe"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
                label="Lastname"
                label-for="i-lastname"
            >
              <b-form-input
                  id="i-lastname"
                  placeholder="Doe"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
                label="Email"
                label-for="i-maill"
            >
              <b-form-input
                  id="i-maill"
                  type="Email"
                  placeholder="Jhon.doe@email.com"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
                label="Telephone number"
                label-for="i-t-number"
            >
              <b-form-input
                  id="i-t-number"
                  type="number"
                  placeholder="33515"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>

      <!-- personal details -->
      <tab-content
          title="Personal Info"
          icon=""
      >
        <b-row>
          <b-col
              cols="12"
              class="mb-2"
          >
            <h5 class="mb-0">
              Personal Info
            </h5>
            <small class="text-muted">Enter Your Personal Info.</small>
          </b-col>
          <b-col md="6">
            <b-form-group
                label-for="i-home"
                label="Home Address"
            >
              <b-form-input
                  id="i-home"
                  placeholder="98 Borough bridge Road, Birmingham"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
                label-for="i-homenumber"
                label="Home Telephone Number"
            >
              <b-form-input
                  id="i-homenumber"
                  placeholder="358185488"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
                label="Género"
                class="mb-0"
            >
              <b-form-radio
                  v-model="selected"
                  name="Female"
                  value="Female"
                  class="custom-control-secondary"
              >
                Female
              </b-form-radio>

              <!-- secondary -->
              <b-form-radio
                  v-model="selected"
                  name="Male"
                  value="Male"
                  class="custom-control-secondary"
              >
               Male
              </b-form-radio>

              <!-- success -->
              <b-form-radio
                  v-model="selected"
                  name="Other"
                  value="Other"
                  class="custom-control-secondary"
              >
                Other
              </b-form-radio>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
                label="Date of birth"
                label-for="i-emai"
            >
              <b-form-input
                  id="i-emai"
                  placeholder="18/03/1990"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>

      <!-- address -->
      <tab-content
          title="Address"
          icon=""
      >
        <b-row>
          <b-col
              cols="12"
              class="mb-2"
          >
            <h5 class="mb-0">
              Address
            </h5>
            <small class="text-muted">Enter Your Address.</small>
          </b-col>
          <b-col md="6">
            <b-form-group
                label="Home address"
                label-for="i-address"
            >
              <b-form-input
                  id="i-address"
                  placeholder="98 Borough bridge Road, Birmingham"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
                label="Home telephone number"
                label-for="i-landmark"
            >
              <b-form-input
                  id="i-landmark"
                  placeholder="325654"
              />
            </b-form-group>
          </b-col>
          <!-- <b-col md="6">
            <b-form-group
                label="Pincode"
                label-for="i-pincode"
            >
              <b-form-input
                  id="i-pincode"
                  placeholder="658921"
              />
            </b-form-group>
          </b-col> -->
          <b-col md="6">
            <b-form-group
                label-for="i-city"
                label="City"
            >
              <b-form-input
                  id="i-city"
                  placeholder="Birmingham"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>

      <!-- social link -->
      <!-- <tab-content
          title="Social Links"
          icon="feather icon-link"
      >
        <b-row>
          <b-col
              cols="12"
              class="mb-2"
          >
            <h5 class="mb-0">
              Social Links
            </h5>
            <small class="text-muted">Enter Your Social Links</small>
          </b-col>
          <b-col md="6">
            <b-form-group
                label="Twitter"
                label-for="i-twitter"
            >
              <b-form-input
                  id="i-twitter"
                  placeholder="https://twitter.com/abc"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
                label="Facebook"
                label-for="i-facebook"
            >
              <b-form-input
                  id="i-facebook"
                  placeholder="https://facebook.com/abc"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
                label="Google+"
                label-for="i-google-plus"
            >
              <b-form-input
                  id="i-google-plus"
                  placeholder="https://plus.google.com/abc"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
                label="LinkedIn"
                label-for="i-linked-in"
            >
              <b-form-input
                  id="i-linked-in"
                  placeholder="https://linkedin.com/abc"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content> -->
    </form-wizard>

  </div>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
// import vSelect from 'vue-select'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BFormRadio,
} from 'bootstrap-vue'
// import { codeIconInfo } from './code'

export default {
  components: {
    FormWizard,
    TabContent,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormRadio,
    // vSelect,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  data() {
    return {
      selected: '',
      selectedContry: 'select_value',
      selectedLanguage: 'nothing_selected',
      countryName: [
        {value: 'select_value', text: 'Select Value'},
        {value: 'Russia', text: 'Russia'},
        {value: 'Canada', text: 'Canada'},
        {value: 'China', text: 'China'},
        {value: 'United States', text: 'United States'},
        {value: 'Brazil', text: 'Brazil'},
        {value: 'Australia', text: 'Australia'},
        {value: 'India', text: 'India'},
      ],
      languageName: [
        {value: 'nothing_selected', text: 'Nothing Selected'},
        {value: 'English', text: 'English'},
        {value: 'Chinese', text: 'Mandarin Chinese'},
        {value: 'Hindi', text: 'Hindi'},
        {value: 'Spanish', text: 'Spanish'},
        {value: 'Arabic', text: 'Arabic'},
        {value: 'Malay', text: 'Malay'},
        {value: 'Russian', text: 'Russian'},
      ],
    }
  },
  methods: {
    formSubmitted() {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Form Submitted',
          icon: 'EditIcon',
          variant: 'success',
        },
      })
    },
  },
}
</script>
