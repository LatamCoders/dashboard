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
          <b-card-title class="mb-1"> Adventure starts here </b-card-title>
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
                    icon=""
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
                          label-for="i-username"
                      >
                        <b-form-input id="i-username" placeholder="johndoe"/>
                      </b-form-group>
                    </b-col>
                    <b-col md="6">
                      <b-form-group label="DBA" label-for="i-dba">
                        <b-form-input id="i-dba"/>
                      </b-form-group>
                    </b-col>
                    <b-col md="6">
                      <b-form-group label="Company Type" label-for="i-company">
                        <b-form-input id="i-company" placeholder="Corporate"/>
                      </b-form-group>
                    </b-col>
                    <b-col md="6">
                      <b-form-group label="TIN" label-for="i-tin">
                        <b-form-input id="i-tin" placeholder="12967552655455"/>
                      </b-form-group>
                    </b-col>
                    <b-col md="6">
                      <b-form-group
                          label="Nature of Business"
                          label-for="i-nature"
                      >
                        <b-form-input
                            id="i-nature"
                            placeholder="local / national"
                        />
                      </b-form-group>
                    </b-col>
                    <b-col md="6">
                      <b-form-group
                          label="Contract Start Date"
                          label-for="i-contrat"
                      >
                        <b-form-input id="i-contrat"/>
                      </b-form-group>
                    </b-col>
                    <b-col md="6">
                      <b-form-group
                          label="Office Location Address"
                          label-for="i-office"
                      >
                        <b-form-input
                            id="i-office"
                            placeholder="floor and suite"
                        />
                      </b-form-group>
                    </b-col>
                    <b-col md="6">
                      <b-form-group
                          label="Billing Address"
                          label-for="i-billing-address"
                      >
                        <b-form-input
                            id="i-billing-address"
                            placeholder="floor and suite"
                        />
                      </b-form-group>
                    </b-col>
                  </b-row>
                </tab-content>

                <!-- personal details -->
                <tab-content title="Personal Info" icon="">
                  <b-row>
                    <b-col cols="12" class="mb-2">
                      <h5 class="mb-0">Personal Info</h5>
                      <small class="text-muted" style="color: #000000d6 !important"
                      >Enter Your Personal Info.</small
                      >
                    </b-col>
                    <b-col md="6">
                      <b-form-group
                          label-for="i-number-telephone"
                          label="Telephone Number"
                      >
                        <b-form-input
                            id="i-number-telephone"
                            placeholder="038555555"
                        />
                      </b-form-group>
                    </b-col
                    >
                    <b-col md="6">
                      <b-form-group label-for="i-fax" label="Fax Number">
                        <b-form-input id="i-fax" placeholder="155926969"/>
                      </b-form-group>
                    </b-col>
                    <b-col md="6">
                      <b-form-group label-for="i-email" label="Email">
                        <b-form-input
                            id="i-email"
                            type="email"
                            placeholder="john.doe@email.com"
                        />
                      </b-form-group>
                    </b-col>
                    <b-col md="6">
                      <b-form-group label="Website" label-for="i-website">
                        <b-form-input
                            id="i-website"
                            placeholder="www.amera.com"
                        />
                      </b-form-group>
                    </b-col>
                    <b-col md="6">
                      <b-form-group
                          label="Contact Name"
                          label-for="i-contactname"
                      >
                        <b-form-input
                            id="i-contactname"
                            placeholder="Jhon doe"
                        />
                      </b-form-group>
                    </b-col>
                    <b-col md="6">
                      <b-form-group
                          label="Contact Number"
                          label-for="i-contactnumber"
                      >
                        <b-form-input
                            id="i-contactnumber"
                            placeholder="05656366"
                        />
                      </b-form-group>
                    </b-col>
                  </b-row>
                </tab-content>

                <!-- address -->
                <tab-content title="Address" icon="">
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
                          label-for="i-additional-contact"
                      >
                        <b-form-input id="i-additional-contact"/>
                      </b-form-group>
                    </b-col>
                    <b-col md="6">
                      <b-form-group
                          label="Additional Contact Title"
                          label-for="i-additional-title"
                      >
                        <b-form-input id="i-additional-title"/>
                      </b-form-group>
                    </b-col>
                    <b-col md="6">
                      <b-form-group
                          label="Additional Contact Number"
                          label-for="i-additionalnumbercontac"
                      >
                        <b-form-input
                            id="i-additionalnumbercontac"
                            placeholder="658921"
                        />
                      </b-form-group>
                    </b-col>
                    <b-col md="6">
                      <b-form-group
                          label-for="i-additionalemail"
                          label="Additional Contact Email"
                      >
                        <b-form-input id="i-additionalemail" placeholder="@"/>
                      </b-form-group>
                    </b-col>
                  </b-row>
                </tab-content>

                <!-- social link -->
                <tab-content title="Payment methods" icon="">
                  <b-row>
                    <b-col cols="12" class="mb-2">
                      <h5 class="mb-0">Credit card</h5>
                      <small class="text-muted" style="color: #000000d6 !important">Enter Your Credit card</small>
                    </b-col>
                    <b-col md="6">
                      <b-form-group label="Name on cc" label-for="i-namecredit">
                        <b-form-input
                            id="i-namecredit"
                            placeholder="Jhon Doe "
                        />
                      </b-form-group>
                    </b-col>
                    <b-col md="6">
                      <b-form-group
                          label="cc Numbers"
                          label-for="i-numberscredit"
                      >
                        <b-form-input
                            id="i-numberscredit"
                            placeholder="1111 2222 1111 2222 11"
                        />
                      </b-form-group>
                    </b-col>
                    <b-col md="6">
                      <b-form-group
                          label="Type of credit card"
                      >
                        <b-form-select
                            v-model="selectedcard"
                            :options="options"
                        />
                      </b-form-group>
                    </b-col>
                    <b-col md="6">
                      <b-form-group
                          label="ZIP"
                      >
                        <b-form-input
                            placeholder="130008"
                        />
                      </b-form-group>
                    </b-col>
                    <b-col md="6">
                      <b-form-group
                          label="Code to cc"
                      >
                        <b-form-input
                            placeholder="1303"
                        />
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


