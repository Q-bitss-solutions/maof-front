<template>
  <div class=" flex  content-start justify-end  items-center mb-10">
    <div class="">
      <h1> Número de la Estimación </h1>
      <p>
        {{app.residentEstimate.id_contrato }}
      </p>
    </div>
  </div>
  <div class="max-w-xl mx-auto">
    <select-base id="id_contrato" label="Número de Contrato(de origen)" :options="app.listContrato"
      v-model="app.residentEstimate.id_contrato" class="mb-3" v-if="editMode !== true"
      @change="getName(app.residentEstimate.id_contrato)" />
    <input-base id="id_area_revisora" label="Objeto del Contrato" type="text" v-model="app.contratoName" class="mb-3"
      v-if="editMode !== true" disabled />
    <input-base id="fecha_recepcion_info_contratista" label="Fecha de recepción de información del Contratista"
      type="date" class="mb-3" v-model="app.fecha_recepcion_info_contratista" />
    <input-base id="fecha_autorizacion_contratista" label="Fecha de autorización al Contratista" type="date" class="mb-3"
      v-model="app.fecha_autorizacion_contratista" />
    <div class="flex flex-row ">
      <div>
        <input-base id="fecha_periodo_inicio_estimacion" label="Período de la Estimación" type="date"
          v-model="app.fecha_periodo_inicio_estimacion" />
      </div>
      <div>
        <input-base id="fecha_periodo_fin_estimacion" label="al" type="date" class="pt-2"
          v-model="app.fecha_periodo_fin_estimacion" />
      </div>
    </div>
    <input-base id="importe_obra_ejecutada" label="Importe de la obra ejecutada" type="number" class="mb-3"
      v-model="app.residentEstimate.importe_obra_ejecutada" />
    <input-base id="importe_pagar" label="Importe a pagar" type="number" class="mb-3"
      v-model="app.residentEstimate.importe_pagar" />
    <input-base id="grado_avance_obra" label="% de grado de avance" type="number" class="mb-3"
      v-model="app.residentEstimate.grado_avance_obra" />
    <input-base id="porcentaje_avance_estimacion" label="% de avance de la Estimación" type="number" class="mb-3"
      v-model="app.residentEstimate.porcentaje_avance_estimacion" />
    <input-base id="porcentaje_avance_estimacion_acumulado" label="% de avance de la Estimación acumulado" type="number"
      class="mb-3" v-model="app.residentEstimate.porcentaje_avance_estimacion_acumulado" />
    <input-base id="porcentaje_Avance_fisico" label="% de avance físico" type="number" class="mb-3"
      v-model="app.residentEstimate.porcentaje_Avance_fisico" />
    <input-base id="porcensaje_avance_financiero" label="% de avance financiero" type="number" class="mb-3"
      v-model="app.residentEstimate.porcensaje_avance_financiero" />
    <text-area-base id="fecha_inicio_proyecto" label="Observaciones del Residente" class="mb-3"
      v-model="app.residentEstimate.observaciones_residente" />
    <button-base label="Guardar" @click="sendForm" class="mr-0 ml-auto" />
  </div>
</template>

<script>
import { reactive } from 'vue'
import InputBase from '../InputBase.vue'
import ButtonBase from '../ButtonBase.vue'
import SelectBase from '../SelectBase.vue'
import TextAreaBase from '../TextAreaBase.vue'
import { fetchContracts, fetchContractById } from '../../api/contract'
import { storeResidentEstimate, fetchResidentEstimate } from '../../api/residentEstimate'
import { fetchSCIT_EmployeesQuery } from '../../api/SCIT_Employees'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

