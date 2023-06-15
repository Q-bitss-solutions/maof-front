<template>
  <main class="min-h-screen flex flex-col px-4 pt-20">
    <div class="flex">
      <div v-for="(item, index) in menu" :key="index">
        <button-base :label="item.labelMenu" v-if="item.routeName !== ''"
          class="border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white text-lg font-normal relative"
          @click="goToRoute(item.routeName)" />
        <button-base :label="item.labelMenu" v-if="item.routeName === ''"
          class="border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white text-lg font-normal relative"
          @click="showSubmenu(index)" />
        <div
          class="flex flex-col bg-white rounded shadow-lg border border-gray-100 border-solid absolute py-1 text-gray-900 text-lg"
          v-show="indexActiveSubmenu === index">
          <p v-for="(item, index) in item.submenu" :key="index" class="py-2 px-5 cursor-pointer hover:bg-gray-50">
          <div v-if="item.subMenu2.length !== 0">
            <p @click="showSubmenu2(index)">
              {{ item.labelSubMenu }}
            </p>
            <div v-show="indexActiveSubmenu2 === index" class="flex flex-col justify-end justify-items-end">
              <span v-for="(item, index) in item.subMenu2" :key="index"
                class="py-2 px-5 cursor-pointer hover:bg-gray-50 relative">
                <router-link :to="{ name: item.routeName }">
                  {{ item.label }}
                </router-link>
              </span>
            </div>
          </div>
          <router-link :to="{ name: item.routeName }" v-if="item.subMenu2.length === 0">
            {{ item.labelSubMenu }}
          </router-link>
          </p>
        </div>
      </div>
    </div>
  </main>
  <!-- <main class="px-4 pt-20">
    <div class="flex">
      <div v-for="(item, index) in menu" :key="index">
        <button-base
          :label="item.labelMenu"
          class="border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white text-lg font-normal relative"
          @click="showSubmenu(index)"
        />
        <div
          class="bg-white rounded shadow-lg border border-gray-100 border-solid absolute mt-1 py-1 text-gray-900 text-lg"
          v-show="indexActiveSubmenu === index"
        >
          <p v-for="(item, index) in item.submenu" :key="index" class="py-2 px-5 cursor-pointer hover:bg-gray-50">
            <router-link :to="{ name: item.routeName }">
              {{ item.label }}
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </main> -->
</template>

<script>
import InputBase from '../components/InputBase.vue';
import SelectBase from '../components/SelectBase.vue';
import ButtonBase from '../components/ButtonBase.vue';
import TableBase from '../components/TableBase.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router'

export default {
  name: 'Home',
  components: {
    InputBase,
    ButtonBase,
    TableBase,
    SelectBase,
  },
  /*  mounted() {
     if (localStorage.getItem('acces') != null) {
       router.push({ name: 'NewUnitMAOF' })
     } else {
       router.push({ name: 'NewUnitMAOF' })
     }
   }, */
  setup() {
    const router = useRouter()
    const menu = [
      {
        labelMenu: 'Consulta',
        submenu: [],
        routeName: 'ConsultasMAOF'
      },
      {
        labelMenu: 'Estimaciones',
        submenu: [],
        /* routeName: 'ResidentEstimate' */
        routeName: 'ResidentEstimate'
      },
      {
        labelMenu: 'Obras y Contratos',
        routeName: '',
        submenu: [
          {
            labelSubMenu: 'Medios',
            subMenu2: [
              {
                label: 'Proyectos',
                routeName: 'Projects',
              },
              /*  {
                 label: 'Contratos',
                 routeName: 'Contracts',
               }, */
              {
                label: 'Contratos y Convenios de Colaboración',
                routeName: 'CollaborationAgreements',
              },
              {
                label: 'Convenios Modificatorios',
                routeName: 'AmendingAgreement',
              },
            ],
          },
          {
            labelSubMenu: 'Catálogos',
            subMenu2: [
              {
                label: 'Área revisora',
                routeName: 'ReviewAreas',
              },
              {
                label: 'Residentes',
                routeName: 'Resident',
              },
            ],
          },
          {
            labelSubMenu: 'Asignaciones',
            subMenu2: [],
            routeName: 'AssignResident'
          },
        ],
      },
      {
        labelMenu: 'Administración MAOF',
        routeName: '',
        submenu: [
          {
            labelSubMenu: 'Usuarios y roles',
            subMenu2: [],
            routeName: 'UsersRolesMAOF'
          },
          {
            labelSubMenu: 'Parámetros',
            subMenu2: [],
            routeName: ''
          },
          {
            labelSubMenu: 'Correcciones',
            subMenu2: [],
            routeName: ''
          },
          {
            labelSubMenu: 'Unidades MAOF',
            subMenu2: [],
            routeName: 'UnitsMAOF',
          },
        ],
      },
    ]
    const indexActiveSubmenu = ref(null)
    const indexActiveSubmenu2 = ref(null)
    const showSubmenu = (index) => {
      if (indexActiveSubmenu.value === index) {
        return indexActiveSubmenu.value = null
      }
      return indexActiveSubmenu.value = index
    }
    const showSubmenu2 = (index) => {
      if (indexActiveSubmenu2.value === index) {
        return indexActiveSubmenu2.value = null
      }
      return indexActiveSubmenu2.value = index
    }
    const logIn = () => {
      if (localStorage.getItem('acces') === null) {
        router.push({ name: 'Login' })
      }
    }
    const goToRoute = (routerName) => router.push({ name: routerName })
    /* logIn() */
    return {
      menu,
      showSubmenu,
      showSubmenu2,
      indexActiveSubmenu,
      indexActiveSubmenu2,
      goToRoute,
      logIn,
    }
  },
}
</script>
