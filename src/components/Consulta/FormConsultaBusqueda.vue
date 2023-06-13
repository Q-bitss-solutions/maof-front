<template>
  <div class=" max-w-6xl pb-10 grow  ">
    <select-base id="clave_cartera" label="C, CC, CM*" :options="app.listC_CC_CM" class="mb-3"
      v-model="app.busqueda.c_cc_cm" />
    {{ app.busqueda.c_cc_cm }}
    <select-base id="nombre_proyecto" label="Residente" :options="app.listResident" class="mb-3"
      v-model="app.busqueda.resident" />
    {{ app.busqueda.resident }}
    <select-base id="nombre_proyecto" label="Mes de la Estimación" :options="app.listMesEstimacion" class="mb-3"
      v-model="app.busqueda.mesEstimacion" />
    {{ app.busqueda.mesEstimacion }}
    <select-base id="nombre_proyecto" label="Año de la Estimación" :options="app.listAnios" class="mb-3"
      v-model="app.busqueda.anioEstimacion" />
    {{ app.busqueda.anioEstimacion }}
    <select-base id="nombre_proyecto" label="Estatus de la Estimación" class="mb-3"
      v-model="app.busqueda.estatusEstimacion" />
    <select-base id="nombre_proyecto" label="Unidad MAOF responsable" :options="app.listUnitMAOF" class="mb-3"
      v-model="app.busqueda.unitMAOF" />
    {{ app.busqueda.unitMAOF }}
    <div class="grid grid-cols-2">
      <input-base id="dias_inicio" label="Días transcurridos del" type="number" class=" grow"
        v-model="app.busqueda.diasInicio" />
      <input-base id="dias_fin" label="al" type="number" class="flex-auto" v-model="app.busqueda.diasFin" />
    </div>
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
import { fetchContracts } from "../../api/contract";
import { fetchResident } from "../../api/resident";
import { fetchSICTUnits } from "../../api/SICTUnits";

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
      },
      listMesEstimacion: [
        { value: 1, label: 'Enero' },
        { value: 2, label: 'Febrero' },
        { value: 3, label: 'Marzo' },
        { value: 4, label: 'Abril' },
        { value: 5, label: 'Mayo' },
        { value: 6, label: 'Junio' },
        { value: 7, label: 'Julio' },
        { value: 8, label: 'Agosto' },
        { value: 9, label: 'Septiempbre' },
        { value: 10, label: 'Octubre' },
        { value: 11, label: 'Noviembre' },
        { value: 12, label: 'Diciembre' },
      ],
      listAnios: [],
      listC_CC_CM: [],
      listResident: [],
      listUnitMAOF: [],
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
    const getC_CC_CM = async () => {
      const { data } = await fetchContracts()
      console.log('contratos:', data);
      app.listC_CC_CM = data.map(contrato => ({ value: contrato.id_contrato, label: contrato.numero_contrato }))
      app.listC_CC_CM.sort((a, b) => {
        if (a.label > b.label) {
          return 1;
        }
        if (a.label < b.label) {
          return -1;
        }
        // a must be equal to b
        return 0;
      })
    }
    const getResident = async () => {
      const { data } = await fetchResident()
      console.log('residentes:', data);
      app.listResident = data.map(residente => ({ value: residente.id_residente, label: residente.nombre_completo }))
      app.listResident.sort((a, b) => {
        if (a.label > b.label) {
          return 1;
        }
        if (a.label < b.label) {
          return -1;
        }
        // a must be equal to b
        return 0;
      })
    }
    const getUnitMAOF = async () => {
      const { data } = await fetchSICTUnits()
      console.log('Unidades MAOF:', data);
      app.listUnitMAOF = data.map(UnidadMAOF => ({ value: UnidadMAOF.id_unidad_maof, label: UnidadMAOF.unidad }))
      app.listUnitMAOF.sort((a, b) => {
        if (a.label > b.label) {
          return 1;
        }
        if (a.label < b.label) {
          return -1;
        }
        // a must be equal to b
        return 0;
      })
    }
    const generateAnios = (cantidad) => {

      const anioActual = new Date().getFullYear();
      for (let i = 0; i < cantidad; i++) {
        app.listAnios.push({ value: anioActual + i, label: `${anioActual + i}` });
      }

      console.log('Años generados', app.listAnios);

    }
    const sendForm = () => emit('submit', app.busqueda)

    getC_CC_CM()
    getResident()
    getUnitMAOF()
    generateAnios(10)

    return {
      app,
      sendForm,
      getC_CC_CM,
      getResident,
      getUnitMAOF,
      generateAnios,
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