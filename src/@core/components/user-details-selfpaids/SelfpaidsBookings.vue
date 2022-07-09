<template>
  <div v-if="dataBookingSelfpaid !== ''">
    <!-- form Admin -->
    <b-form class="mb-4" v-for="(bookings, i ,index) in dataBookingSelfpaid.booking" :key="index">
      <div class="d-flex align-items-center mb-2">
        <h3 class="circle-number-additional mr-1">{{ i + 1 }}</h3>
        <h3>Booking</h3>
      </div>
      <hr>
      <b-row>
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
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Booking date"
          >
            <b-form-input
                disabled
                v-model="bookings.booking_date"
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
                v-model="bookings.pickup_time"
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
                v-model="'$ ' + bookings.price"
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
                v-model="bookings.city"
            />
          </b-form-group>
        </b-col>
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Surgery type"

          >
            <b-form-input
                v-model="bookings.surgery_type"
                disabled

            />
          </b-form-group>
        </b-col>
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Appoinment datetime"
          >
            <b-form-input
                disabled
                v-model="bookings.appoinment_datetime"
            />
          </b-form-group>
        </b-col>
        <b-col
            cols="12"
            md="3"
        >
          <b-form-group
              label="Trip start"

          >
            <b-form-input
                v-model="bookings.trip_start"
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
                v-model="bookings.trip_end"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>


    <!-- ADDITIONAL STOP  -->
    <!--    <template v-if="dataProvider.additional_service.length > 0">-->
    <!--      <b-form v-for="(dataservice, key, index) in dataProvider.additional_service" :key="index">-->
    <!--        <template>-->
    <!--          <h3>Addittional stop # {{ key + 1 }}</h3>-->
    <!--          <b-row>-->
    <!--            &lt;!&ndash; Field: Username &ndash;&gt;-->
    <!--            <b-col-->
    <!--                cols="12"-->
    <!--                md="3"-->
    <!--            >-->
    <!--              <b-form-group-->
    <!--                  label="Service"-->

    <!--              >-->
    <!--                <b-form-input-->
    <!--                    v-model="dataBookingSelfpaid.service"-->
    <!--                    disabled-->

    <!--                />-->
    <!--              </b-form-group>-->
    <!--            </b-col>-->

    <!--            &lt;!&ndash; Field: Full Name &ndash;&gt;-->
    <!--            <b-col-->
    <!--                cols="12"-->
    <!--                md="3"-->
    <!--            >-->
    <!--              <b-form-group-->
    <!--                  label="To"-->
    <!--              >-->
    <!--                <b-form-input-->
    <!--                    disabled-->
    <!--                    v-model="dataBookingSelfpaid.to"-->
    <!--                />-->
    <!--              </b-form-group>-->
    <!--            </b-col>-->
    <!--            <b-col-->
    <!--                cols="12"-->
    <!--                md="3"-->
    <!--            >-->
    <!--              <b-form-group-->
    <!--                  label="Time"-->
    <!--              >-->
    <!--                <b-form-input-->
    <!--                    disabled-->
    <!--                    v-model="dataBookingSelfpaid.time"-->
    <!--                />-->
    <!--              </b-form-group>-->
    <!--            </b-col>-->
    <!--            <b-col-->
    <!--                cols="12"-->
    <!--                md="3"-->
    <!--            >-->
    <!--              <b-form-group-->
    <!--                  label="Price"-->
    <!--              >-->
    <!--                <b-form-input-->
    <!--                    disabled-->
    <!--                    v-model="'$ ' + dataBookingSelfpaid.price"-->
    <!--                />-->
    <!--              </b-form-group>-->
    <!--            </b-col>-->
    <!--          </b-row>-->
    <!--        </template>-->
    <!--      </b-form>-->
    <!--    </template>-->
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

export default {
  name: "SelfpaidsBookings",
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
  data() {
    return {
      reserva: {
        from: '',
        to: {
          from: '',
        },
      },
      dataBookingSelfpaid: {}
    }
  },
  mounted() {
    this.dataBookingSelfpaid = this.$store.getters['Users/usersData'];
    for (let bookingKey of this.$store.getters['Users/usersData'].booking) {
      console.log(JSON.parse(bookingKey.from))
      this.reserva.from = JSON.parse(bookingKey.from);
    }
    for (let bookingTo of this.$store.getters['Users/usersData'].booking) {
      console.log(JSON.parse(bookingTo.to))
      this.reserva.to = JSON.parse(bookingTo.to);
    }
  },
  // beforeUpdate() {
  //   for (let bookingKey of this.$store.getters['Users/usersData'].booking) {
  //     console.log(JSON.parse(bookingKey.from))
  //     this.reserva.from = JSON.parse(bookingKey.from);
  //   }
  //   for (let bookingTo of this.$store.getters['Users/usersData'].booking) {
  //     console.log(JSON.parse(bookingTo.to))
  //     this.reserva.to = JSON.parse(bookingTo.to);
  //   }
  // }
}
</script>

<style scoped>
.circle-number-additional {
  background-color: #332b7b;
  padding: 5px 12px;
  border-radius: 16px;
  color: white;

}
</style>