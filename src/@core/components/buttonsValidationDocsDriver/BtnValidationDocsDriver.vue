<template>
  <div>
    <b-button variant="primary" class="btn-icon btnCheck" @click="btnAprobarDoc(nameVehicle)">
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
    nameVehicle: String ,
    idUserVehicle: Number,
  },

  data() {
    return {}
  },
  methods: {
    btnAprobarDoc(nameVehicle) {
      this.$swal({
        title: 'Please, wait...',
        didOpen: () => {
          this.$swal.showLoading()
        },
      })
      let idSend = Object.keys(nameVehicle);
      console.log(idSend)
      this.$http.post(`/admin/panel/driver/${this.idUserVehicle}/approve?document=${idSend[2]}`)
          .then((response) => {
            this.$swal({
              title: response.data.message,
              icon: 'success',
              customClass: {
                confirmButton: 'btn btn-primary',
              },
              buttonsStyling: false,
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

<style scoped>

</style>