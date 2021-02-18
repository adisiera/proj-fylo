<template>
  <section>
    <app-header />
    <home />
    <app-footer />
  </section>
</template>

<script>
import Home from "./views/Home.vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    Home,
    AppHeader,
    AppFooter,
  },
};
</script>


