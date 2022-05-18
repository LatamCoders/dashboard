<template>
  <div>

    <!-- Media -->
    <b-media class="mb-2">
      <template #aside>
        <b-avatar
            size="70px"
            rounded
            class="backgroundProfile"
        >
          <p class="text-name">
            {{ ProfileName(userData.name) }}
          </p>
        </b-avatar>
      </template>
      <h4 class="">
        {{ userData.name }} ( <span style="font-size: 0.9rem">
        {{ userData.email }}
      </span>)
      </h4>

      <div class="d-flex flex-wrap">
        <b-button
            :variant="inhabilitar === false ? 'primary' : 'outline-secondary'"
            @click="savedInfo === true ? inhabilitar = true : inhabilitar = true"
        >
          <span class="d-none d-sm-inline">Update</span>
          <feather-icon
              icon="EditIcon"
              class="d-inline d-sm-none"
          />
        </b-button>
        <b-button
            v-if="$store.getters['Users/userData'].user.role.id === 3 && inhabilitar ===  true && savedInfo === false"
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
<!--        <b-button-->
<!--            v-if="userData.role.id === 2"-->
<!--            variant="outline-secondary"-->
<!--            class="ml-1"-->
<!--        >-->
<!--          <span class="d-none d-sm-inline">Remove</span>-->
<!--          <feather-icon-->
<!--              icon="TrashIcon"-->
<!--              class="d-inline d-sm-none"-->
<!--          />-->
<!--        </b-button>-->
      </div>
    </b-media>

    <!-- form Admin -->
    <b-form v-if="userData.role.id === 2">
      <b-row>
        <!-- Field: Username -->
        <b-col
            cols="12"
            md="4"
        >
          <b-form-group
              label="Name"

          >
            <b-form-input
                v-model="userData.amera_admin.name"
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
              label="Email"
          >
            <b-form-input
                v-model="userData.amera_admin.email"
                :disabled="inhabilitar === false || savedInfo === true"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>

       <!-- form corporate -->
    <b-form v-if="userData.role.id === 3">
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
                v-model="userData.corporate_account.company_legal_name"
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
                v-model="userData.corporate_account.dba"
                :disabled="inhabilitar === false || savedInfo === true"
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
                v-model="userData.corporate_account.tin"
                :disabled="inhabilitar === false || savedInfo === true"
            />
          </b-form-group>
        </b-col>

      </b-row>
      <b-row>
        <!-- Field: Full Name -->
<!--        <b-col-->
<!--            cols="12"-->
<!--            md="4"-->
<!--        >-->
<!--          <b-form-group-->
<!--              label="Contract start Date"-->
<!--          >-->
<!--            <b-form-input-->
<!--                v-model="userData.corporate_account.contract_start_date"-->
<!--                disabled-->
<!--            />-->
<!--          </b-form-group>-->
<!--        </b-col>-->

        <!-- Field: Email -->
        <b-col
            cols="12"
            md="4"
        >
          <b-form-group
              label="Office Location Address"
          >
            <b-form-input
                v-model="userData.corporate_account.office_location_address"
                :disabled="inhabilitar === false || savedInfo === true"
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
  data() {
    return {
      nameProfile: '',
      inhabilitar: false,
      savedInfo: false,
    }
  },
  watch: {
    'savedInfo'() {
      if(this.savedInfo === true){
        this.inhabilitar = false;
        this.savedInfo = false;
      }
    }
  },
  methods: {
    ProfileName(name) {
      return name.charAt(0).toUpperCase() + name.charAt(1).toUpperCase();
    }
  },

}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';

.text-name {
  font-size: 1.5rem;
  margin-bottom: 0 !important;
}
.backgroundProfile{
  background-color: $primary;
}
</style>
