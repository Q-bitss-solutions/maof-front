import fetchApi from "./fetchApi"

const fetchSICTUnits = () => fetchApi({
  url: 'cat-unidad-sict/',
  method: 'GET',
})

export {
  fetchSICTUnits,
}
