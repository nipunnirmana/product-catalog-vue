<template>
  <div class="product">
    <span class="img" v-bind:style="{ backgroundImage: `url(${imgSrc})`}"></span>
    <span class="name">{{product.name}}</span>
    <span class="description">{{product.des}}</span>
    <span class="price-text">{{product.price|currency}}</span>
    <PrimaryButton class="price" :btnText="product.price|currency"/>
    <PrimaryButton class="add-to-cart" :btnText="`ADD TO CART`"/>
  </div>
</template>

<script>
import PrimaryButton from "@/components/elements/PrimaryButton";
export default {
  name: "product",
  props: ["product"],
  components: { PrimaryButton },
  data() {
    return {
      imgSrc: require(`@/assets/productImages/${this.product.img}`)
    };
  }
};
</script>

<style>
</style>
