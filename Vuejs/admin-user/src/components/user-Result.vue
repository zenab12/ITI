<template>
  <div>
    <!-- <p>users: {{ userData }}</p> -->
    <h1>Users data</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, ind) in users" :key="ind">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
          <td><button @click="deleteItem(ind)">Delete</button></td>
        </tr>
      </tbody>
    </table>

    <!-- <button @click="getdata">data</button> -->
  </div>
</template>

<script>
export default {
  inject: ["users", "deleteElement"],

  computed: {
    userData() {
      return this.users;
    },
  },
  methods: {
    getdata() {
      return this.users;
    },
    deleteItem(ind) {
      this.deleteElement(this.users, ind);
    },
  },
};
</script>

<style>
.table {
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
}
</style>
