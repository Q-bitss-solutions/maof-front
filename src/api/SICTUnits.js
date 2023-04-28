import fetchApi from "./fetchApi"

const fetchSICTUnits = () => fetchApi({
  url: 'cat-unidad-maof/',
  method: 'GET',
})

const fetchSICTUnitsById = (id) => fetchApi({
  url: `/cat-unidad-maof/${id}/`,
  method: 'GET',
})

const storeSICTUnits = (unit) => fetchApi({
  url: '/cat-unidad-maof/',
  method: 'POST',
  data: unit,
})

const updateSICTUnits = (unit) => fetchApi({
  url: `/cat-unidad-maof/${unit.id_unidad_maof}/`,
  method: 'PUT',
  data: unit,
})
const deleteSICTUnits = (id_unidad_maof) => fetchApi({
  url: `/cat-unidad-maof/${id_unidad_maof}/`,
  method: 'DELETE',
})

export {
  fetchSICTUnits,
  fetchSICTUnitsById,
  storeSICTUnits,
  updateSICTUnits,
  deleteSICTUnits,
}
