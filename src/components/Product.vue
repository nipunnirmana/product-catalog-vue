<template>
  <div class="product-wrapper">
    <span class="img" v-bind:style="{ backgroundImage: `url(${imgSrc})`}"></span>
    <span class="name">{{product.name}}</span>
    <PrimaryButton class="price" :btnText="`${product.price} LKR`"/>
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
.product-wrapper {
  width: 398px;
  height: 634px;
  font-size: 20px;
  text-align: center;
}
.product-wrapper .img {
  width: 398px;
  height: 503px;
  display: inline-block;
  background-size: cover;
}

.product-wrapper .name {
  width: 100%;
  display: inline-block;
  font-family: "Helvetica 35 Thin";
  padding: 20px;
}

.product-wrapper .price {
  font-family: "Helvetica Neue Medium";
}
</style>
