<template>
  <main class="px-4 mt-10">
    <CustomHeaderApp />
    <title-bar title="Unidades MAOF" subtitle="Nuevo" />
    <section class="px-4">
      <form-units-m-a-o-f @submit="saveUnit" />
    </section>
  </main>
</template>

<script>
import FormUnitsMAOF from '../../components/UnitsMAOF/FormUnitsMAOF.vue'
import TitleBar from '../../components/TitleBar.vue'
import { storeSICTUnits } from './../../api/SICTUnits'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import CustomHeaderApp from '../../components/CustomHeaderApp.vue'

export default {
  name: 'NewUnitMAOF',
  components: {
    FormUnitsMAOF,
    TitleBar,
    CustomHeaderApp,
  },
  setup() {
    const router = useRouter()
    const saveUnit = async (unit) => {
      /* await storeReviewArea(reviewArea) */
      await storeSICTUnits(unit)
      /* alert('Residente guardado con exito!') */
      Swal.fire(
        '¡Éxito!',
        '¡Unidad guardada con éxito!',
        'success'
      )
      router.push({ name: 'UnitsMAOF' })
    }

    return {
      saveUnit,
    }
  },
}
</script>
