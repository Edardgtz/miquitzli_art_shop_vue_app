<template>
  <div class="home"> 
    <h1></h1>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      theOrder: {},
    };
  },
  created: function () {
    this.orderShow();
  },
  methods: {
    orderShow: function () {
      console.log("in order show ...");
      axios.get("/api/orders/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.theOrder = response.data;
      });
    },
  },
};
</script>