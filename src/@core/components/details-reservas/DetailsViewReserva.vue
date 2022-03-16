<template>
  <div>
    <!-- Media -->
    <b-media class="mb-2">
      <template #aside>
        <b-avatar
            ref="previewEl"
            :src="ProfileName(dataProvider.self_pay.name)"
            size="90px"
            rounded
            class="backgroundProfile-driver"
        >
          <p class="text-name-driver" v-if='dataProvider.self_pay.profile_picture === null'>
            {{ ProfileName(dataProvider.self_pay.name) }}
          </p>
        </b-avatar>
      </template>
      <h4 class="">
        {{ dataProvider.self_pay.name }} ( <span style="font-size: 0.9rem">
        {{ dataProvider.self_pay.email }}
      </span>)
      </h4>

<!--      <div class="d-flex flex-wrap">-->
<!--        <b-button-->
<!--            variant="primary"-->
<!--            class="ml-1"-->
<!--        >-->
<!--          <span class="d-none d-sm-inline">Approve</span>-->
<!--          <feather-icon-->
<!--              icon="TrashIcon"-->
<!--              class="d-inline d-sm-none"-->
<!--          />-->
<!--        </b-button>-->
<!--      </div>-->
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
              label="Lastname"
          >
            <b-form-input
                disabled
                v-model="dataProvider.self_pay.lastname"
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
                v-model="dataProvider.self_pay.gender"
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
                v-model="dataProvider.self_pay.birthday"
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
              label="Phone number"

          >
            <b-form-input
                v-model="dataProvider.self_pay.phone_number"
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
                v-model="dataProvider.self_pay.email"
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
                v-model="dataProvider.self_pay.address"
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
              label="City"
          >
            <b-form-input
                disabled
                v-model="dataProvider.self_pay.city"
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
              label="Note"

          >
            <b-form-textarea
                disabled
                v-model="dataProvider.self_pay.note"
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
  name: 'DetailsViewReserva',
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
      if(this.dataProvider.self_pay.profile_picture === null){
        return name.charAt(0).toUpperCase() + name.charAt(1).toUpperCase();
      }else {
        return this.dataProvider.self_pay.profile_picture;
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
