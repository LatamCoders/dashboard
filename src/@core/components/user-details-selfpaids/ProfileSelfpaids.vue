<template>
  <div v-if="dataSelfpaids !== ''">
    <!-- Media -->
    <b-media class="mb-2">
      <template #aside>
        <b-avatar
            ref="previewEl"
            :src="dataSelfpaids.profile_picture"
            size="90px"
            rounded
            class="backgroundProfile-driver"
        >
          <p class="text-name-driver" v-if='dataSelfpaids.profile_picture === null'>
            {{ ProfileName(dataSelfpaids.name) }}
          </p>
        </b-avatar>
      </template>
      <h4 class="">
        {{ dataSelfpaids.name }} ( <span style="font-size: 0.9rem">
        {{ dataSelfpaids.email }}
      </span>)
      </h4>
      <template>
        <div class="d-flex flex-wrap">
          <b-button
              :variant="inhabilitar === false ? 'primary' : 'outline-secondary'"
              class="ml-1"
              @click="savedInfo === true ? inhabilitar = true : inhabilitar = true"
          >
            <span class="d-none d-sm-inline">Update</span>
            <feather-icon
                icon="EditIcon"
                class="d-inline d-sm-none"
            />
          </b-button>
          <b-button
              v-if="inhabilitar ===  true && savedInfo === false"
              :variant="inhabilitar === true ? 'primary' : 'primary' "
              class="ml-1"
              @click="savedInfo = true"
          >
            <span class="d-none d-sm-inline">Saved</span>
            <feather-icon
                icon="TrashIcon"
                class="d-inline d-sm-none"
            />
          </b-button>
          <b-button
              variant="danger"
              class="ml-1"
              @click="deleteSelfpaid()"
          >
            <span class="d-none d-sm-inline">Delete</span>
            <feather-icon
                icon="EditIcon"
                class="d-inline d-sm-none"
            />
          </b-button>
        </div>
      </template>
    </b-media>

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
                :disabled="inhabilitar === false || savedInfo === true"
                v-model="dataSelfpaids.name"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Full Name -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Lastname"
          >
            <b-form-input
                :disabled="inhabilitar === false || savedInfo === true"
                v-model="dataSelfpaids.lastname"
            />
          </b-form-group>
        </b-col>
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Gender"
          >
            <b-form-input
                :disabled="inhabilitar === false || savedInfo === true"
                v-model="dataSelfpaids.gender"
            />
          </b-form-group>
        </b-col>
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Birthday"
          >
            <b-form-input
                :disabled="inhabilitar === false || savedInfo === true"
                v-model="dataSelfpaids.birthday"
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
              label="Phone number"

          >
            <b-form-input
                v-model="dataSelfpaids.phone_number"
                :disabled="inhabilitar === false || savedInfo === true"

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
                :disabled="inhabilitar === false || savedInfo === true"
                v-model="dataSelfpaids.email"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Email -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Address"
          >
            <b-form-input
                v-model="dataSelfpaids.address"
                :disabled="inhabilitar === false || savedInfo === true"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Email -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="City"
          >
            <b-form-input
                :disabled="inhabilitar === false || savedInfo === true"
                v-model="dataSelfpaids.city"
            />
          </b-form-group>
        </b-col>

      </b-row>
      <b-row>
        <!-- Field: Username -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Note"

          >
            <b-form-textarea
                :disabled="inhabilitar === false || savedInfo === true"
                :v-model="inhabilitar === true || savedInfo === false ? dataSelfpaids.note : SelfpaidsData.note"
            />
          </b-form-group>
        </b-col>
      </b-row>
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
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import {mapGetters} from "vuex";

export default {
  name: "ProfileSelfpaids",
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
      inhabilitar: false,
      savedInfo: false,
      SelfpaidsData: {
        name: '',
        lastname: '',
        gender: '',
        birthday: '',
        phone_number: '',
        email: '',
        address: '',
        city: '',
        note: '',
      }
    }
  },
  computed: {
    ...mapGetters({
      dataSelfpaids: 'Users/usersData'
    })
  },
  watch: {
    'savedInfo'() {
      if (this.savedInfo === true) {
        this.inhabilitar = false;
        this.savedInfo = false;
      }
    }
  },
  methods: {
    ProfileName(name) {
      if (this.dataSelfpaids.profile_picture === null) {
        return name.charAt(0).toUpperCase() + name.charAt(1).toUpperCase();
      } else {
        return this.dataSelfpaids.profile_picture;
      }
    },
    editSelfpaid() {

    },
    deleteSelfpaid() {
      this.$swal({
        title: 'Please, wait...',
        didOpen: () => {
          this.$swal.showLoading()
        },
      })
      let idDelete = this.$store.getters["Users/usersData"].client_id;
      this.$http.post(`admin/panel/selfpay/${idDelete}/delete`)
          .then((res) => {
            this.$swal({
              title: res.data.data,
              icon: 'success',
              customClass: {
                confirmButton: 'btn btn-primary',
              },
              buttonsStyling: false,
            }).then((result) => {
              if (result.isConfirmed) {
                this.$router.push({name: 'all-selfpaids'})
              }
            })

          }).catch((error) => {
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
