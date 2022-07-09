<template>
  <div class="cols-12 col-xl-12 "
       oncopy="return false" onpaste="return false"
       style="margin: 0 auto"
  >
    <form-wizard
        color="#7367F0"
        :title="null"
        :subtitle="null"
        finish-button-text="Submit"
        back-button-text="Previous"
        ref="registerClient"
        class="steps-transparent mb-3 d-lg-flex d-xl-flex d-md-flex justify-content-center flex-xl-column formcreatepatient"
        @on-complete="formSubmitted"
        style="background-color: #fff"
    >
      <!-- account detail tab -->
      <tab-content
          title="Account Details"
          :before-change="validationForm"
      >
        <validation-observer
            ref="accountRules"
            tag="form"
        >
          <b-row>
            <b-col
                cols="12"
                class="mb-2"
            >
              <h5 class="mb-0">
                Account Details
              </h5>
              <small class="text-muted" style="color: #000000d6 !important">
                Enter Your Account Details.
              </small>
            </b-col>
            <b-col md="4">
              <b-form-group
                  label="Name"
              >
                <validation-provider
                    #default="{ errors }"
                    rules="required"
                >
                  <b-form-input
                      v-model="createdPatient.name"
                      :state="errors.length > 0 ? false:null"
                      @keypress="isText"
                      maxlength="40"
                  />
                  <small class="text-danger" v-if="errors[0]">This field is required</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group
                  label="Last name"
              >
                <validation-provider
                    #default="{ errors }"
                    rules="required"
                >
                  <b-form-input
                      v-model="createdPatient.lastname"
                      :state="errors.length > 0 ? false:null"
                      @keypress="isText"
                      maxlength="40"
                  />
                  <small class="text-danger" v-if="errors[0]">This field is required</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group
                  label="Email"
              >
                <validation-provider
                    #default="{ errors }"
                    rules="required|email"
                >
                  <b-form-input
                      v-model="createdPatient.email"
                      type="email"
                      :state="errors.length > 0 ? false:null"
                      maxlength="50"
                  />
                  <small class="text-danger" v-if="errors[0]">This field is required</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group
                  label="Telephone number"
              >
                <validation-provider
                    #default="{ errors }"
                    rules="required"
                >
                  <b-form-input
                      v-model="createdPatient.phone_number"
                      :state="errors.length > 0 ? false:null"
                      @keypress="isNumber($event)"
                      maxlength="11"
                  />
                  <small class="text-danger" v-if="errors[0]">This field is required</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group
                  label="Notes"
              >
                <b-form-textarea
                    v-model="createdPatient.note"
                    placeholder="Write here the notes"
                    rows="3"
                />
              </b-form-group>
            </b-col>
          </b-row>
        </validation-observer>
      </tab-content>

      <!-- personal details -->
      <tab-content
          title="Personal Info"
          :before-change="validationFormInfo"
      >
        <validation-observer
            ref="infoRules"
            tag="form"
        >
          <b-row>
            <b-col
                cols="12"
                class="mb-2"
            >
              <h5 class="mb-0">
                Personal Info
              </h5>
              <small class="text-muted" style="color: #000000d6 !important">Enter Your Personal Info.</small>
            </b-col>
            <b-col md="4">
              <b-form-group
                  label="Home Address"
              >
                <gmap-autocomplete class="form-control" placeholder="Birmingham" @place_changed="initMarker">
                </gmap-autocomplete>
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group
                  label="Home Telephone Number"
              >
                <validation-provider
                    #default="{ errors }"
                    rules="required"
                >
                  <b-form-input
                      v-model="createdPatient.home_telephone_number"
                      :state="errors.length > 0 ? false:null"
                      @keypress="isNumber($event)"
                      maxlength="10"
                  />
                  <small class="text-danger" v-if="errors[0]">This field is required</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group
                  label="City"
              >
                <validation-provider
                    #default="{ errors }"
                    rules="required"
                >
                  <b-form-input
                      id="autocomplete"
                      v-model="createdPatient.city"
                      :state="errors.length > 0 ? false:null"
                      maxlength="40"
                      @keypress="isDirection"
                  />
                  <small class="text-danger" v-if="errors[0]">This field is required</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group
                  label="Date of birth"
              >
                <validation-provider
                    #default="{ errors }"
                    rules="required"
                >
                  <b-form-input
                      v-model="createdPatient.birthday"
                      v-mask="'####-##-##'"
                      hint="YYYY-MM-DD"
                      placeholder="YYYY-MM-DD"
                      :state="errors.length > 0 ? false:null"
                  />
                  <small class="text-danger" v-if="errors[0]">This field is required</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group
                  label="Gender"
                  class="mb-0"
              >
                <validation-provider
                    #default="{ errors }"
                    rules="required"
                >
                  <div style="display: flex; gap: 10px">
                    <b-form-radio
                        v-model="createdPatient.gender"
                        name="Female"
                        value="Female"
                        class="custom-control-secondary"
                        :state="errors.length > 0 ? false:null"
                    >
                      Female
                    </b-form-radio>

                    <!-- secondary -->
                    <b-form-radio
                        v-model="createdPatient.gender"
                        name="Male"
                        value="Male"
                        class="custom-control-secondary"
                        :state="errors.length > 0 ? false:null"
                    >
                      Male
                    </b-form-radio>

                    <!-- success -->
                    <b-form-radio
                        v-model="createdPatient.gender"
                        name="Other"
                        value="Other"
                        class="custom-control-secondary"
                        :state="errors.length > 0 ? false:null"
                    >
                      Other
                    </b-form-radio>
                  </div>
                  <small class="text-danger" v-if="errors[0]">This field is required</small>
                </validation-provider>
              </b-form-group>
            </b-col>
          </b-row>
        </validation-observer>
      </tab-content>
    </form-wizard>
  </div>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
