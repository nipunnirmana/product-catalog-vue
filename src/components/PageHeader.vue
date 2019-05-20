<template>
  <div>
    <div class="page-header">
      <div class="page-header-title">Product Catalog - VUE JS</div>
      <div class="page-header-cart">CART GOES HERE</div>
    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "pageHeader"
};
</script>

<style>
.page-header {
  font-size: 40px;
  font-family: "Helvetica 35 Thin";
  padding: 20px;
}
.page-header-title {
  display: inline-block;
  width: 75%;
}
.page-header-cart {
  display: inline-block;
  width: 25%;
}
</style>
