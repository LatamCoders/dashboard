<template>
  <div class="cols-12 col-xl-8 d-flex justify-content-center"
       style="margin: 0 auto">
    <form-wizard
        color="#7367F0"
        :title="null"
        :subtitle="null"
        finish-button-text="Request"
        back-button-text="Previous"
        class="steps-transparent mb-3 d-flex justify-content-center flex-xl-column formcreatepatient"
        @on-complete="formSubmitted"
        style="background-color: #fff"

    >
      <!-- account detail tab -->
      <tab-content
          title="Applicant"
          icon=""
      >
        <b-row>
          <b-col
              cols="12"
              class="mb-2"
          >
            <h5 class="mb-0">
              Ordered by
            </h5>
            <small class="text-muted">

            </small>
          </b-col>
          <b-col md="6">
            <b-form-group
                label="Name"
                label-for="i-name"
            >
              <b-form-input
                  id="i-name"
                  value="Orlando"
                  disabled
                  style="font-weight: bold"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
                label="Last Name"
                label-for="i-lastname"
            >
              <b-form-input
                  id="i-lastname"
                  value="Health"
                  disabled
                  style="font-weight: bold"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
                label="Contact Number"
                label-for="i-contactn"
            >
              <b-form-input
                  id="i-contactn"
                  value="231217848"
                  disabled
                  style="font-weight: bold"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
                label="Email"
                label-for="i-email"
            >
              <b-form-input
                  id="i-email"
                  type="email"
                  value="orlandohealth@gmail.com"
                  disabled
                  style="font-weight: bold"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>

      <!-- personal details -->
      <tab-content
          title="Patient  Info"
          icon=""
      >
        <b-row>
          <b-col
              cols="12"
              class="mb-2"
          >
            <h5 class="mb-0">
              Patient information
            </h5>
            <small class="text-muted">Enter patient information.</small>
          </b-col>
          <b-col md="6">
            <b-form-group
                label="Name"
            >
              <b-form-input
                  placeholder="John"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
                label-for="i-last-name"
                label="Last Name"
            >
              <b-form-input
                  id="i-last-name"
                  placeholder="John"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
                label-for="i-contact-number"
                label="Contact Number"
            >
              <b-form-input
                  id="i-contact-number"
                  placeholder="15555555554"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
                label="Email"
                label-for="i-mail"
            >
              <b-form-input
                  id="i-mail"
                  type="Email"
                  placeholder="Doe@gmail.com"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>

      <!-- address -->
      <tab-content
          title="Preschedule"
          icon=""
      >
        <b-row>
          <b-col
              cols="12"
              class="mb-2"
          >
            <h5 class="mb-0">
              Preschedule date
            </h5>
            <small class="text-muted"></small>
          </b-col>
          <b-col md="6">
            <b-form-group
                label="Date of Service"
                label-for="i-dataservice"
            >
              <b-form-datepicker
                  v-model="value"
                  :min="min"
                  :max="max"
                  locale="en"
                  placeholder="8/01/2022"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
                label="Time of Pickup"
                label-for="i-time"
            >
              <b-form-input
                  id="i-time"
                  placeholder="98 Borough bridge Road, Birmingham"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
                label="Time of Appt"
                label-for="i-appt"
            >
              <b-form-input
                  id="i-appt"
                  placeholder="658921"
              />
            </b-form-group>
          </b-col>
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
          <b-col md="6">
            <b-form-group
                label="Surgery type"
            >
              <b-form-select
                  v-model="selectcirujia"
                  :options="optionscirujia"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
                label="Additional stop"
            >
              <b-form-select
                  v-model="selected"
                  :options="options"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
                label="Appointment date"
            >
              <b-form-datepicker
                  v-model="appointmentdate"
                  :min="min"
                  :max="max"
                  locale="en"
                  placeholder="8/01/2022"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
                label="Appointment time"
            >
              <b-form-timepicker
                  id="timepicker-placeholder"
                  placeholder="Choose a time"
                  local="en"
                  v-model="appointmenttime"
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
  BFormSelect,
  BFormDatepicker,
  BFormTimepicker,
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
    BFormSelect,
    BFormDatepicker,
    BFormTimepicker,
    // vSelect,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  data() {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    // 15th two months prior
    const minDate = new Date(today)
    minDate.setMonth(minDate.getMonth() - 2)
    minDate.setDate(15)
    // 15th in two months
    const maxDate = new Date(today)
    maxDate.setMonth(maxDate.getMonth() + 2)
    maxDate.setDate(15)
    return {
      value: '',
      min: minDate,
      max: maxDate,
      appointment: '',
      appointmentdate: '',
      appointmenttime: '',
      selectcirujia: null,
      selected: null,
      selectedContry: 'select_value',
      selectedLanguage: 'nothing_selected',
      options: [
        {value: null, text: 'Please select some item'},
        {value: 'wait', text: 'Wait and return'},
        {value: 'pharmacy', text: 'Pharmacy stop'},
        {value: 'additional', text: 'Additional stop'},
      ],
      optionscirujia: [
        {value: null, text: 'Please select some item'},
        {value: 'appendectomy', text: 'Appendectomy'},
        {value: 'breast', text: 'Breast biopsy'},
        {value: 'carotid', text: 'Carotid endarterectomy'},
        {value: 'cataract', text: 'Cataract surgery'},
        {value: 'cholecystectomy', text: 'Cholecystectomy'},
        {value: 'other', text: 'other'},
      ],
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