</b-col>
</b-col>
<!-- /Register-->
</b-row>
</div>
</template>

<script>
/* eslint-disable global-require */
import {FormWizard, TabContent} from "vue-form-wizard";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import {ValidationProvider, ValidationObserver} from "vee-validate";
import VuexyLogo from "@core/layouts/components/Logo.vue";
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
} from "bootstrap-vue";
import {required, email} from "@validations";
import {togglePasswordVisibility} from "@core/mixins/ui/forms";
import store from "@/store/index";
import useJwt from "@/auth/jwt/useJwt";

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
      selectedcard: '',
      status: "",
      username: "",
      userEmail: "",
      password: "",
      sideImg: require("@/assets/images/pages/register-v2.svg"),
      // validation
      required,
      email,
      selectedContry: "select_value",
      selectedLanguage: "nothing_selected",
      options: [
        {value: null, text: 'Please select an item'},
        {value: 'amex', text: 'Amex'},
        {value: 'visa', text: 'Visa'},
        {value: 'etc', text: 'etc'},
      ],
      countryName: [
        {value: "select_value", text: "Select Value"},
        {value: "Russia", text: "Russia"},
        {value: "Canada", text: "Canada"},
        {value: "China", text: "China"},
        {value: "United States", text: "United States"},
        {value: "Brazil", text: "Brazil"},
        {value: "Australia", text: "Australia"},
        {value: "India", text: "India"},
      ],
      languageName: [
        {value: "nothing_selected", text: "Nothing Selected"},
        {value: "English", text: "English"},
        {value: "Chinese", text: "Mandarin Chinese"},
        {value: "Hindi", text: "Hindi"},
        {value: "Spanish", text: "Spanish"},
        {value: "Arabic", text: "Arabic"},
        {value: "Malay", text: "Malay"},
        {value: "Russian", text: "Russian"},
      ],
    };
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === "password" ? "EyeIcon" : "EyeOffIcon";
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === "dark") {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require("@/assets/images/pages/register-v2-dark.svg");
        return this.sideImg;
      }
      return this.sideImg;
    },
  },
  methods: {
    register() {
      this.$refs.registerForm.validate().then((success) => {
        if (success) {
          useJwt
              .register({
                username: this.username,
                email: this.userEmail,
                password: this.password,
              })
              .then((response) => {
                useJwt.setToken(response.data.accessToken);
                useJwt.setRefreshToken(response.data.refreshToken);
                localStorage.setItem(
                    "userData",
                    JSON.stringify(response.data.userData)
                );
                this.$ability.update(response.data.userData.ability);
                this.$router.push("/");
              })
              .catch((error) => {
                this.$refs.registerForm.setErrors(error.response.data.error);
              });
        }
      });
    },
  },
  formSubmitted() {
    this.$toast({
      component: ToastificationContent,
      props: {
        title: "Form Submitted",
        icon: "EditIcon",
        variant: "success",
      },
    });
  },
};
/* eslint-disable global-require */
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
@import "src/assets/scss/variables/variables-components.scss";
</style>
