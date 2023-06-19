import fetchApi from "./fetchApi"
import { getHeaders } from "../utils/headerToken";
const header = getHeaders();

const addHeader = (request) => {
  const headers = header;
  return fetchApi({ ...request, headers });
};

const fetchContractors = () => addHeader({
  url: 'cat-contratista/',
  method: 'GET',
})

/* const fetchContractors = () => fetchApi({
  url: 'cat-contratista/',
  method: 'POST',
  headers:{
  } `Bearer ${localStorage.getItem(token)}`
  
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem(token)}`
  },
}) */

export {
  fetchContractors,
}
