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
                v-model="userData.name +' '+ userData.lastname "
                disabled
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
              label="Gender"
          >
            <b-form-input
                v-model="userData.gender"
                disabled
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
              label="Birthday"
          >
            <b-form-input
                v-model="userData.birthday"
                disabled
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="mt-2">
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
                disabled
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
              label="Address"
          >
            <b-form-input
                v-model="userData.address"
                disabled
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
        >
          Update
        </b-button>
<!--        <b-button-->
<!--            variant="outline-secondary"-->
<!--            type="reset"-->
<!--            :block="$store.getters['app/currentBreakPoint'] === 'xs'"-->
<!--        >-->
<!--          Reset-->
<!--        </b-button>-->
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
  setup() {
    return {}
  },
  // mounted() {
  //   console.log(this.userData)
  // }
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
