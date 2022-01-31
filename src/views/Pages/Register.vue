<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">
      <!-- Brand logo-->
      <b-link class="brand-logo">
        <vuexy-logo/>
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col lg="5" class="d-none d-lg-flex align-items-center p-5">
        <div
            class="w-100 d-lg-flex align-items-center justify-content-center px-5"
        >
          <b-img fluid :src="imgUrl" alt="Register V2"/>
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Register-->
      <b-col lg="7" class="d-flex align-items-center auth-bg px-2 p-lg-5">
        <b-col sm="8" md="6" lg="12" class="px-xl-2 mx-auto form-login">
          <b-card-title class="mb-1"> Adventure starts here</b-card-title>
          <b-card-text class="mb-2">
            Make your app management easy and fun!
          </b-card-text>

          <!-- form -->
          <template>
            <div
                class="cols-12 col-xl-12 d-flex justify-content-center"
                style="margin: 0 auto"
            >
              <form-wizard
                  color="#7367F0"
                  :title="null"
                  :subtitle="null"
                  finish-button-text="Submit"
                  back-button-text="Previous"
                  ref="registerForm"
                  class="
                  steps-transparent
                  mb-3
                  d-lg-flex d-xl-flex d-md-flex
                  justify-content-center
                  flex-xl-column
                  formcreatepatient
                "
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
                      <b-col cols="12" class="mb-2">
                        <h5 class="mb-0">Account Details</h5>
                        <small class="text-muted" style="color: #000000d6 !important">
                          Enter Your Account Details.
                        </small>
                      </b-col>
                      <b-col md="6">
                        <b-form-group
                            label="Company Legal Name"
                        >
                          <validation-provider
                              #default="{ errors }"
                              rules="required"
                          >
                            <b-form-input
                                v-model="dataregister.company_legal_name"
                                placeholder="johndoe"
                                :state="errors.length > 0 ? false:null"
                                type="text"
                                pattern="^[A-Za-z]+$"
                                maxlength="30"
                                @keypress="isText"
                            />
                            <small class="text-danger" v-if="errors[0]">This field is required</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group label="DBA">
                          <validation-provider
                              #default="{ errors }"
                              name="dba"
                              rules="required"
                          >
                            <b-form-input
                                v-model="dataregister.dba"
                                :state="errors.length > 0 ? false:null"
                                maxlength="20"
                                type="text"
                                @keypress="isText"
                            />
                            <small class="text-danger" v-if="errors[0]">This field is required</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group label="Company Type">
                          <validation-provider
                              #default="{ errors }"
                              name="company_type"
                              rules="required"
                          >
                            <b-form-input
                                v-model="dataregister.company_type" placeholder="Corporate"
                                :state="errors.length > 0 ? false:null"
                                maxlength="30"
                                @keypress="isText"
                            />
                            <small class="text-danger" v-if="errors[0]">This field is required</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group label="TIN">
                          <validation-provider
                              #default="{ errors }"
                              name="tin"
                              rules="required"
                          >
                            <b-form-input
                                v-model="dataregister.tin" placeholder="12967552655455"
                                :state="errors.length > 0 ? false:null"
                                @keypress="isNumber($event)"
                                maxlength="15"
                            />
                            <small class="text-danger" v-if="errors[0]">This field is required</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group
                            label="Nature of Business"
                        >
                          <validation-provider
                              #default="{ errors }"
                              name="nature_of_business"
                              rules="required"
                          >
                            <b-form-input
                                v-model="dataregister.nature_of_business"
                                placeholder="local / national"
                                :state="errors.length > 0 ? false:null"
                                maxlength="30"
                                @keypress="isText"
                            />
                            <small class="text-danger" v-if="errors[0]">This field is required</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group
                            label="Contract Start Date"
                        >
                          <validation-provider
                              #default="{ errors }"
                              name="contract_start_date"
                              rules="required"
                          >
                            <b-form-datepicker
                                v-model="dataregister.contract_start_date"
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
                      <b-col md="6">
                        <b-form-group
                            label="Office Location Address"
                        >
                          <validation-provider
                              #default="{ errors }"
                              name="office_location_address"
                              rules="required"
                          >
                            <b-form-input
                                v-model="dataregister.office_location_address"
                                placeholder="floor and suite"
                                :state="errors.length > 0 ? false:null"
                                maxlength="30"
                                @keypress="isDirection"
                            />
                            <small class="text-danger" v-if="errors[0]">This field is required</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group
                            label="Billing Address"
                        >
                          <validation-provider
                              #default="{ errors }"
                              name="billing_address"
                              rules="required"
                          >
                            <b-form-input
                                v-model="dataregister.billing_address"
                                placeholder="floor and suite"
                                :state="errors.length > 0 ? false:null"
                                maxlength="20"
                                @keypress="isDirection"
                            />
                            <small class="text-danger" v-if="errors[0]">This field is required</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </validation-observer>
                </tab-content>

                <!-- personal details -->
                <tab-content title="Personal Info"
                             :before-change="validationFormInfo"
                >
                  <validation-observer
                      ref="infoRules"
                      tag="form"
                  >
                    <b-row>
                      <b-col cols="12" class="mb-2">
                        <h5 class="mb-0">Personal Info</h5>
                        <small class="text-muted" style="color: #000000d6 !important"
                        >Enter Your Personal Info.</small
                        >
                      </b-col>
                      <b-col md="6">
                        <b-form-group
                            label="Telephone Number"
                        >
                          <validation-provider
                              #default="{ errors }"
                              name="telephone_number"
                              rules="required"
                          >
                            <b-form-input
                                v-model="dataregister.telephone_number"
                                placeholder="038555555"
                                :state="errors.length > 0 ? false:null"
                                @keypress="isNumber($event)"
                                maxlength="10"
                            />
                            <small class="text-danger" v-if="errors[0]">This field is required</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col
                      >
                      <b-col md="6">
                        <b-form-group label="Fax Number">
                          <validation-provider
                              #default="{ errors }"
                              name="fax_number"
                              rules="required"
                          >
                            <b-form-input
                                v-model="dataregister.fax_number" placeholder="155926969"
                                :state="errors.length > 0 ? false:null"
                                @keypress="isNumber($event)"
                                maxlength="9"
                            />
                            <small class="text-danger" v-if="errors[0]">This field is required</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group label="Email">
                          <validation-provider
                              #default="{ errors }"
                              name="email"
                              rules="required|email"
                          >
                            <b-form-input
                                v-model="dataregister.email"
                                type="email"
                                placeholder="john.doe@email.com"
                                :state="errors.length > 0 ? false:null"
                                maxlength="30"
                            />
                            <small class="text-danger" v-if="errors[0]">This field is required</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group label="Website">
                          <validation-provider
                              #default="{ errors }"
                              name="website"
                              rules="required"
                          >
                            <b-form-input
                                v-model="dataregister.website"
                                placeholder="www.amera.com"
                                :state="errors.length > 0 ? false:null"
                                maxlength="30"
                            />
                            <small class="text-danger" v-if="errors[0]">This field is required</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group
                            label="Contact Name"
                        >
                          <validation-provider
                              #default="{ errors }"
                              name="contact_name"
                              rules="required"
                          >
                            <b-form-input
                                v-model="dataregister.contact_name"
                                placeholder="Jhon doe"
                                :state="errors.length > 0 ? false:null"
                                maxlength="30"
                                @keypress="isText"
                            />
                            <small class="text-danger" v-if="errors[0]">This field is required</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group
                            label="Contact Number"
                        >
                          <validation-provider
                              #default="{ errors }"
                              name="contact_number"
                              rules="required"
                          >
                            <b-form-input
                                v-model="dataregister.contact_number"
                                placeholder="05656366"
                                :state="errors.length > 0 ? false:null"
                                @keypress="isNumber($event)"
                                maxlength="10"
                            />
                            <small class="text-danger" v-if="errors[0]">This field is required</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </validation-observer>
                </tab-content>

                <!-- address -->
                <tab-content title="Address" :before-change="validationFormInfoaddress">
                  <validation-observer
                      ref="infoRulesAddress"
                      tag="form"
                  >
                    <b-row>
                      <b-col cols="12" class="mb-2">
                        <h5 class="mb-0">Additional Contact</h5>
                        <small class="text-muted" style="color: #000000d6 !important"
                        >Enter Your additional contact.</small
                        >
                      </b-col>
                      <b-col md="6">
                        <b-form-group
                            label="Additional Contact Name"
                        >
                          <validation-provider
                              #default="{ errors }"
                              name="additional_contact_name"
                              rules="required"
                          >
                            <b-form-input
                                :state="errors.length > 0 ? false:null"
                                v-model="dataregister.additional_contact_name"
                                maxlength="30"
                                @keypress="isText"
                            />
                            <small class="text-danger" v-if="errors[0]">This field is required</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group
                            label="Additional Contact Title"
                        >
                          <validation-provider
                              #default="{ errors }"
                              name="additional_contact_title"
                              rules="required"
                          >
                            <b-form-input
                                :state="errors.length > 0 ? false:null"
                                v-model="dataregister.additional_contact_title"
                                maxlength="30"
                                @keypress="isText"
                            />
                            <small class="text-danger" v-if="errors[0]">This field is required</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group
                            label="Additional Contact Number"
                        >
                          <validation-provider
                              #default="{ errors }"
                              name="additional_contact_number"
                              rules="required"
                          >
                            <b-form-input
                                v-model="dataregister.additional_contact_number"
                                placeholder="658921"
                                :state="errors.length > 0 ? false:null"
                                @keypress="isNumber($event)"
                                maxlength="10"
                            />
                            <small class="text-danger" v-if="errors[0]">This field is required</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group
                            label="Additional Contact Email"
                        >
                          <validation-provider
                              #default="{ errors }"
                              name="additional_contact_email"
                              rules="required|email"
                          >
                            <b-form-input
                                v-model="dataregister.additional_contact_email" placeholder="@"
                                :state="errors.length > 0 ? false:null"
                                maxlength="30"
                            />
                            <small class="text-danger" v-if="errors[0]">This field is required</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </validation-observer>
                </tab-content>

                <!-- social link -->
                <tab-content title="Payment methods"
                             :before-change="validationFormCreditCard"
                >
                  <validation-observer
                      ref="infoRulesCreditCard"
                      tag="form"
                  >
                    <b-row>
                      <b-col cols="12" class="mb-2">
                        <h5 class="mb-0">Credit card</h5>
                        <small class="text-muted" style="color: #000000d6 !important">Enter Your Credit card</small>
                      </b-col>
                      <b-col md="6">
                        <b-form-group label="Name on Credit Card">
                          <validation-provider
                              #default="{ errors }"
                              name="name_on_cc"
                              rules="required"
                          >
                            <b-form-input
                                placeholder="Jhon Doe"
                                v-model="dataregister.name_on_cc"
                                :state="errors.length > 0 ? false:null"
                                maxlength="30"
                                @keypress="isText"
                            />
                            <small class="text-danger" v-if="errors[0]">This field is required</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group
                            label="Card Number"
                        >
                          <validation-provider
                              #default="{ errors }"
                              name="cc_number"
                              rules="required"
                          >
                            <b-form-input
                                v-model="dataregister.cc_number"
                                placeholder="1111 2222 1111 2222 11"
                                :state="errors.length > 0 ? false:null"
                                @keypress="isNumber($event)"
                                maxlength="18"
                            />
                            <small class="text-danger" v-if="errors[0]">This field is required</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group
                            label="Type of credit card"
                        >
                          <validation-provider
                              #default="{ errors }"
                              name="type_of_cc"
                              rules="required"
                          >
                            <v-select
                                v-model="credito"
                                :options="options"
                                :state="errors.length > 0 ? false:null"
                                label="title"
                                placeholder="Select a item"
                                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                            />
                            <small class="text-danger" v-if="errors[0]">This field is required</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group
                            label="ZIP"
                        >
                          <validation-provider
                              #default="{ errors }"
                              name="zip"
                              rules="required"
                          >
                            <b-form-input
                                v-model="dataregister.zip"
                                placeholder="130008"
                                :state="errors.length > 0 ? false:null"
                                @keypress="isNumber($event)"
                                maxlength="9"
                            />
                            <small class="text-danger" v-if="errors[0]">This field is required</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group
                            label="Code to cvv"
                        >
                          <validation-provider
                              #default="{ errors }"
                              name="code_of_cc"
                              rules="required"
                          >
                            <b-form-input
                                v-model="dataregister.code_of_cc"
                                placeholder="1303"
                                :state="errors.length > 0 ? false:null"
                                @keypress="isNumber($event)"
                                maxlength="4"
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
            <p class="text-center mt-2">
              <span>Already have an account?</span>
              <b-link :to="{ name: 'login' }">
                <span>&nbsp;Sign in instead</span>
              </b-link>
            </p>
            <!-- divider -->
            <div class="divider my-2">
              <div class="divider-text">or</div>
            </div>

            <div class="auth-footer-btn d-flex justify-content-center">
              <b-button
                  variant="facebook"
                  href="javascript:void(0)"
                  style="background-color: transparent"
              >
                <b-img src="@/assets/images/icons/facebook.png" height="39"></b-img>
              </b-button>
              <b-button
                  variant="twitter"
                  href="javascript:void(0)"
                  style="background-color: transparent"
              >
                <b-img src="@/assets/images/icons/instagram.png" height="39"></b-img>
              </b-button>
              <b-button
                  variant="google"
                  href="javascript:void(0)"
                  style="background-color: transparent"
              >
                <b-img src="@/assets/images/icons/youtube.png" height="39"></b-img>
              </b-button>
              <b-button
                  variant="github"
                  href="javascript:void(0)"
                  style="background-color: transparent"
              >
                <b-img src="@/assets/images/icons/whatsaap.png" height="39"></b-img>
              </b-button>
            </div>
          </template>
        </b-col>

      </b-col>
    </b-row>

  </div>
