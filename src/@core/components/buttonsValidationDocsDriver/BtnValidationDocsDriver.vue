<template>
  <div class="container-btnAll">
    <b-button variant="primary" class="btn-icon btnCheck" @click="btnAprobarDoc(nameVehicle || driverDocs)">
      <feather-icon
          icon="CheckCircleIcon"
          size="24"
          class="mr-0 mr-sm-50"
      />

    </b-button>
    <b-button variant="danger" class="btn-icon btnCancel">
      <feather-icon
          icon="XCircleIcon"
          size="24"
          class="mr-0 mr-sm-50"
      />

    </b-button>
    <b-button variant="success" class="btn-icon btnDownload">
      <feather-icon
          icon="ArrowDownCircleIcon"
          size="24"
          class="mr-0 mr-sm-50"
      />

    </b-button>
  </div>
</template>

<script>
import {
  BRow, BCol, BForm, BFormGroup, BFormInput, BFormRadioGroup, BFormCheckboxGroup, BButton, BImg,
} from 'bootstrap-vue'
import flatPickr from "vue-flatpickr-component";
import vSelect from "vue-select";

export default {

  components: {
    BRow, BCol, BForm, BFormGroup, flatPickr, BFormInput, vSelect, BFormRadioGroup, BFormCheckboxGroup, BButton, BImg,
  },

  name: "BtnValidationDocsDriver",

  props: {
    nameVehicle: Object | undefined,
    driverDocs: Object | undefined,
    idUserVehicle: Number,
    valueBtn: Boolean,
    valueBtnSide: Boolean,
    valueBtnrear: Boolean,
    valueBtnfront: Boolean,
    valueBtnInterior: Boolean,

    //driver docs
    valueBtnlicense: Boolean,
    valueBtninsure: Boolean,
  },

  data() {
    return {
      frontImg: '',
      rearImg: '',
      sideImg: '',
      interiorImg: '',
      sendNameImg: '',

      driverlicens: '',
      insure: '',
    }
  },
  methods: {
    btnAprobarDoc(nameVehicle, driverDocs) {
      this.$swal({
        title: 'Please, wait...',
        didOpen: () => {
          this.$swal.showLoading()
        },
      })

      if (this.nameVehicle !== undefined) {
        // console.log('hol')
        let idSend = Object.keys(nameVehicle);
        this.frontImg = idSend[2];
        this.sideImg = idSend[6];
        this.rearImg = idSend[4];
        this.interiorImg = idSend[8];
        // console.log(idSend)

        if (this.rearImg in nameVehicle === true && this.valueBtnrear === true) {
          this.sendNameImg = this.rearImg;
          // console.log(this.sendNameImg)
        } else if (this.sideImg in nameVehicle === true && this.valueBtnSide === true) {
          this.sendNameImg = this.sideImg;
          // console.log(this.sendNameImg)
        } else if (this.interiorImg in nameVehicle === true && this.valueBtnInterior === true) {
          this.sendNameImg = this.interiorImg;
          // console.log(this.sendNameImg)
        } else if (this.frontImg in nameVehicle === true && this.valueBtnfront === true) {
          this.sendNameImg = this.frontImg;
          // console.log(this.sendNameImg)
        }
      } else if (this.nameVehicle === undefined && driverDocs === undefined) {
        // console.log('hola')
        let idSendDriver = Object.keys(nameVehicle);
        this.driverlicens = idSendDriver[2];
        this.insure = idSendDriver[4];
        // console.log(idSendDriver)


        if (this.driverlicens in nameVehicle === true && this.valueBtnlicense === true) {
          this.sendNameImg = this.driverlicens;
          // console.log(this.sendNameImg)
        } else if (this.insure in nameVehicle === true && this.valueBtninsure === true) {
          this.sendNameImg = this.insure;
          // console.log(this.sendNameImg)
        }
      }

      this.$http.post(`/admin/panel/driver/${this.idUserVehicle}/approve?document=${this.sendNameImg}`)
          .then((response) => {
            this.$swal({
              title: response.data.message,
              icon: 'success',
              customClass: {
                confirmButton: 'btn btn-primary',
              },
              buttonsStyling: false,
            }).then((result) => {
              if (result.isConfirmed) {
                this.$swal({
                  title: 'Please, wait...',
                  didOpen: () => {
                    this.$swal.showLoading()
                  },
                })
                this.$http.get(`admin/panel/driver/${parseInt(this.$route.params.id)}/info`).then((response) => {
                  // this.infoUser = response.data.data;
                  this.$store.commit('Users/usersData', response.data.data)
                  this.$swal({
                    title: 'Please, wait...',
                    didOpen: () => {
                      this.$swal.showLoading()
                    },
                  })
                  this.$swal.close();
                }).catch((error) => {
                  this.$swal({
                    title: error.response.data.message,
                    icon: 'error',
                    customClass: {
                      confirmButton: 'btn btn-primary',
                    },
                    buttonsStyling: false,
                  })
                })
              }
            })

          }).catch((error) => {
        this.$swal({
          title: error.message,
          icon: 'error',
          customClass: {
            confirmButton: 'btn btn-primary',
          },
          buttonsStyling: false,
        })
      })
    },
  }

}
</script>

<style lang="scss" scoped>
.container-btnAll {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  .btnCheck, .btnDownload, .btnCancel {
    border-radius: 18px;
    height: 39px;
    width: 38px;
    padding: 7px;
  }
}
</style>
