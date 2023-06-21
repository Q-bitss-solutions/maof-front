import fetchApi from "./fetchApi";
import { getHeaders } from "../utils/headerToken";
const header = getHeaders();

const addHeader = (request) => {
  const headers = header;
  return fetchApi({ ...request, headers });
};

const fetchContracts = () =>
  addHeader({
    url: "contrato/",
    method: "GET",
  });

const fetchContractStatus = () =>
  addHeader({
    url: "cat-estatus-contrato/",
    method: "GET",
  });

const fetchContractById = (id) =>
  addHeader({
    url: `contrato/${id}/`,
    method: "GET",
  });
const fetchContractDetailById = (id) =>
  addHeader({
    url: `contrato/${id}/detalle_convenios/`,
    method: "GET",
  });

const storeContract = (contract) =>
  addHeader({
    url: "contrato/",
    method: "POST",
    data: contract,
  });

const updateContract = (contract) =>
  addHeader({
    url: `contrato/${contract.id_contrato}/`,
    method: "PUT",
    data: contract,
  });
const deleteContract = (id) =>
  addHeader({
    url: `contrato/${id}/`,
    method: "DELETE",
  });

export {
  fetchContracts,
  fetchContractStatus,
  fetchContractById,
  fetchContractDetailById,
  storeContract,
  updateContract,
  deleteContract,
};
