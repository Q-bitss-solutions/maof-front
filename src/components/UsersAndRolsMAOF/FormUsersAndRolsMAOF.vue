<template>
  <div class="max-w-xl mx-auto">
    <input-base id="aPaterno" label="Apellido paterno" class="mb-3" />
    <input-base id="aMaterno" label="Apellido materno" class="mb-3" />
    <input-base id="nombre" label="Nombres(s)" class="mb-3" />
    <select-base id="id_unidad_maof" label="Unidad MAOF" :options="app.listUnitsMAOF"
      v-model="app.userAndRols.clave_unidad" class="mb-3" />
    {{ app.userAndRols.clave_unidad }}
    <select-base id="id_rol_maof" label="Rol en el sistema" :options="app.listRoles" class="mb-3" />
    <input-base id="email" label="Correo electrónico" class="mb-3" type="email" />
    <button-base label="Guardar" @click="sendForm" class="mr-0 ml-auto" />
  </div>
</template>

<script>
import { reactive } from 'vue'
import InputBase from '../InputBase.vue'
import ButtonBase from '../ButtonBase.vue'
import SelectBase from '../SelectBase.vue'
import { fetchSICTUnits } from "../../api/SICTUnits";

export default {
  name: 'FormUnitMAOF',
  props: {
    editMode: {
      type: Boolean,
      default: false,
    },
    userAndRols: {
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
      userAndRols: {
        clave_unidad: '',
        unidad: '',
      },
      listUnitsMAOF: [],
    })
    if (props.editMode) {
      app.userAndRols = props.userAndRols
    }
    const getUnitsMAOF = async () => {
      const { data } = await fetchSICTUnits()
      console.log(data)
      app.listUnitsMAOF = data.map(unitMAOF => ({ value: unitMAOF.id_unidad_maof, label: unitMAOF.unidad }))
      console.log(app.listUnitsMAOF)
    }
    const sendForm = () => emit('submit', app.userAndRols)

    getUnitsMAOF()

    return {
      app,
      sendForm,
    }
  },
}
</script>
