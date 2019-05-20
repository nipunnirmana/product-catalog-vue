<template>
  <div>
    <div class="page-header">
      <router-link to="/">
        <div class="page-header-title">Product Catalog - VUE JS</div>
      </router-link>
      <router-link to="/cart">
        <HeaderCart/>
      </router-link>
    </div>
  </div>
</template>

<script>
import HeaderCart from "@/components/HeaderCart";

export default {
  name: "pageHeader",
  components: { HeaderCart }
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
</style>
