<template>
  <div v-if="dataProvider !== ''">
    <!-- form Admin -->
    <b-form>
      <b-row>
        <!-- Field: Username -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Name patient"
          >
            <b-form-input
                disabled
                v-model="dataProvider.self_pay.name + ' '+ dataProvider.self_pay.lastname "
            />
          </b-form-group>
        </b-col>

        <!-- Field: Full Name -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Booking date"
          >
            <b-form-input
                disabled
                v-model="dataProvider.booking_date"
            />
          </b-form-group>
        </b-col>
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Pickup time"
          >
            <b-form-input
                disabled
                v-model="dataProvider.pickup_time"
            />
          </b-form-group>
        </b-col>
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="City"
          >
            <b-form-input
                disabled
                v-model="dataProvider.city"
            />
          </b-form-group>
        </b-col>

      </b-row>
    </b-form>

    <!-- form corporate -->
    <b-form>
      <b-row>
        <!-- Field: Username -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Surgery type"

          >
            <b-form-input
                v-model="dataProvider.surgery_type"
                disabled

            />
          </b-form-group>
        </b-col>

        <!-- Field: Full Name -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Appoinment datetime"
          >
            <b-form-input
                disabled
                v-model="dataProvider.appoinment_datetime"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Email -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="From"
          >
            <b-form-textarea
                v-model="reserva.from.from"
                disabled
            />
          </b-form-group>
        </b-col>
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="To"
          >
            <b-form-textarea
                v-model="reserva.to.from"
                disabled
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>


    <b-form>
      <b-row>
        <!-- Field: Username -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Trip start"

          >
            <b-form-input
                v-model="dataProvider.trip_start"
                disabled

            />
          </b-form-group>
        </b-col>

        <!-- Field: Full Name -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Trip end"
          >
            <b-form-input
                disabled
                v-model="dataProvider.trip_end"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <hr>

    </b-form>
    <b-form>
      <b-row>
        <!-- Field: Username -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Facility Name"

          >
            <b-form-input
                v-model="dataProvider.facility_name"
                disabled

            />
          </b-form-group>
        </b-col>

        <!-- Field: Full Name -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Doctor's Name"
          >
            <b-form-input
                disabled
                v-model="dataProvider.doctor_name"
            />
          </b-form-group>
        </b-col>
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label=" Facility Phone Number "
          >
            <b-form-input
                disabled
                v-model="dataProvider.facility_phone_number"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <hr>

    </b-form>

    <!--    <div>{{ formatToService() }}</div>-->
    <!-- ADDITIONAL STOP  -->
    <template v-if="dataProvider.additional_service.length > 0">

      <b-form v-for="(adicional, key, index) in dataProvider.additional_service" :key="index">
        <template>
          <div class="d-flex align-items-center mb-2">
            <h3 class="circle-number-additional mr-1">{{ key + 1 }}</h3>
            <h3>Service: {{ adicional.service }} </h3>
          </div>
          <b-row>
            <b-col
                cols="12"
                md="3"
            >
              <b-form-group
                  label="To"
              >
                <b-form-input

                    disabled
                    v-model="aditionalStop.to"
                >
                  <p>{{ formatToService(adicional.to) }}</p>
                </b-form-input>
              </b-form-group>
            </b-col>
            <b-col
                cols="12"
                md="3"
            >
              <b-form-group
                  label="Time"
              >
                <template>
                  <b-input-group>
                    <b-form-input v-model="valonuevo.time" disabled placeholder="Button on right"/>
                    <b-input-group-append>
                      <b-button
                          v-if="adicional.service === 'Wait/Return Fee'"
                          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                          v-b-modal.modal-1
                          variant="outline-primary"
                      >
                        Edit
                      </b-button>
                    </b-input-group-append>
                  </b-input-group>
                </template>
              </b-form-group>
            </b-col>
            <b-col
                cols="12"
                md="3"
            >
              <b-form-group
                  label="Price"
              >
                <b-form-input
                    disabled
                    v-model="'$ ' + adicional.price"
                />
              </b-form-group>
            </b-col>
          </b-row>
          <hr>
        </template>
      </b-form>


      <b-modal
          id="modal-1"
          title="Edit time"
          hide-footer
      >
        <b-form>
          <b-form-group>
            <label for="email">Time:</label>
            <b-form-input
                v-model="valonuevo.time"
            />
          </b-form-group>

          <b-button variant="primary" @click="sendChangeTime">Save change</b-button>
        </b-form>
      </b-modal>
    </template>
  </div>
</template>

<script>
import {
  BButton,
  BMedia,
  BAvatar,
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BFormTextarea,
  BForm,
  BTable,
  BCard,
  BCardText,
  BCardHeader,
  BCardTitle,
  BFormCheckbox,
  BFormSelect,
  BModal,
  BInputGroup,
  BInputGroupAppend,
  VBTooltip,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import { mapGetters } from 'vuex'
import Ripple from 'vue-ripple-directive'

export default {
  name: 'DetailsInfoService',
  components: {
    BButton,
    BMedia,
    BAvatar,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormTextarea,
    BForm,
    BTable,
    BCard,
    BCardText,
    BCardHeader,
    BCardTitle,
    BFormCheckbox,
    BFormSelect,
    BModal,
    BInputGroup,
    BInputGroupAppend,
    vSelect,
  },
  directives: {
    Ripple,
  },
  props: {
    dataService: {},
    ejecutar: {
      type: Boolean
    },
  },
  data() {
    return {
      reserva: {
        from: '',
        to: {
          from: '',
        },
      },
      aditionalStop: {
        to: '',
        valors: ''
      },
      listAditional: {},
      inhabilitar: true,
      savedInfo: false,
      valonuevo: '',
      adicional: ''

    }
  },
  computed: {
    ...mapGetters({
      dataProvider: 'Users/usersData'
    }),
  },
  methods: {
    formatToService(items) {
      return this.aditionalStop = Object.assign(JSON.parse(items))
    },
    getAdicional() {
      this.listAditional = this.$store.getters['Users/usersData'].additional_service
      for (let i = 0; i < this.listAditional.length; i++) {
        let hola = i
        console.log(hola)
        if (this.listAditional[i].service === 'Wait/Return Fee') {
          this.valonuevo = this.listAditional[i]
          console.log(this.valonuevo)
          console.warn('bbe')
        }
      }

    },
    sendChangeTime() {
      if (this.valonuevo.time === '') {
        this.$swal({
          title: 'Empty field' + '\n' +
              ' Fill in correctly',
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
        let idBooking = this.$route.params.id
        this.$http.post(`admin/panel/booking/${idBooking}/update-return-time`, {
          'return_time': this.valonuevo.time
        })
            .then((response) => {
              this.$swal({
                title: response.data.message,
                icon: 'success',
                customClass: {
                  confirmButton: 'btn btn-primary',
                },
                buttonsStyling: false,
              })
            })
            .catch((error) => {
              this.$swal({
                title: error.response.data.message,
                icon: 'error',
                customClass: {
                  confirmButton: 'btn btn-primary',
                },
                buttonsStyling: false,
              })
            })
      }
    }
  },
  beforeUpdate() {
    this.reserva.from = JSON.parse(this.dataService.from)
    this.reserva.to = JSON.parse(this.dataService.to)
  },
  mounted() {
    this.listAditional = this.$store.getters['Users/usersData'].additional_service
    this.getAdicional()
  }

}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';

.circle-number-additional {
  background-color: #332b7b;
  padding: 5px 12px;
  border-radius: 16px;
  color: white;

}
</style>
