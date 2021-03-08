<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="product in products">
      <br><p><strong>{{ product.name }}</strong></p>
      <img v-bind:src="product.images" alt="product image">
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Products!",
      products: [],
      serachTerm: "",
    };
  },
  created: function () {
    console.log("in created..");
    this.productsIndex();
  },
  methods: {
    productsIndex: function () {
      console.log("In Products Index");
      axios.get("api/products").then((response) => {
        console.log(response.data);
        this.products = response.data;
      });
    },
  },
};
</script>
