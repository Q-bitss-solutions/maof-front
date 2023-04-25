<template>
  <div class="max-w-xl mx-auto">
    <input-base id="clave_unidad" label="Clave Unidad" v-model="app.unit.clave_unidad" class="mb-3" />
    <input-base id="id_empleado_sict" label="Unidad" class="mb-3" v-model="app.unit.unidad" />
    <button-base label="Guardar" @click="sendForm" class="mr-0 ml-auto" />
  </div>
</template>

<script>
import { reactive } from 'vue'
import InputBase from '../InputBase.vue'
import ButtonBase from '../ButtonBase.vue'
import SelectBase from '../SelectBase.vue'

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
    const sendForm = () => emit('submit', app.unit)


    return {
      app,
      sendForm,
    }
  },
}
</script>
