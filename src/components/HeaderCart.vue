<template>
  <div class="page-header-cart">
    <span class="cart-price">{{cartTotal | currency}}</span>
    <span class="cart-icon">
      <span class="cart-count">
        <div class="cart-count-inner">{{cartCount}}</div>
      </span>
      <img alt="Cart" :src="cartIconSrc">
    </span>
  </div>
</template>

<script>
export default {
  name: "headerCart",
  computed: {
    cartCount() {
      return this.$store.state.summaryCartData.cartItemCount;
    },
    cartTotal() {
      return this.$store.state.summaryCartData.cartTotal;
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
  margin-bottom: 50px;
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
  top: -10px;
  left: 18px;
  border-radius: 100%;
  color: #ffffff;
  font-size: 15px;
  width: 30px;
  height: 30px;
  text-align: center;
}

.page-header-cart .cart-count-inner {
  position: relative;
  top: 6px;
}

.page-header-cart .cart-icon img {
  width: 48px;
  height: 54px;
}
</style>
