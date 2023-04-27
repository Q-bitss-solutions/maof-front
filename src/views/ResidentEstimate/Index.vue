<template>
  <main class="px-4 mt-10">
    <arrow-back />
    <title-bar title="Estimación Residente" subtitle="Inicio" />
    <section class="px-4">
      <button-base label="Nueva Estimación Residente" @click="goToNewResidentEstimate" class="mb-3 mr-0 ml-auto" />
        <!-- <table-base :options="featureOptions" :headers="headers" /> -->
        <tablero-estimacion-residente :options="featureOptions" :headers="headers" :data="residentEstimate" />
        <!-- <tablero-estimacion-residente  /> -->
    </section>
  </main>
</template>

<script>
import { ref } from 'vue'
import TableroEstimacionResidente from '../../components/ResidentEstimate/TableroEstimacionResidente.vue'
import TableBase from '../../components/TableBase.vue'
import { fetchResidentEstimate  } from './../../api/residentEstimate'
import ArrowBack from '../../components/ArrowBack.vue'
import ButtonBase from '../../components/ButtonBase.vue'
import { useRouter } from 'vue-router'
import TitleBar from '../../components/TitleBar.vue'
import Swal from 'sweetalert2'

export default {
  name: 'ResidentEstimateIndex',
  components: {
    TableroEstimacionResidente,
    ArrowBack,
    ButtonBase,
    TitleBar,
    TableBase,
  },
  setup() {
    const router = useRouter()
    const headers = [
      {
        label: 'Renglon',
        field: 'id_residente',
      },
      {
        label: 'Contrato o Convenio de Colaboracion',
        field: 'contrato',
      },
      {
        label: 'Convenio Modificatorio',
        field: 'convenio_modificatorio',
      },
      {
        label: '# Estimación',
        field: 'num_consecutivo_estimacion',
      },
      {
        label: 'Fecha de inicio',
        field: 'fecha_periodo_inicio_estimacion',
      },
      {
        label: 'Fecha de fin',
        field: 'fecha_periodo_fin_estimacion',
      },
      {
        label: 'Fecha de alta',
        field: '',
      },
      {
        label: 'Fecha de autorización',
        field: 'fecha_autorizacion_contratista',
      },
      {
        label: 'Días transcurridos',
        field: '',
      },
      {
        label: 'RESIDENTE',
        field: '',
      },
      {
        label: 'ÁREA REVISORA',
        field: '',
      },
      {
        label: 'FINANZAS',
        field: '',
      },
      {
        label: 'TRÁMITE DE PAGO',
        field: '',
      },
      {
        label: 'PAGO',
        field: '',
      },
    ]
    const residentEstimate = ref([])
    const getResidentEstimate = async () => {
      const { data } = await fetchResidentEstimate()
      console.log(data)
      residentEstimate.value = data
    }
    const featureOptions = [
      {
        label: 'Detalles',
        action: (residentEstimate) => router
          .push({
            name: 'EditResidentEstimate',
            params: {
              residentEstimateId: residentEstimate.id_residentEstimate,
            },
          }),
      },
      {
        label: 'Nuevo',
        action: (residentEstimate) => router
          .push({
            name: 'EditResidentEstimate',
            params: {
              residentEstimateId: residentEstimate.id_residentEstimate,
            },
          }),
      },
      {
        label: 'Archivo',
        action: async (residentEstimate) => {
          Swal.fire({
            title: `Estas seguro que desea inactivar la Estimación Residente "${residentEstimate.nombre_completo}"?`,
            text: "Esto finalizara las asignaciones del residente",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Inactivar!'
          }).then(async (result) => {
            if (result.isConfirmed) {
              try {
                await deleteResident(residentEstimate.id_residentEstimate)
                await getResident()
                Swal.fire(
                  'Inactivo!',
                  'El residente se inactivó',
                  'success'
                )
              } catch (error) {
                Swal.fire(
                  'Error',
                  `${error.response.data.message}`,
                  'error'
                )
              }
            }
          })
          /* if (confirm(`Estas seguro que desea eliminar el residente "${resident.nombre_completo}"?,esto finalizara las asignaciones del residente`)) {
            await deleteResident(resident.id_residente)
            await getResident()
          } */
        },
      },
    ]
    const goToNewResidentEstimate = () => router.push({ name: 'NewResidentEstimate' })

    getResidentEstimate()

    return {
      residentEstimate,
      featureOptions,
      headers,
      goToNewResidentEstimate,
      getResidentEstimate,
    }
  },
}
</script>
