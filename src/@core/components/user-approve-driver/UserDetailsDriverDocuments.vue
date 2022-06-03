<template>
  <div v-if="driverDocuments !== ''">
    <!-- Header: Personal Info -->
    <div class="d-flex">
      <feather-icon
          icon="UserIcon"
          size="19"
      />
      <h4 class="mb-0 ml-50">
        Driver documents
      </h4>
    </div>

    <b-form class="mt-1">
      <b-row>
        <b-col
            cols="12"
            md="6"
            lg="4"
            class="container-docs"
            style="height: 100%"
        >
          <b-form-group
              label="Driver license"
          >
          </b-form-group>
          <div style="display: flex;">
            <b-img
                class="imgDocVehicle"
                style="border-radius: 5px; height: 318px;"
                :src="driverDocuments.driver_documents.driver_license"
            ></b-img>
            <div style="width: fit-content; padding: 10px">
              <template
                  v-if="driverDocuments.driver_documents.driver_license_verify_at === undefined || driverDocuments.driver_documents.driver_license_verify_at === null">
                <btn-validation-docs-driver
                    :driverDocs="driverDocuments.driver_documents"
                    :idUserVehicle="driverDocuments.id"
                    :valueBtnlicense="btnlicense"
                />
              </template>
            </div>
          </div>
        </b-col>
        <b-col
            cols="12"
            md="6"
            lg="4"
            class="container-docs"
        >
          <b-form-group
              label="Proof of insurance"
          >
          </b-form-group>
          <div style="display: flex;">
            <b-img
                class="imgDocVehicle"
                style="border-radius: 5px; height: 318px;"
                :src="driverDocuments.driver_documents.proof_of_insurance"
            ></b-img>
            <div style="width: fit-content; padding: 10px">
              <template
                  v-if="driverDocuments.driver_documents.proof_of_insurance_verify_at === undefined || driverDocuments.driver_documents.proof_of_insurance_verify_at === null">
                <btn-validation-docs-driver
                    :driverDocs="driverDocuments.driver_documents"
                    :idUserVehicle="driverDocuments.id"
                    :valueBtninsure="btninsure"
                />
              </template>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import {
  BRow, BCol, BForm, BFormGroup, BFormInput, BButton, BInputGroup, BInputGroupPrepend, BImg,
} from 'bootstrap-vue'
import btnValidationDocsDriver from "@core/components/buttonsValidationDocsDriver/BtnValidationDocsDriver";
import {mapGetters} from "vuex";

export default {
  components: {
    BRow,
    BCol,
    BForm,
    BFormGroup,
    BFormInput,
    BButton,
    BInputGroup,
    BInputGroupPrepend,
    BImg,

    btnValidationDocsDriver,
  },
  computed: {
    ...mapGetters({
      driverDocuments: 'Users/usersData'
    })
  },
  data() {
    return {
      btnlicense: true,
      btninsure: true,
    }
  },
  // mounted() {
  //   console.log(this.infoPayment)
  // }
}
</script>

<style lang="scss" scoped>
@import '@core/scss/vue/libs/vue-flatpicker.scss';

.container-docs {
  position: relative;

  .imgDocVehicle {
    min-width: 188px;
  }

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

