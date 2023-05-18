<template>
  <main class="px-4 mt-10">
    <arrow-back />
    <title-bar title="Usuarios y Roles MAOF" subtitle="Nuevo" />
    <section class="px-4">
      <form-units-m-a-o-f @submit="saveUnit" />
    </section>
  </main>
</template>

<script>
import FormUnitsMAOF from '../../components/UnitsMAOF/FormUnitsMAOF.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import { storeSICTUnits } from './../../api/SICTUnits'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

export default {
  name: 'NewUnitMAOF',
  components: {
    FormUnitsMAOF,
    ArrowBack,
    TitleBar,
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
