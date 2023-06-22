import fetchApi from "./fetchApi";

const fetchContractors = () =>
  fetchApi({
    url: "cat-contratista/",
    method: "GET",
  });

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

export { fetchContractors };