// import vSelect from 'vue-select'
import {ValidationProvider, ValidationObserver} from 'vee-validate'
import axios from 'axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BFormRadio,
  BFormDatepicker,
  BFormTextarea,
} from 'bootstrap-vue'
import searchDirection from '@/libs/searchDirection'
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
    BFormDatepicker,
    BFormTextarea,
    // vSelect,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [searchDirection],
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
      min: minDate,
      max: maxDate,
      center: {
        lat: 39.7837304,
        lng: -100.4458825
      },
      locationMarkers: [],
      locPlaces: [],
      existingPlace: {},
      createdPatient: {
        name: '',
        lastname: '',
        email: '',
        phone_number: '',
        note: '',
        gender: '',
        birthday: '',
        city: '',
        address: '',
        ca_id: '',
      },
      validFecha: false,
    }
  },
  methods: {
    isNumber: function (evt) {
      evt = evt ? evt : window.event
      var charCode = evt.which ? evt.which : evt.keyCode
      if (
          charCode > 31 &&
          (charCode < 48 || charCode > 57) &&
          charCode !== 46
      ) {
        evt.preventDefault()
      } else {
        return true
      }
    },
    isText: function (event) {
      let regex = new RegExp('^[a-zA-Z ]+$')
      let key = String.fromCharCode(!event.charCode ? event.which : event.charCode)
      if (!regex.test(key)) {
        event.preventDefault()
        return false
      }
    },
    isDirection: function (event) {
      let regex = new RegExp('^[a-zA-Z0-9 ]+$')
      let key = String.fromCharCode(!event.charCode ? event.which : event.charCode)
      if (!regex.test(key)) {
        event.preventDefault()
        return false
      }
    },
    initMarker(loc) {
      this.existingPlace = loc
      this.createdPatient.address = this.existingPlace.formatted_address
      console.log(this.createdPatient.address)
    },
    addLocationMarker() {
      if (this.existingPlace) {
        const marker = {
          lat: this.existingPlace.geometry.location.lat(),
          lng: this.existingPlace.geometry.location.lng()
        }
        this.locationMarkers.push({position: marker})
        this.locPlaces.push(this.existingPlace)
        this.center = marker
        this.existingPlace = null

      }
    },
    locateGeoLocation: function () {
      navigator.geolocation.getCurrentPosition(res => {
        this.center = {
          lat: res.coords.latitude,
          lng: res.coords.longitude
        }
      })
    },
    formSubmitted() {
      let mes = this.createdPatient.birthday.slice(5, 7);
      let year = this.createdPatient.birthday.slice(0, 4);
      let dia = this.createdPatient.birthday.slice(8, 10);

      if ((year === '0000') || (mes > 12 || mes === '00') || (dia > 31 || dia === '00')) {
        this.$swal({
          title: 'Error, invalid date',
          icon: 'error',
          customClass: {
            confirmButton: 'btn btn-primary',
          },
          buttonsStyling: false,
        })
        this.validFecha = false;
      } else if (mes === parseInt('02') || mes === 2) {
        if (dia > 28) {
          this.$swal({
            title: 'Error, invalid date',
            icon: 'error',
            customClass: {
              confirmButton: 'btn btn-primary',
            },
            buttonsStyling: false,
          })
        }
        this.validFecha = false;
      } else {
        this.$swal({
          title: 'Please, wait...',
          didOpen: () => {
            this.$swal.showLoading()
          }
        })
        this.createdPatient.ca_id = this.$store.getters['Users/userData'].user.corporate_account.id
        this.$http.post('ca/panel/client/add', this.createdPatient)
            .then((res) => {
              if (res.data.status === 200) {
                this.$swal({
                  title: res.data.message,
                  icon: 'success',
                  customClass: {
                    confirmButton: 'btn btn-primary',
                  },
                  buttonsStyling: false,
                })
                this.$refs.registerClient.reset()

                //clear form register
                this.createdPatient.name = '',
                    this.createdPatient.lastname = '',
                    this.createdPatient.email = '',
                    this.createdPatient.phone_number = '',
                    this.createdPatient.note = '',
                    this.createdPatient.gender = '',
                    this.createdPatient.birthday = '',
                    this.existingPlace.formatted_address = '',
                    this.createdPatient.home_telephone_number = '',
                    this.createdPatient.city = '',
                    this.createdPatient.address = ''
              } else {
                this.$swal({
                  title: res.data.message,
                  icon: 'error',
                  customClass: {
                    confirmButton: 'btn btn-primary',
                  },
                  buttonsStyling: false,
                })
                console.log(res)
              }
            })
            .catch((res) => {
              this.$swal({
                title: res.message,
                icon: 'error',
                customClass: {
                  confirmButton: 'btn btn-primary',
                },
                buttonsStyling: false,
              })
            })
      }
    },
    validationForm() {
      return new Promise((resolve, reject) => {
        this.$refs.accountRules.validate()
            .then(success => {
              if (success) {
                resolve(true)
              } else {
                reject()
              }
            })
      })
    },
    validationFormInfo() {
      return new Promise((resolve, reject) => {
        this.$refs.infoRules.validate()
            .then(success => {
              if (success) {
                resolve(true)
              } else {
                reject()
              }
            })
      })
    },
  },
  mounted() {
    this.locateGeoLocation()
  },
}
</script>
