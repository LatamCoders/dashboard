<template>
  <div class="cols-12 col-xl-12 "
       style="margin: 0 auto"
       v-if="infoPatient !== ''"
  >
    <form-wizard
        color="#7367F0"
        :title="null"
        :subtitle="null"
        finish-button-text="Assign"
        back-button-text="Previous"
        class="steps-transparent mb-3 d-lg-flex d-xl-flex d-md-flex justify-content-center flex-xl-column formcreatepatient"
        @on-complete="formSubmitted"
        style="background-color: #fff"
        ref="assignDriver"
    >
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
            <small class="text-muted" style="color: #000000d6 !important">Enter patient information.</small>
          </b-col>
          <b-col md="4">
            <b-form-group
                label="Name"
            >
              <b-form-input
                  v-model="infoPatient.self_pay.name"
                  disabled
                  style="font-weight: bold"
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
                label="Last Name"
            >
              <b-form-input
                  v-model="infoPatient.self_pay.lastname"
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
                  v-model="infoPatient.self_pay.phone_number"
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
                  v-model="infoPatient.self_pay.email"
                  disabled
                  style="font-weight: bold"
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
          <b-col md="4">
            <b-form-group
                label="Date of Service and Hour"
            >
              <b-form-input
                  v-model="infoPatient.booking_date"
                  disabled
                  style="font-weight: bold"
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
                label="Time of Pickup"
            >
              <b-form-input
                  v-model="infoPatient.pickup_time"
                  disabled
                  style="font-weight: bold"
              />
            </b-form-group>
          </b-col>
          <!--          <b-col md="4">-->
          <!--            <b-form-group-->
          <!--                label="Time of Appt"-->
          <!--            >-->
          <!--              <b-form-input-->
          <!--                  value="658921"-->
          <!--                  disabled-->
          <!--                  style="font-weight: bold"-->
          <!--              />-->
          <!--            </b-form-group>-->
          <!--          </b-col>-->
          <b-col md="4">
            <b-form-group
                label="City"
            >
              <b-form-input
                  v-model="infoPatient.city"
                  disabled
                  style="font-weight: bold"
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
                label="Surgery type"
            >
              <b-form-input
                  disabled
                  style="font-weight: bold"
                  v-model="infoPatient.surgery_type"
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
                label="Pickup address"
            >
              <b-form-input
                  v-model="reserva.from"
                  disabled
                  style="font-weight: bold"
              />
            </b-form-group>
          </b-col>
          <b-col md="4" v-if="infoPatient.additional_service.length > 0">
            <b-form-group

                label="Additional stop"
            >
              <b-form-input
                  style="font-weight: bold"
                  value="Wait and return"
                  disabled
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
                label="Destiny"
            >
              <b-form-input
                  value="Birmingham"
                  disabled
                  style="font-weight: bold"
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
                label="Appointment date and time"
            >
              <b-form-input
                  v-model="infoPatient.appoinment_datetime"
                  disabled
                  style="font-weight: bold"
              />
            </b-form-group>
          </b-col>
          <!--          <b-col md="4">-->
          <!--            <b-form-group-->
          <!--                label="Appointment time"-->
          <!--            >-->
          <!--              <b-form-input-->
          <!--                  value="08:00"-->
          <!--                  disabled-->
          <!--                  style="font-weight: bold"-->
          <!--              />-->
          <!--            </b-form-group>-->
          <!--          </b-col>-->

        </b-row>
      </tab-content>

      <!-- social link -->
      <tab-content
          title="Assign Driver"
          icon=""
      >
        <b-row>
          <b-col
              cols="12"
              class="mb-2"
          >
            <h5 class="mb-0">
              Information driver
            </h5>
            <!--            <small class="text-muted">Enter Your Social Links</small>-->
          </b-col>
          <b-col md="6">
            <span style="display: block; margin-bottom: calc(0.438rem + 1px)">Select a driver</span>
            <v-select
                v-model="idDriver"
                label="name"
                :options="listDrivers"
                :reduce="c => `${c.driver_id}`"
            >

              <template #option="{name, lastname}">
                {{ name }} {{ lastname }}
              </template>
              <!--              <template #option="{name, lastname}">-->
              <!--                {{ name }} {{ lastname }}-->
              <!--              </template>-->
            </v-select>

          </b-col>
          <b-col md="6">
            <b-form-group
                label="Lastname"
            >
              <b-form-input
                  v-model="drivers.lastname"
                  disabled
                  style="font-weight: bold"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
                label="Email"
            >
              <b-form-input
                  value="jeanfrank@gmail.com"
                  v-model="drivers.email"
                  disabled
                  style="font-weight: bold"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
                label="Phone number"
            >
              <b-form-input
                  v-model="drivers.phone_number"
                  value="32225544"
                  disabled
                  style="font-weight: bold"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
                label="Model vehicle"
            >
              <b-form-input
                  v-model="modelVehicle"
                  disabled
                  style="font-weight: bold"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
                v-if="drivers !== null"
                label="Plate number"
            >
              <b-form-input
                  v-model="carPlatenuber"
                  disabled
                  style="font-weight: bold"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>
    </form-wizard>

  </div>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import vSelect from 'vue-select'


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
  BInputGroupPrepend,
  BInputGroup,
} from 'bootstrap-vue'
// import { codeIconInfo } from './code'
// import vSelect from 'vue-select'

