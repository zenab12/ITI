<template>
  <parentForm />
  <!-- <adminResult />
  <userResult /> -->
</template>

<script>
import parentForm from "./components/parentForm.vue";
// import adminResult from "./components/admin-Result.vue";
// import userResult from "./components/user-Result.vue";

export default {
  name: "App",
  components: {
    parentForm,
    // adminResult,
    // userResult,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btns {
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 60%;
  margin: 30px auto;
}
button {
  background-color: #333;
  color: #fff;
  text-align: center;
  width: 180px;
  padding: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.5s linear;
}
button:hover {
  background-color: #1a1919;
}
</style>
