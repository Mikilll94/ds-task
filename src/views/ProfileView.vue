<template>
  <div class="root">
    <template v-if="user">
      <Avatar class="avatar" :avatar="user.avatar" size="xxlarge" />
      <h3 class="username">{{ `${user.firstName} ${user.lastName}` }}</h3>
      <div class="profile-section">
        <div class="profile-info">
          <h5>Email:</h5>
          <p>{{ user.email }}</p>
        </div>
        <div class="profile-info">
          <h5>Phone:</h5>
          <p>{{ user.phone }}</p>
        </div>
        <div class="profile-info">
          <h5>Birthday:</h5>
          <p>
            <DateRenderer :date="user.dateOfBirth" />
          </p>
        </div>
        <div v-if="user.aboutInfo" class="profile-info">
          <h5>About:</h5>
          <p>
            {{ user.aboutInfo }}
          </p>
        </div>
      </div>
    </template>
    <template v-else>
      <h2 class="no-user-data-banner">You have not submitted any user data</h2>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Avatar, DateRenderer } from "@spartez/vue-atlaskit";
import { UserService } from "@/services/UserService";
import { User } from "@/models/User";

export default Vue.extend({
  components: {
    Avatar,
    DateRenderer,
  },
  data() {
    return {
      user: null as User | null,
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

  @media (min-width: 960px) {
    width: 75%;
  }

  @media (min-width: 1264px) {
    width: 50%;
  }
}

.no-user-data-banner {
  margin-top: 24px;
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