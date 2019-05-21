<template>
  <div class="page-header-cart">
    <span class="cart-price">{{0 | currency}}</span>
    <span class="cart-icon">
      <span class="cart-count">{{cartCount}}</span>
      <img alt="Cart" :src="cartIconSrc">
    </span>
  </div>
</template>

<script>
export default {
  name: "headerCart",
  computed: {
    cartCount() {
      var a = 0;
      this.$store.state.cart.forEach((val, key) => {
        a++;
      });
      return this.$store.state.cart.length;
    }
  },
  data() {
    return {
      cartIconSrc: require("@/assets/icons/shopping-bag.svg")
    };
  }
};
</script>

<style>
.page-header-cart {
  display: inline-block;
  width: 25%;
  text-align: right;
  font-family: "Helvetica Neue Medium";
}

.page-header-cart .cart-price {
  font-size: 26px;
  position: relative;
  top: -10px;
}
.page-header-cart .cart-count {
  background-color: #e84118;
  display: inline-block;
  position: relative;
  top: 4px;
  left: 18px;
  border-radius: 100%;
  color: #ffffff;
  padding: 9px 14px;
  font-size: 15px;
}

.page-header-cart .cart-icon img {
  width: 48px;
  height: 54px;
}
</style>
