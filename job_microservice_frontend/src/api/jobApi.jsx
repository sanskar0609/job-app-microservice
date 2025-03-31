import axios from "axios";

const BASE_URL = "http://localhost:7072/jobs"; 
// const API_URL="https://jobms-ipus.onrender.com"

export const getAllJobs = async () => {
  return axios.get(BASE_URL);
};

export const getJobById = async (id) => {
  return axios.get(`${BASE_URL}/${id}`);
};

export const addJob = async (job) => {
  return axios.post(BASE_URL, job);
};

export const updateJob = async (id, job) => {
  return axios.put(`${BASE_URL}/${id}`, job);
};

export const deleteJob = async (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};
