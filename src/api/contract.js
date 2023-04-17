import fetchApi from "./fetchApi"

const fetchContracts = () => fetchApi({
  url: 'contrato/',
  method: 'GET',
})

const fetchContractStatus = () => fetchApi({
  url: 'cat-estatus-contrato/',
  method: 'GET',
})

const fetchContractById = (id) => fetchApi({
  url: `contrato/${id}/`,
  method: 'GET',
})

const storeContract = (contract) => fetchApi({
  url: 'contrato/',
  method: 'POST',
  data: contract,
})

const updateContract = (contract) => fetchApi({
  url: `contrato/${contract.id_contrato}/`,
  method: 'PUT',
  data: contract,
})
const deleteContract = (id) => fetchApi({
  url: `contrato/${id}/`,
  method: 'DELETE',
})

export {
  fetchContracts,
  fetchContractStatus,
  fetchContractById,
  storeContract,
  updateContract,
  deleteContract,
}
