<template>
  <div class="home">
    <div class="cart">
      <h1><strong>Carted Products</strong></h1>
      <div v-for="cartedProduct in cartedProducts" class="card_spacing">

        <b-card no-body class="overflow-hidden" style="max-width: 540px; margin-bottom: 1.5em;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img v-bind:src="cartedProduct.image" alt="product image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="Horizontal Card">
                <b-card-text>
                  <p><strong>{{ cartedProduct.product.name }}</strong></p>
                  <br><p>Materials: {{cartedProduct.product.materials}}</p>
                  <p>Price: {{cartedProduct.product.price}}</p>
                  <p>{{ cartedProduct.product.image }}</p>
                  <b-button v-on:click="removeFromCart(cartedProduct)" variant="dark">Remove</b-button>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>

      </div>

      <b-button id="show-btn" @click="$bvModal.show('order-show')"  v-on:click="placeOrder()" variant="success">
        CHECKOUT
      </b-button>

      <b-modal 
        id="order-show" 
        hide-footer>
        <template #modal-title>
          <strong>You're Order is Complete! </strong>
        </template>
        <div class="d-block text-center" v-for="cartedProduct in cartedProducts" style="background-color: green;">
          <div class="product-info" style="max-width: 80%;">
            <p><strong>{{ cartedProduct.product.name }}</strong></p>
            <b-card-img v-bind:src="cartedProduct.image" alt="product image" class="rounded-0"></b-card-img>
            <p>Price: {{ cartedProduct.product.price }}</p>
          </div>
        </div>
        <p>
          <strong>Subtotal: </strong>{{ this.currentOrder.subtotal }}
        </p>
        <p>
          <strong>Tax: </strong>{{ this.currentOrder.tax }}
        </p>
        <p>
          <strong>Total: </strong>{{ this.currentOrder.total }}
        </p>

        <b-button class="mt-3" block @click="$bvModal.hide('order-show')">Close Me</b-button>
      
      </b-modal>
      
    </div>
    <br>
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
      currentCartedProduct: {},
      currentOrder: {},
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
    removeFromCart: function (theProduct) {
      console.log(theProduct);
      this.currentCartedProduct = theProduct;
      console.log("Remove From Cart...");
      axios
        .delete("api/carted_products/" + this.currentCartedProduct.id)
        .then((response) => {
          console.log(response.data);
        });
    },
    placeOrder: function () {
      console.log("in placeOrder");
      axios.post("api/orders").then((response) => {
        console.log(response.data);
        this.currentOrder = response.data;
        // this.$router.push("/products/index");
      });
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
  },
};
</script>