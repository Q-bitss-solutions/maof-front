<template>
  <main class="px-4 mt-10">
    <arrow-back />
    <title-bar title="Estimación Residente" subtitle="Files" />
    <section class="px-4">
      <h1>files</h1>
      <button-base label="Nuevo" @click="fileUpload()" class="mr-0 ml-auto" />
    </section>
  </main>
</template>

<script>
import FormResident from '../../components/Resident/FormResident.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import InputBase from '../../components/InputBase.vue'
import TableBase from '../../components/TableBase.vue'
import ButtonBase from '../../components/ButtonBase.vue'
import { updateResident, fetchResidentById } from '../../api/resident'
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'

export default {
  name: 'EditResident',
  components: {
    FormResident,
    ArrowBack,
    TitleBar,
    InputBase,
    TableBase,
    ButtonBase,
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const app = reactive({
      resident: {
        file: '',
        descripcionFile: '',
      },
      loading: true,
    })
    const getResidentById = async () => {
      app.loading = true
      const { data } = await fetchResidentById(route.params.residentId)
      app.resident = data
      app.loading = false
    }
    const saveResident = async (resident) => {
      await updateResident(resident)
      /* alert('Residente actualizado con exito!') */
      Swal.fire(
        '¡Éxito!',
        'Residente actualizado con éxito!',
        'success'
      )
      router.push({ name: 'Resident' })
    }

    const fileUpload = async () => {
      /* app.resident.file */
      const { value: file } = await Swal.fire({
        title: 'Select file',
        input: 'file',
        showCancelButton: true,
        reverseButtons: true,
        inputAttributes: {
          'accept': 'pdf/*',
          'aria-label': 'Upload your profile picture'
        }
      })
      if (file !== undefined) {
        const { value: descripcionFile } = await Swal.fire({
          title: 'Descripcion del archivo',
          input: 'text',
          showCancelButton: true,
          reverseButtons: true,
          inputValidator: (value) => {
            if (!value) {
              return 'Agrega una descripcion'
            }
          }
        })
        app.resident.descripcionFile = descripcionFile
      }
      app.resident.file = file
      console.log(app.resident.file)
      console.log(app.resident.descripcionFile)
    }

    /* getResidentById() */

    return {
      app,
      saveResident,
      fileUpload,
    }
  },
}
</script>
