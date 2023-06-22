<template>
  <div class="max-w-6xl pb-10 grow">
    <p class=" w-[17rem]">*Contrato, Convenio de Colaboración, Convenio Modificatorio</p>
    <select-base id="clave_cartera" label="C, CC, CM*" :options="app.listC_CC_CM" class="mb-3"
      v-model="app.busqueda.id_contrato" />
    <select-base id="nombre_proyecto" label="Residente" :options="app.listResident" class="mb-3"
      v-model="app.busqueda.id_residente" />
    <select-base id="nombre_proyecto" label="Mes de la Estimación" :options="app.listMesEstimacion" class="mb-3"
      v-model="app.busqueda.mes_estimacion" />
    <select-base id="nombre_proyecto" label="Año de la Estimación" :options="app.listAnios" class="mb-3"
      v-model="app.busqueda.año_estimacion" />
    <select-base id="nombre_proyecto" label="Estatus de la Estimación" class="mb-3" :options="app.listStatusEstimate"
      v-model="app.busqueda.estatus_estimacion" />
    <select-base id="nombre_proyecto" label="Unidad MAOF responsable" :options="app.listUnitMAOF" class="mb-3"
      v-model="app.busqueda.unidad_maof" />
    <div class="grid grid-cols-2">
      <input-base id="dias_inicio" label="Días transcurridos del" type="number" class="grow" v-model="app.diasInicio" />
      <input-base id="dias_fin" label="al" type="number" class="flex-auto" v-model="app.diasFin" />
    </div>
    <div class="grid grid-cols-2 pt-3">
      <input-base id="fecha_inicio" label="Autorización entre" type="date" class="grow" v-model="app.fechaInicio" />
      <input-base id="fecha_fin" label="y" type="date" class="" v-model="app.fechaFin" />
    </div>
    <button-base label="Buscar" @click="sendForm" class="mr-0 ml-auto mt-5" :disabled="isFormEmpty" />
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import InputBase from "../InputBase.vue";
import SelectBase from "../SelectBase.vue";
import ButtonBase from "../ButtonBase.vue";
import { fetchContracts } from "../../api/contract";
import { fetchResident } from "../../api/resident";
import { fetchSICTUnits } from "../../api/SICTUnits";
import { catStatusEstimate } from "../../api/residentEstimate";

export default {
  name: "FormProject",
  props: {
    editMode: {
      type: Boolean,
      default: false,
    },
    project: {
      type: Object,
      default: () => ({}),
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
        id_contrato: "",
        id_residente: "",
        mes_estimacion: "",
        año_estimacion: "",
        estatus_estimacion: "",
        unidad_maof: "",
        dias_transcurridos: [],
        fechas_autorizacion: [],
      },
      listMesEstimacion: [
        { value: 1, label: "Enero" },
        { value: 2, label: "Febrero" },
        { value: 3, label: "Marzo" },
        { value: 4, label: "Abril" },
        { value: 5, label: "Mayo" },
        { value: 6, label: "Junio" },
        { value: 7, label: "Julio" },
        { value: 8, label: "Agosto" },
        { value: 9, label: "Septiempbre" },
        { value: 10, label: "Octubre" },
        { value: 11, label: "Noviembre" },
        { value: 12, label: "Diciembre" },
      ],
      diasInicio: "",
      diasFin: "",
      fechaInicio: "",
      fechaFin: "",
      listAnios: [],
      listC_CC_CM: [],
      listResident: [],
      listUnitMAOF: [],
      listStatusEstimate: [],
    });
    const isFormEmpty = computed(() => {
      const {
        id_contrato,
        id_residente,
        mes_estimacion,
        año_estimacion,
        estatus_estimacion,
        unidad_maof,
      } = app.busqueda;
      const {
        diasInicio,
        diasFin,
        fechaInicio,
        fechaFin,
      } = app
      return (
        !id_contrato &&
        !id_residente &&
        !mes_estimacion &&
        !año_estimacion &&
        !estatus_estimacion &&
        !unidad_maof &&
        !diasInicio &&
        !diasFin &&
        !fechaInicio &&
        !fechaFin
      );
    });
    const getC_CC_CM = async () => {
      const { data } = await fetchContracts();
      app.listC_CC_CM = data.map((contrato) => ({
        value: contrato.id_contrato,
        label: contrato.numero_contrato,
      }));
      app.listC_CC_CM.sort((a, b) => {
        if (a.label > b.label) {
          return 1;
        }
        if (a.label < b.label) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    };
    const getResident = async () => {
      const { data } = await fetchResident();
      app.listResident = data.map((residente) => ({
        value: residente.id_residente,
        label: residente.nombre_completo,
      }));
      app.listResident.sort((a, b) => {
        if (a.label > b.label) {
          return 1;
        }
        if (a.label < b.label) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    };
    const getUnitMAOF = async () => {
      const { data } = await fetchSICTUnits();
      app.listUnitMAOF = data.map((UnidadMAOF) => ({
        value: UnidadMAOF.id_unidad_maof,
        label: UnidadMAOF.unidad,
      }));
      app.listUnitMAOF.sort((a, b) => {
        if (a.label > b.label) {
          return 1;
        }
        if (a.label < b.label) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    };
    const getStatusEstimate = async () => {
      const { data } = await catStatusEstimate();
      app.listStatusEstimate = data.map((statusEstimate) => ({
        value: statusEstimate.clave_estatus_estimacion,
        label: statusEstimate.estatus_estimacion,
      }));
      app.listStatusEstimate.sort((a, b) => {
        if (a.label > b.label) {
          return 1;
        }
        if (a.label < b.label) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    };
    const generateAnios = (cantidad) => {
      /* const anioActual = new Date().getFullYear(); */
      for (let i = 0; i < cantidad; i++) {
        app.listAnios.push({
          value: 2023 + i,
          label: `${2023 + i}`,
        });
      }
    };
    const sendForm = () => {
      if (app.diasInicio !== "") {
        app.busqueda.dias_transcurridos.push(app.diasInicio);
        app.diasInicio = "";
      }
      if (app.diasFin !== "") {
        app.busqueda.dias_transcurridos.push(app.diasFin);
        app.diasFin = "";
      }
      if (app.fechaInicio !== "") {
        app.busqueda.fechas_autorizacion.push(app.fechaInicio);
        app.fechaInicio = "";
      }
      if (app.fechaFin !== "") {
        app.busqueda.fechas_autorizacion.push(app.fechaFin);
        app.fechaFin = "";
      }
      emit("submit", app.busqueda);
    };

    getC_CC_CM();
    getResident();
    getUnitMAOF();
    getStatusEstimate();
    generateAnios(10);

    return {
      app,
      isFormEmpty,
      sendForm,
      getC_CC_CM,
      getResident,
      getUnitMAOF,
      getStatusEstimate,
      generateAnios,
    };
  },
};
</script>

<style>
label[for="dias_inicio"] {
  width: max-content;
}

label[for="dias_fin"] {
  position: relative;
  left: 198px;
  width: max-content;
}

input[id="dias_inicio"] {
  position: relative;
  left: 188px;
  width: 16rem;
}

input[id="dias_fin"] {
  padding-right: 0px;
  width: 16rem;
  margin-left: 40px;
}

input[id="fecha_inicio"] {
  position: relative;
  left: 188px;
  width: 16rem;
}

label[for="fecha_fin"] {
  position: relative;
  left: 200px;
  width: max-content;
}

label[for="fecha_inicio"] {
  width: max-content;
}

input[id="fecha_fin"] {
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
