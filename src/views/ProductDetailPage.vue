<template>
  <div>
    <div class="product-detail-page">
      <div class="product-wrapper">
        <Product
          class="product-detail-page"
          v-bind:product="{
        id: 2,
        name: 'Peaches & Greens Salad',
        des:
          'Salads don’t have to be all about the veggies. In this one, fresh, juicy peaches and sweet strawberries play starring roles, supported by crunchy cucumbers and almonds, protein-rich chickpeas, and creamy avocado.',
        price: 1350,
        img: 'Peaches-and-Greens-Salad.jpg'
      }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Product from "@/components/Product";
import PrimaryButton from "@/components/elements/PrimaryButton";

export default {
  name: "productDetailPage",
  components: { Product, PrimaryButton }
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
}

.product-detail-page .name {
  width: 28%;
  float: left;
  font-family: "Helvetica Neue Bold";
  font-size: 30px;
  margin-left: 5%;
}

.product-detail-page .price {
  display: none;
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
