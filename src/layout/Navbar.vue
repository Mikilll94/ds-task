<template>
  <nav class="nav">
    <div class="nav-logo" @click="$router.push('/')">
      <img
        :src="require('@/assets/calendar-text-outline.png')"
        class="nav-logo-icon"
      />
      <div class="nav-logo-title">DS-TASK</div>
    </div>
    <div class="nav-items">
      <router-link :to="{ name: 'form' }" class="nav-item">Submit</router-link>
      <div class="divider" />
      <router-link :to="{ name: 'profile' }" class="nav-item">Profile</router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.nav {
  min-height: 64px;
  background-color: #1f2937;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 0 64px;
}

@media (max-width: 1263px) {
  .nav {
    padding: 0 16px;
  }
}

.nav-logo {
  display: flex;
  align-items: center;
  flex-grow: 1;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
}

.divider {
  margin-left: 32px;
  margin-right: 32px;
  width: 1px;
  height: 35px;
  background-color: #bec3cb;

  @media (max-width: 480px) {
    margin-left: 16px;
    margin-right: 16px;
  }
}

.nav-logo-title {
  margin-left: 5px;
  font-size: 36px;
  font-family: "Courier New", Courier, monospace;
  line-height: 0.2;

  @media (max-width: 800px) {
    display: none;
  }
}

.nav-items {
  position: absolute;
  display: flex;
  align-items: center;
}

.nav-item {
  font-size: 18px;
  color: #bec3cb;
  padding: 8px 12px;
  border-radius: 6px;
  &:hover {
    background-color: rgba(55, 65, 81);
    cursor: pointer;
  }
  &.router-link-active {
    color: #ffffff;
  }
}
</style>