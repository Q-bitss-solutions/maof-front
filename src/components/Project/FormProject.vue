<template>
  <div class="max-w-xl mx-auto">
    <input-base
      id="clave_cartera"
      label="Clave cartera"
      placeholder="Escribe el nombre"
      v-model="app.project.clave_cartera"
      class="mb-3"
    />
    <input-base
      id="nombre_proyecto"
      label="Nombre proyecto"
      placeholder="Escribe el nombre"
      v-model="app.project.nombre_proyecto"
      class="mb-3"
    />
    <input-base
      id="monto_total_inversion"
      label="Monto total inversión"
      placeholder="Escribe el nombre"
      type="number"
      v-model="app.project.monto_total_inversion"
      class="mb-3"
    />
    <input-base
      id="fecha_inicio_proyecto"
      label="Fecha inicio proyecto"
      placeholder="Escribe el nombre"
      type="date"
      v-model="app.project.fecha_inicio_proyecto"
      class="mb-3"
    />
    <input-base
      id="fecha_fin_proyecto"
      label="Fecha fin proyecto"
      placeholder="Escribe el nombre"
      type="date"
      v-model="app.project.fecha_fin_proyecto"
      class="mb-4"
    />
    <button-base
      label="Guardar"
      @click="sendForm"
      class="mr-0 ml-auto"
    />
  </div>
</template>

<script>
import { reactive } from 'vue'
import InputBase from '../InputBase.vue'
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
    }

    const sendForm = () => emit('submit', app.project)

    return {
      app,
      sendForm,
    }
  },
}
</script>
