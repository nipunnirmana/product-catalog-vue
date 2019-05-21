<template>
  <div id="app">
    <PageHeader/>

    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>

    <PageFooter/>
  </div>
</template>

<style>
/* General styling , css resets */

body {
  margin: 0;
  padding: 0;
  font-family: "Helvetica";
}

#app {
  margin: auto;
  max-width: 1200px;
}

a {
  color: #000;
  text-decoration: none;
}

/* ROUTE TRANSITION */

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/*FONTS*/

/*Helvetica*/

@font-face {
  font-family: "Helvetica";
  font-style: normal;
  font-weight: normal;
  src: local("Helvetica"), url("assets/fonts/Helvetica.woff") format("woff");
}

@font-face {
  font-family: "Helvetica Light";
  font-style: normal;
  font-weight: normal;
  src: local("Helvetica Light"),
    url("assets/fonts/helvetica-light-587ebe5a59211.woff") format("woff");
}

/*Helvetica Neue*/

@font-face {
  font-family: "Helvetica 35 Thin";
  font-style: normal;
  font-weight: normal;
  src: local("Helvetica 35 Thin"),
    url("assets/fonts/HelveticaNeue-Thin.woff") format("woff");
}

@font-face {
  font-family: "Helvetica Neue Light";
  font-style: normal;
  font-weight: normal;
  src: local("Helvetica Neue Light"),
    url("assets/fonts/HelveticaNeueLight.woff") format("woff");
}
@font-face {
  font-family: "Helvetica Neue Medium";
  font-style: normal;
  font-weight: normal;
  src: local("Helvetica Neue Medium"),
    url("assets/fonts/HelveticaNeueMedium.woff") format("woff");
}

@font-face {
  font-family: "Helvetica Neue Bold";
  font-style: normal;
  font-weight: normal;
  src: local("Helvetica Neue Bold"),
    url("assets/fonts/HelveticaNeueBold.woff") format("woff");
}
</style>

<script>
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

export default {
  name: "app",
  components: { PageHeader, PageFooter }
};
</script>
