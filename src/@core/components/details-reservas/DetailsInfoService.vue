<template>
  <div v-if="dataProvider !== ''">
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
                v-model="dataProvider.self_pay.name + ' '+ dataProvider.self_pay.lastname "
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
    <b-form>
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
            <b-form-textarea
                v-model="reserva.from.from"
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
            <b-form-textarea
                v-model="reserva.to.from"
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
      <hr>

    </b-form>
    <b-form>
      <b-row>
        <!-- Field: Username -->
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Facility Name"

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
              label="Doctor's Name"
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
              label=" Facility Phone Number "
          >
            <b-form-input
                disabled
                v-model="dataProvider.trip_end"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <hr>

    </b-form>


    <!-- ADDITIONAL STOP  -->
    <template v-if="dataProvider.additional_service.length > 0">
      <b-form v-for="(dataservice, key, index) in dataProvider.additional_service" :key="index">
        <template>
          <div class="d-flex align-items-center mb-2">
            <h3 class="circle-number-additional mr-1">{{ key + 1 }}</h3>
            <h3>Addittional stop </h3>
          </div>
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
                    v-model="dataservice.service"
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
                    v-model="dataservice.to"
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
                    v-model="dataservice.time"
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
                    v-model="'$ ' + dataservice.price"
                />
              </b-form-group>
            </b-col>
          </b-row>
          <hr>
        </template>
      </b-form>
    </template>
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
  VBTooltip,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import {mapGetters} from "vuex";

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
    dataService: {},
    ejecutar: {
      type: Boolean
    }
  },
  data() {
    return {
      reserva: {
        from: '',
        to: {
          from: '',
        },
      },
    }
  },
  computed: {
    ...mapGetters({
      dataProvider: "Users/usersData"
    })
  },
  // methods: {
  //   infoTravel() {
  //     if (this.dataService.from !== '' && this.dataService.to !== '') {
  //       this.reserva.from = JSON.parse(this.dataService.from);
  //       this.reserva.to = JSON.parse(this.dataService.to);
  //     }
  //
  //   }
  // },
  beforeUpdate() {
    this.reserva.from = JSON.parse(this.dataService.from);
    this.reserva.to = JSON.parse(this.dataService.to);
  }

}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';

.circle-number-additional {
  background-color: #332b7b;
  padding: 5px 12px;
  border-radius: 16px;
  color: white;

}
</style>
