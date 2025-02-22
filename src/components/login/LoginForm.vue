<script setup>
const model = defineModel();
defineProps({
  type: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    <input
      v-model="model"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      class="login"
      required
    />
  </div>
</template>
