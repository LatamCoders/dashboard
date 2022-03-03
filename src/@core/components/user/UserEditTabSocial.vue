<template>
  <div>
    <!-- Header: Personal Info -->
    <div class="d-flex">
      <feather-icon
          icon="CreditCardIcon"
          size="19"
      />
      <h4 class="mb-0 ml-50">
        Payment method
      </h4>
    </div>

    <b-form class="mt-1">
      <b-row>
        <b-col
            cols="12"
            md="6"
            lg="4"
        >
          <b-form-group
              label="Name on Credit Card"
          >
            <b-form-input
                v-model="infoPayment.name_on_cc"
                disabled
            />
          </b-form-group>
        </b-col>
        <b-col
            cols="12"
            md="6"
            lg="4"
        >
          <b-form-group
              label="Card Number"
          >
            <b-form-input
                v-model="infoPayment.cc_number"
                disabled
            />
          </b-form-group>
        </b-col>
        <b-col
            cols="12"
            md="6"
            lg="4"
        >
          <b-form-group
              label="Type of credit card"
          >
            <b-form-input
                v-model="infoPayment.type_of_cc"
                disabled
            />
          </b-form-group>
        </b-col>

        <b-col
            cols="12"
            md="6"
            lg="4"
        >
          <b-form-group
              label="Code of cc"
          >
            <b-form-input
                v-model="infoPayment.code_of_cc"
                disabled
            />
          </b-form-group>
        </b-col>

        <!--      <b-col class="mt-2">-->
        <!--        <b-button-->
        <!--            variant="primary"-->
        <!--            class="mb-1 mb-sm-0 mr-0 mr-sm-1"-->
        <!--            :block="$store.getters['app/currentBreakPoint'] === 'xs'"-->
        <!--        >-->
        <!--          Save Changes-->
        <!--        </b-button>-->
        <!--        <b-button-->
        <!--            variant="outline-secondary"-->
        <!--            :block="$store.getters['app/currentBreakPoint'] === 'xs'"-->
        <!--        >-->
        <!--          Reset-->
        <!--        </b-button>-->
        <!--      </b-col>-->
      </b-row>
    </b-form>
  </div>
</template>

<script>
import {
  BRow, BCol, BForm, BFormGroup, BFormInput, BButton, BInputGroup, BInputGroupPrepend,
} from 'bootstrap-vue'

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
  },
  props: {
    infoPayment: {},
  },
  setup() {
    const userDataSocial = {
      twitter: 'https://www.twitter.com/adoptionism744',
      facebook: 'https://www.facebook.com/adoptionism664',
      instagram: 'https://www.instagram.com/adopt-ionism744',
      github: 'https://www.github.com/madop818',
      codepen: 'https://www.codepen.com/adoptism243',
      slack: '@adoptionism744',
    }

    // ? dataField is field name of `userDataSocial` object
    const socialInputs = [
      {
        icon: 'TwitterIcon',
        dataField: 'twitter',
        label: 'Twitter',
      },
      {
        icon: 'FacebookIcon',
        dataField: 'facebook',
        label: 'facebook',
      },
      {
        icon: 'InstagramIcon',
        dataField: 'instagram',
        label: 'instagram',
      },
      {
        icon: 'GithubIcon',
        dataField: 'github',
        label: 'github',
      },
      {
        icon: 'CodepenIcon',
        dataField: 'codepen',
        label: 'codepen',
      },
      {
        icon: 'SlackIcon',
        dataField: 'slack',
        label: 'slack',
      },
    ]

    return {
      userDataSocial,
      socialInputs,
    }
  },
  // mounted() {
  //   console.log(this.infoPayment)
  // }
}
</script>

<style>

</style>
