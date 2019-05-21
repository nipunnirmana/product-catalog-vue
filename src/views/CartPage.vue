<template>
  <div class="cart-wrapper">
    <div class="cart-wrapper-inner" v-if="cart.length">
      <div class="product-wrapper-outer">
        <div class="product-wrapper" v-for="product in cart" v-bind:key="product.id">
          <Product class="product-cart-page" v-bind:product="product"/>
        </div>
      </div>
      <CartSummary/>
    </div>

    <div
      v-if="!cart.length"
      class="empty-cart-message"
    >Empty Cart , Please add Item(s) before Continuing</div>
  </div>
</template>

<script>
import Product from "@/components/Product";
import CartSummary from "@/components/CartSummary";

export default {
  name: "cartPage",
  components: { Product, CartSummary },
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
.cart-wrapper {
  min-height: 600px;
}

.product-wrapper-outer {
  display: inline-block;
  width: 67%;
  vertical-align: top;
}

.cart-summary-wrapper {
  display: inline-block;
  width: 27%;
  vertical-align: top;
  margin-left: 6%;
}

.cart-wrapper .product-wrapper {
  box-shadow: 0px 6px 10px #e4e4e4;
  width: 100%;
  height: 110px;
  margin-bottom: 53px;
}

.product-cart-page .img {
  width: 209px;
  height: 110px;
  background-size: cover;
  display: block;
  background-position: center center;
}

.product-cart-page .name {
  display: block;
  margin-top: -81px;
  margin-left: 239px;
  font-family: "Helvetica Neue light";
  font-size: 20px;
  margin-bottom: 4px;
  width: 300px;
}

.product-cart-page .price-text {
  font-family: "Helvetica Neue light";
  font-size: 16px;
  margin-left: 239px;
  display: block;
}

.empty-cart-message {
  text-align: center;
  font-size: 60px;
  color: #d8d8d8;
  font-family: "Helvetica 35 Thin";
}
</style>
