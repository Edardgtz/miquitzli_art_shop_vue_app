<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <!-- <div v-for="product in products">
      <br><p><strong>{{ product.name }}</strong></p>
      <img v-bind:src="product.images" alt="product image">
      <br><p>Materials: {{product.materials}}</p>
      <p>Price: {{product.price}}</p>
      <!-- <p>Sale Status: {{product.sale_status}}</p> -->
    <!-- </div> -->
    <div v-for="product in products" class="card_spacing">
      <b-card no-body class="overflow-hidden" style="max-width: 540px; margin-bottom: 1.5em;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="product.images" alt="product image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="Horizontal Card">
              <b-card-text>
                <p><strong>{{ product.name }}</strong></p>
                <br><p>Materials: {{product.materials}}</p>
                <p>Price: {{product.price}}</p>
                <b-button variant="dark">Buy Now</b-button>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
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
