<template>
  <div class="max-w-xl mx-auto">
    <select-base id="clave_unidad" label="Unidad SICT" v-model="app.reviewArea.id_unidad_maof"
      :options="app.listSICTUnits" class="mb-3" />
    <button-base label="Guardar" @click="sendForm" class="mr-0 ml-auto" />
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
        id_unidad_maof: '',
      },
      listSICTUnits: [],
    })
    if (props.editMode) {
      app.reviewArea = {
        ...props.reviewArea,
        id_unidad_maof: `${props.reviewArea.id_unidad_maof}`
      }
    }

    const sendForm = () => emit('submit', app.reviewArea)

    const getSICTUnits = async () => {
      const { data } = await fetchSICTUnits()
      app.listSICTUnits = data.map(unit => ({ value: unit.id_unidad_maof, label: unit.unidad }))
      app.listSICTUnits.sort((a, b) => {
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

    getSICTUnits()

    return {
      app,
      sendForm,
    }
  },
}
</script>
