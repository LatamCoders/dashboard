<template>
  <div class="cols-12 col-xl-12 "
       style="margin: 0 auto"
  >
    <form-wizard
        color="#7367F0"
        :title="null"
        :subtitle="null"
        finish-button-text="Request"
        back-button-text="Previous"
        class="steps-transparent mb-3 d-lg-flex d-xl-flex d-md-flex justify-content-center flex-xl-column formcreatepatient"
        @on-complete="formRequest"
        style="background-color: #fff"
        ref="requestTrip"
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
          <b-col md="4">
            <b-form-group
                label="Name"
            >
              <b-form-input
                  v-model="dataCa.name"
                  disabled
                  style="font-weight: bold"
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
                label="Company name"
            >
              <b-form-input
                  v-model="dataCa.corporate_account.company_legal_name"
                  disabled
                  style="font-weight: bold"
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
                label="Contact Number"
            >
              <b-form-input
                  v-model="dataCa.corporate_account.corporate_account_personal_info.telephone_number"
                  disabled
                  style="font-weight: bold"
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
                label="Email"
            >
              <b-form-input
                  v-model="dataCa.email"
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
                Patient information
              </h5>
              <small class="text-muted" style="color: #000000d6 !important">Enter patient information.</small>
            </b-col>
            <b-col md="4">
              <b-form-group
                  label="Name"
              >
                <validation-provider
                    #default="{ errors }"
                    rules="required"
                >
                  <v-select
                      v-model="idpaciente"
                      label="name"
                      :options="lispatient"
                      :reduce="c => `${c.id}`"
                      :state="errors.length > 0 ? false:null"

                  >
                    <template #option="{name, lastname}">
                      {{ name }} {{ lastname }}
                    </template>
                  </v-select>
                  <small class="text-danger" v-if="errors[0]">This field is required</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group
                  label="Last Name"
              >
                <b-form-input
                    v-model="lastnombre"
                    disabled

                />
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group
                  label="Contact Number"
              >
                <validation-provider
                    #default="{ errors }"
                    rules="required"
                >
                  <b-form-input
                      v-model="contact"
                      :state="errors.length > 0 ? false:null"
                      disabled
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
                      v-model="getEmailPatient"
                      :state="errors.length > 0 ? false:null"
                      disabled
                  />
                  <small class="text-danger" v-if="errors[0]">This field is required</small>
                </validation-provider>
              </b-form-group>
            </b-col>
          </b-row>
        </validation-observer>
      </tab-content>

      <!-- personal details -->
      <tab-content
          title="Info"
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
                Information
              </h5>
              <small class="text-muted" style="color: #000000d6 !important">Enter information.</small>
            </b-col>
            <b-col md="4">
              <b-form-group
                  label="Facility Name"
              >
                <b-form-input
                    v-model="dataRequest.facility_name"
                >
                </b-form-input>
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group
                  label="Doctor's Name"
              >
                <b-form-input
                    v-model="dataRequest.doctor_name"
                />
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group
                  label="Facility Phone Number"
              >
                <b-form-input
                    v-model="dataRequest.facility_phone_number"
                />
              </b-form-group>
            </b-col>
          </b-row>
        </validation-observer>
      </tab-content>

      <!-- address -->
      <tab-content
          title="Preschedule"
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
                Preschedule date
              </h5>
              <small class="text-muted"></small>
            </b-col>
            <b-col md="4">
              <b-form-group
                  label="Date of Service"
              >
                <validation-provider
                    #default="{ errors }"
                    rules="required"
                >
                  <b-form-datepicker
                      v-model="fecha"
                      :min="min"

                      locale="en"
                      placeholder="0/00/0000"
                      :state="errors.length > 0 ? false:null"
                  />
                  <small class="text-danger" v-if="errors[0]">This field is required</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group
                  label="Time of Pickup"
              >
                <validation-provider
                    #default="{ errors }"
                    rules="required"
                >
                  <b-form-timepicker
                      locale="en"
                      v-model="tiempo"
                      :state="errors.length > 0 ? false:null"
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
                  <!--                  <gmap-autocomplete class="form-control" placeholder="Birmingham" @place_changed="initMarker">-->
                  <!--                  </gmap-autocomplete>-->

                  <b-form-input
                      v-model="dataRequest.city"
                      :state="errors.length > 0 ? false:null"
                  />
                  <small class="text-danger" v-if="errors[0]">This field is required</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group
                  label="Surgery type"
              >
                <validation-provider
                    #default="{ errors }"
                    rules="required"
                >
                  <b-form-select
                      v-model="dataRequest.surgery_type"
                      :options="optionscirujia"
                      :state="errors.length > 0 ? false:null"
                  />
                  <small class="text-danger" v-if="errors[0]">This field is required</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group
                  label="Pickup address"
              >

                <gmap-autocomplete class="form-control" @place_changed="initMarkerTo">
                </gmap-autocomplete>
                <!--                  <b-form-input-->
                <!--                      v-model="dataCa.to"-->
                <!--                      placeholder="98 Borough bridge Road, Birmingham"-->
                <!--                      :state="errors.length > 0 ? false:null"-->
                <!--                  />-->
                <!--                  <small class="text-danger" v-if="errors[0]">This field is required</small>-->

              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group
                  label="Additional stop"
              >
                <v-select
                    v-model="selectcirujia"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    multiple
                    :options="option"
                    label="title"
                    placeholder="Please select some item"
                />
              </b-form-group>
            </b-col>
            <b-col md="4" v-if="show === true">
              <b-form-group
                  label="Select time"
              >
                <b-form-select
                    v-model="valorWaitAndReturn"
                    :options="listPrices"
                    placeholder="Please select the time"
                />
              </b-form-group>
            </b-col>
            <b-col md="4" v-if="show === true">
              <b-form-group
                  label="Price"
              >
                <b-form-input
                    v-model="resultValor"
                    disabled
                />
              </b-form-group>
            </b-col>
            <b-col md="4" v-if="selectcirujia">
              <b-form-group
                  label="Destination"
              >
                <gmap-autocomplete class="form-control" @place_changed="initMarkerFrom">
                </gmap-autocomplete>
                <!--                <b-form-input-->
                <!--                    id="autocompletar"-->
                <!--                    placeholder="Birmingham"-->
                <!--                    v-model="dataCa.from"-->
                <!--                />-->
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group
                  label="Appointment date"
              >
                <validation-provider
                    #default="{ errors }"
                    rules="required"
                >
                  <b-form-datepicker
                      v-model="appointmentdate"
                      :min="min"
                      :max="max"
                      locale="en"
                      placeholder="0/00/0000"
                      :state="errors.length > 0 ? false:null"
                  />
                  <small class="text-danger" v-if="errors[0]">This field is required</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group
                  label="Appointment time"
              >
                <validation-provider
                    #default="{ errors }"
                    rules="required"
                >
                  <b-form-timepicker
                      id="timepicker-placeholder"
                      placeholder="Choose a time"
                      local="en"
                      v-model="appointmenttime"
                      :state="errors.length > 0 ? false:null"
                  />
                  <small class="text-danger" v-if="errors[0]">This field is required</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group
                  label="Pickup time"
              >
                <b-form-input
                    disabled
                    v-model="dataRequest.pickup_time"
                />
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
import vSelect from 'vue-select'
import {ValidationProvider, ValidationObserver} from 'vee-validate'
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
import axios from 'axios'

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
    vSelect,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    // 15th two months prior
    const minDate = new Date(today)
    minDate.setMonth(minDate.getMonth() - 1)
    minDate.setDate(15)
    // 15th in two months
    const maxDate = new Date(today)
    maxDate.setMonth(maxDate.getMonth() + 2)
    maxDate.setDate(15)
    return {
      dir: 'ltr',
      dataCa: {},
      dataRequest: {
        booking_date: '',
        from: '',
        to: '',
        pickup_time: '',
        city: '',
        surgery_type: '',
        appoinment_datetime: '',
        from_coordinates: '',
        to_coordinates: '',
        trip_distance: 0,
        service_fee: 0,
        price: 0,
        facility_name: '',
        doctor_name: '',
        facility_phone_number: '',
        approximately_return_time: '',
        status: '',

        selfpay_id: '',
        emailpatient: '',
        seleccionstop: '',
      },
      //tomar dirección de api google
      getlocationlong: '',
      getlocationlati: '',

      getlocationFromLong: '',
      getlocationFromLati: '',

      center: {
        lat: 39.7837304,
        lng: -100.4458825
      },
      locationMarkers: [],
      locPlaces: [],
      existingPlace: {},

      lispatient: [],
      seleccionstop: '',
      idpaciente: 0,
      fecha: '',
      tiempo: '',
      appointmentdate: '',
      appointmenttime: '',
      min: minDate,
      max: maxDate,
      appointment: '',

      infoLoca: {},

      //nuevo agregado
      lastnombre: '',
      contact: '',
      getEmailPatient: '',
      getInfoPat: [],
      //fin nuevo agregado

      priceAdiciona: 0,
      valormillas: 0,
      valorWaitAndReturn: 0,
      resultValor: 0,
      show: false,
      searchWait: '',
      millas: 0.621371,
      segundos: 1800, //30 minutos
      tiempoEstimado: 0,

      selectcirujia: null,
      selected: null,
      ubicacion: '',
      option: [
        {
          title: 'One way',
        },
        {
          title: 'Roundtrip'
        },
        {
          title: 'Additional stop'
        },
      ],
      listPrices: [
        {
          text: '1 hour',
          value: 35
        },
        {
          text: '2 hours',
          value: 70
        },
        {
          text: '3 hours',
          value: 105
        },
        {
          text: '4 hours',
          value: 140
        },
        {
          text: '5 hours',
          value: 175
        },
        {
          text: '6 hours',
          value: 210
        },
        {
          text: '7 hours',
          value: 245
        },
        {
          text: '8 hours',
          value: 280
        },
        {
          text: '9 hours',
          value: 315
        },
        {
          text: '10 hours',
          value: 350
        },
        {
          text: '11 hours',
          value: 385
        },
        {
          text: '12 hours',
          value: 420
        },
        {
          text: '13 hours',
          value: 455
        },
        {
          text: '14 hours',
          value: 490
        },
        {
          text: '15 hours',
          value: 525
        },
        {
          text: '16 hours',
          value: 560
        },
        {
          text: '17 hours',
          value: 595
        },
        {
          text: '18 hours',
          value: 630
        },
        {
          text: '19 hours',
          value: 665
        },
        {
          text: '20 hours',
          value: 700
        },
        {
          text: '21 hours',
          value: 735
        },
        {
          text: '22 hours',
          value: 770
        },
        {
          text: '23 hours',
          value: 805
        },
        {
          text: '24 hours',
          value: 840
        },
      ],
      optionscirujia: [
        {
          value: null,
          text: 'Please select some item'
        },
        {
          value: 'endoscopy',
          text: 'Endoscopy'
        },
        {
          value: 'colonoscopy',
          text: 'Colonoscopy'
        },
        {
          value: 'cataract',
          text: 'Cataract surgery'
        },
        {
          value: 'dentalsurgery',
          text: 'Dental Surgery'
        },
        {
          value: 'cosmeticsurgery',
          text: 'Cosmetic Surgery'
        },
        {
          value: 'carpaltunnel',
          text: 'Carpal Tunnel'
        },
        {
          value: 'surgery',
          text: 'Surgery'
        },
        {
          value: 'paininjections',
          text: 'Pain Injections'
        },
        {
          value: 'biopsies',
          text: 'Biopsies'
        },
        {
          value: 'laparoscopic',
          text: 'Laparoscopic'
        },
        {
          value: 'sinus',
          text: 'Sinus'
        },
        {
          value: 'reconstruction',
          text: 'Reconstruction'
        },
        {
          value: 'shoulderprocedures',
          text: 'Shoulder Procedures'
        },
        {
          value: 'rology',
          text: 'Urology'
        },
        {
          value: 'softtissuerepair',
          text: 'Soft tissue repair'
        },
        {
          value: 'notdisclose',
          text: 'Prefer not to disclose'
        },
      ],
    }
  },
  watch: {
    namepatient() {
      this.valornumerico = Number(this.dataCa.namepatient)
      console.log(this.valornumerico)
    },
    selfpay_id() {
      let {
        selfpay_id,
        status
      } = this.$store.getters['Users/userData']
      this.dataCa.selfpay_id = selfpay_id
      this.dataCa.status = status
    },
    idpaciente() {
      for (let getvalor of this.lispatient) {
        this.getInfoPat = getvalor
        if (parseInt(this.idpaciente) === this.getInfoPat.id) {
          let todos = []
          todos = this.getInfoPat
          this.lastnombre = todos.lastname
          this.contact = todos.phone_number
          this.getEmailPatient = todos.email
        }
      }
    },
    valorWaitAndReturn() {
      if (this.valorWaitAndReturn !== '') {
        return this.resultValor = '$' + this.valorWaitAndReturn
      }
    },
    selectcirujia() {
      if (this.selectcirujia.length !== 0) {
        for (let searchWait of this.selectcirujia) {
          if (searchWait.title === 'Roundtrip') {
            this.show = true
          } else if (searchWait.title === 'One way') {
            this.show = false
          }
        }
      }
    },
    'dataRequest.from'() {
      if (this.dataRequest.from === '' && this.dataRequest.to === '') {
        this.callback()
      }
    },
    'dataRequest.trip_distance'() {
      if (this.dataRequest.from !== '' && this.dataRequest.to !== '' || this.dataRequest.from_coordinates !== '' && this.dataRequest.to_coordinates !== '') {
        return this.calculatePrice();
        // console.log('retornando')
        // this.valormillas = this.dataRequest.trip_distance * parseFloat(this.millas)
      }
    },
    tiempoEstimado() {
      if (this.tiempoEstimado !== 0) {
        let resultSegundos = this.tiempoEstimado + this.segundos;
        console.log(resultSegundos)
        let getMinutos = resultSegundos / 60;
        console.warn(getMinutos)

        let horas = this.tiempo.slice(0, 2);
        let minutos = this.tiempo.slice(3, 5)
        console.log(horas + '  ' + minutos)

        let horaMin = (horas * 60)
        console.log(horaMin)


        let valorEnminutos = horaMin - getMinutos;
        console.log(valorEnminutos)

        let pasar = valorEnminutos * 60


        let hour = Math.floor(pasar / 3600);
        hour = (hour < 10) ? '0' + hour : hour;
        let minute = Math.floor((pasar / 60) % 60);
        minute = (minute < 10) ? '0' + minute : minute;
        let second = pasar % 60;
        second = (second < 10) ? '0' + second : second;
        this.dataRequest.pickup_time = hour + ':' + minute + ':' + second
        console.log(this.dataRequest.pickup_time);


        let hourestimado = Math.floor(this.tiempoEstimado / 3600);
        hourestimado = (hourestimado < 10) ? '0' + hourestimado : hourestimado;
        let minutetimado = Math.floor((this.tiempoEstimado / 60) % 60);
        minutetimado = (minutetimado < 10) ? '0' + minutetimado : minutetimado;
        let secondestimado = this.tiempoEstimado % 60;
        secondestimado = (secondestimado < 10) ? '0' + secondestimado : secondestimado;
        this.dataRequest.approximately_return_time = hourestimado + ':' + minutetimado + ':' + secondestimado
        console.log(this.dataRequest.approximately_return_time);
      }
    }
  },
  computed: {
    infopersonaselec() {
      for (let lispatientKey of this.lispatient) {
        if (lispatientKey.id === lispatientKey.id) {
          let arrat = this.lispatient
          for (let ki of arrat) {
            if (ki.id === lispatientKey.id) {
              // console.log(ki.lastname)
            }
          }
        }
      }
    },
    'dataRequest.trip_distance'() {
      if (this.dataRequest.from !== '' && this.dataRequest.to !== '' || this.dataRequest.from_coordinates !== '' && this.dataRequest.to_coordinates !== '') {
        return this.calculatePrice();
      }
    }
  },
  methods: {
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
    initMarker(loc) {
      this.existingPlace = loc
      this.dataRequest.city = this.existingPlace.formatted_address
      console.log(this.dataRequest.city)
    },
    initMarkerTo(loc) {
      this.existingPlace = loc
      this.dataRequest.to = this.existingPlace.formatted_address
      // this.dataCa.to_coordinates = this.existingPlace.geometry.viewport.wb.h + ',' + this.existingPlace.geometry.viewport.Sa.h
      this.dataRequest.to_coordinates = this.existingPlace.geometry.location.lat() + ',' + this.existingPlace.geometry.location.lng()

      console.log(this.dataRequest.to)
      console.log(this.dataRequest.to_coordinates)
    },
    initMarkerFrom(loc) {
      this.existingPlace = loc
      this.dataRequest.from = this.existingPlace.formatted_address
      this.dataRequest.from_coordinates = this.existingPlace.geometry.location.lat() + ',' + this.existingPlace.geometry.location.lng()
      console.log(this.dataRequest.from)
      console.log(this.dataRequest.from_coordinates)
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
    async formRequest() {
      // const d = new Date()
      // const today = new Date(d.getFullYear(), d.getMonth(), d.getDate())
      // let h = d.getHours()
      // let m = d.getMinutes()
      // let s = d.getSeconds()
      // let time = h + ':' + m + ':' + s
      // // console.log(time)
      // // console.log(today)
      // if (this.tiempo < time) {
      //   this.$swal({
      //     title: 'Error, no puede colocar una hora menor a la actual',
      //     icon: 'error',
      //     customClass: {
      //       confirmButton: 'btn btn-primary',
      //     },
      //     buttonsStyling: false,
      //   })
      // }
      // else if (this.fecha <= today) {
      //   this.$swal({
      //     title: 'Error, no puede colocar una fecha menor o igual a la actual',
      //     icon: 'error',
      //     customClass: {
      //       confirmButton: 'btn btn-primary',
      //     },
      //     buttonsStyling: false,
      //   })
      // }
      // else {
      this.$swal({
        title: 'Please, wait...',
        didOpen: () => {
          this.$swal.showLoading()
        }
      })
      // this.calculatePrice()
      this.dataRequest.selfpay_id = parseInt(this.idpaciente)
      this.dataRequest.emailpatient = this.getInfoPat.email
      this.dataRequest.status = this.dataCa.status
      this.dataRequest.booking_date = this.fecha + ' ' + this.tiempo
      this.dataRequest.appoinment_datetime = this.appointmentdate + ' ' + this.appointmenttime
      this.dataRequest.seleccionstop = this.selectcirujia[0].title
      this.valormillas = this.dataRequest.trip_distance * parseFloat(this.millas)

      for (this.searchWait of this.selectcirujia) {
        if (parseFloat(this.valormillas) <= 160934) {
          if (this.searchWait.title === 'One way') {
            this.dataRequest.service_fee = 75
          } else if (this.searchWait.title === 'Roundtrip') {
            this.dataRequest.service_fee = 125
          }
        } else if (parseFloat(this.valormillas) >= 160934 || parseFloat(this.valormillas) <= 321869) {
          if (this.searchWait.title === 'One way') {
            this.dataRequest.service_fee = 85
          } else if (this.searchWait.title === 'Roundtrip') {
            this.dataRequest.service_fee = 135
          }
        } else {
          console.log('falló')
        }
      }

      if (this.searchWait.title === 'Roundtrip') {
        this.dataRequest.price = this.dataRequest.service_fee + this.valorWaitAndReturn + Math.round(this.valormillas)
        console.warn('precio ' + this.dataRequest.service_fee + this.valorWaitAndReturn + Math.round(this.valormillas))
      } else if (this.searchWait.title === 'One way') {
        this.dataRequest.price = this.dataRequest.service_fee + Math.round(this.valormillas)
        console.warn('precio ' + this.dataRequest.service_fee + Math.round(this.valormillas))
      }


      await this.$http.post('ca/panel/booking/add?clientType=reservationCode', this.dataRequest)
          .then((response) => {
            if (response.data.status === 200) {
              this.$swal({
                title: response.data.message,
                icon: 'success',
                customClass: {
                  confirmButton: 'btn btn-primary',
                },
                buttonsStyling: false,
              })
              this.$refs.requestTrip.reset()
              //clear form
              this.lastnombre = ''
              this.contact = ''
              this.getEmailPatient = ''
              this.dataRequest.facility_name = ''
              this.dataRequest.doctor_name = ''
              this.dataRequest.facility_phone_number = ''
              this.fecha = ''
              this.tiempo = ''
              this.dataRequest.city = ''
              this.dataRequest.surgery_type = ''
              this.selectcirujia = ''
              this.valorWaitAndReturn = ''
              this.resultValor = ''
              this.appointmentdate = ''
              this.appointmenttime = ''

              this.dataRequest.booking_date = ''
              this.dataRequest.from = ''
              this.dataRequest.to = ''
              this.dataRequest.pickup_time = ''

              this.dataRequest.appoinment_datetime = ''
              this.dataRequest.selfpay_id = ''
              this.dataRequest.from_coordinates = ''
              this.dataRequest.to_coordinates = ''
              this.seleccionstop = ''
            } else {
              this.$swal({
                title: response.data.message,
                icon: 'error',
                customClass: {
                  confirmButton: 'btn btn-primary',
                },
                buttonsStyling: false,
              })
              console.log('cumplido' + 5)
              // console.log(res.data.data)
            }
          })
          .catch((error) => {
            this.$swal({
              title: error.response.data.data,
              icon: 'error',
              customClass: {
                confirmButton: 'btn btn-primary',
              },
              buttonsStyling: false,
            })
            console.log('no cumplido' + 5)
          })
      // }

    },
    getInfo() {
      this.dataCa = this.$store.getters['Users/userData'].user
    },
    calculatePrice() {

      let searchComa = this.dataRequest.to_coordinates.indexOf(',')
      console.log(searchComa)
      let latud = this.dataRequest.to_coordinates.substring(0, searchComa)
      console.warn(latud)
      let longi = this.dataRequest.to_coordinates.substring(searchComa + 1, this.dataRequest.to_coordinates.length)
      console.warn(longi)

      //longitúd y latitúd from
      let searchComaFrom = this.dataRequest.from_coordinates.indexOf(',')
      console.log(searchComaFrom)
      let latudFrom = this.dataRequest.from_coordinates.substring(0, searchComaFrom)
      console.warn(latudFrom)
      let longiFrom = this.dataRequest.from_coordinates.substring(searchComaFrom + 1, this.dataRequest.from_coordinates.length)
      console.warn(longiFrom)

      let origin1 = new google.maps.LatLng(latud, longi)
      let origin2 = this.dataRequest.to
      let destinationA = this.dataRequest.from
      let destinationB = new google.maps.LatLng(latudFrom, longiFrom)

      let service = new google.maps.DistanceMatrixService()
      service.getDistanceMatrix(
          {
            origins: [origin1, origin2],
            destinations: [destinationA, destinationB],
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false,
          }, this.callback)
    },
    callback(response, status) {
      this.dataRequest.trip_distance = response.rows[0].elements[0].distance.value
      this.tiempoEstimado = response.rows[0].elements[0].duration.value
      console.log(status)
    },
  },
  beforeMount() {
    this.getInfo()
  },
  mounted() {
    this.locateGeoLocation()
    this.$http.get(`ca/${this.$store.getters['Users/userData'].user.corporate_account.id}/panel/client/search`)
        .then((res) => {
          if (res.data.message) {
            this.lispatient = res.data.data
          }
        })
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
