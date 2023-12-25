import { defineStore } from "pinia";
import { ref } from "vue";

export const useEmployeeStore = defineStore("employee", () => {
  const employees = ref([]);

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
