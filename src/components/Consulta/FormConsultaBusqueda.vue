<template>
  <div class="max-w-xl pb-10">
    <select-base id="clave_cartera" label="C, CC, CM*" class="mb-3" />
    <select-base id="nombre_proyecto" label="Residente" class="mb-3" />
    <select-base id="nombre_proyecto" label="Mes de la estimación" class="mb-3" />
    <select-base id="nombre_proyecto" label="Año de la Estimación" class="mb-3" />
    <select-base id="nombre_proyecto" label="Estatus de la Estimación" class="mb-3" />
    <select-base id="nombre_proyecto" label="Unidad MAOF responsable" class="mb-3" />
    <div class="flex justify-center items-center align-baseline">
      <input-base id="dias_inicio" label="Días transcurridos entre" type="number" class="mr-5" />
      <input-base id="dias_fin" label="al" type="number" class="" />
    </div>
    <div class="flex  items-center align-baseline">
      <input-base id="fecha_inicio" label="Autorizacion entre" type="date" class="mr-5" />
      <input-base id="fecha_fin" label="y" type="date" class="" />
    </div>
    <button-base label="Buscar" @click="sendForm" class="mr-0 ml-auto mt-5" />
  </div>
</template>

<script>
import { reactive } from 'vue'
import InputBase from '../InputBase.vue'
import SelectBase from '../SelectBase.vue'
import ButtonBase from '../ButtonBase.vue'

export default {
  name: 'FormProject',
  props: {
    editMode: {
      type: Boolean,
      default: false,
    },
    project: {
      type: Object,
      default: () => ({})
    },
  },
  components: {
    InputBase,
    ButtonBase,
    SelectBase,
  },
  setup(props, { emit }) {
    const app = reactive({
      project: {
        clave_cartera: '',
        nombre_proyecto: '',
        monto_total_inversion: '',
        fecha_inicio_proyecto: '',
        fecha_fin_proyecto: '',
      }
    })
    if (props.editMode) {
      app.project = props.project
      console.log(props.project)

      app.project.fecha_inicio_proyecto = props.project.fecha_inicio_proyecto.split('-').reverse().join('-')
      if (app.project.fecha_fin_proyecto === null) {
        app.project.fecha_fin_proyecto = ''
      } else {
        app.project.fecha_fin_proyecto = props.project.fecha_fin_proyecto.split('-').reverse().join('-')
      }
    }

    const sendForm = () => emit('submit', app.project)

    return {
      app,
      sendForm,
    }
  },
}
</script>

<style >
label[for=dias_fin] {
  margin-right: 25px;

}

input[id=dias_fin] {
  padding-right: 0px;
  width: 155px;
}

input[id=dias_inicio] {
  margin-left: 70px;
  width: 75px;
}

input[id=fecha_inicio] {
  margin-left: 70px;
  width: 155px;
}

label[for=fecha_fin] {
  margin-right: -33px;
}
input[id=fecha_fin] {
  width: 245px;
} 
/* 

*/
</style>