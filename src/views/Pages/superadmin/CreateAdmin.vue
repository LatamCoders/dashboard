<template>
  <div class="d-flex justify-content-center">
    <b-card class="col-lg-9">
      <b-row class="containerCreateAdmin">
        <b-col>
          <div>
            <b-img class="imgAdmin" src="@/assets/images/pages/amera.png">
            </b-img>
          </div>

        </b-col>
        <b-col class="container-form">
          <div class="cols-12 col-lg-12 d-flex flex-column">
            <validation-observer
                ref="accountRules"
                tag="form"
            >
              <div class="">
                <b-col lg="12">
                  <b-form-group
                      label="Name admin"
                  >
                    <validation-provider
                        #default="{ errors }"
                        rules="required"
                    >
                      <b-form-input
                          v-model="registerAdmin.name"
                          :state="errors.length > 0 ? false:null"
                      />
                      <small class="text-danger" v-if="errors[0]">This field is required</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
                <b-col lg="12">
                  <b-form-group
                      label="Email"
                  >
                    <validation-provider
                        #default="{ errors }"
                        rules="required|email"
                    >
                      <b-form-input
                          v-model="registerAdmin.email"
                          :state="errors.length > 0 ? false:null"
                      />
                      <small class="text-danger" v-if="errors[0]">This field is required</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
                <b-col lg="12">
                  <b-form-group
                      label="Role"
                  >
                    <validation-provider
                        #default="{ errors }"
                        rules="required"
                    >
                      <b-form-select
                          v-model="registerAdmin.role"
                          :options="option" label="Role"
                          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                          :state="errors.length > 0 ? false:null"
                      />
                      <small class="text-danger" v-if="errors[0]">This field is required</small>
                    </validation-provider>

                  </b-form-group>
                </b-col>
              </div>
              <div class="pl-1">
                <b-button
                    variant="primary"
                    @click="createAdmin"
                >
                  <span class="d-none d-sm-inline">Create</span>
                  <feather-icon
                      icon="EditIcon"
                      class="d-inline d-sm-none"
                  />
                </b-button>
              </div>
            </validation-observer>
          </div>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
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
  BCard,
  BCardTitle,
  BCardText,
  BFormSelect, BFormDatepicker,
} from 'bootstrap-vue'
import {required, email} from '@validations'
import {ValidationObserver, ValidationProvider} from 'vee-validate'

export default {
  name: 'CreateAdmin',
  components: {
    BRow,
    BCol,
    BCard,
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
    BFormDatepicker,

    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      registerAdmin: {
        name: '',
        email: '',
        role: 0,
      },
      option: [
        {
          text: 'Super Admin',
          value: 1
        },
        {
          text: 'Admin',
          value: 2
        },
      ],
    }
  },
  methods: {
    createAdmin() {
      if (this.registerAdmin.name === '' || this.registerAdmin.email === '' || this.registerAdmin.role === '') {
        this.$swal({
          title: 'Please fill out required fields',
          icon: 'error',
          customClass: {
            confirmButton: 'btn btn-primary',
          },
          buttonsStyling: false,
        })
      } else {
        this.$http.post('auth/admin/register', this.registerAdmin)
            .then((response) => {
              this.$swal({
                title: response.data.message,
                icon: 'success',
                customClass: {
                  confirmButton: 'btn btn-primary',
                },
                buttonsStyling: false,
              })
              this.registerAdmin.name = '';
              this.registerAdmin.email = '';
              this.registerAdmin.role = '';
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
  }
}
</script>

<style lang="scss" scoped>

.containerCreateAdmin {

  .imgAdmin {
    max-height: 356px;
    border-radius: 14px;
  }

  .container-form {
    display: flex;
    align-items: center;
  }

}

@media screen and(min-width: 320px) and (max-width: 1024px) {
  .containerCreateAdmin {
    flex-direction: column;
    gap: 10px;

    .imgAdmin {
      width: 100%;
    }
  }
}

</style>
