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
                  v-model="infoPayment.name_on_cc"
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
                  v-model="infoPayment.cc_number"
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
                  v-model="infoPayment.type_of_cc"
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
                label="Code of cc"
            >
              <b-form-input
                  v-model="infoPayment.code_of_cc"
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
                  v-model="paymentMethods.type_of_cc"
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
      paymentMethods: {
        name_on_cc: '',
        cc_number: '',
        type_of_cc: '',
        code_of_cc: '',
      },
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
    getCreditCard() {
        //let customerId = this.infoPayment.corporate_account_personal_info.stripe_customer_id;
        //let id = this.infoPayment.corporate_account_payment_method.stripe_payment_method_id;
        const stripe = require('stripe')('sk_test_51KOq3rBuZ3VJH17w8Fj9oqKFpa2A9HHcNgKE4EIWl4MJJBozUQiPLxzjGzZWVj9KstETP06Bq2S0lXNuiWuGaIuP00qWYYn1O8')
        stripe.customers.retrieveSource(
            'cus_Le6JczgVGkazQU',
            'card_1Kwo6SBuZ3VJH17wjDxombxG'
        ).then((res) => {
          console.log(res.lastResponse)
        })



    }
  },
  mounted() {
    this.infoPayment = this.$store.getters['Users/usersData'];
    this.getCreditCard()
    // console.log(this.infoPayment)
    // console.log(this.infoPayment.stripe_payment_method_id)
    // let stripeToken = require('stripe')('sk_test_51KOq3rBuZ3VJH17w8Fj9oqKFpa2A9HHcNgKE4EIWl4MJJBozUQiPLxzjGzZWVj9KstETP06Bq2S0lXNuiWuGaIuP00qWYYn1O8')
    // let card = stripe.customers.retrieveSource(
    //     // stripeToken,
    //     // this.infoPayment.stripe_payment_method_id
    //     'card_1KwoN5BuZ3VJH17wPEdDpdNZ'
    // )
    // console.log(card)

  },
  // mounted() {
  //   this.infoPayment = this.$store.getters['Users/usersData']
  // }
}
</script>

<style>

</style>
