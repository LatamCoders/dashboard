<template>

  <div>
    <b-card
        no-body
        class="mb-0"
    >
      <div class="m-2">
        <!-- Table Top -->
        <b-row>
          <!-- Per Page -->
          <b-col
              cols="12"
              md="6"
              class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
          >
            <label>Show</label>
            <v-select
                id="perPageSelect"
                v-model="perPage"
                :options="pageOptions"
                class="per-page-selector d-inline-block mx-50"
            />
            <label>entries</label>
          </b-col>

          <!-- Search -->
          <b-col
              cols="12"
              md="6"
          >
            <div class="d-flex align-items-center justify-content-end">
              <b-form-input
                  class="d-inline-block mr-1"
                  placeholder="Search..."
                  v-model="search"
              />
            </div>
          </b-col>
        </b-row>

      </div>

      <b-table
          ref="refUserListTable"
          class="position-relative"
          responsive
          primary-key="id"
          :items="listDrivers"
          :fields="fields"
          empty-text="No matching records found"
          :filter="search"
          :perPage="perPage"
          show-empty
          id="my-table"
          :current-page="currentPage"
      >
        <!-- Column: Actions -->

        <template  #cell(phone_number_verified_at)="{ item }">
          <span :class="item.phone_number_verified_at === null ? 'no-verified' : 'verified'">
             {{ item.phone_number_verified_at === null ? 'Not verified' : 'Verified' }}
          </span>
        </template>


        <template  #cell(email_verified_at)="{item }">
          <span :class="item.email_verified_at !== null ? 'verified' : 'no-verified'" >
             {{ item.email_verified_at === null ? 'Not verified' : 'Verified' }}
          </span>

        </template>


        <template #cell(actions)="{ item }">
          <b-dropdown
              variant="link"
              no-caret
              :right="$store.state.appConfig.isRTL"
              transition="scale-transition"
              :offset-y="true"
          >
            <template #button-content>
              <feather-icon
                  icon="MoreVerticalIcon"
                  size="16"
                  class="align-middle text-body"
              />
            </template>
            <template style="padding: 0"  v-slot:activator="{ on, attrs }">
              <b-btn color="primary" v-bind="attrs" v-on="on" icon ripple>
              </b-btn>
            </template>
            <b-list-group  style="padding: 2px; margin-bottom: 2px" dense rounded>
              <router-link class="urlPagina"
                           :to="{ name: 'details-driver-view', params: { id: item.id } }"
              >
                <b-list-group-item style="padding: 0" class="urlPagina" :ripple="false">
                  <b-list-group-item class="font-weight-bold"
                                     style="border: none; padding: 5px"
                  >
                    <feather-icon icon="FileTextIcon"/>
                    Details
                  </b-list-group-item
                  >
                </b-list-group-item>
              </router-link>
            </b-list-group>
            <b-list-group v-if="$store.getters['Users/userData'].user.role.id === 1" style="padding: 2px; margin-bottom: 2px" dense rounded>
                <b-list-group-item style="padding: 0" class="urlPagina" :ripple="false">
                  <b-list-group-item class="font-weight-bold"
                                     style="border: none; padding: 5px"
                                     @click="deleteDriver(item.id)"
                  >
                    <feather-icon icon="TrashIcon"/>
                    Delete
                  </b-list-group-item
                  >
                </b-list-group-item>
            </b-list-group>
          </b-dropdown>
        </template>
      </b-table>
      <div class="mx-2 mb-2">
        <b-row>

          <b-col
              cols="12"
              sm="6"
              class="d-flex align-items-center justify-content-center justify-content-sm-start"
          >
             <span class="text-muted">Showing {{ perPage }}  of {{
                 listDrivers.length
               }} entries</span>
          </b-col>
          <!-- Pagination -->
          <b-col
              cols="12"
              sm="6"
              class="d-flex align-items-center justify-content-center justify-content-sm-end"
          >

            <b-pagination
                :per-page="perPage"
                v-model="currentPage"
                :total-rows="rows"
                first-number
                last-number
                class="mb-0 mt-1 mt-sm-0"
                prev-class="prev-item"
                next-class="next-item"
                aria-controls="my-table"
            >
              <template #prev-text>
                <feather-icon
                    icon="ChevronLeftIcon"
                    size="18"
                />
              </template>
              <template #next-text>
                <feather-icon
                    icon="ChevronRightIcon"
                    size="18"
                />
              </template>
            </b-pagination>

          </b-col>

        </b-row>
      </div>
    </b-card>
  </div>
</template>

<script>
import {
  BCard, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BLink,
  BBadge, BDropdown, BDropdownItem, BPagination, BListGroup, BListGroupItem,
} from 'bootstrap-vue'
import vSelect from 'vue-select'

import UserListAddNew from '@core/components/infoClients/UserListAddNew'

export default {
  components: {
    UserListAddNew,
    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    BListGroup,
    BListGroupItem,
    vSelect,
  },
  name: 'ListApproveDriver',
  data() {
    return {
      perPage: 5,
      pageOptions: [3, 5, 10],
      currentPage: 1,
      listDrivers: [],
      detailDrivers: {},
      search: '',
      fields: ['driver_id', 'name', 'lastname', 'gender', 'phone_number', 'phone_number_verified_at', 'email', 'email_verified_at', 'address', 'actions'],
    }
  },
  methods: {
    getDrivers() {
      this.$http.get(`admin/panel/driver/list`)
          .then((response) => {
            this.listDrivers = response.data.data

          })
          .catch((res) => console.log(res.data))
    },
    deleteDriver(id){
      this.$swal({
        title: 'Please, wait...',
        didOpen: () => {
          this.$swal.showLoading()
        },
      })
      this.$http.post(`/admin/panel/driver/${id}/delete`)
          .then((res) => {
            this.$swal({
              title: res.data.message,
              icon: 'success',
              customClass: {
                confirmButton: 'btn btn-primary',
              },
              buttonsStyling: false,
            }).then((result) => {
              if (result.isConfirmed) {
                this.getDrivers();

              }
            })

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
    }
  },
  computed: {
    rows () {
      return this.listDrivers.length
    }
  },
  mounted() {
    this.getDrivers()
  }
}
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
</style>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';

.urlPagina {
  text-decoration: none;
  color: #7367f0;
}

.urlPagina:hover {
  background: linear-gradient(118deg, #7367f0, rgba(115, 103, 240, 0.7)) !important;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
}

.list-group-item:hover {
  background: linear-gradient(118deg, #7367f0, rgba(115, 103, 240, 0.7)) !important;
  color: #fff !important;
  cursor: pointer;
}
.urlPagina::before {
  background-color: currentColor !important;
  bottom: 0;
  content: "";
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}

.box {
  box-shadow: 0px 14px 20px 0px rgba(143, 143, 143, 0.2) !important;
}

.verified {
  color: #7467f0;
}
.no-verified{
  color: red;
}
</style>
