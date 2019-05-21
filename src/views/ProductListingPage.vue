<template>
  <div class="products-listing-page">
    <div class="product-wrapper" v-for="product in products" v-bind:key="product.id">
      <router-link :to="`product/${product.id}`">
        <Product class="product-listing-page" v-bind:product="product"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import Product from "@/components/Product";

export default {
  name: "productListingPage",
  components: { Product },
  computed: {
    products() {
      return this.$store.state.products;
    }
  }
};
</script>

<style>
.products-listing-page {
  display: flex;
  justify-content: space-between;
  margin: auto;
}
.products-listing-page .product-wrapper {
  font-size: 20px;
  text-align: center;
  box-shadow: 4px 8px 10px #e4e4e4;
}
.products-listing-page .img {
  width: 100%;
  height: 510px;
  display: inline-block;
  background-size: cover;
}
.products-listing-page .name {
  width: 100%;
  display: inline-block;
  font-family: "Helvetica 35 Thin";
  padding: 20px 0;
}
.products-listing-page .price {
  font-family: "Helvetica Neue Medium";
}
</style>
