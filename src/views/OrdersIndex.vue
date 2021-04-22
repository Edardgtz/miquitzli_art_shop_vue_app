<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div class="order-card" v-for="order in orders">
      
        <b-card title="" header-tag="header" footer-tag="footer">
        <template #header>
          <h6 class="mb-0">Order Number: {{ order.id }}</h6>
        </template>
          <div v-for="cartedProduct in order.carted_products">
            <b-button variant="outline-primary" v-on:click="showProduct(cartedProduct.product_id)">Show Product Details</b-button>
          </div>
        <b-card-text>
          <h3>SUBTOTAL:{{ order.subtotal }}</h3>
          <h3>TAX:{{ order.tax }}</h3>
          
        </b-card-text>
        <template #footer>
          <strong>TOTAL: {{ order.total }}</strong>
        </template>
      </b-card>
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
      message: "Your Orders",
      orders: [],
      anOrder: [],
      cartedProducts: [],
      product: {},
      productId: "",
    };
  },
  created: function () {
    console.log("In Created...");
    this.orderIndex();
    // this.cartedProductsonOrder();
  },

  methods: {
    orderIndex: function () {
      console.log("In orderIndex...");
      axios.get("/api/orders").then((response) => {
        console.log(response.data);
        this.orders = response.data;
        // this.cartedProductsonOrder();
      });
    },
    showProduct: function (id) {
      console.log(id);
      this.$router.push("/products/" + id);
    },
    cartedProductsonOrder: function () {
      console.log("In cartedProductsonOrder method....");
      // console.log(this.orders);
      for (let i = 0; i < this.orders.length; i++) {
        // console.log("Line 62");
        // console.log(this.orders[i].carted_products);
        this.cartedProducts = this.orders[i].carted_products;

        for (let j = 0; j < this.cartedProducts.length; j++) {
          // console.log("Line 67");
          // console.log(this.cartedProducts[j]);
          // console.log(this.cartedProducts[j].product_id);
          this.productId = this.cartedProducts[j].product_id;
          this.productShow(this.productId);
        }
      }
    },
  },
};
</script>