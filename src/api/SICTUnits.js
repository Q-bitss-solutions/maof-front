import fetchApi from "./fetchApi"

const fetchSICTUnits = () => fetchApi({
  url: 'cat-unidad-sict/',
  method: 'GET',
})

const fetchSICTUnitsById = (id) => fetchApi({
  url: `/cat-unidad-sict/${id}/`,
  method: 'GET',
})

const storeSICTUnits = (unit) => fetchApi({
  url: '/cat-unidad-sict/',
  method: 'POST',
  data: unit,
})

const updateSICTUnits = (unit) => fetchApi({
  url: `/cat-unidad-sict/${unit.id_unidad_sict}/`,
  method: 'PUT',
  data: unit,
})
const deleteSICTUnits = (id_unidad_sict) => fetchApi({
  url: `/cat-unidad-sict/${id_unidad_sict}/`,
  method: 'DELETE',
})

export {
  fetchSICTUnits,
  fetchSICTUnitsById,
  storeSICTUnits,
  updateSICTUnits,
  deleteSICTUnits,
}