</template>

<script>
/* eslint-disable global-require */
import { FormWizard, TabContent } from 'vue-form-wizard'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import axios from 'axios'
import Ripple from 'vue-ripple-directive'
import {
  BRow,
  BCol,
  BLink,
  BButton,
  BForm,
  BFormCheckbox,
  BFormGroup,
  BFormInput,
  BInputGroup,
  BInputGroupAppend,
  BImg,
  BCardTitle,
  BCardText,
  BFormSelect, BFormDatepicker,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store from '@/store/index'
import useJwt from '@/auth/jwt/useJwt'
import vSelect from 'vue-select'


export default {
  components: {
    VuexyLogo,
    BRow,
    BImg,
    BCol,
    BLink,
    BButton,
    BForm,
    BCardText,
    BCardTitle,
    BFormCheckbox,
    BFormGroup,
    BFormInput,
    BInputGroup,
    BInputGroupAppend,
    BFormSelect,
    BFormDatepicker,
    // validations
    ValidationProvider,
    ValidationObserver,
    FormWizard,
    TabContent,
    ToastificationContent,
    vSelect,
  },
  directives: {
    Ripple,
  },
  mixins: [togglePasswordVisibility],
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
      dataregister: {
        company_legal_name: '',
        dba: '',
        company_type: '',
        tin: '',
        nature_of_business: '',
        contract_start_date: '',
        office_location_address: '',
        billing_address: '',
        telephone_number: '',
        fax_number: '',
        email: '',
        website: '',
        contact_name: '',
        contact_number: '',
        additional_contact_name: '',
        additional_contact_title: '',
        additional_contact_number: '',
        additional_contact_email: '',
        name_on_cc: '',
        cc_number: '',
        type_of_cc: '',
        zip: '',
        code_of_cc: '',
      },
      credito: '',
      enviados: [],
      status: '',
      username: '',
      userEmail: '',
      password: '',
      sideImg: require('@/assets/images/pages/register-v2.svg'),
      // validation
      required,
      email,
      options: [
        {title: 'Amex'},
        {title: 'Visa'},
        {title: 'etc'},
      ],
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/register-v2-dark.svg')
        return this.sideImg
      }
      return this.sideImg
    },
  },
  methods: {
    isNumber: function (evt) {
      evt = evt ? evt : window.event;
      let charCode = evt.which ? evt.which : evt.keyCode;
      if (
          charCode > 31 &&
          (charCode < 48 || charCode > 57) &&
          charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    isText: function (event) {
      let regex = new RegExp("^[a-zA-Z ]+$");
      let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
      if (!regex.test(key)) {
        event.preventDefault();
        return false;
      }
    },
    isDirection: function (event) {
      let regex = new RegExp("^[a-zA-Z0-9 ]+$");
      let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
      if (!regex.test(key)) {
        event.preventDefault();
        return false;
      }
    },
    register() {
      this.$refs.registerForm.validate()
          .then((success) => {
            if (success) {
              useJwt
                  .register({
                    username: this.username,
                    email: this.userEmail,
                    password: this.password,
                  })
                  .then((response) => {
                    useJwt.setToken(response.data.accessToken)
                    useJwt.setRefreshToken(response.data.refreshToken)
                    localStorage.setItem(
                        'userData',
                        JSON.stringify(response.data.userData)
                    )
                    this.$ability.update(response.data.userData.ability)
                    this.$router.push('/')
                  })
                  .catch((error) => {
                    this.$refs.registerForm.setErrors(error.response.data.error)
                  })
            }
          })
    },
    formSubmitted() {
      this.dataregister.type_of_cc = this.credito.title;
      axios.post('https://Amera-test.herokuapp.com/api/v1/auth/ca/register', this.dataregister, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      })
          .then((res) => {
            if (res.data.status === 200) {
              this.$swal({
                title: 'Corporate account created',
                icon: 'success',
                customClass: {
                  confirmButton: 'btn btn-primary',
                },
                buttonsStyling: false,
              })
              this.$router.push({name: 'login'})

              //clear form
                  this.dataregister.company_legal_name = '',
                  this.dataregister.dba = '',
                  this.dataregister.company_type = '',
                  this.dataregister.tin = '',
                  this.dataregister.nature_of_business = '',
                  this.dataregister.contract_start_date = '',
                  this.dataregister.office_location_address = '',
                  this.dataregister.billing_address = '',
                  this.dataregister.telephone_number = '',
                  this.dataregister.fax_number = '',
                  this.dataregister.email = '',
                  this.dataregister.website = '',
                  this.dataregister.contact_name = '',
                  this.dataregister.contact_number = '',
                  this.dataregister.additional_contact_name = '',
                  this.dataregister.additional_contact_title = '',
                  this.dataregister.additional_contact_number = '',
                  this.dataregister.additional_contact_email = '',
                  this.dataregister.name_on_cc = '',
                  this.dataregister.cc_number = '',
                  this.dataregister.type_of_cc = '',
                  this.dataregister.zip = '',
                  this.dataregister.code_of_cc = ''
              // console.log('bien')
            } else {
              this.$swal({
                title: res.data.message,
                icon: 'error',
                customClass: {
                  confirmButton: 'btn btn-primary',
                },
                buttonsStyling: false,
              })

              // console.log(res.data.data)
            }
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

      // this.enviados = this.dataregister;
      // console.log(this.enviados)
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
    validationFormInfoaddress() {
      return new Promise((resolve, reject) => {
        this.$refs.infoRulesAddress.validate()
            .then(success => {
              if (success) {
                resolve(true)
              } else {
                reject()
              }
            })
      })
    },
    validationFormCreditCard() {
      return new Promise((resolve, reject) => {
        this.$refs.infoRulesCreditCard.validate()
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
  // mounted() {
  //   this.$swal({
  //     title: 'It has been successfully registered',
  //     icon: 'success',
  //     customClass: {
  //       confirmButton: 'btn btn-primary',
  //     },
  //     buttonsStyling: false,
  //   })
  // }
}
/* eslint-disable global-require */
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
@import '@core/scss/vue/libs/vue-select.scss';
@import "src/assets/scss/variables/variables-components.scss";

</style>