export default {
  name: 'FormResidentEstimate',
  props: {
    editMode: {
      type: Boolean,
      default: false,
    },
    residentEstimate: {
      type: Object,
      default: () => ({})
    },
  },
  components: {
    InputBase,
    ButtonBase,
    SelectBase,
    TextAreaBase,
  },
  setup(props, { emit }) {
    const router = useRouter()
    const app = reactive({
      residentEstimate: {
        id_contrato: '',
        fecha_recepcion_info_contratista: '',
        fecha_autorizacion_contratista: '',
        fecha_periodo_inicio_estimacion: '',
        fecha_periodo_fin_estimacion: '',
        importe_obra_ejecutada: '',
        importe_pagar: '',
        grado_avance_obra: '',
        porcentaje_avance_estimacion: '',
        porcentaje_avance_estimacion_acumulado: '',
        porcentaje_Avance_fisico: '',
        porcensaje_avance_financiero: '',
        observaciones_residente: '',
      },
      fecha_recepcion_info_contratista: '',
      fecha_autorizacion_contratista: '',
      fecha_periodo_inicio_estimacion: '',
      fecha_periodo_fin_estimacion: '',
      contratoName: '',
      fileInfo: {
        type: Object,
        default: () => ({})
      },
      listReviewAreas: [],
      listEmpleados: [],
      listContrato: [],
    })
    if (props.editMode) {
      app.resident = props.resident
      app.resident.fecha_inicio_residente = props.resident.fecha_inicio_residente.split('-').reverse().join('-')
    }
    const sendForm = () => {
      let today = new Date();
      // obtener la hora en la configuración regional de EE. UU.
      var now = today.toLocaleTimeString('en-GB');
      console.log(now);
      app.residentEstimate.fecha_recepcion_info_contratista = app.fecha_recepcion_info_contratista + ' ' + now
      app.residentEstimate.fecha_autorizacion_contratista = app.fecha_autorizacion_contratista + ' ' + now
      app.residentEstimate.fecha_periodo_inicio_estimacion = app.fecha_periodo_inicio_estimacion + ' ' + now
      app.residentEstimate.fecha_periodo_fin_estimacion = app.fecha_periodo_fin_estimacion + ' ' + now
      Swal.fire({
        title: `¿Confirma los cambios ?`,
        icon: 'question',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Continuar',
        reverseButtons: true
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            /* await deleteAssingResident(app.assingResident.id_asignacion_residente_contrato, formData) */
            console.log('residentEstimate: ', app.residentEstimate)
            await storeResidentEstimate(app.residentEstimate)
            Swal.fire({
              title: `Registro dado de alta`,
              text: "¿Desea ingresar los documentos?",
              icon: 'success',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Si',
              cancelButtonText: 'No',
              reverseButtons: true
            }).then(async (result) => {
              if (result.isConfirmed) {
                const { data } = await fetchResidentEstimate()
                const lengthData = data.length - 1
                app.fileInfo = data[lengthData]
                console.log('fileInfo: ', app.fileInfo.id_estimacion)
                router.push({
                  name: 'FilesResidentEstimate',
                  params: {
                    amendingAgreementId: app.fileInfo.id_estimacion,
                  },
                })
              } else {
                router.push({ name: 'Home' })
              }
            })
            /* router.push({ name: 'AssignResident' }) */
          } catch (error) {
            console.log('error: ', error.response.data.detail)
            Swal.fire(
              'Error',
              `${error.response.data.detail}`,
              'error'
            )
            /* router.push({ name: 'AssignResident' }) */
          }
        }
      })
      /* emit('submit', app.resident) */
    }

    const getContratos = async () => {
      const { data } = await fetchContracts()
      app.listContrato = data.map(contrato => ({ value: contrato.id_contrato, label: contrato.numero_contrato, name: contrato.nombre_proyecto }))
      console.log('app.listContrato:', app.listContrato)
    }

    const getName = async (id) => {
      const { data } = await fetchContractById(id)
      app.contratoName = data.nombre_proyecto
    }

    const getEmpleadosSICT = async () => {
      const { data } = await fetchSCIT_EmployeesQuery(app.idAreaRevisora)
      app.listEmpleados = data.map(empleado => ({ value: empleado.empleado_sict, label: empleado.nombre_completo }))
    }

    getContratos()

    return {
      app,
      sendForm,
      getContratos,
      getEmpleadosSICT,
      getName,
    }
  },
}
</script>

<style>
label[for=fecha_periodo_fin_estimacion] {
  flex-basis: 0;
  padding-left: 10px;
}

label[for=fecha_periodo_inicio_estimacion] {
  width: 200px;
}

input[id=fecha_periodo_inicio_estimacion] {
  margin-left: 60px;
}
</style>