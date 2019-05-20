<template>
  <div>
    <Product v-for="product in products" v-bind:key="product.id" v-bind:product="product"/>
  </div>
</template>

<script>
import Product from "@/components/Product";

export default {
  name: "productListingPage",
  components: { Product },
  methods: {
    printOneToConsole() {
      this.$store.dispatch("setTitle");
    }
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  }
};
</script>

<style>
</style>
