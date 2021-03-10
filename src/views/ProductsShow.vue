<template>
  <!-- <div>
    <b-card no-body class="overflow-hidden" style="max-width: 700px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img v-bind:src="product.images" alt="Product Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body title="">
            <b-card-text>
              <h1>{{ product.name }}</h1>
              <h2>Category: {{ product.category }}</h2>
              <h2>Materials: {{ product.materials }}</h2>
              <h2>Price: {{ product.materials }}</h2>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div> -->
  <div>
    <b-card-group>
      <b-card v-bind:img-src="product.images" alt="Product Image" img-top>
        <b-card-text>
          <h1>{{ product.name }}</h1>
          <h2>Category: {{ product.category }}</h2>
          <h2>Materials: {{ product.materials }}</h2>
          <h2>Price: {{ product.price }}</h2>
        </b-card-text>
        <template #footer>
          <small class="text-muted">Last updated 3 mins ago</small>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Details",
      product: {},
    };
  },
  created: function () {
    this.productsShow();
  },
  methods: {
    productsShow: function () {
      console.log("in products show");
      axios.get("/api/products/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.product = response.data;
      });
    },
  },
};
</script>
