import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/v1";

export default {
  getEmployees() {
    return axios.get(`${API_BASE_URL}/employees`);
  },
  getEmployee(id) {
    return axios.get(`${API_BASE_URL}/employees/${id}`);
  },
  createEmployee(employee) {
    return axios.post(`${API_BASE_URL}/employees`, employee);
  },
  updateEmployee(id, employee) {
    return axios.put(`${API_BASE_URL}/employees/${id}`, employee);
  },
  deleteEmployee(id) {
    return axios.delete(`${API_BASE_URL}/employees/${id}`);
  },
};
