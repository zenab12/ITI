<template>
  <h1 class="mt-5">Insert User 🤠</h1>

  <form class="create-product mt-5" @submit="handleSubmit">
    <div class="form-control">
      <label> first Name : </label>
      <input
        v-model="formData.first_name"
        type="text"
        name="product-name"
        placeholder="ex: Zien"
      />
    </div>
    <div class="form-control">
      <label> last Name : </label>
      <input
        v-model="formData.last_name"
        type="text"
        name="product-name"
        placeholder="ex:  Muhammad"
      />
    </div>
    <div class="form-control">
      <label> Email : </label>
      <input
        v-model="formData.email"
        type="email"
        name="product-name"
        placeholder="ex:  zien@gmail.com"
      />
    </div>

    <button class="btn btn-warning w-75 text-dark rounded-0 m-auto">
      Insert
    </button>
  </form>
  <button class="btn btn-dark mt-4 w-[200] text-center m-auto" @click="back">
    Go Back
  </button>
</template>

<script>
import axios from "axios";
export default {
  name: "insert_user",
  data() {
    return {
      formData: {
        first_name: "",
        last_name: "",
        email: "",
      },
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      try {
        const response = await axios.post(
          "http://localhost:3000/users",
          this.formData
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }

      this.formData.first_name = "";
      this.formData.last_name = "";
      this.formData.email = "";
    },
    back() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.create-product {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 50px auto;
  width: 50%;
  box-shadow: 0px 0px 5px 0px rgba(238, 236, 236, 0.649);
  padding: 20px 10px;
  border-radius: 5px;
  gap: 20px;
  background-color: #212529;
}

.create-product .form-control {
  display: grid;
  grid-template-columns: 0.5fr 4fr;
  border: none;
  background-color: #212529;
  color: #fff;
}

.create-product .form-control label {
  font-size: 16px;
  text-indent: 0;
  text-transform: capitalize;
  font-weight: 500;
  text-align: left;
}

.create-product .form-control input,
select {
  border: none;
  border-left: 5px solid #ffca2c;
  background-color: #fff;
  padding: 5px;
}

.create-product .form-control input:focus,
select:focus {
  outline: none;
}

.create-product .form-control input::placeholder {
  color: #000;
}

.create-product button {
  border: none;
  background-color: #ffca2c;
  padding: 5px;
  cursor: pointer;
  font-weight: 600;
  font-size: 17px;
  color: #212529;
  transition: all 0.5s linear;
}

.create-product button:hover {
  background-color: #e2ac07;
  color: #fff;
}
</style>
