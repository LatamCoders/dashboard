<template>
  <div>

    <!-- Header: Personal Info -->
    <div class="d-flex">
      <feather-icon
          icon="UserIcon"
          size="19"
      />
      <h4 class="mb-0 ml-50">
        Personal Information
      </h4>
    </div>

    <!-- Form: Personal Info Form -->
    <b-form class="mt-1">
      <b-row>

        <!-- Field: Birth Date -->
        <b-col
            cols="12"
            md="6"
            lg="4"
        >
          <b-form-group
              label="Telephone Number"
          >
            <b-form-input
                v-model="infoUser.telephone_number"
                disabled
            />
          </b-form-group>
        </b-col>

        <!-- Field: Mobile -->
        <b-col
            cols="12"
            md="6"
            lg="4"
        >
          <b-form-group
              label="Fax Number"

          >
            <b-form-input

                v-model="infoUser.fax_number"
                disabled
            />
          </b-form-group>
        </b-col>

        <!-- Field: Website -->
        <b-col
            cols="12"
            md="6"
            lg="4"
        >
          <b-form-group
              label="Email"
          >
            <b-form-input
                disabled
                v-model="infoUser.email"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Language -->
        <b-col
            cols="12"
            md="6"
            lg="4"
        >
          <b-form-group
              label="Website"
          >
            <b-form-input
                v-model="infoUser.website"
                disabled
            />
          </b-form-group>
        </b-col>

        <!-- Field: Gender -->
        <b-col
            cols="12"
            md="6"
            lg="4"
        >
          <b-form-group
              label="Contact Name"
          >
            <b-form-input
                id="gender"
                v-model="infoUser.contact_name"
                disabled
            />
          </b-form-group>
        </b-col>

        <!-- Field: Contact Options -->
        <b-col
            cols="12"
            md="6"
            lg="4"
        >
          <b-form-group
              label="Contact Number"

          >
            <b-form-input
                v-model="infoUser.contact_number"
                disabled
            />
          </b-form-group>
        </b-col>
      </b-row>

      <!-- Header: Personal Info -->
      <div class="d-flex mt-2">
        <feather-icon
            icon="UserPlusIcon"
            size="19"
        />
        <h4 class="mb-0 ml-50">
          Additional info
        </h4>
      </div>

      <!-- Form: Personal Info Form -->
      <b-row class="mt-1">

        <!-- Field: Address Line 1 -->
        <b-col
            cols="12"
            md="6"
            lg="4"
        >
          <b-form-group
              label="Additional Contact Name"
          >
            <b-form-input
                v-model="infoUser.additional_contact_name"
                disabled
            />
          </b-form-group>
        </b-col>

        <!-- Field: Address Line 2 -->
        <b-col
            cols="12"
            md="6"
            lg="4"
        >
          <b-form-group
              label="Additional Contact Title"
          >
            <b-form-input
                v-model="infoUser.additional_contact_title"
                placeholder="Los Santos"
                disabled
            />
          </b-form-group>
        </b-col>

        <!-- Field: Postcode -->
        <b-col
            cols="12"
            md="6"
            lg="4"
        >
          <b-form-group
              label="Additional Contact Number"
          >
            <b-form-input
                v-model="infoUser.additional_contact_number"
                disabled
            />
          </b-form-group>
        </b-col>

        <!-- Field: City -->
        <b-col
            cols="12"
            md="6"
            lg="4"
        >
          <b-form-group
              label="Additional Contact Email"
          >
            <b-form-input
                id="city"
                v-model="infoUser.additional_contact_email"
                disabled
            />
          </b-form-group>
        </b-col>

      </b-row>

<!--      <b-row class="mt-2">-->
<!--        <b-col>-->
<!--          <b-button-->
<!--              variant="primary"-->
<!--              class="mb-1 mb-sm-0 mr-0 mr-sm-1"-->
<!--              :block="$store.getters['app/currentBreakPoint'] === 'xs'"-->
<!--          >-->
<!--            Save Changes-->
<!--          </b-button>-->
<!--          <b-button-->
<!--              variant="outline-secondary"-->
<!--              :block="$store.getters['app/currentBreakPoint'] === 'xs'"-->
<!--          >-->
<!--            Reset-->
<!--          </b-button>-->
<!--        </b-col>-->
<!--      </b-row>-->
    </b-form>
  </div>
</template>

<script>
import {
  BRow, BCol, BForm, BFormGroup, BFormInput, BFormRadioGroup, BFormCheckboxGroup, BButton,
} from 'bootstrap-vue'
import flatPickr from 'vue-flatpickr-component'
import {ref} from '@vue/composition-api'
import vSelect from 'vue-select'

export default {
  components: {
    BRow, BCol, BForm, BFormGroup, flatPickr, BFormInput, vSelect, BFormRadioGroup, BFormCheckboxGroup, BButton,
  },
  props: {
    infoUser: {},
  },
  setup() {
  },
  // mounted() {
  //   console.log(this.infoUser)
  // }
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
