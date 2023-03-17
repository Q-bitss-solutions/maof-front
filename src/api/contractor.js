import fetchApi from "./fetchApi"

const fetchContractors = () => fetchApi({
  url: 'cat-contratista/',
  method: 'GET',
})

export {
  fetchContractors,
}
