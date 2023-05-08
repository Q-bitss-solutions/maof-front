import fetchApi from "./fetchApi"

const fetchResidentEstimate = () => fetchApi({
  url: '/estimacion_residente/',
  method: 'GET',
})

const fetchResidentEstimateById = (id) => fetchApi({
  url: `/estimacion_residente/${id}/`,
  method: 'GET',
})

const storeResidentEstimate = (residentEstimate) => fetchApi({
  url: '/estimacion_residente/',
  method: 'POST',
  data: residentEstimate,
})

const updateResidentEstimate = (residentEstimate) => fetchApi({
  url: `/estimacion_residente/${residentEstimate.id_estimacion}/`,
  method: 'PUT',
  data: residentEstimate,
})

const deleteResidentEstimate = (observacion,id_estimacion) => fetchApi({
  url: `/estimacion_residente/${id_estimacion}/`,
  method: 'PATCH',
  data: observacion,
})
const sendToReviewArea = (residentEstimate) => fetchApi({
  url: `/estimacion_residente/${residentEstimate.id_estimacion}/enviar_area_revisora/`,
  method: 'PUT',
  data: residentEstimate,
})

const archivoResidentEstimate = (fileData) => fetchApi({
  url: `/archivo_estimacion/`,
  method: 'POST',
  data: fileData,
})
const fetchArchivoResidentEstimateById = (id) => fetchApi({
  url: `/archivo_estimacion/?estimacion=${id}`,
  method: 'GET',
})

const deleteArchivoResidentEstimate = (id_archivo_estimacion) => fetchApi({
  url: `/archivo_estimacion/${id_archivo_estimacion}/`,
  method: 'DELETE',
})

const fetchResidentEstimateHojaViajera = () => fetchApi({
  url: '/estimacion_residente/hoja_viajera/',
  method: 'GET',
})

const fetchResidentEstimateHojaViajeraActivos = () => fetchApi({
  url: '/estimacion_residente/hoja_viajera/?estatus_booleano=True',
  method: 'GET',
})

const fetchResidentEstimateHojaViajeraInProgress = (estatus_estimacion) => fetchApi({
  url: `/estimacion_residente/hoja_viajera/?estatus_estimacion=${estatus_estimacion}&estatus_booleano=1`,
  method: 'GET',
})

export {
  fetchResidentEstimate,
  fetchResidentEstimateById,
  fetchResidentEstimateHojaViajera,
  storeResidentEstimate,
  updateResidentEstimate,
  deleteResidentEstimate,
  archivoResidentEstimate,
  fetchArchivoResidentEstimateById,
  deleteArchivoResidentEstimate,
  fetchResidentEstimateHojaViajeraInProgress,
  fetchResidentEstimateHojaViajeraActivos,
  sendToReviewArea,
}
