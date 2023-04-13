import fetchApi from "./fetchApi"

const fetchTypeContracts = () => fetchApi({
  url: '/cat-tipo-contrato/',
  method: 'GET',
})


export {
  fetchTypeContracts,
}
