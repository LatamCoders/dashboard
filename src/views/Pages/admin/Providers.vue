<template>

  <div>

    <!--    <user-list-add-new-->
    <!--        :is-add-new-user-sidebar-active.sync="isAddNewUserSidebarActive"-->
    <!--        :plan-options="planOptions"-->
    <!--        @refetch-data="refetchData"-->
    <!--    />-->
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
                v-model="perPage"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="perPageOptions"
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
                  v-model="searchQuery"
                  class="d-inline-block mr-1"
                  placeholder="Search..."
              />
              <b-button
                  variant="primary"
              >
                <span class="text-nowrap">Search</span>
              </b-button>
            </div>
          </b-col>
        </b-row>

      </div>

      <b-table
          ref="refUserListTable"
          class="position-relative"
          responsive
          primary-key="id"
          :items="personas"
          :fields="fields"
          empty-text="No matching records found"
      >

        <!-- Column: User -->
        <!--        <template #cell(user)="personas">-->
        <!--          <b-media vertical-align="center">-->
        <!--            <template #aside>-->
        <!--              <b-avatar-->
        <!--                  size="32"-->
        <!--                  :src="personas.avatar"-->
        <!--                  :text="avatarText(personas.first_name)"-->
        <!--                  :variant="`light-${resolveUserRoleVariant(data.item.last_name)}`"-->
        <!--                  :to="{ name: 'apps-users-view', params: { id: data.item.age } }"-->
        <!--              />-->
        <!--            </template>-->
        <!--            <b-link-->
        <!--                :to="{ name: 'apps-users-view', params: { id: data.item.id } }"-->
        <!--                class="font-weight-bold d-block text-nowrap"-->
        <!--            >-->
        <!--              {{ data.item.first_name }}-->
        <!--            </b-link>-->
        <!--            <small class="text-muted">@{{ data.item.last_name }}</small>-->
        <!--          </b-media>-->
        <!--        </template>-->

        <!-- Column: Role -->
        <!--        <template #cell(fecha)="data">-->
        <!--          <div class="text-nowrap">-->
        <!--            <feather-icon-->
        <!--                :icon="resolveUserRoleIcon(data.item.fecha)"-->
        <!--                size="18"-->
        <!--                class="mr-50"-->
        <!--                :class="`text-${resolveUserRoleVariant(data.item.fecha)}`"-->
        <!--            />-->
        <!--            <span class="align-text-top text-capitalize">{{ data.item.fecha }}</span>-->
        <!--          </div>-->
        <!--        </template>-->

        <!-- Column: Status -->
        <template #cell(status)="personas">
          <b-badge
              pill
              :variant="`light-${resolveUserStatusVariant(personas.status)}`"
              class="text-capitalize"
          >
            {{ personas.status }}
          </b-badge>
        </template>

        <!-- Column: Actions -->
        <template #cell(actions)="personas">
          <b-dropdown
              variant="link"
              no-caret
              :right="$store.state.appConfig.isRTL"
          >
            <template #button-content>
              <feather-icon
                  icon="MoreVerticalIcon"
                  size="16"
                  class="align-middle text-body"
              />
            </template>
            <b-dropdown-item :to="{ name: 'details-provider', params: { id: personas.id } }">
              <feather-icon icon="FileTextIcon"/>
              <span class="align-middle ml-50">Details</span>
            </b-dropdown-item>

            <!--            <b-dropdown-item :to="{ name: 'apps-users-edit', params: { id: personas.id } }">-->
            <!--              <feather-icon icon="EditIcon"/>-->
            <!--              <span class="align-middle ml-50">Edit</span>-->
            <!--            </b-dropdown-item>-->

            <b-dropdown-item>
              <feather-icon icon="TrashIcon"/>
              <span class="align-middle ml-50">Delete</span>
            </b-dropdown-item>
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
            <span class="text-muted">Showing {{ dataMeta.from }} to {{ dataMeta.to }} of {{
                dataMeta.of
              }} entries</span>
          </b-col>
          <!-- Pagination -->
          <b-col
              cols="12"
              sm="6"
              class="d-flex align-items-center justify-content-center justify-content-sm-end"
          >

            <b-pagination
                v-model="currentPage"
                :total-rows="totalUsers"
                :per-page="perPage"
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
  BBadge, BDropdown, BDropdownItem, BPagination,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import store from '@/store'
import {ref, onUnmounted} from '@vue/composition-api'
import {avatarText} from '@core/utils/filter'
// import UsersListFilters from './UsersListFilters.vue'
import UsersListFilters from '/src/@core/components/infoClients/UsersListFilters.vue'
import useUsersList from '/src/@core/components/infoClients/useUsersList'
import userStoreModule from '@core/components/users-view/userStoreModule'
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
    vSelect,
  },
  setup() {
    const USER_APP_STORE_MODULE_NAME = 'app-user'
    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, userStoreModule)
    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(USER_APP_STORE_MODULE_NAME)) store.unregisterModule(USER_APP_STORE_MODULE_NAME)
    })
    const isAddNewUserSidebarActive = ref(false)
    const statusOptions = [
      {
        label: 'Pending',
        value: 'pending'
      },
      {
        label: 'Active',
        value: 'active'
      },
      {
        label: 'Inactive',
        value: 'inactive'
      },
    ]
    const {
      fetchUsers,
      tableColumns,
      perPage,
      currentPage,
      totalUsers,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refUserListTable,
      refetchData,
      // UI
      resolveUserRoleVariant,
      resolveUserRoleIcon,
      resolveUserStatusVariant,
      // Extra Filters
      roleFilter,
      planFilter,
      statusFilter,
    } = useUsersList()
    return {
      fields: ['id', 'Name', 'email', 'tel_number', 'HomeAddress', 'role', 'actions'],
      personas: [
        {
          id: 1,
          email: 'Dickerson@mail.com',
          tel_number: '6555122',
          HomeAddress: 'New york city',
          DateOfTrips: '03/08/2022',
          HomeTelephoneNumber: '358185488',
          Name: 'Jhon alphon',
          role: 'Corporate account',
        },
        {
          id: 2,
          email: 'Larsen@mail.com',
          tel_number: '6225122',
          HomeAddress: 'Oklahoma',
          AddressEnd: 'State of california',
          DateOfTrips: '01/05/2022',
          Name: 'Will smith',
          HomeTelephoneNumber: '818355488',
          role: 'Driver',
        },
        {
          id: 3,
          email: 'Geneva@mail.com',
          tel_number: '3225122',
          HomeAddress: 'Arizona',
          AddressEnd: 'State of california',
          DateOfTrips: '03/09/2022',
          Name: 'Jean Paul',
          HomeTelephoneNumber: '488358185',
          role: 'Driver',
        },
        {
          id: 4,
          email: 'Jami.carney@mail.com',
          tel_number: '311155122',
          HomeAddress: 'Texas',
          AddressEnd: 'State of california',
          DateOfTrips: '23/11/2022',
          Name: 'Albert Austin',
          HomeTelephoneNumber: '354885818',
          role: 'corporate account',
        },
      ],
      // Sidebar
      isAddNewUserSidebarActive,
      fetchUsers,
      tableColumns,
      perPage,
      currentPage,
      totalUsers,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refUserListTable,
      refetchData,
      // Filter
      avatarText,
      // UI
      resolveUserRoleVariant,
      resolveUserRoleIcon,
      resolveUserStatusVariant,
      statusOptions,
      // Extra Filters
      roleFilter,
      planFilter,
      statusFilter,
    }
  },
  // mounted() {
  //   this.perPageOptions = this.$http.get('admin/ca/list')
  // }
}
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
</style>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
