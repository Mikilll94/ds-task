<template>
  <div class="root">
    <form @submit.prevent="submitForm">
      <ValidationObserver ref="observer">
        <div class="avatar-section">
          <Avatar class="avatar" :avatar="user.avatar" size="xxlarge" />
          <Button appearance="link" @click="changeAvatar">
            <template v-slot:icon-before>
              <EditorEditIcon />
            </template>
            Upload new image
          </Button>
        </div>
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
          <TextArea rows="5" v-model="user.aboutInfo" />
        </FieldGroup>
        <Button class="submitButton" type="submit" appearance="primary">
          Submit form
        </Button>
      </ValidationObserver>
    </form>
  </div>
</template>

<script>
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

export default {
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
        avatar: null,
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
    };
  },
  methods: {
    changeAvatar() {
      this.$refs.fileInput.click();
    },
    changeFile(event) {
      const file = event.target.files[0];
      this.user.avatar = URL.createObjectURL(file);
    },
    async submitForm() {
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        return;
      }
      UserService.saveUserData(this.user);
      this.$router.push({ name: "profile" });
    },
  },
};
</script>
<style lang="scss" scoped>
.root {
  padding: 16px 8px 0 8px;

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

.form {
  margin-top: 15px;
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