<template>
  <div class="btns">
    <button @click="active = 'form'">signup</button>
    <button @click="active = 'adminResult'">admins</button>
    <button @click="active = 'userResult'">users</button>
  </div>

  <div class="form" v-if="active == 'form'">
    <form @submit="handleSubmit">
      <label> Name:</label>
      <input type="text" v-model="formData.name" />

      <label> Email:</label>
      <input type="email" v-model="formData.email" />

      <label>
        Role:
        <label for="user">
          <input
            id="user"
            type="radio"
            v-model="formData.role"
            name="role"
            value="user"
          />
          user
        </label>
        <label for="admin">
          <input
            id="admin"
            type="radio"
            v-model="formData.role"
            name="role"
            value="admin"
          />
          admin
        </label>
      </label>
      <button type="submit">Submit</button>
    </form>
  </div>
  <adminResult v-if="active == 'adminResult'" />
  <userResult v-if="active == 'userResult'" />
</template>

<script>
import adminResult from "./admin-Result.vue";
import userResult from "./user-Result.vue";

export default {
  components: {
    adminResult,
    userResult,
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        role: "",
      },
      active: "form",
      allData: [],
      users: [],
      admins: [],
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();

      if (this.formData.role == "user") {
        this.users.push(JSON.parse(JSON.stringify(this.formData)));
      } else {
        this.admins.push(JSON.parse(JSON.stringify(this.formData)));
      }

      this.formData.name = "";
      this.formData.email = "";
      this.formData.role = "";
    },
    deleteElement(arr, ind) {
      arr.splice(ind, 1);
    },
  },
  provide() {
    return {
      users: this.users,
      admins: this.admins,
      deleteElement: this.deleteElement,
    };
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

body {
  background-color: #f2f2f2;
  font-family: Arial, sans-serif;
}

form {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
}

label {
  display: block;
  text-align: left;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 96%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  font-size: 16px;
}

input[type="submit"] {
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

input[type="submit"]:hover {
  background-color: #2d862d;
}
</style>
