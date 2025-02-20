<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import LoginButton from "../components/login/LoginButton.vue";

const data = ref(null);
const showLoginForm = ref(false);
const userName = ref("");
const password = ref("");

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
  <div class="grid font-roboto place-items-center">
    <img class="size-45 my-0" src="../assets/Inventario-NoBG-Logo.png" alt="" />

    <div class="text-blue-50 font-mono antialiased text-xl" v-if="data">
      {{ data }}
    </div>

    <LoginButton
      class="transition delay-150 duration-300 ease-in-out font-roboto"
      @click="showLoginForm = !showLoginForm"
    />
    <div v-if="showLoginForm" class="grid gap-4">
      <input type="text" class="bg-white rounded-sm px-4 py-2" />
      <input type="text" class="bg-white rounded-lg px-4 py-2" />
    </div>
  </div>
</template>
