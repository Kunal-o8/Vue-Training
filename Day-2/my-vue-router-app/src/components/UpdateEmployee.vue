<template>
  <div class="update-employee">
    <h1>Update Employee</h1>
    <form @submit.prevent="updateEmployee" class="employee-form">
      <label for="name">Name:</label>
      <input v-model="employee.name" id="name" required />
      <label for="salary">Salary:</label>
      <input v-model="employee.salary" type="number" id="salary" required />
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script>
import EmployeeService from "../services/EmployeeService";

export default {
  data() {
    return {
      employee: {},
    };
  },
  mounted() {
    this.loadEmployee();
  },
  methods: {
    loadEmployee() {
      const id = this.$route.params.id;
      EmployeeService.getEmployee(id)
        .then((response) => {
          this.employee = response.data;
        })
        .catch((error) => {
          console.error("Error fetching employee details for update:", error);
        });
    },
    updateEmployee() {
      const id = this.$route.params.id;
      EmployeeService.updateEmployee(id, this.employee)
        .then(() => {
          this.$router.push({ name: "EmployeeList" });
        })
        .catch((error) => {
          console.error("Error updating employee:", error);
        });
    },
  },
};
</script>

<style scoped>
.update-employee {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.employee-form {
  display: grid;
  gap: 10px;
}

label {
  font-weight: bold;
}

input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 10px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}
</style>
