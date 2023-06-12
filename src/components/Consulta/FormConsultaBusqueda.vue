<template>
  <div class=" max-w-6xl pb-10 grow  ">
    <select-base id="clave_cartera" label="C, CC, CM*" class="mb-3" v-model="app.busqueda.c_cc_cm" />
    <select-base id="nombre_proyecto" label="Residente" class="mb-3" v-model="app.busqueda.resident" />
    <select-base id="nombre_proyecto" label="Mes de la Estimación" class="mb-3" v-model="app.busqueda.mesEstimacion" />
    <select-base id="nombre_proyecto" label="Año de la Estimación" class="mb-3" v-model="app.busqueda.anioEstimacion" />
    <select-base id="nombre_proyecto" label="Estatus de la Estimación" class="mb-3"
      v-model="app.busqueda.estatusEstimacion" />
    <select-base id="nombre_proyecto" label="Unidad MAOF responsable" class="mb-3" v-model="app.busqueda.unitMAOF" />
    <div class="grid grid-cols-2">
      <input-base id="dias_inicio" label="Días transcurridos del" type="number" class=" grow"
        v-model="app.busqueda.diasInicio" />
      <input-base id="dias_fin" label="al" type="number" class="flex-auto" v-model="app.busqueda.diasFin" />
    </div>
    <!-- <div class="flex  items-center w-full ">
    </div> -->
    <div class="grid grid-cols-2 pt-3">
      <input-base id="fecha_inicio" label="Autorización entre" type="date" class=" grow"
        v-model="app.busqueda.fechaInicio" />
      <input-base id="fecha_fin" label="y" type="date" class="" v-model="app.busqueda.fechaFin" />
    </div>
    <button-base label="Buscar" @click="sendForm" class="mr-0 ml-auto mt-5" />
    <p>*Contrato, Convenio de Colaboración, Convenio Modificatorio</p>
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
      busqueda: {
        c_cc_cm: '',
        resident: '',
        mesEstimacion: '',
        anioEstimacion: '',
        estatusEstimacion: '',
        unitMAOF: '',
        diasInicio: '',
        diasFin: '',
        fechaInicio: '',
        fechaFin: '',
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

    const sendForm = () => emit('submit', app.busqueda)

    return {
      app,
      sendForm,
    }
  },
}
</script>

<style >
label[for=dias_inicio] {
  width: max-content;
}

label[for=dias_fin] {
  position: relative;
  left: 198px;
  width: max-content;

}

input[id=dias_inicio] {
  position: relative;
  left: 188px;
  width: 16rem;

}

input[id=dias_fin] {
  padding-right: 0px;
  width: 16rem;
  margin-left: 40px;
  ;
}

input[id=fecha_inicio] {
  position: relative;
  left: 188px;
  width: 16rem;
}

label[for=fecha_fin] {
  position: relative;
  left: 200px;
  width: max-content;
}

label[for=fecha_inicio] {
  width: max-content;
}

input[id=fecha_fin] {
  padding-right: 0px;
  width: 16rem;
  margin-left: 40px;
}

/* 
input[id=fecha_inicio] {
  margin-left: 70px;
  width: 155px;
}

label[for=fecha_fin] {
  margin-right: -33px;
}
input[id=fecha_fin] {
  width: 245px;
}  */
/* 

*/
</style>