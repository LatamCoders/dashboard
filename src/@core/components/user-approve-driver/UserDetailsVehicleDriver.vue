<template>
  <div>

    <!-- Header: Personal Info -->
    <div class="d-flex">
      <feather-icon
          icon="InfoIcon"
          size="19"
      />
      <h4 class="mb-0 ml-50">
        Vehicle Information
      </h4>
    </div>
    <!-- Form: Personal Info Form -->
    <b-form class="mt-1">
      <b-row>

        <!-- Field: Birth Date -->
        <b-col
            cols="12"
            md="6"
            lg="4"
        >
          <b-form-group
              label="Model"
          >
            <b-form-input
                v-model="userVehicle.vehicle.model"
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
              label="Color"

          >
            <b-form-input

                v-model="userVehicle.vehicle.color"
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
              label="Year"
          >
            <b-form-input
                disabled
                v-model="userVehicle.vehicle.year"
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
              label="Plate number"
          >
            <b-form-input
                v-model="userVehicle.vehicle.plate_number"
                disabled
            />
          </b-form-group>
        </b-col>

        <!-- Field: Gender -->
        <b-col
            cols="12"
            md="6"
            lg="4"
        >
          <b-form-group
              label="VIN number"
          >
            <b-form-input
                v-model="userVehicle.vehicle.vin_number"
                disabled
            />
          </b-form-group>
        </b-col>

      </b-row>

      <!-- Header: Personal Info -->
      <div class="d-flex mt-2">
        <feather-icon
            icon="MapPinIcon"
            size="19"
        />
        <h4 class="mb-0 ml-50">
          Vehicle Documents
        </h4>
      </div>

      <!-- Form: Personal Info Form -->
      <b-row class="mt-1">

        <!-- Field: Address Line 1 -->
        <b-col
            cols="12"
            md="6"
            lg="4"
            class="container-docs"
            style="height: 300px"
        >
          <b-form-group
              label="Vehicle front image"
          >
          </b-form-group>
          <b-img
              style="border-radius: 5px"
              :src="userVehicle.vehicle.vehicle_documents.vehicle_front_image"
          >
          </b-img>
          <template v-if="userVehicle.vehicle.vehicle_documents.vehicle_front_image_verify_at === undefined  || userVehicle.vehicle.vehicle_documents.vehicle_front_image_verify_at === null"  >
            <btn-validation-docs-driver
                :nameVehicle="userVehicle.vehicle.vehicle_documents"
                :idUserVehicle="userVehicle.id"
                @click="btnfront = true"
                :valueBtnfront="btnfront"
            />
          </template>

        </b-col>

        <!-- Field: Address Line 2 -->
        <b-col
            cols="12"
            md="6"
            lg="4"
            class="container-docs"
        >
          <b-form-group
              label="Vehicle rear image"
          >
          </b-form-group>
          <b-img
              style="border-radius: 5px"
              :src="userVehicle.vehicle.vehicle_documents.vehicle_rear_image"
          ></b-img>
          <template v-if="userVehicle.vehicle.vehicle_documents.vehicle_rear_image_verify_at === undefined || userVehicle.vehicle.vehicle_documents.vehicle_rear_image_verify_at === null"  >
            <btn-validation-docs-driver
                :nameVehicle="userVehicle.vehicle.vehicle_documents"
                :idUserVehicle="userVehicle.id"
                :valueBtnrear="btnrear"
            />
          </template>
        </b-col>

        <!-- Field: Postcode -->
        <b-col
            cols="12"
            md="6"
            lg="4"
            class="container-docs"
        >
          <b-form-group
              label="Vehicle side image"
          >
          </b-form-group>
          <b-img
              style="border-radius: 5px"
              :src="userVehicle.vehicle.vehicle_documents.vehicle_side_image"
          ></b-img>
          <template v-if="userVehicle.vehicle.vehicle_documents.vehicle_side_image_verify_at === undefined || userVehicle.vehicle.vehicle_documents.vehicle_side_image_verify_at === null"  >
            <btn-validation-docs-driver
                :nameVehicle="userVehicle.vehicle.vehicle_documents"
                :idUserVehicle="userVehicle.id"
                :valueBtnSide="btnsideimg"
            />
          </template>
        </b-col>

        <!-- Field: City -->
        <b-col
            cols="12"
            md="6"
            lg="4"
            class="container-docs"
            style="height: 300px"
        >
          <b-form-group
              label="Vehicle interior image"
          >
          </b-form-group>
          <b-img
              style="border-radius: 5px"
              :src="userVehicle.vehicle.vehicle_documents.vehicle_interior_image"
          ></b-img>
          <template v-if="userVehicle.vehicle.vehicle_documents.vehicle_interior_image_verify_at === undefined || userVehicle.vehicle.vehicle_documents.vehicle_interior_image_verify_at === null">
            <btn-validation-docs-driver
                :nameVehicle="userVehicle.vehicle.vehicle_documents"
                :idUserVehicle="userVehicle.id"
                :valueBtnInterior="btninterior"
            />
          </template>
        </b-col>

      </b-row>

<!--      <b-row class="mt-2">-->
<!--        <b-col>-->
<!--          <b-button-->
<!--              variant="primary"-->
<!--              class="mb-1 mb-sm-0 mr-0 mr-sm-1"-->
<!--              :block="$store.getters['app/currentBreakPoint'] === 'xs'"-->
<!--          >-->
<!--            Save Changes-->
<!--          </b-button>-->
<!--          <b-button-->
<!--              variant="outline-secondary"-->
<!--              :block="$store.getters['app/currentBreakPoint'] === 'xs'"-->
<!--          >-->
<!--            Reset-->
<!--          </b-button>-->
<!--        </b-col>-->
<!--      </b-row>-->
    </b-form>
  </div>
</template>

<script>
import {
  BRow, BCol, BForm, BFormGroup, BFormInput, BFormRadioGroup, BFormCheckboxGroup, BButton, BImg,
} from 'bootstrap-vue'
import flatPickr from 'vue-flatpickr-component'
import vSelect from 'vue-select'
import BtnValidationDocsDriver from "@core/components/buttonsValidationDocsDriver/BtnValidationDocsDriver";
export default {
  components: {
    BRow, BCol, BForm, BFormGroup, flatPickr, BFormInput, vSelect, BFormRadioGroup, BFormCheckboxGroup, BButton, BImg, BtnValidationDocsDriver,
  },
  props: {
    userVehicle: {
      // vehicle: {
      //   model: '',
      //   color: '',
      //   year: '',
      //   plate_number: '',
      //   vin_number: '',
      // }

    },
  },
  data() {
    return {
      btnrear: true,
      btnsideimg: true,
      btninterior: true,
      btnfront: true,

    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-flatpicker.scss';

.container-docs {
  position: relative;

  .btnAllDocuments {
    position: absolute;
    height: 39px;
    width: 38px;
    padding: 7px;
    border-radius: 18px;
    left: 260px;
  }
  .btnCheck {
    @extend .btnAllDocuments;
    top: 176px;
  }
  .btnCancel {
    @extend .btnAllDocuments;
    top: 135px;
  }
  .btnDownload {
    @extend .btnAllDocuments;
    //background-color: #07ff00 !important;
    top: 92px;
  }
}
</style>
