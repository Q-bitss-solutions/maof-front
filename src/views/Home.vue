<template>
  <main class="px-4 pt-20">
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
  </main>
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
            label: 'Area revisora',
            routeName: 'ReviewAreas'
          },
        ],
      },
    ]
    const indexActiveSubmenu = ref(null)
    const showSubmenu = (index) => {
      if (indexActiveSubmenu.value === index) {
        return indexActiveSubmenu.value = null
      }
      return indexActiveSubmenu.value = index
    }

    return {
      menu,
      showSubmenu,
      indexActiveSubmenu,
    }
  },
}
</script>
