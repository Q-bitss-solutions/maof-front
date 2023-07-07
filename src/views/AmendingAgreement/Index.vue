<template>
  <main class="px-4 mt-10">
    <CustomHeaderApp />
    <title-bar title="Convenio Modificatorio" subtitle="Inicio" />
    <section class="px-4">
      <button-base label="Nuevo Convenio Modificatorio" @click="goToNewAmendingAgreement" class="mb-3 mr-0 ml-auto" />
      <table-base description="Convenios Modificatorios" :options="featureOptions" :headers="headers"
        :data="amendingAgreement" />
      <div class="root">
        <teleport to="body">
          <div class="modal items-center justify-center" v-if="isOpen">
            <div>
              <h1 class="text-center font-semibold pb-10 pt-5">Detalle del Contrato</h1>
              <div class="grid grid-cols-2 ml-10">
                <div class="grid grid-rows-2">
                  <div>
                    <h1 class="font-semibold">Clave Cartera de Inversión</h1>
                    <p>{{ amendingAgreementDetalles.numero_contrato }}</p>
                  </div>
                </div>
                <div class="grid grid-rows-2  ">
                  <div>
                    <h1 class="font-semibold">Nombre</h1>
                    <p>{{ amendingAgreementDetalles.nombre_proyecto }}</p>
                  </div>
                </div>
                <div class="grid grid-rows-2  ">
                  <div>
                    <h1 class="font-semibold">Número de Contrato</h1>
                    <p>{{ amendingAgreementDetalles.numero_contrato }}</p>
                  </div>
                </div>
                <div class="grid grid-rows-2  ">
                  <div>
                    <h1 class="font-semibold">Objeto del Contrato</h1>
                    <p>{{ amendingAgreementDetalles.objeto_contrato }}</p>
                  </div>
                </div>
                <div class="grid grid-cols-2  ">
                  <div>
                    <h1 class="font-semibold">Fecha inicio</h1>
                    <p>{{ amendingAgreementDetalles.plazo_inicio }}</p>
                  </div>
                  <div>
                    <h1 class="font-semibold">fecha fin</h1>
                    <p>{{ amendingAgreementDetalles.plazo_fin }}</p>
                  </div>
                </div>
                <div class="grid grid-rows-2  ">
                  <div>
                    <h1 class="font-semibold">Unidad MAOF</h1>
                    <p>{{ amendingAgreementDetalles.nombre_unidad }}</p>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-3   mt-10 ml-10">
                <div>
                  <h1 class="font-semibold">Monto sin IVA</h1>
                  <p> ${{ amendingAgreementDetalles.monto_sin_iva }}</p>
                </div>
                <div>
                  <h1 class="font-semibold">Estatus del Contrato</h1>
                  <p>{{ amendingAgreementDetalles.estatus_contrato }}</p>
                </div>
                <div>
                  <h1 class="font-semibold">¿Existen Convenios Modificatorios?</h1>
                  <p>{{ amendingAgreementDetalles.objeto_contrato }}</p>
                </div>
              </div>
              <button-base label="Cerrar" @click="isOpen = false" class="mr-5 mx-auto my-5 " />
            </div>
          </div>
        </teleport>
      </div>
    </section>
  </main>
</template>

<script>
import { ref } from 'vue'
import TableBase from '../../components/TableBase.vue'
import { fetchContracts, deleteContract, fetchContractById } from './../../api/contract'
import ButtonBase from '../../components/ButtonBase.vue'
import { useRouter } from 'vue-router'
import TitleBar from '../../components/TitleBar.vue'
import Swal from 'sweetalert2'
import CustomHeaderApp from '../../components/CustomHeaderApp.vue'


export default {
  name: 'AmendingAgreementIndex',
  components: {
    TableBase,
    ButtonBase,
    TitleBar,
    CustomHeaderApp,
  },
  setup() {
    const isOpen = ref(false)
    const router = useRouter()
    const headers = [
      {
        label: 'Id',
        field: 'id_contrato',
      },
      {
        label: 'Contrato o Convenio de Colaboración',
        field: 'clave_cartera',
      },
      {
        label: 'Número',
        field: 'numero_contrato',
      },
      {
        label: 'Objeto',
        field: 'objeto_contrato',
      },
      {
        label: 'Monto sin IVA',
        field: 'monto_sin_iva',
      },
      {
        label: 'Plazo de inicio',
        field: 'plazo_inicio',
      },
      {
        label: 'Plazo fin',
        field: 'plazo_fin',
      },
      {
        label: 'Estatus',
        field: 'estatus_contrato',
      },
    ]
    const amendingAgreement = ref([])
    const amendingAgreementDetalles = ref([])
    const getContracts = async () => {
      const { data } = await fetchContracts()
      data.forEach(contrato => {
        if (contrato.id_tipo_contrato === 3) {
          amendingAgreement.value.push(contrato)
        }
      });
      amendingAgreement.value.sort((a, b) => {
        if (a.label > b.label) {
          return 1;
        }
        if (a.label < b.label) {
          return -1;
        }
        // a must be equal to b
        return 0;
      })
      /* amendingAgreement.value = data */
    }
    const featureOptions = [
      {
        label: 'Editar',
        action: (amendingAgreement) => router
          .push({
            name: 'EditAmendingAgreement',
            params: {
              amendingAgreementId: amendingAgreement.id_contrato,
            },
          }),
      },
      {
        label: 'Inactivar',
        action: async (contract) => {
          Swal.fire({
            title: 'Se finalizará el Convenio Modificatorio...',
            text: "¿Está usted seguro?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Finalizar!',
            reverseButtons: true,
          }).then(async (result) => {
            if (result.isConfirmed) {
              try {
                await deleteContract(contract.id_contrato)
                amendingAgreement.value = []
                await getContracts()
                Swal.fire(
                  'Inactivo!',
                  'El convenio modificatorio se inactivó',
                  'success'
                )
              } catch (error) {
                Swal.fire(
                  'Error',
                  `${error.response.data.detail}`,
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
          isOpen.value = true
          const { data } = await fetchContractById(amendingAgreement.id_contrato)
          amendingAgreementDetalles.value = data

        }
      },
    ]
    const goToNewAmendingAgreement = () => router.push({ name: 'NewAmendingAgreement' })

    getContracts()

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
  align-items: center;
  background-color: rgba(97, 92, 92, 0.329);
}

.modal>div {
  background-color: rgb(255, 255, 255);
  margin-left: 100px;
  width: 700px;
  height: auto;
}
</style>