<template>
  <div class="page-container">
    <Navbar />
    <router-view />
    <div class="spacer"></div>
    <AppFooter />
  </div>
</template>

<style>
</style>
<script>
import Navbar from "@/layout/Navbar.vue";
import AppFooter from "@/layout/AppFooter.vue";

export default {
  components: {
    Navbar,
    AppFooter,
  },
};
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