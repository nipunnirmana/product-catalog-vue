<template>
  <button class="primaryBtn">
    <div class="btnText">{{btnText}}</div>
  </button>
</template>

<script>
export default {
  name: "primaryButton",
  props: ["btnText"],
  methods: {
    udpateCart() {
      alert(0);
      this.$store.dispatch("udpateCart");
    }
  }
};
</script>

<style>
.primaryBtn {
  color: #ffffff;
  background-color: #27ae60;
  padding: 15px 20px;
  border: none;
  width: 100%;
  font-size: 20px;
}
</style>
