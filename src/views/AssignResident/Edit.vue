<template>
  <main class="px-4 mt-10">
    <CustomHeaderApp />
    <title-bar title="Asignación Residente" subtitle="Editar" />
    <section class="px-4">
      <form-assign-resident @submit="saveAssingResident" :assingResident="app.assingResident" edit-mode
        v-if="!app.loading" />
    </section>
  </main>
</template>

<script>
import FormAssignResident from '../../components/AssignResident/FormAssignResident.vue'
import TitleBar from '../../components/TitleBar.vue'
import { updateAssingResident, fetchAssingResidentById } from '../../api/assingResident'
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import CustomHeaderApp from '../../components/CustomHeaderApp.vue'


export default {
  name: 'EditAssingResident',
  components: {
    FormAssignResident,
    TitleBar,
    CustomHeaderApp,
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const app = reactive({
      assingResident: {},
      loading: true,
    })
    const getReviewAreaById = async () => {
      app.loading = true
      const { data } = await fetchAssingResidentById(route.params.assingResidentId)
      app.assingResident = data
      app.loading = false
    }
    const saveAssingResident = async (assingResident) => {
      try {
        await updateAssingResident(app.assingResident, assingResident)
        Swal.fire(
          '¡Éxito!',
          'Asignacion actualizada con éxito!',
          'success'
        )
        router.push({ name: 'AssignResident' })
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
    }

    getReviewAreaById()

    return {
      app,
      saveAssingResident,
    }
  },
}
</script>
