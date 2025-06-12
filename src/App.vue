<template>
  <router-view />
</template>

<script setup>
// 
</script>

<style>
html, body, #q-app {
  background-color: transparent;

  min-height: 100vh;
  margin: 0;
  padding: 0;
  
}
#q-app{
  position: relative;
}

#q-app::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  background-image: url('/bg.png');
  background-size: cover;
  background-attachment: fixed;
  /* z-index: -1; */
}

body {
  font-family: 'Inter', sans-serif;
  font-weight: 300;
}
</style>
