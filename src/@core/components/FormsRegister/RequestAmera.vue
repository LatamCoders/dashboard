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
                    placeholder="John"
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
                      v-model="lispatient[0].phone_number"
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
                      v-model="lispatient[0].email"
                      placeholder="Doe@gmail.com"
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
                      :max="max"
                      locale="en"
                      placeholder="8/01/2022"
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
                  label="Time of Appt"
              >
                <validation-provider
                    #default="{ errors }"
                    rules="required"
                >
                  <b-form-timepicker
                      locale="en"
                      placeholder="658921"
                      :state="errors.length > 0 ? false:null"
                      v-model="dataCa.appoinment_datetime"
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
                      placeholder="Birmingham"
                      v-model="dataCa.city"
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
                      v-model="dataCa.surgery_type"
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
                <validation-provider
                    #default="{ errors }"
                    rules="required"
                >
                  <b-form-input
                      v-model="dataCa.to"
                      placeholder="98 Borough bridge Road, Birmingham"
                      :state="errors.length > 0 ? false:null"
                  />
                  <small class="text-danger" v-if="errors[0]">This field is required</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group
                  label="Additional stop"
              >
                <v-select
                    v-model="seleccionstop"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    multiple
                    :options="option"
                    label="title"
                    placeholder="Please select some item"
                />
              </b-form-group>
            </b-col>
            <b-col md="4" v-if="seleccionstop">
              <b-form-group
                  label="Destiny"
              >
                <b-form-input
                    placeholder="Birmingham"
                    v-model="dataCa.from"
                />
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
                      placeholder="8/01/2022"
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
          </b-row>
        </validation-observer>
      </tab-content>
    </form-wizard>

  </div>
</template>

