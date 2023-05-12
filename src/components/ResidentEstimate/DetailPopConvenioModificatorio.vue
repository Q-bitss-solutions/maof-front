<template>
  <div class="root">
    <teleport to="body">
      <div class="modal flex flex-col items-center justify-center " v-if="isOpen">
        <div class=" justify-items-center justify-center items-center verdepastel">
          <h1 class="text-center font-semibold pb-5 pt-5">Detalle del {{ data.tipo_contrato }}</h1>
          <div class="grid grid-cols-2 ml-5 justify-center justify-items-center">
            <div class="grid grid-row">
              <div class=" mr-5">
                <h1 class="font-semibold text-center">Clave Cartera de Inversión</h1>
                <p class=" text-sm w-full text-left">{{ data.clave_cartera }}</p>
              </div>
            </div>
            <div class="grid grid-row mb-3 ">
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
            <div class="grid grid-rows">
              <div>
                <h1 class="font-semibold text-center">Objeto del Contrato</h1>
                <p class=" text-sm w-full text-left">{{ data.objeto_contrato }}</p>
              </div>
            </div>
            <div class="flex flex-row justify-between w-full">
              <div>
                <h1 class="font-semibold text-center">Fecha inicio</h1>
                <p class=" text-sm w-full text-center">{{ data.plazo_inicio }}</p>
              </div>
              <div>
                <h1 class="font-semibold text-center">Fecha fin</h1>
                <p class=" text-sm w-full text-center">{{ data.plazo_fin }}</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div>
              <h1 class="font-semibold text-center">Monto sin IVA</h1>
              <p class=" text-sm w-full text-center"> ${{ data.monto_sin_iva }}</p>
            </div>
            <div>
              <h1 class="font-semibold text-center">Estatus del Contrato</h1>
              <p class=" text-sm w-full text-center">{{ data.estatus_contrato }}</p>
            </div>
          </div>
        </div>
  <!--       <div>
          <h1 class="text-center">------------------------------------------------------------------------------------------------------------------------</h1>
        </div> -->
        <div class="justify-center verdeclaro">
          <h1 class="text-center font-semibold pb-5 text-red">Convenio Modificatorio</h1>
          <div class="flex justify-around ">
            <div class="flex flex-col justify-around">
              <div>
                <h1 class="font-semibold text-red">Número de Convenio Modificatorio</h1>
                <p class=" text-sm w-full text-center">{{ }}CONVENIO-1</p>
              </div>
              <div class="flex flex-row justify-around">
                <div>
                  <h1 class="font-semibold text-red">Fecha de inicio</h1>
                  <p class=" text-sm w-full text-left">{{ }}01/01/2023</p>
                </div>
                <div>
                  <h1 class="font-semibold text-red">Fecha de fin </h1>
                  <p class=" text-sm w-full text-left">{{ }}01/01/2023</p>
                </div>
              </div>
              <div class=" justify-items-center">
                <h1 class="font-semibold text-red text-center">Monto sin IVA</h1>
                <p class=" text-sm w-full text-center">{{ }}$900000</p>
              </div>
            </div>
            <div class="flex flex-col ml-10 justify-around">
              <div class="w-full">
                <h1 class="font-semibold text-red text-center">Objeto del Convenio Modificatorio</h1>
                <p class=" text-sm w-full text-cetner">Modernización y Ampliación de la Línea 1 del Tren Ligero Guadalajara LTG1</p>
              </div>
              <div>
                <h1 class="font-semibold text-red text-center">Unidad SICT </h1>
                <p class=" text-sm w-full text-center">{{ }}13 - Obras y Contratos</p>
              </div>
              <div>
                <h1 class="font-semibold text-red text-center">Estatus del Convenio Modificatorio </h1>
                <p class=" text-sm w-full text-center">{{ }}En progreso</p>
              </div>
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
  margin-left: 100px;
  width: 800px;
  height: auto;
  border: 1px;
  border-style: solid;
  border-radius: 10px;
  border-color: black;
}

.modal>.verdepastel {
  background-color: #8AD6F4;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.modal>.verdeclaro {
  background-color: #A2DFE6;
  border-bottom-left-radius:10px;
  border-bottom-right-radius:10px ;
}
</style>