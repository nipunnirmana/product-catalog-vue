<template>
  <div>
    <div class="product-detail-page">
      <div class="product-wrapper" v-if=" product">
        <Product class="product-detail-page" :product="product[0]"/>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "@/components/Product";
import PrimaryButton from "@/components/elements/PrimaryButton";

export default {
  name: "productDetailPage",
  components: { Product, PrimaryButton },
  computed: {
    product() {
      const products = this.$store.state.products;
      if (products.length) {
        return products.filter(product => product.id == this.$route.params.id);
      }
    }
  }
};
</script>

<style>
.product.product-detail-page {
  display: inline-block;
}

.product.product-detail-page .img {
  width: 67%;
  height: 633px;
  background-size: cover;
  float: left;
  background-position: 100%;
}

.product-detail-page .name {
  width: 28%;
  float: left;
  font-family: "Helvetica Neue Bold";
  font-size: 30px;
  margin-left: 5%;
}

.product-detail-page .price-text {
  float: left;
  width: 28%;
  margin-left: 5%;
  text-align: center;
  font-family: "Helvetica Neue";
  font-size: 36px;
  height: 104px;
}

.product-detail-page .primaryBtn.add-to-cart {
  float: left;
  width: 28%;
  margin-left: 5%;
}

.product-detail-page .description {
  width: 28%;
  float: left;
  margin-left: 5%;
  font-family: "Helvetica 35 Thin";
  font-size: 26px;
  padding: 27px 0 40px 0;
  line-height: 41px;
  height: 335px;
}
</style>
