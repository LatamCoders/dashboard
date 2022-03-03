<template>
  <div>

    <!-- Media -->
    <b-media class="mb-2">
      <template #aside>
        <b-avatar
            ref="previewEl"
            src="@/assets/images/avatars/13-small.png"
            size="90px"
            rounded
        />
      </template>
      <h4 class="">
        {{ userData.amera_user.name }} ( <span style="font-size: 0.9rem">
        {{ userData.amera_user.email }}
      </span>)
      </h4>

      <div class="d-flex flex-wrap">
        <b-button
            :variant="inhabilitar === true ? 'primary' : 'outline-secondary'"
            @click="inhabilitar = false"
        >
          <span class="d-none d-sm-inline">Update</span>
          <feather-icon
              icon="EditIcon"
              class="d-inline d-sm-none"
          />
        </b-button>
        <b-button
            v-if="userData.amera_user.role.id === 3 && inhabilitar ===  false"
            :variant="inhabilitar === true ? 'primary' : 'primary' "
            class="ml-1"
        >
          <span class="d-none d-sm-inline">Saved</span>
          <feather-icon
              icon="TrashIcon"
              class="d-inline d-sm-none"
          />
        </b-button>
        <b-button
            :variant="inhabilitar === true ? 'primary' : 'primary' "
            class="ml-1"
            @click="aprobarCA"
            v-if="userData.amera_user.status === 0"
        >
          <span class="d-none d-sm-inline">Approve</span>
          <feather-icon
              icon="TrashIcon"
              class="d-inline d-sm-none"
          />
        </b-button>
      </div>
    </b-media>

    <!-- form corporate -->
    <b-form >
      <b-row>
        <!-- Field: Username -->
        <b-col
            cols="12"
            md="4"
        >
          <b-form-group
              label="Company Legal Name"

          >
            <b-form-input
                v-model="userData.company_legal_name"
                disabled

            />
          </b-form-group>
        </b-col>

        <!-- Field: Full Name -->
        <b-col
            cols="12"
            md="4"
        >
          <b-form-group
              label="DBA"
          >
            <b-form-input
                v-model="userData.dba"
                disabled
            />
          </b-form-group>
        </b-col>


        <!-- Field: Email -->
        <b-col
            cols="12"
            md="4"
        >
          <b-form-group
              label="TIN"
          >
            <b-form-input
                v-model="userData.tin"
                disabled
            />
          </b-form-group>
        </b-col>

      </b-row>
      <b-row>
        <!-- Field: Full Name -->
        <b-col
            cols="12"
            md="4"
        >
          <b-form-group
              label="Contract start Date"
          >
            <b-form-input
                v-model="userData.contract_start_date"
                disabled
            />
          </b-form-group>
        </b-col>

        <!-- Field: Email -->
        <b-col
            cols="12"
            md="4"
        >
          <b-form-group
              label="Office Location Address"
          >
            <b-form-input
                v-model="userData.office_location_address"
                disabled
            />
          </b-form-group>
        </b-col>

        <!-- Field: Email -->
        <b-col
            cols="12"
            md="4"
        >
          <b-form-group
              label="Billing Address"
          >
            <b-form-input
                v-model="userData.billing_address"
                disabled
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
  BForm,
  BTable,
  BCard,
  BCardHeader,
  BCardTitle,
  BFormCheckbox,
} from 'bootstrap-vue'

import vSelect from 'vue-select'

export default {
  name: 'UserProfileClientCorporateAcount',
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
      inhabilitar: true,
      changeStatus: {
        userId: '',
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
        {
          text: 'Corporate account',
          value: 3
        },
      ],
    }
  },
  methods: {
    aprobarCA() {
      this.changeStatus.userId = this.userData.amera_user.id;
      this.$http.post('admin/panel/users/change-user-status', this.changeStatus)
          .then((response) => {
            this.$swal({
              title: response.data.message,
              icon: 'success',
              customClass: {
                confirmButton: 'btn btn-primary',
              },
              buttonsStyling: false,
            })
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
  mounted() {
    console.log(this.userData)
  }
}
</script>

<style scoped>

</style>
