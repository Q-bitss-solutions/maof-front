import fetchApi from "./fetchApi"

const fetchContractors = () => fetchApi({
  url: 'cat-contratista/',
  method: 'GET',
})

/* const fetchContractors = () => fetchApi({
  url: 'cat-contratista/',
  method: 'GET',
  headers: `Barer-${localStorage.getItem(token)}`
}) */

export {
  fetchContractors,
}
