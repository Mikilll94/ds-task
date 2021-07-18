<template>
  <div class="page-container">
    <Navbar />
    <router-view />
    <div class="spacer"></div>
    <AppFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from "@/layout/Navbar.vue";
import AppFooter from "@/layout/AppFooter.vue";

export default Vue.extend({
  components: {
    Navbar,
    AppFooter,
  },
});
</script>

<style lang="scss" scoped>
.page-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.spacer {
  margin-top: 32px;
}
</style>