<template>
  <!-- <h1>All users</h1>-->

  <div
    class="menu d-flex flex-column m-auto mt-2 align-items-center"
    style="width: 1000px"
  >
    <h1 class="text-center mt-4 mb-2">Users Dashboard 📊🙂</h1>

    <div class="d-flex justify-center gap-3 admin-container-header">
      <div
        class="d-flex align-items-end justify-center ms-5 mt-4"
        style="width: 500px"
      >
        <button class="btn btn-warning rounded-0 w-100">
          <router-link to="/insert" class="link-dark text-decoration-none">
            insert new user 🥳</router-link
          >
        </button>
        <button
          class="btn btn-danger rounded-0"
          style="width: 300px"
          @click="delteAll"
        >
          Delete All😱
        </button>
      </div>
    </div>

    <div v-if="users.length > 0" class="menu-items d-flex gap-2">
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>fullName</th>
            <th>email</th>
            <th>Details</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.first_name }} {{ user.last_name }}</td>
            <td>{{ user.email }}</td>
            <td class="menu-item-edit">
              <button class="btn btn-success text-light">
                <router-link
                  :to="`/users/${user.id}`"
                  class="link-light text-decoration-none"
                >
                  details 🕵️‍♀️
                </router-link>
              </button>
            </td>

            <td class="menu-item-edit">
              <button class="btn btn-warning">
                <router-link
                  :to="`/edit/${user.id}`"
                  class="link-dark text-decoration-none"
                >
                  Edit 🤔
                </router-link>
              </button>
            </td>
            <td class="menu-item-del">
              <button class="btn btn-danger" @click="deleteUser(user.id)">
                Delete 🤫
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "home_users",
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.getAllUsers();
  },
  methods: {
    getAllUsers() {
      axios.get("http://localhost:3000/users").then((res) => {
        this.users = res.data;
        console.log(this.users);
      });
    },
    deleteUser(id) {
      axios
        .delete(`http://localhost:3000/users/${id}`)
        .then((res) => this.getAllUsers());
    },
    async delteAll() {
      const conf = confirm("are you sure that you want to delete all");
      try {
        conf &&
          (await axios.delete(`http://localhost:3000/users`).then((res) => {
            console.log(res.data);
            this.getAllUsers();
          }));
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .table {
  border-collapse: collapse;
  width: 80%;
  margin: auto;
}

.table th,
.table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
.table th {
  background-color: #333;
  text-align: center;

  color: #fff;
}

.table tr:nth-child(even) {
  background-color: rgb(251, 195, 51);
}
.table tr:nth-child(odd) {
  background-color: #fff;
}

table button {
  background-color: #333;
  color: #fff;
  text-align: center;
  width: 80%;
  margin: auto;
  padding: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  display: block;
  transition: all 0.5s linear;
}
table button:hover {
  background-color: #1a1919;
} */

.menu-items {
  width: 100%;
}
table {
  width: 100% !important;
  margin: 20px auto;
}
</style>
