// employeeStore.js

import { defineStore } from "pinia";
import { ref } from "vue";

export const useEmployeeStore = defineStore("employee", () => {
  const employees = ref([
    { id: 1, name: "test", salary: 45000 },
    { id: 2, name: "test2", salary: 45000 },
  ]);

  function createEmployee(employee) {
    employees.value.push(employee);
  }

  function getEmployee(id) {
    return employees.value.find((employee) => employee.id === id);
  }

  function updateEmployeeDetails(id, updatedDetails) {
    const employeeIndex = employees.value.findIndex(
      (employee) => employee.id === id
    );

    if (employeeIndex !== -1) {
      Object.assign(employees.value[employeeIndex], updatedDetails);
    }
  }

  return { employees, createEmployee, getEmployee, updateEmployeeDetails };
});
