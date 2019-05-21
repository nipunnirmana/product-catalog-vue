<template>
  <div class="product">
    <span class="img" v-bind:style="{ backgroundImage: `url(${imgSrc})`}"></span>
    <span class="name">{{product.pName}}</span>
    <span class="description" v-if="this.$route.name === 'productDetailPageRoute'">{{product.des}}</span>
    <span
      class="price-text"
      v-if="this.$route.name !== 'productListingPageRoute'"
    >{{product.price|currency}}</span>
    <QtyButtons :product="product" v-if="this.$route.name === 'CartPageRoute'"/>
    <PrimaryButton
      class="price"
      :btnText="product.price|currency"
      v-if="this.$route.name === 'productListingPageRoute'"
    />
    <PrimaryButton
      v-if="this.$route.name === 'productDetailPageRoute'"
      class="add-to-cart"
      :btnText="`ADD TO CART`"
      @click.native="udpateCart({ add: true, product })"
    />
  </div>
</template>

<script>
import PrimaryButton from "@/components/elements/PrimaryButton";
import QtyButtons from "@/components/QtyButtons";
export default {
  name: "product",
  props: ["product"],
  components: { PrimaryButton, QtyButtons },
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
