<template>
  <div class="root">
    <teleport to="body">
      <div class="modal items-center justify-center " v-if="isOpen">
        <div class=" justify-items-center justify-center items-center">
          <h1 class="text-center font-semibold pb-10 pt-5" v-if="data.tipo_contrato === 'Convenio de colaboración'">
            Detalle del Convenio de Colaboración</h1>
          <h1 class="text-center font-semibold pb-10 pt-5" v-else>Detalle del {{ data.tipo_contrato }}</h1>
          <div class="grid grid-cols-2 ml-10 justify-center justify-items-center">
            <div class="grid grid-row">
              <div>
                <h1 class="font-semibold text-center">Clave Cartera de Inversión</h1>
                <p class=" text-sm w-full text-center">{{ data.frt_clave_cartera }}</p>
              </div>
            </div>
            <div class="grid grid-row mb-10 ">
              <div>
                <h1 class="font-semibold text-center">Nombre</h1>
                <p class=" text-sm w-full text-left">{{ data.nombre_proyecto }}</p>
              </div>
            </div>
            <div class="grid grid-row  ">
              <div>
                <h1 class="font-semibold">Número de Contrato</h1>
                <p class=" text-sm w-full text-center">{{ data.numero_contrato }}</p>
              </div>
            </div>
            <div class="grid grid-rows mb-10  ">
              <div>
                <h1 class="font-semibold ml-10">Objeto del Contrato</h1>
                <p class=" text-sm w-full text-left">{{ data.objeto_contrato }}</p>
              </div>
            </div>
            <div class="flex flex-row justify-between w-full">
              <div>
                <h1 class="font-semibold">Fecha inicio</h1>
                <p class=" text-sm w-full text-center">{{ data.plazo_inicio }}</p>
              </div>
              <div>
                <h1 class="font-semibold">Fecha fin</h1>
                <p class=" text-sm w-full text-center">{{ data.plazo_fin }}</p>
              </div>
            </div>
            <div class="grid grid-rows-2  ">
              <div>
                <h1 class="font-semibold ml-10">Unidad MAOF</h1>
                <p class=" text-sm w-full text-left">{{ data.nombre_unidad }}</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-3 ml-10">
            <div>
              <h1 class="font-semibold">Monto sin IVA</h1>
              <p class=" text-sm w-full text-left ml-5"> ${{ data.monto_sin_iva }}</p>
            </div>
            <div>
              <h1 class="font-semibold ">Estatus del Contrato</h1>
              <p class=" text-sm w-full text-left ">{{ data.estatus_contrato }}</p>
            </div>
            <div>
              <h1 class="font-semibold">¿Existen Convenios Modificatorios?</h1>
              <p class=" text-sm w-full text-left ml-10">{{ data.id_contrato_padre === null ? 'No' : 'Si' }}</p>
            </div>
          </div>
          <button-base label="Cerrar" @click="sendStatusModal" class="mr-5 mx-auto my-5 " />
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import ButtonBase from '../../components/ButtonBase.vue'
export default {
  name: 'ToggleSwitch',
  components: {
    ButtonBase,
  },
  props: {
    data: {
      type: Object,
      default: () => ([
        {
          example: 'value 1',
        }
      ]),
    },
    isOpen: {
      type: Boolean,
      default: () => (false),
    }
  },
  setup(props, { emit }) {

    const sendStatusModal = () => emit('submit', props.isOpen)

    return { sendStatusModal }
  }
}
</script>

<style scoped>
.root {
  position: relative
}

.modal {
  position: fixed;
  top: 0%;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: rgba(97, 92, 92, 0.329);
}

.modal>div {
  background-color: #A2DFE6;
  margin-left: 100px;
  width: 700px;
  height: auto;
  border: 1px;
  border-style: solid;
  border-radius: 10px;
  border-color: black;
}
</style>