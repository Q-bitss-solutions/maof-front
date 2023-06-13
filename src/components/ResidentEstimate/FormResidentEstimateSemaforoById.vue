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
      v-model="app.fecha_autorizacion_contratista" :disabled="app.residentEstimate.estatus_semaforo !== 'Residente'" />
    <span v-if="v$.fecha_autorizacion_contratista.$error" v-for="error in  v$.fecha_autorizacion_contratista.$errors"
      :key="error" class=" text-red font-semibold text-center ml-80"> {{ error.$message }} </span>

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
    <span v-if="v$.grado_avance_obra.$error" v-for="error in  v$.grado_avance_obra.$errors" :key="error"
      class=" text-red font-semibold text-center ml-80"> {{ error.$message }} </span>


    <input-base id="porcentaje_avance_estimacion" label="% de avance de la Estimación" type="number" class="mb-3"
      v-model="app.residentEstimate.porcentaje_avance_estimacion" />
    <span v-if="v$.porcentaje_avance_estimacion.$error" v-for="error in  v$.porcentaje_avance_estimacion.$errors"
      :key="error" class=" text-red font-semibold text-center ml-80"> {{ error.$message }} </span>


    <input-base id="porcentaje_avance_estimacion_acumulado" label="% de avance de la Estimación acumulado" type="number"
      class="mb-3" v-model="app.residentEstimate.porcentaje_avance_estimacion_acumulado" />
    <span v-if="v$.porcentaje_avance_estimacion_acumulado.$error"
      v-for="error in  v$.porcentaje_avance_estimacion_acumulado.$errors" :key="error"
      class=" text-red font-semibold text-center ml-80"> {{ error.$message }} </span>


    <input-base id="porcentaje_Avance_fisico" label="% de avance físico" type="number" class="mb-3"
      v-model="app.residentEstimate.porcentaje_Avance_fisico" />
    <span v-if="v$.porcentaje_Avance_fisico.$error" v-for="error in  v$.porcentaje_Avance_fisico.$errors" :key="error"
      class=" text-red font-semibold text-center ml-80"> {{ error.$message }} </span>


    <input-base id="porcensaje_avance_financiero" label="% de avance financiero" type="number" class="mb-3"
      v-model="app.residentEstimate.porcensaje_avance_financiero" />
    <span v-if="v$.porcensaje_avance_financiero.$error" v-for="error in  v$.porcensaje_avance_financiero.$errors"
      :key="error" class=" text-red font-semibold text-center ml-80"> {{ error.$message }} </span>
  </div>

  <!-- Actions Residente -->
  <div class="flex justify-between items-center py-4" v-if="app.residentEstimate.estatus_semaforo === 'Residente'">
    <button-base label="Inactivar Estimación" class=" px-4" @click="deleteForm"
      v-if="app.residentEstimate.estatus_estimacion === 'Capturada por Residente' || app.residentEstimate.estatus_estimacion === 'Autorizada por Residente'" />
    <button-base label="Actualizar datos" class=" px-4" @click="editForm" />
    <button-base label="Enviar al área revisora" class=" px-4" @click="sendReviewArea" />
  </div>
  <!-- Actions Area Revisora -->
  <div class="flex justify-between items-center py-4" v-if="app.residentEstimate.estatus_semaforo === 'Area Revisora'">
    <button-base label="Regresar a  Residente" class=" px-4"/>
    <button-base label="Actualizar datos" class=" px-4"/>
    <button-base label="Enviar a finanzas" class=" px-4"  />
  </div>
  <!-- Actions Finanzas -->
  <div class="flex justify-between items-center py-4" v-if="app.residentEstimate.estatus_semaforo === 'Finanzas'">
    <button-base label="Regresar al área revisora" class=" px-4" @click="returnToReviewArea"/>
    <button-base label="Cancelar" class=" px-4" @click="back"/>
    <button-base label="Enviar a trámite de pago" class=" px-4" @click="sendToPaymentProcess"/>
  </div>
  <!-- Actions Tramite de pagos -->
  <div class="flex justify-between items-center py-4" v-if="app.residentEstimate.estatus_semaforo === 'DGPOP'">
    <button-base label="Regresar a Finanzas" class=" px-4" @click="sendFinance" />
    <button-base label="Cancelar" class=" px-4"  @click="back" />
    <button-base label="Registrar Pago" class=" px-4"  @click="paymentToRegister" />
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import InputBase from '../InputBase.vue'
import ButtonBase from '../ButtonBase.vue'
import SelectBase from '../SelectBase.vue'
import TextAreaBase from '../TextAreaBase.vue'
import { sendToReviewArea, updateResidentEstimate, deleteResidentEstimate } from '../../api/residentEstimate'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import useVuelidate from '@vuelidate/core'
import { helpers, minValue, maxValue, or } from '@vuelidate/validators'

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
    const fechaActualFunction = () => {
      let today = new Date();
      var dia = ("0" + today.getDate()).slice(-2);
      var mes = ("0" + (today.getMonth() + 1)).slice(-2);
      var anio = today.getFullYear();
      var fechaActual = anio + "-" + mes + "-" + dia;
      if (app.fecha_autorizacion_contratista > fechaActual) {
        return false
      } else {
        return true
      }
    }
    const rules = computed(() => {
      return {
        /* id_contrato: { required: helpers.withMessage('El id es requerido', required) },
        id_residente: { required }, */
        porcentaje_avance_estimacion: {
          maxValue: helpers.withMessage('El valor maximo es 100%', maxValue(100)),
          minValue: helpers.withMessage('El valor minimo es 0%', minValue(0))
        },
        porcentaje_avance_estimacion_acumulado: {
          maxValue: helpers.withMessage('El valor maximo es 100%', maxValue(100)),
          minValue: helpers.withMessage('El valor minimo es 0%', minValue(0))
        },
        porcentaje_Avance_fisico: {
          maxValue: helpers.withMessage('El valor maximo es 100%', maxValue(100)),
          minValue: helpers.withMessage('El valor minimo es 0%', minValue(0))
        },
        porcensaje_avance_financiero: {
          maxValue: helpers.withMessage('El valor maximo es 100%', maxValue(100)),
          minValue: helpers.withMessage('El valor minimo es 0%', minValue(0))
        },
        grado_avance_obra: {
          maxValue: helpers.withMessage('El valor maximo es 100%', maxValue(100)),
          minValue: helpers.withMessage('El valor minimo es 0%', minValue(0))
        },
        fecha_autorizacion_contratista: {
          fechaActualFunction: helpers.withMessage('La fecha es mayor al dia de hoy', fechaActualFunction),
        },
      }
    })
    const v$ = useVuelidate(rules, props.residentEstimate)
    if (props.editMode) {
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
      app.residentEstimate.fecha_recepcion_info_contratista = app.fecha_recepcion_info_contratista + ' ' + now
      if (app.fecha_autorizacion_contratista === null || app.fecha_autorizacion_contratista === '') {
        app.residentEstimate.fecha_autorizacion_contratista = null

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
            const validaciones = await v$.value.$validate()
            if (validaciones) {
              await updateResidentEstimate(app.residentEstimate)
              Swal.fire(
                '¡Éxito!',
                'Actualización con éxito!',
                'success'
              )
              router.push({ name: 'ResidentEstimate' })
            } else {
              Swal.fire(
                'Error',
                `Revisa bien los datos`,
                'error'
              )
            }

          } catch (error) {
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
            await deleteResidentEstimate(app.residentEstimate, app.residentEstimate.id_estimacion)
            Swal.fire(
              '¡Éxito!',
              'Actualización con éxito!',
              'success'
            )
            router.push({ name: 'ResidentEstimate' })
          } catch (error) {
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
        app.residentEstimate.fecha_autorizacion_contratista = null
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
            const { value: text } = await Swal.fire({
              input: 'textarea',
              inputLabel: 'Observaciones',
              inputPlaceholder: 'Escribe tus observaciones...',
              inputAttributes: {
                'aria-label': 'Type your message here'
              },
              showCancelButton: true,
              reverseButtons: true,
              inputValidator: (value) => {
                if (!value) {
                  return 'El campo es requerido'
                }
              }
            })
            if (text !== undefined) {
              app.residentEstimate.observaciones_residente = text
              await sendToReviewArea(app.residentEstimate)
              Swal.fire(
                '¡Éxito!',
                'Estimación enviada al área revisora con éxito!',
                'success'
              )
              router.push({ name: 'ResidentEstimate' })
            }
            else {
              Swal.fire(
                'No agregaste ninguna observacion',
                'Agrega uno para continuar',
                'warning'
              )
            }
          } catch (error) {
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

    const back = () => router.push({ name: 'ResidentEstimate' })

    const returnToReviewArea = async () => {
      let today = new Date();
      // obtener la hora en la configuración regional de EE. UU.
      var now = today.toLocaleTimeString('en-GB');

      try {

        const { value: text } = await Swal.fire({
          input: 'textarea',
          inputLabel: 'Observaciones para el área revisora',
          inputPlaceholder: 'Escribe tus observaciones...',
          inputAttributes: {
            'aria-label': 'Type your message here'
          },
          showCancelButton: true,
          reverseButtons: true,
          inputValidator: (value) => {
            if (!value) {
              return 'El campo es requerido'
            }
          }
        })
        if (text !== undefined) {
            const res = await Swal.fire({
              title: `En esta fecha se regresará la Estimación al área revisora`,
              icon: 'question',
              showCancelButton: true,
              text: '¿Está usted seguro?',
              cancelButtonColor: '#d33',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'Continuar',
              reverseButtons: true
            })
            if(res.isConfirmed){
              app.residentEstimate.observaciones_residente = text
              await console.log('Regresar a area revisora')
              Swal.fire(
                '¡Éxito!',
                'Estimación enviada al área revisora con éxito!',
                'success'
              )
              router.push({ name: 'ResidentEstimate' })
            }
        }
        else {
          Swal.fire(
            'No agregaste ninguna observacion',
            'Agrega uno para continuar',
            'warning'
          )
        }
      }
      catch(error){
        Swal.fire(
          'Error',
          `${error.response.data.detail}`,
          'error'
        )
      }
    }

    const sendToPaymentProcess = async () => {
      let today = new Date();
      // obtener la hora en la configuración regional de EE. UU.
      var now = today.toLocaleTimeString('en-GB');

      try {

        const { value: text } = await Swal.fire({
          input: 'textarea',
          inputLabel: 'Observaciones para trámite de pago',
          inputPlaceholder: 'Escribe tus observaciones...',
          inputAttributes: {
            'aria-label': 'Type your message here'
          },
          showCancelButton: true,
          reverseButtons: true,
          inputValidator: (value) => {
            if (!value) {
              return 'El campo es requerido'
            }
          }
        })
        if (text !== undefined) {
            const res = await Swal.fire({
              title: `En esta fecha se enviará la Estimación a trámite de pago`,
              icon: 'question',
              showCancelButton: true,
              text: '¿Está usted seguro?',
              cancelButtonColor: '#d33',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'Continuar',
              reverseButtons: true
            })
            if(res.isConfirmed){
              app.residentEstimate.observaciones_residente = text
              await console.log('Enviar a a trámite de pago')
              Swal.fire(
                '¡Éxito!',
                'Estimación enviada a trámite de pago con éxito!',
                'success'
              )
              router.push({ name: 'ResidentEstimate' })
            }
        }
        else {
          Swal.fire(
            'No agregaste ninguna observacion',
            'Agrega uno para continuar',
            'warning'
          )
        }
      }
      catch(error){
        Swal.fire(
          'Error',
          `${error.response.data.detail}`,
          'error'
        )
      }
    }

    const sendFinance = () => {
      Swal.fire({
        title: `Se realizará el envio de la Estimación al área de Finanzas`,
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
            const { value: text } = await Swal.fire({
              input: 'textarea',
              inputLabel: 'Observaciones',
              inputPlaceholder: 'Escribe tus observaciones...',
              inputAttributes: {
                'aria-label': 'Type your message here'
              },
              showCancelButton: true,
              reverseButtons: true,
              inputValidator: (value) => {
                if (!value) {
                  return 'El campo es requerido'
                }
              }
            })
            if (text !== undefined) {
              app.residentEstimate.observaciones_residente = text
              await console.log('Sending to Finance ... ')
              Swal.fire(
                '¡Éxito!',
                'Estimación enviada al área de Finanzas con éxito!',
                'success'
              )
              router.push({ name: 'ResidentEstimate' })
            }
            else {
              Swal.fire(
                'No agregaste ninguna observacion',
                'Agrega uno para continuar',
                'warning'
              )
            }
          } catch (error) {
            Swal.fire(
              'Error',
              `${error.response.data.detail}`,
              'error'
            )
          }
        }
      })
    }

    const paymentToRegister = () => {
      Swal.fire({
        title: `Se realizará el registro del pago`,
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
            const { value: text } = await Swal.fire({
              input: 'textarea',
              inputLabel: 'Observaciones',
              inputPlaceholder: 'Escribe tus observaciones...',
              inputAttributes: {
                'aria-label': 'Type your message here'
              },
              showCancelButton: true,
              reverseButtons: true,
              inputValidator: (value) => {
                if (!value) {
                  return 'El campo es requerido'
                }
              }
            })
            if (text !== undefined) {
              app.residentEstimate.observaciones_residente = text
              await console.log('Saving payment ...')
              Swal.fire(
                '¡Éxito!',
                'Pago registrado con éxito!',
                'success'
              )
              router.push({ name: 'ResidentEstimate' })
            }
            else {
              Swal.fire(
                'No agregaste ninguna observacion',
                'Agrega uno para continuar',
                'warning'
              )
            }
          } catch (error) {
            Swal.fire(
              'Error',
              `${error.response.data.detail}`,
              'error'
            )
          }
        }
      })
    }


    return {
      app,
      editForm,
      deleteForm,
      sendReviewArea,
      goToArchivos,
      formatFecha,
      v$,
      back,
      returnToReviewArea,
      sendToPaymentProcess,
      sendFinance,
      paymentToRegister,
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
  width: 270px;
}

input[id=fecha_periodo_inicio_estimacion] {
  margin-left: 75px;
  /* margin-bottom: 29px; */
  width: 80px;
}

.numEstimacion {
  width: auto;
}
</style>