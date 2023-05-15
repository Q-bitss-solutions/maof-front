<template>
  <div class="root">
    <teleport to="body">
      <div class="modal items-center justify-center " v-if="isOpen">
        <div class=" justify-items-center justify-center items-center">
          <h1 class="text-center font-semibold pb-10 pt-5">Detalle de la Estimación</h1>
          <div class="flex  justify-around">
            <div>
              <h1 class=" text-center font-semibold">Número de Contrato o Convenio de Colaboración</h1>
              <p class=" text-center"> {{ data.numero_contrato }} </p>
            </div>
            <div>
              <h1 class=" text-center font-semibold">Objeto</h1>
              <p class=" text-center"> {{ data.objeto_contrato }} </p>
            </div>
          </div>
          <div class=" mt-5">
            <div class="flex justify-center items-center flex-row gap-3 py-1">
              <h1 class=" text-right basis-1/3 font-semibold">Fecha de recepción de información del Contratista</h1>
              <p class=" text-right "> {{ data.fecha_recepcion_info_contratista }} </p>
            </div>
            <div class="flex justify-center items-center flex-row gap-3 py-1">
              <h1 class=" text-right basis-1/3 font-semibold">Fecha de autorización al Contratista</h1>
              <p class=" text-right  "> {{ data.fecha_autorizacion_contratista }} </p>
            </div>
            <div class="flex justify-center items-center flex-row gap-3 py-1">
              <h1 class="text-right  basis-1/3 font-semibold">Período de la Estimación</h1>
              <p class=" text-right  "> {{ data.fecha_periodo_inicio_estimacion }} </p>
              <h1 class="text-right  font-semibold">al</h1>
              <p class=" text-right  "> {{ data.fecha_periodo_fin_estimacion }} </p>
            </div>
            <div class="flex justify-center items-center flex-row gap-3 py-1">
              <h1 class=" text-right basis-1/3 font-semibold">Importe de la obra ejecutada</h1>
              <p class=" text-right  "> {{ data.importe_obra_ejecutada }} </p>
            </div>
            <div class="flex justify-center items-center flex-row gap-3 py-1">
              <h1 class=" text-right basis-1/3 font-semibold">Importe a pagar</h1>
              <p class=" text-right  "> {{ data.importe_pagar }} </p>
            </div>
            <div class="flex justify-center items-center flex-row gap-3 py-1">
              <h1 class=" text-right basis-1/3 font-semibold">% de grado de avance</h1>
              <p class=" text-right "> {{ data.grado_avance_obra }} </p>
            </div>
            <div class="flex justify-center items-center flex-row gap-3 py-1">
              <h1 class=" text-right basis-1/3 font-semibold">% de avance de la Estimación</h1>
              <p class=" text-right "> {{ data.porcentaje_avance_estimacion }} </p>
            </div>
            <div class="flex justify-center items-center flex-row gap-3 py-1">
              <h1 class=" text-right basis-1/3 font-semibold">% de avance de la Estimación acumulado</h1>
              <p class=" text-right "> {{ data.porcentaje_avance_estimacion_acumulado }} </p>
            </div>
            <div class="flex justify-center items-center flex-row gap-3 py-1">
              <h1 class=" text-right basis-1/3 font-semibold">% de avance físico</h1>
              <p class=" text-right "> {{ data.porcentaje_Avance_fisico }} </p>
            </div>
            <div class="flex justify-center items-center flex-row gap-3 py-1">
              <h1 class=" text-right basis-1/3 font-semibold">% de avance financiero</h1>
              <p class=" text-right  "> {{ data.porcensaje_avance_financiero }} </p>
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
  background-color: #FDFD96;
  margin-left: 100px;
  width: 700px;
  height: auto;
  border: 1px;
  border-style: solid;
  border-radius: 10px;
  border-color: black;
}
</style>