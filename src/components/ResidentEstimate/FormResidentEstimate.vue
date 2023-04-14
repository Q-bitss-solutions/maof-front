<template>
  <div class="max-w-xl mx-auto">
    <select-base id="id_area_revisora" label="Número de Contrato(de origen)" :options="app.listContrato"
      v-model="app.residentEstimate.id_contrato" class="mb-3" v-if="editMode !== true"
      @change="getName(app.residentEstimate.id_contrato)" />
    <input-base id="id_area_revisora" label="Objeto del Contrato" type="text" v-model="app.contratoName" class="mb-3"
      v-if="editMode !== true" disabled />
    <input-base id="fecha_inicio_proyecto" label="Fecha de recepción de información del Contratista" type="date"
      class="mb-3" />
    <input-base id="fecha_inicio_proyecto" label="Fecha de autorización al Contratista" type="date" class="mb-3" />
    <div class="flex flex-row ">
      <div>
        <input-base id="Periodo_de_la_Estimacion" label="Período de la Estimación" type="date" />
      </div>
      <div>
        <input-base id="al" label="al" type="date" class="pt-2" />
      </div>
    </div>
    <input-base id="fecha_inicio_proyecto" label="Importe de la obra ejecutada" type="number" class="mb-3" />
    <input-base id="fecha_inicio_proyecto" label="Importe a pagar" type="number" class="mb-3" />
    <input-base id="fecha_inicio_proyecto" label="% de grado de avance" type="number" class="mb-3" />
    <input-base id="fecha_inicio_proyecto" label="% de avance de la Estimación" type="number" class="mb-3" />
    <input-base id="fecha_inicio_proyecto" label="% de avance de la Estimación acumulado" type="number" class="mb-3" />
    <input-base id="fecha_inicio_proyecto" label="% de avance físico" type="number" class="mb-3" />
    <input-base id="fecha_inicio_proyecto" label="% de avance financiero" type="number" class="mb-3" />
    <text-area-base id="fecha_inicio_proyecto" label="Observaciones del Residente" class="mb-3" />
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
import { fetchSCIT_EmployeesQuery } from '../../api/SCIT_Employees'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

export default {
  name: 'FormResident',
  props: {
    editMode: {
      type: Boolean,
      default: false,
    },
    resident: {
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
        fecha_inicio_residente: '',
        fecha_fin_residente: '',
      },
      contratoName: '',
      listReviewAreas: [],
      listEmpleados: [],
      listContrato: [],
    })
    if (props.editMode) {
      app.resident = props.resident
      app.resident.fecha_inicio_residente = props.resident.fecha_inicio_residente.split('-').reverse().join('-')
    }
    const sendForm = () => {
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
                /* await deleteAssingResident(app.assingResident.id_asignacion_residente_contrato, formData)
                Swal.fire(
                  'Eliminado!',
                  'La asignacion se inactivo',
                  'success'
                ) */
                router.push({
                  name: 'FilesResidentEstimate',
                  params: {
                    amendingAgreementId: 1,
                  },
                })
              } else {
                router.push({ name: 'Home' })
              }
            })
            /* router.push({ name: 'AssignResident' }) */
          } catch (error) {
            Swal.fire(
              'Error',
              `${error.response.data.message}`,
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
label[for=al] {
  flex-basis: 0;
  padding-left: 10px;
}

label[for=Periodo_de_la_Estimacion] {
  width: 200px;
}

input[id=Periodo_de_la_Estimacion] {
  margin-left: 60px;
}
</style>