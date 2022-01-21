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
      <h4 class="mb-1">
        {{ userData.name }}
      </h4>
      <div class="d-flex flex-wrap">
        <b-button
            variant="primary"

        >
          <span class="d-none d-sm-inline">Update</span>
          <feather-icon
              icon="EditIcon"
              class="d-inline d-sm-none"
          />
        </b-button>
        <b-button
            v-if="userData.role.id === 2"
            variant="outline-secondary"
            class="ml-1"
        >
          <span class="d-none d-sm-inline">Remove</span>
          <feather-icon
              icon="TrashIcon"
              class="d-inline d-sm-none"
          />
        </b-button>
      </div>
    </b-media>

    <!-- User Info: Input Fields -->
    <b-form>
      <b-row>
        <!-- Field: Username -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Company Legal Name"

          >
            <b-form-input
                v-model="userData.corporate_account.company_legal_name"
                disabled

            />
          </b-form-group>
        </b-col>

        <!-- Field: Full Name -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="DBA"
          >
            <b-form-input
                v-model="userData.corporate_account.dba"
                disabled
            />
          </b-form-group>
        </b-col>

        <!-- Field: Email -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Company Type"
          >
            <b-form-input
                v-model="userData.corporate_account.company_type"
                disabled
            />
          </b-form-group>
        </b-col>

        <!-- Field: Email -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="TIN"
          >
            <b-form-input
              v-model="userData.corporate_account.tin"
              disabled
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
              label="Nature of Business"

          >
            <b-form-input
                v-model="userData.corporate_account.nature_of_business"
                disabled

            />
          </b-form-group>
        </b-col>

        <!-- Field: Full Name -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Contract start Date"
          >
            <b-form-input
                v-model="userData.corporate_account.contract_start_date"
                disabled
            />
          </b-form-group>
        </b-col>

        <!-- Field: Email -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Office Location Address"
          >
            <b-form-input
                v-model="userData.corporate_account.office_location_address"
                disabled
            />
          </b-form-group>
        </b-col>

        <!-- Field: Email -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Billing Address"
          >
            <b-form-input
                v-model="userData.corporate_account.billing_address"
                disabled
            />
          </b-form-group>
        </b-col>

      </b-row>
    </b-form>


    <!-- Action Buttons -->
<!--    <b-button-->
<!--        variant="primary"-->
<!--        class="mb-1 mb-sm-0 mr-0 mr-sm-1"-->
<!--        :block="$store.getters['app/currentBreakPoint'] === 'xs'"-->
<!--    >-->
<!--      Save Changes-->
<!--    </b-button>-->
<!--    <b-button-->
<!--        variant="outline-secondary"-->
<!--        type="reset"-->
<!--        :block="$store.getters['app/currentBreakPoint'] === 'xs'"-->
<!--    >-->
<!--      Reset-->
<!--    </b-button>-->
  </div>
</template>

<script>
import {
  BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BTable, BCard, BCardHeader, BCardTitle, BFormCheckbox,
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import vSelect from 'vue-select'
import { useInputImageRenderer } from '@core/comp-functions/forms/form-utils'
import { ref } from '@vue/composition-api'
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
  setup() {
    return {
    }
  },
  // mounted() {
  //   console.log(this.userData)
  // }
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
