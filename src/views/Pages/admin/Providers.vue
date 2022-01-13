<template>
  <div>
    <b-col
        md="12"
        class="my-1"
    >
      <b-form-group
          label="Filter"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          label-for="filterInput"
          class="mb-0"
      >
        <b-input-group size="sm" class="d-flex" style="gap: 20px">
          <b-form-input
              id="filterInput"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
          />
          <b-input-group-append>
            <b-button
                class="sigin"
            >
              Search
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </b-form-group>
    </b-col>
    <b-table
        :items="items"
        :fields="fields"
        striped
        responsive
    >
      <template #cell(show_details)="row">
        <b-form-checkbox
            v-model="row.detailsShowing"
            plain
            class="vs-checkbox-con"
            @change="row.toggleDetails"
        >
          <span class="vs-checkbox">
            <span class="vs-checkbox--check">
              <i class="vs-icon feather icon-check" />
            </span>
          </span>
          <span class="vs-label">{{ row.detailsShowing ? 'Hide' : 'Show' }}</span>
        </b-form-checkbox>
      </template>

      <template #row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col
                md="4"
                class="mb-1"
            >
              <strong>Full Name : </strong>{{ row.item.full_name }}
            </b-col>
            <b-col
                md="4"
                class="mb-1"
            >
              <strong>Email : </strong>{{ row.item.email }}
            </b-col>
            <b-col
                md="4"
                class="mb-1"
            >
              <strong>Telephone number : </strong>{{ row.item.tel_number }}
            </b-col>
            <b-col
                md="4"
                class="mb-1"
            >
              <strong>Gender : </strong>{{ row.item.gender }}
            </b-col>
            <b-col
                md="4"
                class="mb-1"
            >
              <strong>Date Of Birth : </strong>{{ row.item.start_date }}
            </b-col>
            <b-col
                md="4"
                class="mb-1"
            >
              <strong>Home Address : </strong>{{ row.item.home_address }}
            </b-col>
            <b-col
                md="4"
                class="mb-1"
            >
              <strong>Home Telephone Number : </strong>{{ row.item.home_telephone_number }}
            </b-col>
          </b-row>

          <b-button
              size="sm"
              variant="outline-secondary"
              @click="row.toggleDetails"
              class="mr-1"
          >
            Hide Details
          </b-button>
          <b-button
              size="sm"
              variant="outline-secondary"
              @click="row.toggleDetails"
          >
            Edit
          </b-button>
        </b-card>
      </template>

      <template #cell(avatar)="data">
        <b-avatar :src="data.value" />
      </template>

      <template #cell(status)="data">
        <b-badge :variant="status[1][data.value]">
          {{ status[0][data.value] }}
        </b-badge>
      </template>
    </b-table>
  </div>
</template>

<script>
import {
  BTable, BFormCheckbox, BButton, BCard, BRow, BCol, BAvatar, BBadge, BFormInput,
} from 'bootstrap-vue'
export default {
  components: {
    BTable,
    BButton,
    BFormCheckbox,
    BCard,
    BRow,
    BCol,
    BBadge,
    BAvatar,
    BFormInput,
  },
  data() {
    return {
      filter: '',
      fields: ['show_details', 'id', { key: 'avatar', label: 'Avatar' }, 'full_name', 'email', { key: 'status', label: 'Status' }],
      items: [
        {
          id: 1,
          // eslint-disable-next-line global-require
          avatar: require('@/assets/images/avatars/10-small.png'),
          full_name: "Korrie O'Crevy",
          email: 'kocrevy0@thetimes.co.uk',
          tel_number: '6555122',
          start_date: '09/23/2016',
          home_address: 'New york city',
          gender: 'Male',
          home_telephone_number: '358185488',
          status: 2,
        },
        {
          id: 2,
          // eslint-disable-next-line global-require
          avatar: require('@/assets/images/avatars/13-small.png'),
          full_name: 'Orlando Health',
          email: 'orlando.healt@email.com',
          tel_number: '3155566',
          start_date: '05/20/2018',
          home_address: 'New york city',
          gender: 'Female',
          home_telephone_number: '6522222',
          status: 1,
        },
        {
          id: 3,
          // eslint-disable-next-line global-require
          avatar: require('@/assets/images/avatars/9-small.png'),
          full_name: 'Stella Ganderton',
          email: 'sganderton2@tuttocitta.it',
          tel_number: '6555122',
          start_date: '03/24/2018',
          home_address: 'New york city',
          gender: 'Female',
          home_telephone_number: '358185488',
          status: 1,
        },
        {
          id: 4,
          // eslint-disable-next-line global-require
          avatar: require('@/assets/images/avatars/3-small.png'),
          full_name: 'Dorolice Crossman',
          email: 'dcrossman3@google.co.jp',
          tel_number: '6555122',
          start_date: '12/03/2017',
          home_address: 'New york city',
          gender: 'Female',
          home_telephone_number: '358185488',
          status: 2,
        },
        {
          id: 5,
          // eslint-disable-next-line global-require
          avatar: require('@/assets/images/avatars/4-small.png'),
          full_name: 'Harmonia Nisius',
          email: 'hnisius4@gnu.org',
          tel_number: '6555122',
          start_date: '08/25/2017',
          home_address: 'New york city',
          gender: 'Male',
          home_telephone_number: '358185488',
          status: 2,
        },
        {
          id: 6,
          // eslint-disable-next-line global-require
          avatar: require('@/assets/images/avatars/5-small.png'),
          full_name: 'Genevra Honeywood',
          email: 'ghoneywood5@narod.ru',
          tel_number: '6555122',
          start_date: '06/01/2017',
          home_address: 'New york city',
          gender: 'Female',
          home_telephone_number: '358185488',
          status: 1,
        },
        {
          id: 7,
          // eslint-disable-next-line global-require
          avatar: require('@/assets/images/avatars/7-small.png'),
          full_name: 'Eileen Diehn',
          email: 'ediehn6@163.com',
          tel_number: '6555122',
          start_date: '10/15/2017',
          home_address: 'New york city',
          gender: 'Female',
          home_telephone_number: '358185488',
          status: 1,
        },
        {
          id: 8,
          // eslint-disable-next-line global-require
          avatar: require('@/assets/images/avatars/9-small.png'),
          full_name: 'Richardo Aldren',
          email: 'raldren7@mtv.com',
          tel_number: '6555122',
          start_date: '11/05/2016',
          home_address: 'New york city',
          gender: 'Female',
          home_telephone_number: '358185488',
          status: 1,
        },
        {
          id: 9,
          // eslint-disable-next-line global-require
          avatar: require('@/assets/images/avatars/2-small.png'),
          full_name: 'Allyson Moakler',
          email: 'amoakler8@shareasale.com',
          tel_number: '6555122',
          start_date: '12/29/2018',
          home_address: 'New york city',
          gender: 'Male',
          home_telephone_number: '358185488',
          status: 1,
        },
        {
          id: 10,
          // eslint-disable-next-line global-require
          avatar: require('@/assets/images/avatars/6-small.png'),
          full_name: 'Merline Penhalewick',
          email: 'mpenhalewick9@php.net',
          tel_number: '6555122',
          start_date: '04/19/2019',
          home_address: 'New york city',
          gender: 'Male',
          home_telephone_number: '358185488',
          status: 2,
        },
      ],
      status: [{
        1: 'Active', 2: 'Inactive',
      },
        {
          1: 'light-success', 2: 'light-danger',
        }],
    }
  },
}
</script>

<style scoped>

</style>
