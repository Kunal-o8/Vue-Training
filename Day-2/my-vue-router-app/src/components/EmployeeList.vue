<template>
  <div>
    <h1 class="list-heading">Employee List</h1>
    <ul class="employee-list">
      <li
        v-for="employee in employees"
        :key="employee.id"
        class="employee-item"
      >
        <router-link
          :to="{ name: 'EmployeeDetails', params: { id: employee.id } }"
          class="employee-link"
          >{{ employee.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import EmployeeService from "../services/EmployeeService";

export default {
  data() {
    return {
      employees: [],
    };
  },
  mounted() {
    this.loadEmployees();
  },
  methods: {
    loadEmployees() {
      EmployeeService.getEmployees()
        .then((response) => {
          this.employees = response.data;
        })
        .catch((error) => {
          console.error("Error fetching employees:", error);
        });
    },
  },
};
</script>

<style scoped>
.list-heading {
  font-size: 24px;
  color: #707070;
  margin-bottom: 20px;
}

.employee-list {
  list-style-type: none;
  padding: 0;
}

.employee-item {
  margin-bottom: 10px;
}

.employee-link {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s ease;
}

.employee-link:hover {
  color: #0056b3;
}
</style>
