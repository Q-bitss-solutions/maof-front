<template>
  <table class="border border-solid border-t-0 border-l-0  border-black border-collapse text-gray-900 w-full">
    <tr>
      <th v-for="(header, index) in headers" :key="index" class="p-2 border-b-2 border-l-0"
        :class="{ 'border-r-2': header.label === 'Convenio Modificatorio' }">
        {{ header.label }}
      </th>
    </tr>
    <tr id="rows" class="" v-for="(item, index) in data" :key="index" :class="{ ' bg-gray-100': index % 2 === 0 }">
      <td v-for="(header, index) in headers" :key="index" class="p-2 text-center"
        :class="{ 'border-r-2 text-center': header.field === 'numero_contrato_padre', 'border-l': index == 0 }">
        <p v-if="header.field === 'numero_contrato'" @click="detalleContrato(item)">
          {{ item[header.field] }}
        </p>
        <p v-if="header.field === 'numero_contrato_padre'" @click="detalleContrato(item)">
          {{ item[header.field] }}
        </p>
        <p
          v-if="header.field !== 'numero_contrato_padre' && header.field !== 'numero_contrato' && header.field !== 'estatus_semaforo'">
          {{ item[header.field] }}
        </p>
        <!--
          {{ item[header.field] }} -->
        <button class=" bg-red rounded-full text-red" @click="semaforo(item)"
          v-if="header.label === 'RESIDENTE' && header.field === 'estatus_semaforo' && item[header.field] === 'Residente'">
          abcd</button>
        <button class=" bg-red rounded-full text-red" @click="semaforo(item)"
          v-if="header.label === 'ÁREA REVISORA' && header.field === 'estatus_semaforo' && item[header.field] === 'Area Revisora'">
          abcd</button>
        <button class=" bg-red rounded-full text-red" @click="semaforo(item)"
          v-if="header.label === 'FINANZAS' && header.field === 'estatus_semaforo' && item[header.field] === 'Finanzas'">
          abcd</button>
        <button class=" bg-red rounded-full text-red" @click="semaforo(item)"
          v-if="header.label === 'TRÁMITE DE PAGO' && header.field === 'estatus_semaforo' && item[header.field] === 'DGPOP'">
          abcd</button>
        <button class=" bg-green rounded-full text-green" @click="semaforo(item)"
          v-if="header.label === 'PAGO' && header.field === 'estatus_semaforo' && item[header.field] === 'Pago Efectuado'">
          abcd</button>
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
                {{ option.label }}
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
      default: () => ([
        {
          label: 'example',
          action: (context) => console.log(context),
        }
      ]),
    },
  },
  setup() {
    const dots = [1, 2, 3]
    const detalleContrato = (item) => {
      console.log('Se muestran los detalles del contrato: ',item)
    }
    const semaforo = (item) => {
      console.log('Se muestran el item: ', item)
    }
    const openActions = (id) => {
      document.getElementById(id).classList.toggle('hidden')
    }

    return { dots, openActions, detalleContrato, semaforo }
  },
}
</script>

