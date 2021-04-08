<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h2>{{ order }}</h2>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Your Order",
      order: [],
      currentOrder: {},
    };
  },
  created: function () {
    console.log("In Created...");
    this.orderShow();
  },
  methods: {
    orderShow: function () {
      console.log("In orderIndex...");
      axios.get("/api/orders" + this.currentOrder.id).then((response) => {
        console.log(response.data);
        this.order = response.data;
      });
    },
  },
};
</script>