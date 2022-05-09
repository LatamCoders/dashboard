<template>
  <div v-if="infoUser !== ''">

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
    <b-form class="mt-1" v-if="$store.getters['Users/userData'].user.role.id === 1 || $store.getters['Users/userData'].user.role.id === 2 ">
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
                v-model="infoUser.corporate_account_personal_info.telephone_number"
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

                v-model="infoUser.corporate_account_personal_info.fax_number"
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
                v-model="infoUser.corporate_account_personal_info.email"
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
                v-model="infoUser.corporate_account_personal_info.website"
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
                v-model="infoUser.corporate_account_personal_info.additional_contact_name"
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
                v-model="infoUser.corporate_account_personal_info.additional_contact_number"
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
                v-model="infoUser.corporate_account_personal_info.additional_contact_email"
                disabled
            />
          </b-form-group>
        </b-col>

      </b-row>
    </b-form>

    <!-- Info corporate account -->
    <b-form class="mt-1" v-else>
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
                v-model="infoCa.telephone_number"
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

                v-model="infoCa.fax_number"
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
                v-model="infoCa.email"
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
                v-model="infoCa.website"
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
                v-model="infoCa.additional_contact_name"
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
                v-model="infoCa.additional_contact_number"
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
                v-model="infoCa.additional_contact_email"
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
  BRow, BCol, BForm, BFormGroup, BFormInput, BFormRadioGroup, BFormCheckboxGroup, BButton,
} from 'bootstrap-vue'
import flatPickr from 'vue-flatpickr-component'
import vSelect from 'vue-select'
import { mapGetters } from 'vuex'

export default {
  components: {
    BRow, BCol, BForm, BFormGroup, flatPickr, BFormInput, vSelect, BFormRadioGroup, BFormCheckboxGroup, BButton,
  },
  props: {
    infoCa: {}
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      infoUser: 'Users/usersData'
    })
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
