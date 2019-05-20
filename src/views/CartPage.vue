<template>
  <div class="cart-wrapper">
    <div class="product-wrapper" v-for="product in cart" v-bind:key="product.id">
      <Product
        class="product-cart-page"
        v-bind:product="product"
        @click.native="udpateCart({ add: false, product })"
      />
    </div>
  </div>
</template>

<script>
import Product from "@/components/Product";

export default {
  name: "cartPage",
  components: { Product },
  methods: {
    udpateCart(payload) {
      this.$store.dispatch("udpateCart", payload);
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  }
};
</script>

<style>
.product-cart-page .description {
  display: none;
}
.product-cart-page .primaryBtn.price {
  display: none;
}
.product-cart-page .primaryBtn.add-to-cart {
  display: none;
}
.cart-wrapper .product-wrapper {
  box-shadow: 4px 8px 10px #e4e4e4;
  width: 60%;
}

.product-cart-page .img {
  width: 289px;
  height: 200px;
  display: inline-block;
  background-size: cover;
}
.product-cart-page .name {
  font-family: "Helvetica Neue light";
  font-size: 26px;
  padding: 0 33px;
  display: inline-block;
  position: relative;
  top: -90px;
}

.product-cart-page .price-text {
  font-family: "Helvetica Neue light";
  font-size: 22px;
  position: relative;
  left: 320px;
  top: -50px;
  display: inline-block;
}
.product-cart-page .qty {
  position: relative;
  left: 580px;
  top: -90px;
  display: inline-block;
}
</style>

