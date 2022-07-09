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
        {{ userData.name }} ( <span style="font-size: 0.9rem">
        {{ userData.email }}
      </span>)
      </h4>

      <div class="d-flex flex-wrap">
        <b-button
            :variant="inhabilitar === true ? 'primary' : 'outline-secondary'"
            @click="inhabilitar = false"
        >
          <span class="d-none d-sm-inline">Edit</span>
          <feather-icon
              icon="EditIcon"
              class="d-inline d-sm-none"
          />
        </b-button>

        <b-button
            v-if="inhabilitar ===  false"
            :variant="inhabilitar === true ? 'primary' : 'primary' "
            class="ml-1"
            @click="saveChanges"
        >
          <span class="d-none d-sm-inline">Save</span>
          <feather-icon
              icon="TrashIcon"
              class="d-inline d-sm-none"
          />
        </b-button>
      </div>
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
                v-model="userData.name"
                disabled

            />
          </b-form-group>
        </b-col>
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Lastname"

          >
            <b-form-input
                v-model="userData.lastname"
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
              label="Email"
          >
            <b-form-input
                v-model="userData.email"
                :disabled="inhabilitar === true"
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
                v-model="userData.birthday"
                disabled
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
                v-model="userData.gender"
                disabled
            />
          </b-form-group>
        </b-col>
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Phone number"
          >
            <b-form-input
                v-model="userData.phone_number"
                :disabled="inhabilitar === true"
            />
          </b-form-group>
        </b-col>
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Note"
          >
            <b-form-textarea
                v-model="userData.note"
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
              label="City"
          >
            <b-form-input
                v-model="userData.city"
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
              label="Address"
          >
            <b-form-input
                v-model="userData.address"
                placeholder="Los Santos"
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
  BFormTextarea,
} from 'bootstrap-vue'
import vSelect from 'vue-select'


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
    BFormTextarea,
    vSelect,
  },
  props: {
    userData: {},
  },
  data() {
    return {
      inhabilitar: true,
    }
  },
  methods: {
    saveChanges() {
      this.$swal({
        title: 'Changes saved',
        icon: 'success',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
      this.inhabilitar = true;
    },
    ProfileName(name) {
      if (this.userData.profile_picture === null) {
        return name.charAt(0).toUpperCase() + name.charAt(1).toUpperCase();
      } else {
        return this.userData.profile_picture;
      }
    },

  },
  // mounted() {
  //   console.log(this.userData)
  // }
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
