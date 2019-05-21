<template>
  <div class="cart-summary-wrapper">
    <ul class="summary-list">
      <li class="summary-item summary-title">Cart Summary</li>
      <li class="summary-item">
        <div class="cart-summary-title">Sub Total</div>
        <div class="cart-summary-value">{{summaryCartData.cartSubTotal | currency}}</div>
      </li>
      <li class="summary-item">
        <div class="cart-summary-title">Discount</div>
        <div class="cart-summary-value">{{summaryCartData.cartDiscount | currency}}</div>
      </li>
      <li class="summary-item">
        <div class="cart-summary-title">VAT (12%)</div>
        <div class="cart-summary-value">{{summaryCartData.cartVat | currency}}</div>
      </li>
      <li class="summary-item">
        <div class="cart-summary-title">Order Total</div>
        <div class="cart-summary-value">{{summaryCartData.cartTotal | currency}}</div>
      </li>
      <li class="summary-item cart-checkout-btn-wrapper">
        <PrimaryButton :btnText="`QUICK CHECKOUT`"/>
      </li>
    </ul>
  </div>
</template>

<script>
import PrimaryButton from '@/components/elements/PrimaryButton'
export default {
  name: 'cartSummary',
  components: { PrimaryButton },
  computed: {
    summaryCartData () {
      return this.$store.state.summaryCartData
    }
  }
}
</script>

<style>
.cart-summary-wrapper .summary-list {
  list-style: none;
  font-family: "Helvetica Neue light";
  text-align: center;
  font-size: 28px;
  padding: 0;
  margin: 0;
}

.cart-summary-title {
  width: 100%;
  display: inline-block;
  text-align: left;
  font-size: 26px;
}

.cart-summary-value {
  width: 100%;
  display: inline-block;
  text-align: right;
}

.summary-item.summary-title {
  font-family: "Helvetica Neue";
  font-size: 36px;
  text-align: center;
  padding: 0;
}

.summary-item {
  padding: 15px 0 0 0;
}
</style>
