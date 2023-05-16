<template>
  <div class="root">
    <teleport to="body">
      <div class="modal flex flex-col items-center justify-center " v-if="isOpen">
        <div class=" justify-items-center justify-center items-center verdepastel pb-5">
          <h1 class="text-center font-semibold pb-5 pt-5" v-if="data.contrato_padre.tipo_contrato === 'Convenio de colaboración'">Convenio de Colaboración</h1>
          <h1 class="text-center font-semibold pb-5 pt-5" v-else>Detalle del {{ data.tipo_contrato}}</h1>
          <div class="grid grid-cols-2 ml-5 justify-center justify-items-center">
            <div class="grid grid-row">
              <div class=" mr-5">
                <h1 class="font-semibold text-center">Clave Cartera de Inversión</h1>
                <p class=" text-sm w-full text-center">{{ data.contrato_padre.clave_cartera }}</p>
              </div>
            </div>
            <div class="grid grid-row mb-3 ">
              <div>
                <h1 class="font-semibold text-center">Nombre</h1>
                <p class=" text-sm w-full text-center">{{ data.contrato_padre.nombre_proyecto }}</p>
              </div>
            </div>
            <div class="grid grid-row  ">
              <div>
                <h1 class="font-semibold">Número de Contrato(de origen)</h1>
                <p class=" text-sm w-full text-center">{{ data.contrato_padre.numero_contrato }}</p>
              </div>
            </div>
            <div class="grid grid-rows">
              <div>
                <h1 class="font-semibold text-center">Objeto del Contrato</h1>
                <p class=" text-sm w-full text-left">{{ data.contrato_padre.objeto_contrato }}</p>
              </div>
            </div>
            <div class="flex flex-row justify-between w-full">
              <div>
                <h1 class="font-semibold text-center">Fecha inicio</h1>
                <p class=" text-sm w-full text-center">{{ data.contrato_padre.plazo_inicio }}</p>
              </div>
              <div>
                <h1 class="font-semibold text-center">Fecha fin</h1>
                <p class=" text-sm w-full text-center">{{data.contrato_padre.plazo_fin }}</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div>
              <h1 class="font-semibold text-center">Monto sin IVA</h1>
              <p class=" text-sm w-full text-center"> {{ data.contrato_padre.monto_sin_iva }}</p>
            </div>
            <div>
              <h1 class="font-semibold text-center">Estatus del Contrato</h1>
              <p class=" text-sm w-full text-center">{{ data.contrato_padre.estatus_contrato }}</p>
            </div>
          </div>
        </div>
  <!--       <div>
          <h1 class="text-center">------------------------------------------------------------------------------------------------------------------------</h1>
        </div> -->
        <div class="justify-center verdeclaro">
          <h1 class="text-center font-semibold py-2 text-red">Convenio Modificatorio</h1>
          <div class="flex justify-around ">
            <div class="flex flex-col justify-around">
              <div class="py-2">
                <h1 class="font-semibold text-red text-center">Número de Convenio Modificatorio</h1>
                <p class=" text-sm w-full text-center">{{ data.numero_contrato }}</p>
              </div>
              <div class="flex flex-row justify-around">
                <div class="py-2">
                  <h1 class="font-semibold text-red">Fecha de inicio</h1>
                  <p class=" text-sm w-full text-left">{{ data.plazo_inicio }}</p>
                </div>
                <div class="py-2">
                  <h1 class="font-semibold text-red">Fecha de fin </h1>
                  <p class=" text-sm w-full text-left">{{ data.plazo_fin }}</p>
                </div>
              </div>
              <div class=" justify-items-center py-2">
                <h1 class="font-semibold text-red text-center">Monto sin IVA</h1>
                <p class=" text-sm w-full text-center">{{ data.monto_sin_iva }}</p>
              </div>
            </div>
            <div class="flex flex-col ml-10 justify-around">
              <div class="w-full">
                <h1 class="font-semibold text-red text-center">Objeto del Convenio Modificatorio</h1>
                <p class=" text-sm w-full text-center">{{ data.objeto_contrato }}</p>
              </div>
              <div>
                <h1 class="font-semibold text-red text-center">Unidad SICT </h1>
                <p class=" text-sm w-full text-center">{{ data.unidad_maof }}</p>
              </div>
              <div>
                <h1 class="font-semibold text-red text-center">Estatus del Convenio Modificatorio </h1>
                <p class=" text-sm w-full text-center">{{ data.estatus_contrato }} </p>
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