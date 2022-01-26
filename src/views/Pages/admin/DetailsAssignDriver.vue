<template>
  <div class="cols-12 col-xl-12 "
       style="margin: 0 auto">
    <form-wizard
        color="#7367F0"
        :title="null"
        :subtitle="null"
        finish-button-text="Assign"
        back-button-text="Previous"
        class="steps-transparent mb-3 d-lg-flex d-xl-flex d-md-flex justify-content-center flex-xl-column formcreatepatient"
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
          <b-col md="4">
            <b-form-group
                label="Name"
            >
              <b-form-input
                  value="Orlando"
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
                  value="Health"
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
                  value="231217848"
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
            <small class="text-muted" style="color: #000000d6 !important">Enter patient information.</small>
          </b-col>
          <b-col md="4">
            <b-form-group
                label="Name"
            >
              <b-form-input
                  value="John"
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
                  value="John"
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
                  value="15555555554"
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
                  value="Doe@gmail.com"
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
                label="Date of Service"
            >
              <b-form-input
                  v-model="value"
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
                  value="98 Borough bridge Road, Birmingham"
                  disabled
                  style="font-weight: bold"
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
                label="Time of Appt"
            >
              <b-form-input
                  value="658921"
                  disabled
                  style="font-weight: bold"
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
                label="City"
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
                label="Surgery type"
            >
              <b-form-input
                  disabled
                  style="font-weight: bold"
                  value="Endoscopy"
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
                label="Pickup address"
            >
              <b-form-input
                  value="98 Borough bridge Road, Birmingham"
                  disabled
                  style="font-weight: bold"
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
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
          <b-col md="4" v-if="seleccionstop">
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
                label="Appointment date"
            >
              <b-form-input
                  value="8/01/2022"
                  disabled
                  style="font-weight: bold"
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
                label="Appointment time"
            >
              <b-form-input
                  value="08:00"
                  disabled
                  style="font-weight: bold"
              />
            </b-form-group>
          </b-col>

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
            <b-input-group class="input-group-merge"
                label=""
            >
              <b-input-group-prepend is-text>
                <feather-icon icon="SearchIcon"/>
              </b-input-group-prepend>
              <b-form-input
                  type="search"
                  placeholder="Jean frank"
                  v-model="buscar"
              />
            </b-input-group>
          </b-col>
          <b-col md="6">
            <b-form-group
                label="Selected driver"
            >
              <b-form-input
                  placeholder="Jean frank"
                  v-model="escogido"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
                label="Email"
            >
              <b-form-input
                  value="jeanfrank@gmail.com"
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
                  value="Corolla"
                  disabled
                  style="font-weight: bold"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
                label="Plate number"
            >
              <b-form-input
                  value="n25154s"
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
      seleccionstop: '',
      value: '03/08/2022',
      min: minDate,
      max: maxDate,
      appointment: '',
      appointmentdate: '',
      appointmenttime: '',
      selectcirujia: null,
      selected: null,
      ubicacion: '',
      selectedContry: 'select_value',
      selectedLanguage: 'nothing_selected',
      option: [
        {title: 'Wait and return'},
        {title: 'Pharmacy stop'},
        {title: 'Additional stop'},
      ],
      buscar: '',
      escogido: this.buscar,
      listado: [
        {
          id: "1",
          nombre: "Sandshrew",
          fortaleza: "Veneno",
          debilidad: "Agua",
          tipo: "Tierra",
          img: "a.png"
        },
        {
          id: "2",
          nombre: "Squirtle",
          fortaleza: "Fuego",
          debilidad: "Electricidad",
          tipo: "Agua",
          img: "b.png"
        },
        {
          id: "3",
          nombre: "Charmander",
          fortaleza: "Fuego",
          debilidad: "Agua",
          tipo: "Fuego",
          img: "c.png"
        },
        {
          id: "4",
          nombre: "Caterpie",
          fortaleza: "Planta",
          debilidad: "Fuego",
          tipo: "Bicho",
          img: "d.png"
        },
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
  computed: {
    items() {
      return this.listado.filter(item => {
        return item.nombre.toLowerCase().includes(this.buscar.toLowerCase());
      });
    },
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>