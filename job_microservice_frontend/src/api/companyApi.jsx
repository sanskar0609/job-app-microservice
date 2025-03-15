import axios from "axios";

const BASE_URL = "http://localhost:7073/companies"; // Update with your backend URL if different

export const getAllCompanies = async () => {
  return axios.get(BASE_URL);
};

export const getCompanyById = async (id) => {
  return axios.get(`${BASE_URL}/${id}`);
};

export const addCompany = async (company) => {
  return axios.post(BASE_URL, company);
};

export const updateCompany = async (id, company) => {
  return axios.put(`${BASE_URL}/${id}`, company);
};

export const deleteCompany = async (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};
