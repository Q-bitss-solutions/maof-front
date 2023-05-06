<template>
  <!-- <div class=" flex flex-row justify-between">
    <div>
      {{ app.residentEstimate }}
    </div>
    <div class=" flex content-start justify-end items-center mb-10">
      <div class=" items-center justify-center">
        <h1 class=" font-bold text-lg"> Número de la Estimación </h1>
        <p class=" text-center font-semibold text-lg">
          {{ app.residentEstimate.num_consecutivo_estimacion }}
        </p>
      </div>
    </div>
  </div> -->

  <div class=" flex flex-row justify-between">
    <div class="font-bold text-lg">
      {{ app.residentEstimate.numero_contrato }}
    </div>
    <div class="font-bold text-lg w-128">
      Objeto: {{ app.residentEstimate.objeto_contrato }}
    </div>
    <div class=" flex content-start justify-end items-center mb-10">
      <div class=" items-center justify-center">
        <h1 class=" font-bold text-lg text-center"> Número de la Estimación </h1>
        <p class=" text-center font-semibold text-lg numEstimacion">
          {{ app.residentEstimate.num_consecutivo_estimacion }}
        </p>
      </div>
    </div>
  </div>


  <button-base label="Archivos" @click="goToArchivos" class="mb-3 mr-0 ml-auto" />
  <div class="max-w-xl mx-auto">
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
    <div class="flex justify-between items-center py-4 ">
      <button-base label="Actualizar Datos" class=" px-4" @click="editForm" />
      <button-base label="Eliminar Estimacion" class=" px-4" @click="deleteForm" />
      <button-base label="Enviar al area revisora" class=" px-4" @click="sendReviewArea"
        v-if="app.residentEstimate.estatus_semaforo === 'Residente'" />
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import InputBase from '../InputBase.vue'
import ButtonBase from '../ButtonBase.vue'
import SelectBase from '../SelectBase.vue'
import TextAreaBase from '../TextAreaBase.vue'
import { fetchContracts, fetchContractById } from '../../api/contract'
import { storeResidentEstimate, sendToReviewArea, updateResidentEstimate, deleteResidentEstimate } from '../../api/residentEstimate'
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
  setup(props) {
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
      estatus_semaforo: '',
      fileInfo: {
        type: Object,
        default: () => ({})
      },
      listReviewAreas: [],
      listEmpleados: [],
      listContrato: [],
    })
    const formatFecha = (fecha) => {
      let aux = []
      aux = fecha.split(' ')
      aux = aux[0].split('-')
      aux = aux[0] + '-' + aux[1] + '-' + aux[2]
      fecha = aux
      return fecha
    }

    if (props.editMode) {
      console.log('props.residentEstimate: ', props.residentEstimate)
      console.log('props: ', props)
      app.residentEstimate = props.residentEstimate
      app.estatus_semaforo = props
      app.fecha_recepcion_info_contratista = formatFecha(props.residentEstimate.fecha_recepcion_info_contratista)

      if (props.residentEstimate.fecha_autorizacion_contratista === null) {
        app.fecha_autorizacion_contratista = null

      } else {
        app.fecha_autorizacion_contratista = formatFecha(props.residentEstimate.fecha_autorizacion_contratista)
      }
      app.fecha_periodo_inicio_estimacion = formatFecha(props.residentEstimate.fecha_periodo_inicio_estimacion)
      app.fecha_periodo_fin_estimacion = formatFecha(props.residentEstimate.fecha_periodo_fin_estimacion)
    }
    const editForm = () => {
      let today = new Date();
      // obtener la hora en la configuración regional de EE. UU.
      var now = today.toLocaleTimeString('en-GB');
      console.log(now);
      app.residentEstimate.fecha_recepcion_info_contratista = app.fecha_recepcion_info_contratista + ' ' + now

      if (app.fecha_autorizacion_contratista === null || app.fecha_autorizacion_contratista === '') {
        delete app.residentEstimate.fecha_autorizacion_contratista

      } else {
        app.residentEstimate.fecha_autorizacion_contratista = app.fecha_autorizacion_contratista + ' ' + now
      }

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
            /* delete app.residentEstimate.num_consecutivo_estimacion
            delete app.residentEstimate.estatus_estimacion
            delete app.residentEstimate.fecha_alta */
            console.log('residentEstimate put: ', app.residentEstimate)
            await updateResidentEstimate(app.residentEstimate)
            Swal.fire(
              '¡Éxito!',
              'Actualización con éxito!',
              'success'
            )
            router.push({ name: 'ResidentEstimate' })
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
    const deleteForm = () => {
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
            console.log('app.residentEstimate.observaciones_residente: ', app.residentEstimate.observaciones_residente)
            console.log('app.residentEstimate.id_estimacion: ', app.residentEstimate.id_estimacion)
            await deleteResidentEstimate(app.residentEstimate, app.residentEstimate.id_estimacion)
            Swal.fire(
              '¡Éxito!',
              'Actualización con éxito!',
              'success'
            )
            router.push({ name: 'ResidentEstimate' })
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
    }
    const sendReviewArea = () => {
      let today = new Date();
      // obtener la hora en la configuración regional de EE. UU.
      var now = today.toLocaleTimeString('en-GB');
      if (app.fecha_autorizacion_contratista === null) {
        delete app.residentEstimate.fecha_autorizacion_contratista
      } else {
        app.residentEstimate.fecha_autorizacion_contratista = app.fecha_autorizacion_contratista + ' ' + now
      }
      Swal.fire({
        title: `Se realizará el envio de la Estimación al área revisora`,
        icon: 'question',
        showCancelButton: true,
        text: '¿Está usted seguro?',
        cancelButtonColor: '#d33',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Continuar',
        reverseButtons: true
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await sendToReviewArea(app.residentEstimate)
            Swal.fire(
              '¡Éxito!',
              'Estimación enviada al área revisora con éxito!',
              'success'
            )
            router.push({ name: 'ResidentEstimate' })
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
    }

    const goToArchivos = () => router.push({
      name: 'FilesResidentEstimate',
      params: {
        residentEstimateId: app.residentEstimate.id_estimacion,
      },
    })


    return {
      app,
      editForm,
      deleteForm,
      sendReviewArea,
      goToArchivos,
      formatFecha,
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

.numEstimacion {
  width: auto;
}
</style>