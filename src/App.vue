<template>
  <div id="app">
    <div id="nav">
      <div>
        <b-navbar toggleable="lg" type="dark" variant="success">
          <b-navbar-brand href="#">Miquitzli Art Shop</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="/">HOME</b-nav-item>
              
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <!-- <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
              </b-nav-form> -->

              <b-nav-item-dropdown text="Shop" right>
                <b-dropdown-item href="/products/index">Art</b-dropdown-item>
                <b-dropdown-item href="/carted_products">Cart</b-dropdown-item>
          
              </b-nav-item-dropdown>

              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                  <em>User</em>
                </template>
                <b-dropdown-item href="/signup">Sign Up</b-dropdown-item>
                <b-dropdown-item href="/login">Login</b-dropdown-item>
                <b-dropdown-item href="/logout">Log Out</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      
      <router-link to="/orders_index">Orders</router-link>
    

    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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

.row {
  background-color: rgb(8, 201, 215);
}
</style>

