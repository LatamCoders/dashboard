<template>
  <div>

    <!-- Media -->
    <b-media class="mb-2">
      <template #aside>
        <b-avatar
            ref="previewEl"
            :src="ProfileName(userData.name)"
            size="90px"
            rounded
            class="backgroundProfile-driver"
        >
          <p class="text-name-driver" v-if='userData.profile_picture === null'>
            {{ ProfileName(userData.name) }}
          </p>
        </b-avatar>
      </template>
      <h4 class="">
        <span class="name-corporative">{{ userData.name + ' ' + userData.lastname }}</span>
      </h4>

      <div class="d-flex flex-wrap">
        <b-button
            variant="primary"

        >
          <span class="d-none d-sm-inline">Pass</span>
          <feather-icon
              icon="EditIcon"
              class="d-inline d-sm-none"
          />
        </b-button>
        <b-button
            variant="danger"
            class="ml-1"
        >
          <span class="d-none d-sm-inline">To refuse</span>
          <feather-icon
              icon="TrashIcon"
              class="d-inline d-sm-none"
          />
        </b-button>
      </div>
    </b-media>

    <!-- form Admin -->
    <b-form>
      <b-row class="mt-5">
        <b-col md="4">
          <b-form-group
              label="Name"
          >
            <b-form-input
                v-model="userData.name"
                :disabled="btnupdate === false"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
              label="Lastname"
          >
            <b-form-input
                v-model=" userData.lastname"
                :disabled="btnupdate === false"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
              label="Gender"
          >
            <b-form-input
                v-model="userData.gender"
                :disabled="btnupdate === false"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
              label="Birthday"
          >
            <b-form-input
                v-model="userData.birthday"
                :disabled="btnupdate === false"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
              label="Phone_number"
          >
            <b-form-input
                v-model="userData.phone_number"
                disabled
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
              label="Email"
          >
            <b-form-input
                v-model="userData.email"
                :disabled="btnupdate === false"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
              label="Address"
          >
            <b-form-input
                v-model="userData.address"
                :disabled="btnupdate === false"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>


    <!-- Action Buttons -->
    <b-button
        variant="primary"
        class="mb-1 mb-sm-0 mr-0 mr-sm-1"
        :block="$store.getters['app/currentBreakPoint'] === 'xs'"
        @click="btnupdate = true"
    >
      Update
    </b-button>
    <b-button
        v-if="btnupdate === true"
        variant="outline-secondary"
        type="reset"
        :block="$store.getters['app/currentBreakPoint'] === 'xs'"
        @click="updateDriver"
    >
      Send changes
    </b-button>
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
  BForm,
  BTable,
  BCard,
  BCardHeader,
  BCardTitle,
  BFormCheckbox,
} from 'bootstrap-vue'
import {avatarText} from '@core/utils/filter'
import vSelect from 'vue-select'
import {useInputImageRenderer} from '@core/comp-functions/forms/form-utils'
import {ref} from '@vue/composition-api'
// import useUsersList from '/src/@core/components/user/users-list/useUsersList'

export default {
  components: {
    BButton,
    BMedia,
    BAvatar,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    BTable,
    BCard,
    BCardHeader,
    BCardTitle,
    BFormCheckbox,
    vSelect,
  },
  props: {
    userData: {},
  },
  data() {
    return {
      src: '',
      btnupdate: false,
      userData: {
        name: '',
        lastname: '',
        gender: '',
        birthday: '',
        email: '',
        address: '',
      }
    }
  },
  methods: {
    ProfileName(name) {
      if (this.userData.profile_picture === null) {
        return name.charAt(0).toUpperCase() + name.charAt(1).toUpperCase();
      } else {
        return this.userData.profile_picture;
      }
    },
    updateDriver() {
      this.$swal({
        title: 'Please, wait...',
        didOpen: () => {
          this.$swal.showLoading()
        },
        timer: 1000,
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })

      this.$http.post(`driver/${this.userData.driver_id}/profile/update`, this.userData)
          .then((res) => {
            this.$swal({
              title: res.data.message,
              icon: 'success',
              customClass: {
                confirmButton: 'btn btn-primary',
              },
              buttonsStyling: false,
            })
          }).catch((error) => {
        this.$swal({
          title: error.message,
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
    console.log(this.userData.driver_id)
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';

.text-name-driver {
  font-size: 1.5rem;
  margin-bottom: 0 !important;
}

.backgroundProfile-driver {
  background-color: $primary;
}
</style>
