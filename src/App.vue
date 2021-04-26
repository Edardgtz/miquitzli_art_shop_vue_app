<template>
  <div id="app">
    <div id="nav">

      <div>
        <b-navbar toggleable="lg" type="dark" variant="success">
          <b-navbar-brand href="#">Miquitzli Art Shop</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item style="font-size: 20px;" href="/">HOME</b-nav-item>
              
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <b-form-input 
                size="md" 
                class="mr-sm-2" 
                placeholder="Search by Categorie"></b-form-input>

                <b-button size="md" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>

              <b-nav-item-dropdown text="Shop" right>
                <b-dropdown-item href="/products/index">Art</b-dropdown-item>
                <b-dropdown-item href="/carted_products">Cart</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown right>
                <template #button-content>
                  <em>User</em>
                </template>
                <b-dropdown-item href="/signup">Sign Up</b-dropdown-item>
                <b-dropdown-item href="/login">Login</b-dropdown-item>
                <b-dropdown-item href="/logout">Log Out</b-dropdown-item>
                <b-dropdown-item href="/orders_index">Orders</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Sedgwick+Ave+Display&display=swap");

#app {
  font-family: "Sedgwick Ave Display", cursive, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #060606;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
.navbar-brand {
  font-size: 2em !important;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

div {
  margin: auto;
}

.order-card {
  max-width: 400px;
  max-height: 300px;
  margin-block-start: 10%;
}

.card {
  background-color: black;
}

body {
  background-image: url("../src/assets/images/455.jpg");
  background-position: center;
}

.form-control {
  margin: auto;
}

.signup {
  background-color: #28a745;
  color: #030303;
  max-width: 60%;
}

.products-index {
  background-color: #28a745;
  color: #000000;
  max-width: 60%;
}

.card_spacing {
  max-width: 80%;
  color: #000000;
}

.row {
  background-color: rgb(8, 201, 215);
}

.home-page,
h1 {
  font-family: "Sedgwick Ave Display", cursive;
  color: white;
  font-size: 2.5em !important;
  width: 100%;
  margin-bottom: 1.5em;
}

h1,
.h1 {
  font-size: 3rem;
}

.cart {
  background-color: orange;
}

.modal-content {
  background-color: rgb(8, 201, 215) !important;
}

.product-show {
  background-color: rgb(8, 201, 215);
  max-width: 75%;
}

.product-details {
  max-width: 75%;
  max-height: 50%;
  margin-bottom: 20px;
}

img.card-img-top {
  margin-top: 20px;
  background-position: cover;
}

div.card {
  background-color: rgb(8, 201, 215);
  border: 0;
}

.btn {
  margin-bottom: 20px;
}

.index-header {
  font-size: 6em;
}
img,
svg {
  max-height: fit-content !important;
  margin-top: 30px;

  margin-left: 10px;
}

.login {
  background-color: aqua;
  max-width: 80%;
  margin-top: 20px;
}

.login-form,
h1 {
  font-size: 2em;
}
</style>

