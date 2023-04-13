<template>
  <main class="px-4 mt-10">
    <arrow-back />
    <title-bar title="Convenio Modificatorio" subtitle="Inicio" />
    <section class="px-4">
      <button-base label="Nuevo Convenio Modificatorio" @click="goToNewAmendingAgreement" class="mb-3 mr-0 ml-auto" />
      <table-base :options="featureOptions" :headers="headers" :data="amendingAgreement" />
      <!-- <div class="root">
      <teleport to="body">
        <div class="modal flex" v-if="isOpen">
          <div class="flex-row">
            <h2>{{ amendingAgreementDetalles }}</h2>
            <h2>{{ amendingAgreementDetalles }}</h2>
            <button-base label="Modal" @click="isOpen =  false" class="mr-0 ml-auto" />
          </div>
        </div>
      </teleport>
    </div> -->
    </section>
  </main>
</template>

<script>
import { ref } from 'vue'
import TableBase from '../../components/TableBase.vue'
import { fetchResident, deleteResident } from './../../api/resident'
import ArrowBack from '../../components/ArrowBack.vue'
import ButtonBase from '../../components/ButtonBase.vue'
import { useRouter } from 'vue-router'
import TitleBar from '../../components/TitleBar.vue'
import Swal from 'sweetalert2'

export default {
  name: 'AmendingAgreementIndex',
  components: {
    TableBase,
    ArrowBack,
    ButtonBase,
    TitleBar,
  },
  setup() {
    const isOpen = ref(false)
    const router = useRouter()
    const headers = [
      {
        label: 'Id',
        field: '',
      },
      {
        label: 'Contrato o Convenio de Colaboración',
        field: '',
      },
      {
        label: 'Número',
        field: '',
      },
      {
        label: 'Objeto',
        field: '',
      },
      {
        label: 'Monto sin IVA',
        field: '',
      },
      {
        label: 'Plazo de inicio',
        field: '',
      },
      {
        label: 'Plazo finalización',
        field: '',
      },
      {
        label: 'Monto (sin IVA)',
        field: '',
      },
      {
        label: 'Estatus',
        field: '',
      },
    ]
    const amendingAgreement = ref([])
    const amendingAgreementDetalles = ref([])
    const getResident = async () => {
      const { data } = await fetchResident()
      amendingAgreement.value = data
    }
    const featureOptions = [
      {
        label: 'Editar',
        action: (amendingAgreement) => router
          .push({
            name: 'EditAmendingAgreement',
            params: {
              collaborationAgreementId: amendingAgreement.id_amendingAgreement,
            },
          }),
      },
      {
        label: 'Eliminar',
        action: async (resident) => {
          Swal.fire({
            title: `Estas seguro que desea inactivar el residente "${resident.nombre_completo}"?`,
            text: "Esto finalizara las asignaciones del residente",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Inactivar!'
          }).then(async (result) => {
            if (result.isConfirmed) {
              try {
                await deleteResident(resident.id_residente)
                await getResident()
                Swal.fire(
                  'Inactivo!',
                  'El residente se inactivó',
                  'success'
                )
              } catch (error) {
                Swal.fire(
                  'Error',
                  `${error.response.data.message}`,
                  'error'
                )
              }
            }
          })
          /* if (confirm(`Estas seguro que desea eliminar el residente "${resident.nombre_completo}"?,esto finalizara las asignaciones del residente`)) {
            await deleteResident(resident.id_residente)
            await getResident()
          } */
        },
      },
      {
        label: 'Detalles',
        action: async (amendingAgreement) => {
          isOpen = true
          amendingAgreementDetalles = fetchAmendingAgreementById(amendingAgreement.id_amendingAgreement)
        }
      },
    ]
    const goToNewAmendingAgreement = () => router.push({ name: 'NewAmendingAgreement' })

    /* getResident() */

    return {
      isOpen,
      amendingAgreement,
      amendingAgreementDetalles,
      featureOptions,
      headers,
      goToNewAmendingAgreement,
    }
  },
}
</script>


<style>
.root {
  position: relative
}

.modal {
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(97, 92, 92, 0.329);
}

.modal>div {
  background-color: rgb(255, 255, 255);
}
</style>