export default {
  name: 'DetailsAssignDriver',
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
    BInputGroup,
    BInputGroupPrepend,
    vSelect,
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
      dir: 'ltr',
      min: minDate,
      max: maxDate,
      // selected: null,
      option: [
        {title: 'Wait and return'},
        {title: 'Pharmacy stop'},
        {title: 'Additional stop'},
      ],

      listDrivers: [],
      idDriver: '',
      drivers: {},
      carPlatenuber: '',
      modelVehicle: '',
      iterar: 0,
      infoPatient: {},
      reserva: {
        from: '',
        to: {
          from: '',
        },
      },
    }
  },
  watch: {
    idDriver() {
      if (this.idDriver !== '') {
        this.getallDriver()
      }
    }
  },
  methods: {
    formSubmitted() {

      if (this.infoPatient.driver !== null) {
        this.$swal({
          title: 'This reservation already has an assigned driver',
          icon: 'error',
          customClass: {
            confirmButton: 'btn btn-primary',
          },
          buttonsStyling: false,
        }).then((result) => {
          if (result.isConfirmed) {
            this.$router.push({name: 'assign-driver'})
          }
        })
      } else if (this.idDriver === '') {
        this.$swal({
          title: 'Select a driver to continue',
          icon: 'error',
          customClass: {
            confirmButton: 'btn btn-primary',
          },
          buttonsStyling: false,
        })
      } else {
        this.$swal({
          title: 'Please, wait...',
          didOpen: () => {
            this.$swal.showLoading()
          },

        })
        this.$http.post(`admin/panel/booking/${this.infoPatient.id}/assignDriver/${this.idDriver}`)
            .then((response) => {
              this.$swal({
                title: response.data.message,
                icon: 'success',
                customClass: {
                  confirmButton: 'btn btn-primary',
                },
                buttonsStyling: false,
              })
              this.$refs.assignDriver.reset()

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
            })
      }

    },
    getDrivers() {
      this.$http.get(`admin/panel/driver/list`)
          .then((response) => {
            this.listDrivers = response.data.data
          })
          .catch((res) => console.log(res.data))
    },
    getallDriver() {
      // iterar el listado de driver para saber cual fue el seleccionado
      for (this.iterar of this.listDrivers) {
        // evaluar si el seleccionado coincide con uno de la lista
        if (this.idDriver === this.iterar.driver_id) {
          // si coincide guardar el resultado y mostrar la información de los datos del vehiculo
          this.drivers = this.iterar;
          this.modelVehicle = this.drivers.vehicle.model;
          this.carPlatenuber = this.drivers.vehicle.plate_number;
        }
      }
    },

    getPatients() {
      for (let infopaciente of this.$store.getters['Users/usersData']) {
        if (parseInt(this.$route.params.id) === infopaciente.id) {
          this.infoPatient = infopaciente;
        }
      }
    }

  },
  computed: {},
  created() {
    this.getDrivers()
  },
  beforeUpdate() {
    this.reserva = JSON.parse(this.infoPatient.from);
    this.reserva.to = JSON.parse(this.infoPatient.to);
    // this.getServiceAditional()
  },
  mounted() {
    this.getPatients()
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';

.urlPagina {
  text-decoration: none;
}

.urlPagina:hover {
  background: linear-gradient(118deg, #7367f0, rgba(115, 103, 240, 0.7)) !important;
  color: #fff;
}

.list-group-item:hover {
  background: linear-gradient(118deg, #7367f0, rgba(115, 103, 240, 0.7)) !important;
  color: #fff !important;
}

.urlPagina::before {
  background-color: currentColor !important;
  bottom: 0;
  content: "";
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}

.box {
  box-shadow: 0px 14px 20px 0px rgba(143, 143, 143, 0.2) !important;
}
</style>
