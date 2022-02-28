<template>
  <div>
    <!-- form Admin -->
    <b-form>
      <b-row>
        <!-- Field: Username -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Name patient"
          >
            <b-form-input
                disabled
                v-model="dataProvider.self_pay.name"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Full Name -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Booking date"
          >
            <b-form-input
                disabled
                v-model="dataProvider.booking_date"
            />
          </b-form-group>
        </b-col>
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Pickup time"
          >
            <b-form-input
                disabled
                v-model="dataProvider.pickup_time"
            />
          </b-form-group>
        </b-col>
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="City"
          >
            <b-form-input
                disabled
                v-model="dataProvider.city"
            />
          </b-form-group>
        </b-col>

      </b-row>
    </b-form>

    <!-- form corporate -->
    <b-form >
      <b-row>
        <!-- Field: Username -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Surgery type"

          >
            <b-form-input
                v-model="dataProvider.surgery_type"
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
              label="Appoinment datetime"
          >
            <b-form-input
                disabled
                v-model="dataProvider.appoinment_datetime"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Email -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="From"
          >
            <b-form-input
                v-model="dataProvider.from"
                disabled
            />
          </b-form-group>
        </b-col>
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="To"
          >
            <b-form-input
                v-model="dataProvider.to"
                disabled
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>


    <b-form>
      <b-row>
        <!-- Field: Username -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Trip start"

          >
            <b-form-input
                v-model="dataProvider.trip_start"
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
              label="Trip end"
          >
            <b-form-input
                disabled
                v-model="dataProvider.trip_end"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>


    <!-- ADDITIONAL STOP  -->
    <b-form v-if="dataProvider.additional_service.length > 0">
      <h3>Addittional stop</h3>
      <b-row>
        <!-- Field: Username -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Service"

          >
            <b-form-input
                v-model="dataProvider.trip_start"
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
              label="To"
          >
            <b-form-input
                disabled
                v-model="dataProvider.trip_end"
            />
          </b-form-group>
        </b-col>
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Time"
          >
            <b-form-input
                disabled
                v-model="dataProvider.trip_end"
            />
          </b-form-group>
        </b-col>
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Price"
          >
            <b-form-input
                disabled
                v-model="dataProvider.trip_end"
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
  name: 'DetailsInfoService',
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
    getServiceAditional () {
      for (let i = 0;  i < this.dataProvider.length; i++ ){
        console.log(i)
      }
    }
  },
  mounted() {
    this.getServiceAditional()
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
