<template>
  <table class="border border-solid border-t-0 border-l-0  border-black border-collapse text-gray-900 w-full">
    <Detail-Pop :data="dataContratoConvenio.data" :isOpen="isOpenContratoModal.isOpen"
      @submit="isOpenContratoModal.isOpen = false" />

    <DetailPopConvenioModificatorio :data="dataConvenioModificatorio.data" :isOpen="isOpenConvenioModificatorioModal.isOpen"
      @submit="isOpenConvenioModificatorioModal.isOpen = false" v-if="!dataConvenioModificatorio.loading" />
    <tr>
      <th v-for="(header, index) in headers" :key="index" class=" border-b-2 border-l-0 px-2"
        :class="{ 'border-r-2': header.label === ' ' }">
        {{ header.label }}
      </th>
    </tr>
    <tr id="rows" class="mx-6" v-for="(item, contador ) in data" :key="contador"
      :class="{ ' bg-gray-100': contador % 2 === 0 }">
      <td v-for="(header, index) in headers" :key="index" class="text-center px-2"
        :class="{ 'border-r-2 text-center': header.field === 'documents', 'border-l': index == 0 }">
        <p v-if="header.label === '#'">
          {{ contador + 1 }}
        </p>
        <img src="../../assets/PDF.png" @click="downloadFile(item)" class="cursor-pointer"
          v-if="header.field === 'documents' && item.archivo_residente !== null">
        <p v-if="header.field === 'numero_contrato' && item.contrato_padre === null"
          class=" text-blue cursor-pointer contratos text-center" @click="detalleContrato(item)">
          {{ item[header.field] }}
        </p>
        <p v-if="header.field === 'numero_contrato' && item.contrato_padre !== null"
          class=" text-blue cursor-pointer contratos text-center" @click="detalleContrato(item)">
          {{ item.numero_contrato_padre }}
        </p>
        <p v-if="header.field === 'numero_contrato_padre' && item.contrato_padre !== null"
          class=" text-blue cursor-pointer contratos text-center" @click="detalleConvenioModificatorio(item)">
          {{ item.numero_contrato }}
        </p>
        <p
          v-if="header.field !== 'numero_contrato_padre' && header.field !== 'numero_contrato' && header.field !== 'estatus_semaforo'">
          {{ item[header.field] }}
        </p>
        <!--
          {{ item[header.field] }} -->
        <button class=" bg-orange rounded-full text-orange w-6" @click="semaforo(item)"
          v-if="header.label === 'RESIDENTE' && header.field === 'estatus_semaforo' && item[header.field] === 'Residente'">
          ab</button>
        <button class=" bg-orange rounded-full text-orange w-6" @click="semaforo(item)"
          v-if="header.label === 'ÁREA REVISORA' && header.field === 'estatus_semaforo' && item[header.field] === 'Area Revisora'">
          ab</button>
        <button class=" bg-orange rounded-full text-orange w-6" @click="semaforo(item)"
          v-if="header.label === 'FINANZAS' && header.field === 'estatus_semaforo' && item[header.field] === 'Finanzas'">
          ab</button>
        <button class=" bg-orange rounded-full text-orange w-6" @click="semaforo(item)"
          v-if="header.label === 'TRÁMITE DE PAGO' && header.field === 'estatus_semaforo' && item[header.field] === 'DGPOP'">
          ab</button>
        <button class=" bg-green rounded-full text-green w-6" @click="semaforo(item)"
          v-if="header.label === 'PAGO' && header.field === 'estatus_semaforo' && item[header.field] === 'Pago Efectuado'">
          ab</button>
      </td>
      <td v-if="options.length" class="p-2 relative" :class="{ ' border-l-2 border-gray-100': contador % 2 !== 0 }">
        <div class="flex justify-center">
          <div class="p-1 cursor-pointer" @click="openActions(`table-actions-${contador}`)">
            <span v-for="(dot, index) in dots" :key="index" class="rounded-full h-1 w-1 block bg-blue mb-1" />
          </div>
        </div>
        <div class="hidden absolute right-4 top-8 bg-white z-10" style="box-shadow: -3px 3px 6px #00000029;"
          :id="`table-actions-${contador}`" @mouseleave="openActions(`table-actions-${contador}`)">
          <div class="flex flex-col">
            <template v-for="(option, index) in options" :key="index">
              <div v-if="!option.disabled" class="h-8 flex justify-center items-center py-2 px-8">
                <p class="text-xs border-b border-solid border-gray-100 cursor-pointer hover:border-gray hover:font-medium"
                  @click="option.action(item)">
                  {{ option.label }}
                </p>
              </div>
            </template>
          </div>
        </div>
      </td>
    </tr>
  </table>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { fetchAssingResident } from '../../api/assingResident'
