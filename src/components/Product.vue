<template>
  <div class="product">
    <span class="img" v-bind:style="{ backgroundImage: `url(${imgSrc})`}"></span>
    <span class="name">{{product.pName}}</span>
    <span class="description">{{product.des}}</span>
    <!-- <span class="price-text">{{product.price|currency}}</span> -->
    <span class="qty">{{product.qty}}</span>
    <PrimaryButton class="price" :btnText="product.price|currency"/>
    <PrimaryButton
      class="add-to-cart"
      :btnText="`ADD TO CART`"
      @click.native="udpateCart({ add: true, product })"
    />
  </div>
</template>

<script>
import PrimaryButton from "@/components/elements/PrimaryButton";
export default {
  name: "product",
  props: ["product"],
  components: { PrimaryButton },
  methods: {
    udpateCart(payload) {
      this.$store.dispatch("udpateCart", payload);
    }
  },
  data() {
    return {
      imgSrc: require(`@/assets/productImages/${this.product.img}`)
    };
  }
};
</script>

<style>
</style>
