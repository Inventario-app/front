<script setup>
import { ref, onMounted, computed } from "vue";
import router from "../router";

import axios from "axios";
import LoginButton from "../components/login/LoginButton.vue";
import LoginForm from "../components/login/LoginForm.vue";

const data = ref(null);
const showLoginForm = ref(false);
const loginInput = ref({
  usr: "",
  psw: "",
});

const isLoginComplete = computed(() => {
  return loginInput.value.usr && loginInput.value.psw;
});

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:3000");
    if (response.status === 200) {
      data.value = "Welcome to Inventario";
    } else {
      data.value = "Where are you?";
    }
  } catch (error) {
    console.log(error);
  }
});

const submitLogin = async () => {
  if (!isLoginComplete.value) {
    return;
  } else {
    const formatedData = {
      email: loginInput.value.usr,
      password: loginInput.value.psw,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        formatedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const token = response.data.token;

      try {
        // const userRequest = await axios.get("http://localhost:3000/login");
      } catch (error) {}

      sessionStorage.setItem("token", token);
      sessionStorage.setItem("id", response.data.id);
      sessionStorage.setItem("role", response.data.role);
      sessionStorage.setItem("name", response.data.name);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  }
};
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
    <form
      v-if="showLoginForm"
      @submit.prevent="submitLogin"
      class="grid gap-4 place-items-center"
    >
      <LoginForm
        v-model="loginInput.usr"
        type="email"
        placeholder="User email"
      />
      <LoginForm
        v-model="loginInput.psw"
        type="password"
        placeholder="Password"
      />
      <button type="submit" class="hidden"></button>
    </form>
  </div>
</template>
