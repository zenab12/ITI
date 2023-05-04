<template>
  <div class="card text-center p-0 col-md-3 m-auto mt-5">
    <div class="card-header p-0">
      <img
        src="https://i.pinimg.com/originals/fc/68/f8/fc68f86873c9c661e84ad442cf8fb6cf.gif"
        alt=""
        class="w-100"
      />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ user.first_name }} {{ user.last_name }}</h5>
      <p class="card-text">
        {{ user.email }}
      </p>
    </div>
    <div class="card-footer text-muted">2 days ago</div>
  </div>
  <button class="btn btn-dark mt-4 w-[200] text-center m-auto" @click="back">
    Go Back
  </button>
</template>

<script>
import axios from "axios";
export default {
  name: "user_details",

  data() {
    return {
      userId: 0,
      user: {},
    };
  },
  created() {
    this.getUserId();
  },
  methods: {
    getUserId() {
      this.userId = this.$route.params.id;
      console.log(this.userId);

      axios.get(`http://localhost:3000/users/${this.userId}`).then((res) => {
        this.user = res.data;
        console.log(this.user);
      });
    },
    back() {
      this.$router.push("/");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  box-shadow: 2px 2px 5px rgb(0, 0, 0);
  border-radius: 30px;
  background: #000000;
}

.card-body {
  background: #000000;
}

.card-footer {
  background: #171717;
  border-bottom-left-radius: 30px !important;
  border-bottom-right-radius: 30px !important;
}

.card-header {
  border-radius: 30px !important;
  border: 0px;
  background: #000000;
}

.card-header img {
  border-radius: 30px;
}
</style>
