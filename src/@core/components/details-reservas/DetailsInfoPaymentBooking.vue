<template>
  <div v-if="chargePayment !== ''">
    <!-- form Admin -->
    <b-form>
      <b-row>
        <!-- Field: Username -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Name"
          >
            <b-form-input
                disabled
                v-model="chargePayment.billing_details.name"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Full Name -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Email"
          >
            <b-form-input
                disabled
                v-model="chargePayment.billing_details.email"
            />
          </b-form-group>
        </b-col>
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Phone"
          >
            <b-form-input
                disabled
                v-model="chargePayment.billing_details.phone"
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
                v-model="chargePayment.billing_details.address.city"
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
              label="Country"
          >
            <b-form-input
                disabled
                v-model="chargePayment.billing_details.address.country"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Full Name -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Postal code"
          >
            <b-form-input
                disabled
                v-model="chargePayment.billing_details.address.postal_code"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Email -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Description"
          >
            <b-form-textarea
                disabled
                v-model="chargePayment.description"
            />
          </b-form-group>
        </b-col>
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Destination"
          >
            <b-form-textarea
                disabled
                v-model="chargePayment.destination"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>
    <hr>

    <b-form>
      <div class="d-flex align-items-center mb-2">
        <h3>Payment method </h3>
      </div>
      <b-row>
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Card"
          >
            <b-form-input
                v-model="chargePayment.payment_method_details.card.brand"
                disabled
            />
          </b-form-group>
        </b-col>

        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Funding"
          >
            <b-form-input
                disabled
                v-model="chargePayment.payment_method_details.card.funding"
            />
          </b-form-group>
        </b-col>

        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Expiration month"
          >
            <b-form-input
                disabled
                v-model="chargePayment.payment_method_details.card.exp_month"

            />
          </b-form-group>
        </b-col>
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Expiration year"
          >
            <b-form-input
                disabled
                v-model="chargePayment.payment_method_details.card.exp_year"
            />
          </b-form-group>
        </b-col>
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Number credit card"
          >
            <b-form-input
                disabled
                v-model="'*******'+ chargePayment.payment_method_details.card.last4"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <hr>
    </b-form>
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
  BCardHeader,
  BCardTitle,
  BFormCheckbox,
  BFormSelect,
  VBTooltip,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
// import {mapGetters} from 'vuex'

export default {
  name: 'DetailsInfoPaymentBooking',
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
    BCardHeader,
    BCardTitle,
    BFormCheckbox,
    BFormSelect,
    vSelect,
  },
  data() {
    return {
      chargePayment: {},
      listReservas: {},
      reservaId: '',
    }
  },
  // computed: {
  //   ...mapGetters({
  //     dataProvider: 'Users/usersData'
  //   }),
  // },
  methods: {
    getChargePayments() {
      this.$swal({
        title: 'Please, wait...',
        didOpen: () => {
          this.$swal.showLoading()
        },
      })
      this.reservaId = this.$route.params.id;
      this.$http.get(`admin/panel/booking/${this.reservaId}/info`).then((response) => {
        this.listReservas = response.data.data;
        console.log(this.listReservas.charge_id)
        this.$http.get(`admin/panel/charges/${this.listReservas.charge_id}/show`)
            .then((response) => {
              this.chargePayment = response.data.data
              this.$swal.close();
              // console.log(this.chargePayment)
            }).catch((error) => {
          console.log(error)
        })
      }).catch((error) => {
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
  created() {
    this.getChargePayments()
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
