<template>
  <div class="max-w-xl mx-auto">
    <input-base id="aPaterno" label="Apellido Paterno" class="mb-3" v-model="app.userAndRols.apellido_paterno" />
    <span v-if="v$.apellido_paterno.$error" v-for="error in v$.apellido_paterno.$errors" :key="error"
      class="text-red font-semibold text-center ml-80">
      {{ error.$message }}
    </span>

    <input-base id="aMaterno" label="Apellido Materno" class="mb-3" v-model="app.userAndRols.apellido_materno" />
    <span v-if="v$.apellido_materno.$error" v-for="error in v$.apellido_materno.$errors" :key="error"
      class="text-red font-semibold text-center ml-80">
      {{ error.$message }}
    </span>

    <input-base id="nombre" label="Nombre(s)" class="mb-3" v-model="app.userAndRols.nombre" />
    <span v-if="v$.nombre.$error" v-for="error in v$.nombre.$errors" :key="error"
      class="text-red font-semibold text-center ml-80">
      {{ error.$message }}
    </span>

    <select-base id="id_rol_maof" label="Rol en el sistema" :options="app.listRolesMAOF" class="mb-3"
      v-model="app.userAndRols.rol_maof" @change="getUnitsAndReviewArea(app.userAndRols.rol_maof)" />
    <span v-if="v$.rol_maof.$error" v-for="error in v$.rol_maof.$errors" :key="error"
      class="text-red font-semibold text-center ml-80">
      {{ error.$message }}
    </span>

    <select-base id="id_unidad_maof" label="Unidad MAOF" :options="app.listUnitsMAOF"
      v-model="app.userAndRols.unidad_maof" class="mb-3" />
    <span v-if="v$.unidad_maof.$error" v-for="error in v$.unidad_maof.$errors" :key="error"
      class="text-red font-semibold text-center ml-80">
      {{ error.$message }}
    </span>

    <input-base id="email" label="Correo electrónico" class="mb-3" type="email"
      v-model="app.userAndRols.correo_electronico" />
    <span v-if="v$.correo_electronico.$error" v-for="error in v$.correo_electronico.$errors" :key="error"
      class="text-red font-semibold text-center ml-80">
      {{ error.$message }}
    </span>

    <button-base label="Guardar" @click="sendForm" class="mr-0 ml-auto" />
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import InputBase from "../InputBase.vue";
import ButtonBase from "../ButtonBase.vue";
import SelectBase from "../SelectBase.vue";
import { fetchSICTUnitsActive } from "../../api/SICTUnits";
import { fetchRoles } from "../../api/roles";
import { fetchReviewAreas } from "../../api/reviewArea";
import useVuelidate from "@vuelidate/core";
import {
  required,
  helpers,
  minValue,
  maxValue,
  email,
} from "@vuelidate/validators";
import Swal from "sweetalert2";
export default {
  name: "FormUnitMAOF",
  props: {
    editMode: {
      type: Boolean,
      default: false,
    },
    userAndRols: {
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
      userAndRols: {
        correo_electronico: "",
        nombre: "",
        apellido_materno: "",
        apellido_paterno: "",
        rol_maof: "",
        unidad_maof: "",
      },
      /*       maternal_surname: '', */
      listUnitsMAOF: [],
      listRolesMAOF: [],
    });
    if (props.editMode) {
      app.userAndRols = props.userAndRols;
      /* app.maternal_surname = props.userAndRols.last_name.split(' ')[1]
      app.userAndRols.last_name = props.userAndRols.last_name.split(' ')[0] */
      app.userAndRols.rol_maof = props.userAndRols.rol_maof_id;
      app.userAndRols.unidad_maof = props.userAndRols.unidad_maof_id;
    }
    const rules = computed(() => {
      return {
        correo_electronico: {
          required: helpers.withMessage("El email es requerido", required),
          correo_electronico: helpers.withMessage(
            "No es un correo valido",
            email
          ),
        },
        nombre: {
          required: helpers.withMessage("El nombre es requerido", required),
        },
        apellido_paterno: {
          required: helpers.withMessage(
            "El apellido paterno es requerido",
            required
          ),
        },
        apellido_materno: {
          required: helpers.withMessage(
            "El apellido materno es requerido",
            required
          ),
        },
        rol_maof: {
          required: helpers.withMessage("El rol es requerido", required),
        },
        unidad_maof: {
          required: helpers.withMessage("La unidad es requerido", required),
        },
      };
    });
    const v$ = useVuelidate(rules, app.userAndRols);
    const getUnitsAndReviewArea = async (id) => {
      app.listUnitsMAOF = [];
      if (id !== "2") {
        const { data } = await fetchSICTUnitsActive();
        app.listUnitsMAOF = data.map((unitMAOF) => ({
          value: unitMAOF.id_unidad_maof,
          label: unitMAOF.unidad,
        }));
        app.listUnitsMAOF.sort((a, b) => {
          if (a.label > b.label) {
            return 1;
          }
          if (a.label < b.label) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
      } else {
        const { data } = await fetchReviewAreas();
        app.listUnitsMAOF = data.map((areaRevisora) => ({
          value: areaRevisora.id,
          label: areaRevisora.nombre_unidad,
        }));
        app.listUnitsMAOF.sort((a, b) => {
          if (a.label > b.label) {
            return 1;
          }
          if (a.label < b.label) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
      }
    };
    const getRolesMAOF = async () => {
      const { data } = await fetchRoles();
      app.listRolesMAOF = data.map((rol) => ({
        value: rol.rol_maof,
        label: rol.nombre_rol_maof,
      }));
      app.listRolesMAOF.sort((a, b) => {
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
    const sendForm = async () => {
      const validaciones = await v$.value.$validate();
      if (validaciones) {
        /* app.userAndRols.last_name = app.userAndRols.last_name + ' ' + app.maternal_surname */
        /* app.userAndRols.username = app.userAndRols.email */
        emit("submit", app.userAndRols);
      } else {
        Swal.fire("Error", `Revisa bien los datos`, "error");
      }
      //se concatenan los apellidos en un solo campo
    };
    getRolesMAOF();
    getUnitsAndReviewArea()

    return {
      app,
      v$,
      sendForm,
      getUnitsAndReviewArea,
    };
  },
};
</script>
