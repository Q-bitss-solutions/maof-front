<template>
  <main class="px-4 mt-10">
    <div class="flex justify-between">
      <arrow-back />
      <logout-component/>
    </div>
    <title-bar title="Asignación Residente" subtitle="Nuevo" />
    <section class="px-4">
      <form-assign-resident @submit="saveAssingResident" />
    </section>
  </main>
</template>

<script>
import FormAssignResident from '../../components/AssignResident/FormAssignResident.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import { storeAssingResident } from '../../api/assingResident'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import LogoutComponent from '../../components/LogoutComponent.vue'


export default {
  name: 'NewAssingResident',
  components: {
    FormAssignResident,
    ArrowBack,
    TitleBar,
    LogoutComponent
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const saveAssingResident = async (assingResident) => {
      /* await storeReviewArea(reviewArea) */
      try {
        await storeAssingResident(assingResident)
        Swal.fire(
          '¡Éxito!',
          'Asignacion guardada con éxito!',
          'success'
        )
      } catch (error) {
        if (error.response.data.detail) {
          Swal.fire(
            'Error',
            `${error.response.data.detail}`,
            'error'
          )
        } else {
          let errors = []
          for (const [clave, valor] of Object.entries(error.response.data)) {
            errors.push(`\n${clave} - ${valor}\n`);
          }
          Swal.fire(
            'Error',
            `${errors}`,
            'error'
          )

        }
      }
      /*  alert('Residente guardado con exito!') */
      router.push({ name: 'AssignResident' })
    }

    return {
      saveAssingResident,
    }
  },
}
</script>
