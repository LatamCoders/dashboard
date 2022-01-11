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
                              name="namecompany"
                              rules="required"
                          >
                            <b-form-input
                                v-model="dataregister.namecompany"
                                placeholder="johndoe"
                                :state="errors.length > 0 ? false:null"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
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
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group label="Company Type">
                          <validation-provider
                              #default="{ errors }"
                              name="comapnytype"
                              rules="required"
                          >
                            <b-form-input
                                v-model="dataregister.companytype" placeholder="Corporate"
                                :state="errors.length > 0 ? false:null"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
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
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group
                            label="Nature of Business"
                        >
                          <validation-provider
                              #default="{ errors }"
                              name="businessnature"
                              rules="required"
                          >
                            <b-form-input
                                v-model="dataregister.businessnature"
                                placeholder="local / national"
                                :state="errors.length > 0 ? false:null"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group
                            label="Contract Start Date"
                        >
                          <validation-provider
                              #default="{ errors }"
                              name="startdate"
                              rules="required"
                          >
                            <b-form-input
                                v-model="dataregister.startdate"
                                :state="errors.length > 0 ? false:null"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group
                            label="Office Location Address"
                        >
                          <validation-provider
                              #default="{ errors }"
                              name="locationaddress"
                              rules="required"
                          >
                            <b-form-input
                                v-model="dataregister.locationaddress"
                                placeholder="floor and suite"
                                :state="errors.length > 0 ? false:null"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group
                            label="Billing Address"
                        >
                          <validation-provider
                              #default="{ errors }"
                              name="billingaddress"
                              rules="required"
                          >
                            <b-form-input
                                v-model="dataregister.billingaddress"
                                placeholder="floor and suite"
                                :state="errors.length > 0 ? false:null"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
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
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
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
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
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
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
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
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
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
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
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
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
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
                              name="additionalcontactname"
                              rules="required"
                          >
                            <b-form-input
                                :state="errors.length > 0 ? false:null"
                                v-model="dataregister.additionalcontactname"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group
                            label="Additional Contact Title"
                        >
                          <validation-provider
                              #default="{ errors }"
                              name="additionaltitle"
                              rules="required"
                          >
                            <b-form-input
                                :state="errors.length > 0 ? false:null"
                                v-model="dataregister.additionaltitle"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group
                            label="Additional Contact Number"
                        >
                          <validation-provider
                              #default="{ errors }"
                              name="additionalnumbercontac"
                              rules="required"
                          >
                            <b-form-input
                                v-model="dataregister.additionalnumbercontac"
                                placeholder="658921"
                                :state="errors.length > 0 ? false:null"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group
                            label="Additional Contact Email"
                        >
                          <validation-provider
                              #default="{ errors }"
                              name="additionalemail"
                              rules="required|email"
                          >
                            <b-form-input
                                v-model="dataregister.additionalemail" placeholder="@"
                                :state="errors.length > 0 ? false:null"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
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
                        <b-form-group label="Name on cc">
                          <validation-provider
                              #default="{ errors }"
                              name="namecreditcard"
                              rules="required"
                          >
                            <b-form-input
                                placeholder="Jhon Doe"
                                v-model="dataregister.namecreditcard"
                                :state="errors.length > 0 ? false:null"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group
                            label="cc Numbers"
                        >
                          <validation-provider
                              #default="{ errors }"
                              name="numbercreditcard"
                              rules="required"
                          >
                            <b-form-input
                                v-model="dataregister.numbercreditcard"
                                placeholder="1111 2222 1111 2222 11"
                                :state="errors.length > 0 ? false:null"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group
                            label="Type of credit card"
                        >
                          <validation-provider
                              #default="{ errors }"
                              name="selectedcard"
                              rules="required"
                          >
                            <b-form-select
                                v-model="dataregister.selectedcard"
                                :options="options"
                                :state="errors.length > 0 ? false:null"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
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
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group
                            label="Code to cc"
                        >
                          <validation-provider
                              #default="{ errors }"
                              name="code"
                              rules="required"
                          >
                            <b-form-input
                                v-model="dataregister.code"
                                placeholder="1303"
                                :state="errors.length > 0 ? false:null"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <!--  <b-col md="6">
                        <b-form-group label="Google+" label-for="i-google-plus">
                          <b-form-input
                            id="i-google-plus"
                            placeholder="https://plus.google.com/abc"
                          />
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group label="LinkedIn" label-for="i-linked-in">
                          <b-form-input
                            id="i-linked-in"
                            placeholder="https://linkedin.com/abc"
                          />
                        </b-form-group>
                      </b-col> -->
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
  BFormSelect,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store from '@/store/index'
import useJwt from '@/auth/jwt/useJwt'

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
    // validations
    ValidationProvider,
    ValidationObserver,
    FormWizard,
    TabContent,
    ToastificationContent,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      dataregister: {
        namecompany: '',
        dba: '',
        companytype: '',
        tin: '',
        businessnature: '',
        startdate: '',
        locationaddress: '',
        billingaddress: '',
        telephone_number: '',
        fax_number: '',
        email: '',
        website: '',
        contact_name: '',
        contact_number: '',
        additionalcontactname: '',
        additionaltitle: '',
        additionalnumbercontac: '',
        additionalemail: '',
        namecreditcard: '',
        numbercreditcard: '',
        selectedcard: '',
        zip: '',
        code: '',
      },
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
        {
          value: null,
          text: 'Please select an item'
        },
        {
          value: 'amex',
          text: 'Amex'
        },
        {
          value: 'visa',
          text: 'Visa'
        },
        {
          value: 'etc',
          text: 'etc'
        },
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
      axios.post('https://Amera-test.herokuapp.com/api/v1/ca/auth/register', this.dataregister, {
        headers: {
          "X-Requested-With" : "XMLHttpRequest"
        }
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

}
/* eslint-disable global-require */
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
@import "src/assets/scss/variables/variables-components.scss";
</style>
