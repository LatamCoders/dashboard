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
<!--                  <p>{{ formatToService(adicional.to) }}</p>-->
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
                    <b-form-input v-model="adicional.time" disabled/>
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
            <label>Time:</label>
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
      adicional: '',
      reservaId: 0,
      listReservas: {},
      editvalor: '',
    }
  },
  computed: {
    ...mapGetters({
      dataProvider: 'Users/usersData'
    }),
  },
  // watch: {
  //   'reserva.from'() {
  //     if (this.reserva.from === '') {
  //       this.reserva.from = JSON.parse(this.dataProvider.from)
  //       this.reserva.to = JSON.parse(this.dataProvider.to)
  //     }
  //   },
  // },
  methods: {
    formatToService(items) {
      return this.aditionalStop = Object.assign(JSON.parse(items))
    },
    getAdicional() {
      for (let i = 0; i < this.listAditional.length; i++) {
        if (this.listAditional[i].service === 'Wait/Return Fee') {
          this.valonuevo = this.listAditional[i]
          console.log(this.valonuevo)
          return;
        }
      }
    },
    getInfoReserva() {
      this.$swal({
        title: 'Please, wait...',
        didOpen: () => {
          this.$swal.showLoading()
        },
      })
      this.reservaId = this.$route.params.id
      this.$http.get(`admin/panel/booking/${this.reservaId}/info`)
          .then((response) => {
            this.listReservas = response.data.data
            this.reserva.from = JSON.parse(this.listReservas.from)
            this.reserva.to = JSON.parse(this.listReservas.to)
            this.listAditional = this.listReservas.additional_service
            this.getAdicional()
            this.$swal.close()
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
              }).then((result) => {
                if (result.isConfirmed) {
                  this.getInfoReserva()
                  this.$router.go(0)
                }
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
  mounted() {
    this.getInfoReserva()
  },
  // created() {
  //   this.getAdicional()
  // }

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
