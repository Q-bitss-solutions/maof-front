<template>
  <table class="border border-solid border-black border-collapse text-gray-900 w-full">
    <caption>Usuarios MAOF</caption>
    <tr>
      <th v-for="(header, index) in headers" :key="index" class="p-2 border border-b-2 border-solid border-black">
        {{ header.label }}
      </th>
    </tr>
    <tr id="rows" class="" v-for="(item, index) in data" :key="index" :class="{ ' bg-gray-100': index % 2 === 0 }">
      <td v-for="(header, index) in headers" :key="index" class="p-2 border border-solid border-black">
        {{ item[header.field] }}
      </td>
      <td v-if="options.length" class="p-2 border border-solid border-gray-100 relative">
        <div class="flex justify-center">
          <div class="p-1 cursor-pointer" @click="openActions(`table-actions-${index}`)">
            <span v-for="(dot, index) in dots" :key="index" class="rounded-full h-1 w-1 block bg-blue mb-1" />
          </div>
        </div>
        <div class="hidden absolute right-4 top-8 bg-white z-10" style="box-shadow: -3px 3px 6px #00000029;"
          :id="`table-actions-${index}`" @mouseleave="openActions(`table-actions-${index}`)">
          <div class="flex flex-col">
            <div v-for="(option, index) in options" :key="index" class="h-8 flex justify-center items-center py-2 px-8">
              <p class="text-xs border-b border-solid border-gray-100 cursor-pointer hover:border-gray hover:font-medium"
                @click="option.action(item)">
                <!-- {{ option.label }} -->
                <!-- {{ item }} -->
                <span v-if="item.estatus_empleado === 'Activo' && option.label === 'Editar'">
                  Editar
                </span>
                <span v-if="item.estatus_empleado === 'Activo' && option.label === 'Estatus'">
                  <!-- {{ item.estatus_empleado === 'Activo' && option.label === 'Estatus' ? 'Inactivar' : 'Activar' }} -->
                  Inactivar
                </span>
                <span v-if="item.estatus_empleado === 'Inactivo' && option.label === 'Estatus'">
                  <!-- {{ item.estatus_empleado === 'Activo' && option.label === 'Estatus' ? 'Inactivar' : 'Activar' }} -->
                  Activar
                </span>
              </p>
            </div>
          </div>
        </div>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'TableBase',
  props: {
    headers: {
      type: Array,
      default: () => ([
        {
          label: 'Example Header',
          field: 'example'
        }
      ]),
    },
    data: {
      type: Array,
      default: () => ([
        {
          example: 'value 1',
        }
      ]),
    },
    options: {
      type: Array,
      default: []
      /* default: () => ([
        {
          label: 'example',
          action: (context) => console.log(context),
        }
      ]), */
    },
  },
  setup() {
    const dots = [1, 2, 3]
    const openActions = (id) => {
      document.getElementById(id).classList.toggle('hidden')
    }

    return { dots, openActions }
  },
}
</script>

