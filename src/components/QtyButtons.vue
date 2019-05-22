<template>
  <div class="qty-btns-wrapper">
    <div class="qty-minus-btn-wrapper">
      <img
        class="qty-btn-minus"
        :src="minusBtnSrc"
        alt="Qty button"
        @click="udpateCart({ add: false, product })"
      >
    </div>
    <div class="qty">{{product.qty}}</div>
    <div class="qty-plus-btn-wrapper">
      <img
        class="qty-btn-plus"
        :src="plusBtnSrc"
        alt="Qty button"
        @click="udpateCart({ add: true, product })"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'qtyButtons',
  props: ['product'],
  methods: {
    udpateCart (payload) {
      this.$store.dispatch('udpateCart', payload)
    }
  },
  data () {
    return {
      minusBtnSrc: require('@/assets/icons/minus.svg'),
      plusBtnSrc: require('@/assets/icons/plus.svg')
    }
  }
}
</script>

<style>
.qty-btns-wrapper {
  float: right;
  position: relative;
  right: 55px;
  top: -47px;
  text-align: center;
}
.qty-btn-minus {
  width: 50px;
  height: 50px;
}

.qty-btn-plus {
  width: 50px;
  height: 50px;
}

.qty-plus-btn-wrapper {
  float: left;
  cursor: pointer;
}

.qty-minus-btn-wrapper {
  float: left;
  cursor: pointer;
}
.qty-btns-wrapper .qty {
  float: left;
  padding: 12px 13px;
  font-size: 26px;
  width: 40px;
  text-align: center;
}
</style>
