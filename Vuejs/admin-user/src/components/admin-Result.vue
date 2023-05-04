<template>
  <div>
    <!-- <p>admins: {{ adminsData }}</p> -->
    <h1>Admins data</h1>

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
        <tr v-for="(admin, ind) in admins" :key="ind">
          <td>{{ admin.name }}</td>
          <td>{{ admin.email }}</td>
          <td>{{ admin.role }}</td>
          <td><button @click="deleteItem(ind)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  inject: ["admins", "deleteElement"],

  computed: {
    adminsData() {
      return this.admins;
    },
  },
  methods: {
    deleteItem(ind) {
      this.deleteElement(this.admins, ind);
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
