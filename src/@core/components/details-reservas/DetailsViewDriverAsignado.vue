<template>
  <div>
    <b-media class="mb-2" v-if="dataProvider.driver_id !== null">
      <template #aside>
        <b-avatar
            ref="previewEl"
            :src="ProfileName(dataProvider.driver.name)"
            size="90px"
            rounded
            class="backgroundProfile-driver"
        >
          <p class="text-name-driver">
            {{ ProfileName(dataProvider.driver.name) }}
          </p>
        </b-avatar>
      </template>
      <h4 class="" >
        {{ dataProvider.driver.name }} ( <span style="font-size: 0.9rem">
        {{ dataProvider.driver.email }}
      </span>)
      </h4>
    </b-media>
    <h4 class="pt-1 my-3 text-center" style="color: #ff0000" v-if="dataProvider.driver_id === null">
      No driver assigned</h4>
    <!-- form Admin -->
    <b-form v-if="dataProvider.driver_id !== null">
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
                disabled
                v-model="dataProvider.driver.name"
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
                disabled
                v-model="dataProvider.driver.lastname"
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
                disabled
                v-model="dataProvider.driver.gender"
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
                disabled
                v-model="dataProvider.driver.birthday"
            />
          </b-form-group>
        </b-col>

      </b-row>
    </b-form>

    <!-- form corporate -->
    <b-form v-if="dataProvider.driver_id !== null">
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
                v-model="dataProvider.driver.phone_number"
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
                disabled
                v-model="dataProvider.driver.email"
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
                v-model="dataProvider.driver.address"
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


export default {
  name: 'DetailsViewDriverAsignado',
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
  props: {
    dataProvider: {},
  },
  data() {
    return {}
  },
  methods: {
    ProfileName(name) {
      if(this.dataProvider.driver.profile_picture === null){
        return name.charAt(0).toUpperCase() + name.charAt(1).toUpperCase();
      }else {
        return this.this.dataProvider.driver.profile_picture;
      }
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
.backgroundProfile-driver{
  background-color: $primary;
}
</style>
