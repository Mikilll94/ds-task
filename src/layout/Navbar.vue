<template>
  <header class="root">
    <div class="nav-logo" @click="$router.push('/')">
      <img
        srcset="
          @/assets/calendar-text-outline@48x48.png,
          @/assets/calendar-text-outline@64x64.png 1.5x,
          @/assets/calendar-text-outline@96x96.png 2x
        "
        src="@/assets/calendar-text-outline@96x96.png"
        class="nav-logo-icon"
        alt="notebook"
      />
      <div class="nav-logo-title">DS-TASK</div>
    </div>
    <nav class="nav-items">
      <router-link :to="{ name: 'form' }" class="nav-item">Submit</router-link>
      <div class="divider" />
      <router-link :to="{ name: 'profile' }" class="nav-item">
        Profile
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.root {
  min-height: 64px;
  background-color: #1f2937;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 0 16px;

  @media (min-width: $big) {
    padding: 0 64px;
  }
}

.nav-logo-icon {
  width: 48px;
  height: 48px;
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
  margin-left: 16px;
  margin-right: 16px;
  width: 1px;
  height: 35px;
  background-color: #bec3cb;

  @media (min-width: $tiny) {
    margin-left: 32px;
    margin-right: 32px;
  }
}

.nav-logo-title {
  display: none;
  margin-left: 5px;
  font-size: 36px;
  font-family: "Courier New", Courier, monospace;
  line-height: 0.2;

  @media (min-width: $small) {
    display: initial;
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