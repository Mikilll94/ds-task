<template>
  <div class="root">
    <form @submit.prevent="submitForm">
      <div class="avatar-section">
        <Avatar class="avatar" :avatar="avatar" size="xxlarge" />
        <Button appearance="link" @click="changeAvatar">
          <template v-slot:icon-before>
            <EditorEditIcon />
          </template>
          Upload new image
        </Button>
      </div>
      <input ref="fileInput" type="file" class="d-none" @change="changeFile" />
      <div class="form">
        <FieldGroup label="First name" required>
          <Input v-model="firstName" should-fit-container />
        </FieldGroup>
        <FieldGroup label="Last name" required>
          <Input
            v-model="lastName"
            type="number"
            min="1"
            max="3"
            allowed-values="[^0-9\.]"
            should-fit-container
          />
        </FieldGroup>
        <FieldGroup label="Email" required>
          <Input
            v-model="email"
            type="number"
            min="1"
            max="3"
            allowed-values="[^0-9\.]"
            should-fit-container
          />
        </FieldGroup>
        <FieldGroup label="Phone" required>
          <Input
            v-model="phone"
            type="tel"
            allowed-values="[^0-9+]"
            should-fit-container
          />
        </FieldGroup>
        <FieldGroup label="Birthday" required>
          <DatePicker v-model="dateOfBirth" :disabled-range="noFutureRange" />
        </FieldGroup>
      </div>
      <FieldGroup label="About" required>
        <TextArea rows="5" v-model="aboutInfo" />
      </FieldGroup>
      <Button class="submitButton" type="submit" appearance="primary">
        Submit form
      </Button>
    </form>
  </div>
</template>

<script>
import {
  Input,
  FieldGroup,
  Avatar,
  TextArea,
  Button,
  DatePicker,
  EditorEditIcon,
} from "@spartez/vue-atlaskit";

export default {
  name: "InputStory",
  components: {
    FieldGroup,
    Input,
    Avatar,
    TextArea,
    Button,
    DatePicker,
    EditorEditIcon,
  },
  data() {
    return {
      avatar: null,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      aboutInfo: "",
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
      this.avatar = URL.createObjectURL(file);
    },
    submitForm() {
      console.log("lalala");
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
.avatar {
  margin-right: 10px;
}

.form {
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0 20px;
  }
}

.submitButton {
  margin-top: 20px;
}
.d-none {
  display: none;
}
</style>