<template>
  <component :is="'b-card'">

    <!-- Alert: No item found -->
    <b-tabs

        pills
    >

      <!-- Tab: Account -->
      <b-tab active>
        <template #title>
          <feather-icon
              icon="UserIcon"
              size="16"
              class="mr-0 mr-sm-50"
          />
          <span class="d-none d-sm-inline">Information self pay</span>
        </template>
        <details-view-reserva
            :data-provider="listReservas.self_pay"
            class="mt-2 pt-75"
        />
      </b-tab>

      <!-- Tab: Information -->
      <b-tab>
        <template #title>
          <feather-icon
              icon="InfoIcon"
              size="16"
              class="mr-0 mr-sm-50"
          />
          <span class="d-none d-sm-inline">Information Driver</span>
        </template>
        <details-view-driver-asignado
            :data-provider="listReservas"
            class="mt-2 pt-75"
        />
      </b-tab>

      <!-- Tab: Social -->
      <b-tab>
        <template #title>
          <feather-icon
              icon="InfoIcon"
              size="16"
              class="mr-0 mr-sm-50"
          />
          <span class="d-none d-sm-inline">Information of service</span>
        </template>
        <details-info-service
            :data-provider="listReservas"
            class="mt-2 pt-75"
        />
      </b-tab>
    </b-tabs
    >
  </component>
</template>

<script>
import {
  BTab, BTabs, BCard, BAlert, BLink,
} from 'bootstrap-vue'
import { ref, onUnmounted } from '@vue/composition-api'
import router from '@/router'
import store from '@/store'
import DetailsViewReserva from '@core/components/details-reservas/DetailsViewReserva'
import DetailsViewDriverAsignado from '@core/components/details-reservas/DetailsViewDriverAsignado'
import DetailsInfoService from '@core/components/details-reservas/DetailsInfoService'
// import ListPatientCA from '@core/components/CA/ListPatientCA'

export default {
  components: {
    BTab,
    BTabs,
    BCard,
    BAlert,
    BLink,

    DetailsViewReserva,
    DetailsViewDriverAsignado,
    DetailsInfoService,

  },
  name: 'DetailsReservation',
  data() {
    return {
      listReservas: {},
      reservaId: 0,
    }
  },
  methods: {
    getInfoReserva() {
      this.reservaId = this.$route.params.id;
      this.$http.get(`admin/panel/booking/${this.reservaId}/info`).then((response) => {
        this.listReservas = response.data.data;
      }).catch((error) => {
        this.$swal({
          title: error.response.data.data,
          icon: 'error',
          customClass: {
            confirmButton: 'btn btn-primary',
          },
          buttonsStyling: false,
        })
      })
      // this.reserva = this.listReservas.from;
      // console.log(this.reserva)
    }
  },
  mounted() {
    this.getInfoReserva()
  }
}
</script>

<style scoped>

</style>
