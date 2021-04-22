<template>
  <div class="signup">
      <form v-on:submit.prevent="submit()">
      
        <h1>Signup</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Name:</label> 
          <input type="text" v-autowidth="{maxWidth: '960px', minWidth: '20px', comfortZone: 0}" class="form-control" v-model="name" placeholder="Name">
          <small class="text-danger">{{ 20 - name.length }} Characters left</small>
        </div>
        <div class="form-group" >
          <label>Email:</label>
          <input type="email" v-autowidth="{maxWidth: '960px', minWidth: '20px', comfortZone: 0}" class="form-control" v-model="email" placeholder="Email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" v-autowidth="{maxWidth: '960px', minWidth: '20px', comfortZone: 0}" class="form-control" v-model="password" placeholder="Password">
          <small v-if="password.length < 6 " class="text-danger"> Password Is Too Small</small>
          <small v-if="password.length > 20" class="text-danger">Password Is Too Big</small>
        </div>
        <div class="form-group">
          <label>Password confirmation:</label>
          <input type="password" v-autowidth="{maxWidth: '960px', minWidth: '20px', comfortZone: 0}" class="form-control" v-model="passwordConfirmation" maxlength="20" placeholder="Password">
          <small v-if="password !== passwordConfirmation" class="text-danger">Passwords don't match</small>
        </div>
        <input type="submit" class="btn btn-primary" value="Submit" style="margin-bottom: 1em;">
      </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
      };
      axios
        .post("/api/users", params)
        .then((response) => {
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
