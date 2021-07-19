<template>
  <main class="root">
    <form @submit.prevent="submitForm">
      <ValidationObserver ref="observer">
        <section class="avatar-section">
          <Avatar class="avatar" :avatar="user.avatar" size="xxlarge" />
          <Button appearance="link" @click="changeAvatar">
            <template v-slot:icon-before>
              <EditorEditIcon />
            </template>
            Upload new image
          </Button>
          <div class="avatar-error">{{ avatarError }}</div>
        </section>
        <input
          ref="fileInput"
          type="file"
          class="d-none"
          @change="changeFile"
          accept="image/png, image/jpeg"
        />
        <div class="form">
          <VeeInput
            v-model="user.firstName"
            name="firstName"
            label="First name"
            rules="required"
          />
          <VeeInput
            v-model="user.lastName"
            name="lastName"
            label="Last name"
            rules="required"
          />
          <VeeInput
            v-model="user.email"
            name="email"
            label="Email"
            rules="required|email"
          />
          <VeeInput
            v-model="user.phone"
            name="phone"
            label="Phone"
            type="tel"
            allowed-values="[^0-9+]"
            rules="required"
          />
          <ValidationProvider
            name="dateOfBirth"
            label="Birthday"
            rules="required"
            v-slot="{ errors }"
          >
            <FieldGroup label="Birthday" required :errors="errors">
              <DatePicker
                v-model="user.dateOfBirth"
                :disabled-range="noFutureRange"
              />
            </FieldGroup>
          </ValidationProvider>
        </div>
        <FieldGroup v-model="user.aboutInfo" label="About (optional)">
          <TextArea v-model="user.aboutInfo" rows="5" aria-label="About (optional)" />
        </FieldGroup>
        <Button class="submitButton" type="submit" appearance="primary">
          Submit form
        </Button>
      </ValidationObserver>
    </form>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import VeeInput from "@/components/VeeInput.vue";
import {
  FieldGroup,
  Avatar,
  TextArea,
  Button,
  DatePicker,
  EditorEditIcon,
} from "@spartez/vue-atlaskit";
import { UserService } from "@/services/UserService";

export default Vue.extend({
  components: {
    ValidationObserver,
    ValidationProvider,
    VeeInput,
    FieldGroup,
    Avatar,
    TextArea,
    Button,
    DatePicker,
    EditorEditIcon,
  },
  data() {
    return {
      user: {
        avatar: null as string | null,
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        aboutInfo: "",
      },
      noFutureRange: {
        from: new Date(),
      },
      avatarError: null as string | null,
    };
  },
  methods: {
    changeAvatar() {
      (this.$refs.fileInput as HTMLInputElement).click();
    },
    changeFile(event: Event) {
      const file = (event.target as any).files[0];

      if (!file.name.match(/.(jpg|jpeg|png)$/i)) {
        this.avatarError = "Please upload jpg, jpeg or png file.";
        return;
      }

      if ((file.size / 1024 / 1024) > 1) {
        this.avatarError = "Image size exceeds 1 MB";
        return;
      }

      this.avatarError = null;
      this.user.avatar = URL.createObjectURL(file);
    },
    async submitForm() {
      const isValid = await (this.$refs.observer as InstanceType<typeof ValidationObserver>).validate();
      if (!isValid) {
        return;
      }
      UserService.saveUserData(this.user);
      this.$router.push({ name: "profile" });
    },
  },
});

</script>
<style lang="scss" scoped>
.root {
  padding: 16px 16px 0 16px;

  @media (min-width: 960px) {
    margin: 0 auto;
    width: 75%;
  }

  @media (min-width: 1264px) {
    margin: 0 auto;
    width: 50%;
  }
}

.avatar-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar-error {
  min-height: 20px;
  color: #de350b;
}

.form {
  margin-top: 5px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 90px 90px 90px 90px 90px;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 90px 90px 90px;
    gap: 0 20px;
  }
}

.submitButton {
  margin-top: 20px;
}
.d-none {
  display: none;
}

.root::v-deep .field-group-label {
  padding-top: 0;
}
</style>