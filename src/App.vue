<template>
  <div>
    <Navbar />
    <router-view/>
  </div>
</template>

<style>
</style>
<script>
import Navbar from "@/layout/Navbar.vue";

export default {
  components: {
    Navbar
  }
}
</script>