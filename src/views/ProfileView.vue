<template>
  <div class="root">
    <Avatar class="avatar" :avatar="null" size="xxlarge" />
    <h3 class="username">Mikołaj Waśniewski</h3>
    <div class="profile-section">
      <div class="profile-info">
        <h5>Email:</h5>
        <p>test@gmail.com</p>
      </div>
      <div class="profile-info">
        <h5>Phone:</h5>
        <p>+48 123 456 789</p>
      </div>
      <div class="profile-info">
        <h5>Birthday:</h5>
        <p>12.01.1979</p>
      </div>
      <div class="profile-info">
        <h5>About:</h5>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Avatar } from "@spartez/vue-atlaskit";

export default {
  components: {
    Avatar,
  },
};
</script>

<style lang="scss" scoped>
.root {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 16px 16px 0 16px;

  @media (min-width: 960px) {
    width: 75%;
  }

  @media (min-width: 1264px) {
    width: 50%;
  }
}

.username {
  margin-top: 8px;
  margin-bottom: 32px;
}

.profile-section {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px 0;
  margin-bottom: 16px;
}

.profile-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>