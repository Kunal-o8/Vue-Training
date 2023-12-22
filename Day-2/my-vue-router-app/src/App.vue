<template>
  <div id="app">
    <nav>
      <router-link to="/">EmployeeList</router-link> |
      <router-link to="/create">CreateEmployee</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Add your global styles here */
</style>
