<template>
  <div>


    <div v-if="infoPayment !== null">
      <!-- Header: Personal Info -->
      <div class="d-flex">
        <feather-icon
            icon="CreditCardIcon"
            size="19"
        />
        <h4 class="mb-0 ml-50">
          Payment method
        </h4>
      </div>

      <b-form class="mt-1">
        <b-row>
          <b-col
              cols="12"
              md="6"
              lg="4"
          >
            <b-form-group
                label="Name on Credit Card"
            >
              <b-form-input
                  v-model="paymentMethods.name"
                  disabled
              />
            </b-form-group>
          </b-col>
          <b-col
              cols="12"
              md="6"
              lg="4"
          >
            <b-form-group
                label="Card Number"
            >
              <b-form-input
                  v-model=" '********'+ paymentMethods.last4"
                  disabled
              />
            </b-form-group>
          </b-col>
          <b-col
              cols="12"
              md="6"
              lg="4"
          >
            <b-form-group
                label="Type of credit card"
            >
              <b-form-input
                  v-model="paymentMethods.brand"
                  disabled
              />
            </b-form-group>
          </b-col>

          <b-col
              cols="12"
              md="6"
              lg="4"
          >
            <b-form-group
                label="Expiration date"
            >
              <b-form-input
                  v-model="paymentMethods.exp_month + ' / ' + paymentMethods.exp_year "
                  disabled
              />
            </b-form-group>
          </b-col>

          <!--      <b-col class="mt-2">-->
          <!--        <b-button-->
          <!--            variant="primary"-->
          <!--            class="mb-1 mb-sm-0 mr-0 mr-sm-1"-->
          <!--            :block="$store.getters['app/currentBreakPoint'] === 'xs'"-->
          <!--        >-->
          <!--          Save Changes-->
          <!--        </b-button>-->
          <!--        <b-button-->
          <!--            variant="outline-secondary"-->
          <!--            :block="$store.getters['app/currentBreakPoint'] === 'xs'"-->
          <!--        >-->
          <!--          Reset-->
          <!--        </b-button>-->
          <!--      </b-col>-->
        </b-row>
      </b-form>
    </div>
    <template v-if="infoPayment === null">
      <div style="display: grid; place-items: center" v-if="infoPayment === null && aggPayment === false ">
        <h2 class="text-center font-large-1 text-danger">Payment method was not added</h2>
        <p>
          Do you want to add a payment method?
        </p>
        <b-button
            variant="primary"
            class="ml-1"
            @click="aggPayment = true"
        >
          <span class="d-none d-sm-inline">Add payment method</span>
          <feather-icon
              icon="EditIcon"
              class="d-inline d-sm-none"
          />
        </b-button>
      </div>
    </template>
    <template v-if="aggPayment === true ">
      <b-form class="mt-1">
        <b-row>
          <b-col
              cols="12"
              md="6"
              lg="4"
          >
            <b-form-group
                label="Name on Credit Card"
            >
              <b-form-input
                  v-model="paymentMethods.name_on_cc"
                  @keypress="isText"
                  maxlength="30"
              />
            </b-form-group>
          </b-col>
          <b-col
              cols="12"
              md="6"
              lg="4"
          >
            <b-form-group
                label="Card Number"
            >
              <b-form-input
                  v-model="paymentMethods.cc_number"
                  @keypress="isNumber($event)"
                  maxlength="10"
              />
            </b-form-group>
          </b-col>
          <b-col
              cols="12"
              md="6"
              lg="4"
          >
            <b-form-group
                label="Type of credit card"
            >
              <b-form-input
                  v-model="paymentMethods.brand"
              />
            </b-form-group>
          </b-col>

          <b-col
              cols="12"
              md="6"
              lg="4"
          >
            <b-form-group
                label="Code of cc"
            >
              <b-form-input
                  v-model="paymentMethods.code_of_cc"
                  @keypress="isNumber($event)"
                  maxlength="3"
                  placeholder="***"
              />
            </b-form-group>
          </b-col>
          <b-col class="mt-2">
            <b-button
                variant="primary"
                class="mb-1 mb-sm-0 mr-0 mr-sm-1"
                :block="$store.getters['app/currentBreakPoint'] === 'xs'"
            >
              Save Changes
            </b-button>
            <b-button
                variant="outline-secondary"
                :block="$store.getters['app/currentBreakPoint'] === 'xs'"
                @click="clearInputs"
            >
              Reset
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </template>
  </div>
</template>

<script>
import {
  BRow, BCol, BForm, BFormGroup, BFormInput, BButton, BInputGroup, BInputGroupPrepend,
} from 'bootstrap-vue'
import Stripe from 'stripe'

export default {
  components: {
    BRow,
    BCol,
    BForm,
    BFormGroup,
    BFormInput,
    BButton,
    BInputGroup,
    BInputGroupPrepend,
  },
  // props: {
  //   infoPayment: {},
  // },
  data() {
    return {
      aggPayment: false,
      reset: false,
      paymentMethods: {},
      infoPayment: {},
    }
  },
  methods: {
    isText: function (event) {
      let regex = new RegExp('^[a-zA-Z ]+$')
      let key = String.fromCharCode(!event.charCode ? event.which : event.charCode)
      if (!regex.test(key)) {
        event.preventDefault()
        return false
      }
    },
    isNumber: function (evt) {
      evt = evt ? evt : window.event
      let charCode = evt.which ? evt.which : evt.keyCode
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
    clearInputs() {
      this.paymentMethods.name_on_cc = ''
      this.paymentMethods.cc_number = ''
      this.paymentMethods.type_of_cc = ''
      this.paymentMethods.code_of_cc = ''
    },
    getCard() {
      if(this.$store.getters['Users/userData'].user.role.id === 1 || this.$store.getters['Users/userData'].user.role.id === 2) {
        this.$http.get(`admin/panel/ca/${this.$route.params.id}/paymentMethod`)
            .then((response) => {
              this.paymentMethods = response.data.data;
            }).catch((error) => {
          this.$swal({
            title: error.data.message,
            icon: 'error',
            customClass: {
              confirmButton: 'btn btn-primary',
            },
            buttonsStyling: false,
          })
        })
      }else {
        this.$http.get(`ca/${this.$store.getters['Users/userData'].user.corporate_account.id}/panel/paymentMethod`)
            .then((response) => {
              this.paymentMethods = response.data.data;
              // console.log(this.paymentMethods)
            }).catch((error) => {
          this.$swal({
            title: error.data.message,
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
    this.infoPayment = this.$store.getters['Users/usersData'];
    this.getCard()
  },
  // mounted() {
  //   this.infoPayment = this.$store.getters['Users/usersData']
  // }
}
</script>

<style>

</style>
