<template>
  <main class="root">
    <template v-if="user">
      <Avatar class="avatar" :avatar="user.avatar" size="xxlarge" />
      <h1 class="username">{{ `${user.firstName} ${user.lastName}` }}</h1>
      <section class="profile-section">
        <div class="profile-info">
          <h2 class="data-header">Email:</h2>
          <p>{{ user.email }}</p>
        </div>
        <div class="profile-info">
          <h2 class="data-header">Phone:</h2>
          <p>{{ user.phone }}</p>
        </div>
        <div class="profile-info">
          <h2 class="data-header">Birthday:</h2>
          <p>
            <DateRenderer :date="user.dateOfBirth" />
          </p>
        </div>
        <div v-if="user.aboutInfo" class="profile-info">
          <h2 class="data-header">About:</h2>
          <p>
            {{ user.aboutInfo }}
          </p>
        </div>
      </section>
    </template>
    <template v-else>
      <h1 class="no-user-data-banner">You have not submitted any user data</h1>
    </template>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { Avatar, DateRenderer } from "@spartez/vue-atlaskit";
import { UserService } from "@/services/UserService";
import { User } from "@/models/User";

interface ComponentData {
  user: User | null;
}

export default Vue.extend({
  components: {
    Avatar,
    DateRenderer,
  },
  data(): ComponentData {
    return {
      user: null,
    };
  },
  created() {
    this.user = UserService.getUserData();
  },
});
</script>

<style lang="scss" scoped>
.root {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 16px 16px 0 16px;

  @media (min-width: $medium) {
    width: 75%;
  }

  @media (min-width: $big) {
    width: 50%;
  }
}

.no-user-data-banner {
  margin-top: 24px;
  font-size: 1.715em;
}

.username {
  font-size: 1.43em;
  margin-top: 8px;
  margin-bottom: 32px;
}

.data-header {
  font-size: 1em;
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