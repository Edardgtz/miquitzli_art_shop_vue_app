<template>
  <div class="home">
    <div v-for="cartedProduct in cartedProducts" >
      <h1>{{ cartedProduct.product_id }}</h1>
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
      message: "Carted Products!",
      cartedProducts: [],
    };
  },
  created: function () {
    console.log("In Created...");
    this.cartedProductsIndex();
  },
  methods: {
    cartedProductsIndex: function () {
      console.log("In Carted Products");
      axios.get("api/carted_products").then((response) => {
        console.log(response.data);
        this.cartedProducts = response.data;
      });
    },
  },
};
</script>