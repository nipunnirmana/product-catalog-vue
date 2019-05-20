<template>
  <div>
    <div class="page-header">
      <router-link to="/">
        <div class="page-header-title">Product Catalog - VUE JS</div>
      </router-link>
      <div class="page-header-cart">CART</div>
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
  padding: 20px 0;
  margin-bottom: 3%;
}
.page-header-title {
  display: inline-block;
  width: 75%;
}
.page-header-cart {
  display: inline-block;
  width: 25%;
  text-align: right;
}
</style>
