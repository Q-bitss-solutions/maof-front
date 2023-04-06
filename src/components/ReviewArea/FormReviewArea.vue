<template>
  <div class="max-w-xl mx-auto">
    <select-base
      id="clave_unidad"
      label="Unidad SICT"
      v-model="app.reviewArea.id_unidad_sict"
      :options="app.listSICTUnits"
      class="mb-3"
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
import ButtonBase from '../ButtonBase.vue'
import SelectBase from '../SelectBase.vue'
import { fetchSICTUnits } from '../../api/SICTUnits'

export default {
  name: 'FormReviewArea',
  props: {
    editMode: {
      type: Boolean,
      default: false,
    },
    reviewArea: {
      type: Object,
      default: () => ({})
    },
  },
  components: {
    ButtonBase,
    SelectBase,
  },
  setup(props, { emit }) {
    const app = reactive({
      reviewArea: {
        id_unidad_sict: '',
      },
      listSICTUnits: [],
    })
    if (props.editMode) {
      app.reviewArea = {
        ...props.reviewArea,
        id_unidad_sict: `${props.reviewArea.id_unidad_sict}`
      }
    }

    const sendForm = () => emit('submit', app.reviewArea)

    const getSICTUnits = async () => {
      const { data } = await fetchSICTUnits()
      app.listSICTUnits = data.map(unit => ({ value: unit.id_unidad_sict, label: unit.unidad }))
    }

    getSICTUnits()

    return {
      app,
      sendForm,
    }
  },
}
</script>