<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import vSelect from 'vue-select'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
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
// import vSelect from 'vue-select'

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
    minDate.setMonth(minDate.getMonth() - 2)
    minDate.setDate(15)
    // 15th in two months
    const maxDate = new Date(today)
    maxDate.setMonth(maxDate.getMonth() + 2)
    maxDate.setDate(15)
    return {
      dir: 'ltr',
      dataCa: {
        booking_date: '',
        from: '',
        to: '',
        status: '',
        pickup_time: '',
        city: '',
        surgery_type: '',
        appoinment_datetime: '',
        selfpay_id: '',
        from_coordinates: '',
        to_coordinates: '',

        emailpatient: '',
        contac_number: '',
      },
      lispatient: [],
      seleccionstop: '',
      idpaciente: '',
      fecha: '',
      tiempo: '',
      appointmentdate: '',
      appointmenttime: '',
      min: minDate,
      max: maxDate,
      appointment: '',

      //nuevo agregado
      lastnombre: '',
      getid: 0,
      compararid: '',
      nuevoarr: '',
      objetoB: [],
      encontrado: '',
      //fin nuevo agregado

      selectcirujia: null,
      selected: null,
      ubicacion: '',
      selectedContry: 'select_value',
      selectedLanguage: 'nothing_selected',
      option: [
        { title: 'Wait and return' },
        { title: 'Pharmacy stop' },
        { title: 'Additional stop' },
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
    formRequest() {
      this.dataCa.selfpay_id = Number(this.idpaciente)
      this.dataCa.booking_date = this.fecha + ' ' + this.tiempo
      this.dataCa.appoinment_datetime = this.appointmentdate + ' ' + this.appointmenttime
      this.$swal({
        title: 'Please, wait...',
        didOpen: () => {
          this.$swal.showLoading()
        }
      })

      // this.dataCa.appoinment_datetime = this.
      console.log(this.dataCa)
      // this.$http.post('ca/panel/booking/add', this.dataCa).then((response) =>{
      //   if (response.data.status === 200) {
      //     this.$swal({
      //       title: response.data.message,
      //       icon: 'success',
      //       customClass: {
      //         confirmButton: 'btn btn-primary',
      //       },
      //       buttonsStyling: false,
      //     })
      //
      //     //clear form
      //   } else {
      //     this.$swal({
      //       title: response.data.message,
      //       icon: 'error',
      //       customClass: {
      //         confirmButton: 'btn btn-primary',
      //       },
      //       buttonsStyling: false,
      //     })
      //
      //     // console.log(res.data.data)
      //   }
      // })
    },
  },
  computed: {
    infopersonaselec() {
      // let valor;
      // for ( valor in this.lispatient) {
      //   if(valor.id === this.idpaciente){
      //     console.log('hola')
      //   }else {
      //     console.log('nada')
      //   }
      // }
      // console.log([this.lispatient])
      // for(let i of this.lispatient ){
      //   console.log(i)
      // }
      for (let lispatientKey of this.lispatient) {
        console.log(lispatientKey.id)
        if (lispatientKey.id === lispatientKey.id){
          let arrat = this.lispatient
          console.log(arrat)
          for (let ki of arrat){
            console.log(ki.id)
            if(ki.id === lispatientKey.id){
              console.log(ki.lastname)
            }
            // let otro = arrat.indexOf(lispatientKey.id)
            // console.log(otro)
          }
          console.log(arrat)
        }
      }
      // for (let argument of this.lispatient) {
      //   let prueba = this.lispatient.indexOf(parseInt(this.idpaciente))
      //   console.log(prueba)
      //
      //   console.log(argument.lastname)
      // }

      // for(let i = 0; i < this.lispatient.length; i++){
      //   for (let j of this.lispatient[i].lastname) {
      //     console.log({ j })
      //   }
      //   // console.log(i)
      //   for(let valor = 0; valor < this.lispatient[i].lastname; valor++) {
      //     console.log(valor)
      //   }
      //   // if (i.id === this.idpaciente){
      //   //   console.log(i.lastname)
      //   // }
      //   // valor = this.lispatient.indexOf(i)
      //   console.log(i)
      // }
      // valor =  this.lispatient.reduce(c => c.lastname)
      //  console.log([valor])
      //  valor = this.lispatient.indexOf(this.idpaciente)
      //  console.log(valor)
      //  valor = Object.assign(this.lispatient)
      //  console.log(valor)
      //  const obj = {...this.lispatient};
      //  console.log(obj);
    }
  },
  watch: {
    namepatient() {
      this.valornumerico = Number(this.dataCa.namepatient)
      console.log(this.valornumerico)
    },
    idpaciente(){
      //encontrar el id en la lista de pacientes
      for (this.getid in this.lispatient) {
        this.objetoB.push(parseInt(this.getid.id))
        // this.objetoB.ides = this.getid.id;
        console.log(this.objetoB)
      }
      //encontrar posicion de la persona seleccionada
      for (let animal of this.objetoB){
        this.encontrado = this.objetoB.indexOf(parseInt(this.idpaciente))
        console.log(this.encontrado)
      }
      //validar si el id encontrado y el seleccionado son los mismos
      if (parseInt(this.getid.id) === parseInt(this.idpaciente)){
       this.nuevoarr = this.lispatient
        console.log(this.nuevoarr)
        for (this.compararid of this.nuevoarr){
          console.log(this.compararid.id)
          if(this.compararid.id === this.getid.id ){
            this.lastnombre = this.compararid.lastname;
            console.log(this.compararid.lastname)
          }
          // let otro = arrat.indexOf(lispatientKey.id)
          // console.log(otro)
        }
      }
    }

  },
  beforeMount() {
    this.dataCa = this.$store.getters['Users/userData'].user
  },
  mounted() {
    // this.lispatient =
    this.$http.get(`ca/${this.$store.getters['Users/userData'].user.corporate_account.id}/panel/client/search`)
        .then((res) => {
          if (res.data.message) {
            this.lispatient = res.data.data
            console.log(this.lispatient)
          }
        })

  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