import { fetchContractById,fetchContractDetailById } from '../../api/contract'
import DetailPop from '../../components/ResidentEstimate/DetailPop.vue'
import DetailPopConvenioModificatorio from '../../components/ResidentEstimate/DetailPopConvenioModificatorio.vue'
export default {
  name: 'TableEstimateResident',
  components: {
    DetailPop,
    DetailPopConvenioModificatorio,
  },
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
    const router = useRouter()
    const dots = [1, 2, 3]
    let isOpenContratoModal = reactive({ isOpen: false })
    let dataContratoConvenio = reactive({
      data: {}
    })
    let isOpenConvenioModificatorioModal = reactive({ isOpen: false })
    let dataConvenioModificatorio = reactive({
      data: {},
      loading: true
    })

    const detalleContrato = async (item) => {
      isOpenContratoModal.isOpen = !isOpenContratoModal.isOpen
      if (item.contrato_padre === null) {
        const { data } = await fetchContractById(item.contrato_estimacion)
        dataContratoConvenio.data = data
      }
      if (item.contrato_padre !== null) {
        const { data } = await fetchContractById(item.contrato_padre)
        dataContratoConvenio.data = data
      }
    }
    const detalleConvenioModificatorio = async (item) => {
      dataConvenioModificatorio.loading = true
      isOpenConvenioModificatorioModal.isOpen = !isOpenConvenioModificatorioModal.isOpen
      const { data } = await fetchContractDetailById(item.contrato_estimacion)
      dataConvenioModificatorio.data = data
      dataConvenioModificatorio.loading = false
      /* console.log('Se muestran los detalles del contrato: ', item) */
    }
    const semaforo = (item) => {
      router.push({
        name: 'EditResidentEstimate',
        params: {
          residentEstimateId: item.id_estimacion,
        },
      })
    }
    const openActions = (id) => {
      document.getElementById(id).classList.toggle('hidden')
    }

    const downloadFile = async (item) => {
      /* const { data } = await fetchAssingResident() */
      /* console.log('Item a descargar: ', item)
      console.log('Item a descargar: ', item.id_estimacion) */
      /* let result = []
      data.forEach(element => {
        if (item.contrato_padre === null) {
          if (item.contrato_estimacion === element.id_contrato) {
            result.push(element)
          }
        }
        if (item.contrato_padre !== null) {
          if (item.contrato_padre === element.id_contrato) {
            result.push(element)
          }
        }
      }); */

      window.open(`${item.archivo_residente}`, '_blank');
    }

    return {
      dots,
      openActions,
      detalleContrato,
      semaforo,
      downloadFile,
      isOpenContratoModal,
      dataContratoConvenio,
      detalleConvenioModificatorio,
      isOpenConvenioModificatorioModal,
      dataConvenioModificatorio,
    }
  },
}
</script>

<style scoped>
img {
  max-width: 33px;
  margin-left: 10px;
  margin-right: 10px;
}

/* p {
  width: 85px;
} */

/* p.contratos {
  width: 112px;
} */
</style>

