<script setup>
let name = sessionStorage.getItem("name");
console.log(name);
</script>
<template>
  <div class="text-white font-bold font-stretch-125%">
    HELLO THERE {{ name }}
  </div>
</template>
