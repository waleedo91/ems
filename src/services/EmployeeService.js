import axios from "axios";

const REST_API_BASE = "http://localhost:8080/api/employees";

export const listEmployees = () => axios.get(REST_API_BASE);

export const createEmployee = (employee) => axios.post(REST_API_BASE, employee);

export const getEmployee = (employeeId) =>
  axios.get(REST_API_BASE + "/" + employeeId);

export const updateEmployee = (employeeId, employee) =>
  axios.put(REST_API_BASE + "/" + employeeId, employee);

export const deleteEmployee = (employeeId) =>
  axios.delete(REST_API_BASE + "/" + employeeId);
