<template>

  <div>
    <!-- Table Container Card -->
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

                :clearable="false"
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
                  v-model="search"
                  class="d-inline-block mr-1"
                  placeholder="Search..."
              />
            </div>
          </b-col>
        </b-row>

      </div>

      <b-table

          class="position-relative"
          responsive
          primary-key="id"
          :items="listClients"
          :fields="fields"
          :filter="search"
          empty-text="No matching records found"
      >

        <!-- Column: Actions -->
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
            <template style="padding: 0" v-slot:activator="{ on, attrs }">
              <b-btn color="primary" v-bind="attrs" v-on="on" icon ripple>
              </b-btn>
            </template>
            <b-list-group style="padding: 2px; margin-bottom: 2px" dense rounded>
              <router-link class="urlPagina"
                           :to="{ name: 'details-corporate-account', params: { id: item.id, item: item } }"
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
            <b-list-group style="padding: 2px; margin-bottom: 2px" dense rounded>
              <router-link class="urlPagina"
                           :to="{ name: 'details-provider', params: { id: item.id } }"
              >
                <b-list-group-item style="padding: 0" class="urlPagina" :ripple="false">
                  <b-list-group-item class="font-weight-bold"
                                     style="border: none; padding: 5px"
                  >
                    <feather-icon icon="TrashIcon"/>
                    Delete
                  </b-list-group-item
                  >
                </b-list-group-item>
              </router-link>
            </b-list-group>
          </b-dropdown>
        </template>


        <!--        <template #cell(actions)="personas">-->
        <!--          <b-dropdown-->
        <!--              variant="link"-->
        <!--              no-caret-->
        <!--              :right="$store.state.appConfig.isRTL"-->
        <!--          >-->
        <!--            <template #button-content>-->
        <!--              <feather-icon-->
        <!--                  icon="MoreVerticalIcon"-->
        <!--                  size="16"-->
        <!--                  class="align-middle text-body"-->
        <!--              />-->
        <!--            </template>-->
        <!--            <b-dropdown-item :to="{ path: '/providers/details-provider/1', params: { id: listClients }}">-->
        <!--              <feather-icon icon="FileTextIcon"/>-->
        <!--              <span class="align-middle ml-50">Details</span>-->
        <!--            </b-dropdown-item>-->

        <!--            &lt;!&ndash;            <b-dropdown-item :to="{ name: 'apps-users-edit', params: { id: personas.id } }">&ndash;&gt;-->
        <!--            &lt;!&ndash;              <feather-icon icon="EditIcon"/>&ndash;&gt;-->
        <!--            &lt;!&ndash;              <span class="align-middle ml-50">Edit</span>&ndash;&gt;-->
        <!--            &lt;!&ndash;            </b-dropdown-item>&ndash;&gt;-->

        <!--            <b-dropdown-item>-->
        <!--              <feather-icon icon="TrashIcon"/>-->
        <!--              <span class="align-middle ml-50">Delete</span>-->
        <!--            </b-dropdown-item>-->
        <!--          </b-dropdown>-->
        <!--        </template>-->


      </b-table>
      <div class="mx-2 mb-2 pt-2">
        <b-row>
          <b-col
              cols="12"
              sm="6"
              class="d-flex align-items-center justify-content-center justify-content-sm-start"
          >
            <span class="text-muted">All clients {{ listClients.length }} </span>
          </b-col>
          <!-- Pagination -->
          <b-col
              cols="12"
              sm="6"
              class="d-flex align-items-center justify-content-center justify-content-sm-end"
          >

            <b-pagination

                total-rows="12"
                per-page="12"
                first-number
                last-number
                class="mb-0 mt-1 mt-sm-0"
                prev-class="prev-item"
                next-class="next-item"
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
import store from '@/store'
import {ref, onUnmounted} from '@vue/composition-api'
import {avatarText} from '@core/utils/filter'

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

  data() {
    return {
      listClients: [],
      search: '',
      fields: ['id', 'company_legal_name', 'dba', 'company_type', 'tin', 'nature_of_business', 'contract_start_date', 'actions'],
    }
  },
  methods: {
    getClientes() {
      this.$http.get('/admin/panel/ca/list').then((response) => {
        this.listClients = response.data.data;
      }).catch((res) => console.log(res.data))
    }
  },
  mounted() {
    this.getClientes();
  }
}
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
.urlPagina {
  text-decoration: none;
}

.urlPagina:hover {
  background: linear-gradient(118deg, #7367f0, rgba(115, 103, 240, 0.7)) !important;
  color: #fff;
}

.list-group-item:hover {
  background: linear-gradient(118deg, #7367f0, rgba(115, 103, 240, 0.7)) !important;
  color: #fff !important;
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
</style>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
