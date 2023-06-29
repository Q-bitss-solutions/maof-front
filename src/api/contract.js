import fetchApi from "./fetchApi";

const fetchContracts = (params) =>
  fetchApi({
    url: "contrato/",
    method: "GET",
    params: params ? params : {},
  });

const fetchContractStatus = () =>
  fetchApi({
    url: "cat-estatus-contrato/",
    method: "GET",
  });

const fetchContractById = (id) =>
  fetchApi({
    url: `contrato/${id}/`,
    method: "GET",
  });
const fetchContractDetailById = (id) =>
  fetchApi({
    url: `contrato/${id}/detalle_convenios/`,
    method: "GET",
  });

const storeContract = (contract) =>
  fetchApi({
    url: "contrato/",
    method: "POST",
    data: contract,
  });

const updateContract = (contract) =>
  fetchApi({
    url: `contrato/${contract.id_contrato}/`,
    method: "PUT",
    data: contract,
  });
const deleteContract = (id) =>
  fetchApi({
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
