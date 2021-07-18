<template>
  <ValidationProvider :name="name" :rules="rules" v-slot="{ errors }">
    <FieldGroup v-bind="$attrs" v-on="$listeners" required :errors="errors">
      <Input
        v-model="innerValue"
        should-fit-container
        :type="type"
        :allowed-values="allowedValues"
      />
    </FieldGroup>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import { Input, FieldGroup } from "@spartez/vue-atlaskit";

export default {
  components: {
    ValidationProvider,
    Input,
    FieldGroup,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    rules: {
      type: [Object, String],
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    allowedValues: {
      type: String,
    },
    value: {
      type: null,
    },
  },
  data: () => ({
    innerValue: "",
  }),
  watch: {
    innerValue(newVal) {
      this.$emit("input", newVal);
    },
    value(newVal) {
      this.innerValue = newVal;
    },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
  },
};
</script>
