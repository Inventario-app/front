<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import LoginButton from "./login/LoginButton.vue";

const data = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:3000");
    console.log("hello there ");
    console.log(response);
    if (response.status === 200) {
      data.value = "Welcome to Inventario";
    } else {
      data.value = "Where are you?";
    }
  } catch (error) {
    console.log(error);
  }
});
</script>
<template>
  <div class="grid font-roboto">
    <img class="size-45" src="../assets/Inventario-NoBG-Logo.png" alt="" />

    <div class="text-blue-50 font-mono antialiased text-xl" v-if="data">
      {{ data }}
    </div>
    <LoginButton class="font-roboto" />
  </div>
</template>
