<template>
  <main class="px-4 pt-20">
    <div class="flex">
      <div v-for="(item, index) in menu" :key="index">
        <button-base :label="item.labelMenu"
          class="border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white text-lg font-normal relative"
          @click="showSubmenu(index)" />
        <div
          class="bg-white rounded shadow-lg border border-gray-100 border-solid absolute mt-1 py-1 text-gray-900 text-lg"
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

export default {
  name: 'Home',
  components: {
    InputBase,
    ButtonBase,
    TableBase,
    SelectBase,
  },
  setup() {
    const menu = [
      {
        labelMenu: 'Consulta',
        submenu: [],
        routeName: ''
      },
      {
        labelMenu: 'Estimaciones',
        submenu: [],
        routeName: ''
      },
      {
        labelMenu: 'Obras y Contratos',
        submenu: [
          {
            labelSubMenu: 'Medios',
            subMenu2: [
              {
                label: 'Proyectos',
                routeName: 'Projects',
              },
              {
                label: 'Contratos y convenios de colaboracion',
                routeName: 'Contracts',
              },
              {
                label: 'Convenios Modificatorios',
                routeName: '',
              },
            ],
          },
          {
            labelSubMenu: 'Catalogos',
            subMenu2: [
              {
                label: 'Área Revisora',
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
        labelMenu: 'admon. MAOF',
        submenu: [
          {
            labelSubMenu: 'Usuarios y roles',
            subMenu2: [],
            routeName: ''
          },
          {
            labelSubMenu: 'Parametros',
            subMenu2: [],
            routeName: ''
          },
          {
            labelSubMenu: 'Correcciones',
            subMenu2: [],
            routeName: ''
          },
        ],
      },
    ]
    /* const menu = [
      {
        labelMenu: 'Usuarios',
        submenu: [],
      },
      {
        labelMenu: 'Consultas',
        submenu: [],
      },
      {
        labelMenu: 'Proyectos',
        submenu: [
          {
            label: 'Proyectos',
            routeName: 'Projects'
          },
        ],
      },
      {
        labelMenu: 'Contratos',
        submenu: [
          {
            label: 'Contratos',
            routeName: 'Contracts',
          },
        ],
      },
      {
        labelMenu: 'Catálogos',
        submenu: [
          {
            label: 'Área revisora',
            routeName: 'ReviewAreas'
          },
        ],
      },
    ] */
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

    return {
      menu,
      showSubmenu,
      showSubmenu2,
      indexActiveSubmenu,
      indexActiveSubmenu2,
    }
  },
}
</script>
