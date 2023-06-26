<template>
  <div class="max-w-xl mx-auto">
    <input-base id="clave_unidad" label="Clave Unidad" v-model="app.unit.clave_unidad" class="mb-3" />
    <span v-if="v$.clave_unidad.$error" v-for="error in v$.clave_unidad.$errors" :key="error"
      class="text-red font-semibold text-center ml-80">
      {{ error.$message }}
    </span>
    <input-base id="id_empleado_maof" label="Unidad" class="mb-3" v-model="app.unit.unidad" />
    <span v-if="v$.unidad.$error" v-for="error in v$.unidad.$errors" :key="error"
      class="text-red font-semibold text-center ml-80">
      {{ error.$message }}
    </span>
    <button-base label="Guardar" @click="sendForm" class="mr-0 ml-auto" />
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import InputBase from '../InputBase.vue'
import ButtonBase from '../ButtonBase.vue'
import SelectBase from '../SelectBase.vue'
import useVuelidate from '@vuelidate/core'
import { required, helpers } from "@vuelidate/validators";
import Swal from "sweetalert2";

export default {
  name: 'FormUnitMAOF',
  props: {
    editMode: {
      type: Boolean,
      default: false,
    },
    unit: {
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
      unit: {
        clave_unidad: '',
        unidad: '',
      },
    })
    if (props.editMode) {
      app.unit = props.unit
    }
    const sendForm = async () => {
      const validaciones = await v$.value.$validate();
      if (validaciones) {
        emit('submit', app.unit)
      }
      else {
        Swal.fire("Error", `Revisa bien los datos`, "error");
      }
    } 

    const rules = computed(() => {
      return {
        clave_unidad: {
          required: helpers.withMessage("La Clave es requerida", required),
        },
        unidad: {
          required: helpers.withMessage(
            "La unidad es requerida",
            required
          ),
        },
      }
    })
    
    const v$ = useVuelidate(rules, app.unit);


    return {
      app,
      sendForm,
      v$
    }
  },
}
</script>
