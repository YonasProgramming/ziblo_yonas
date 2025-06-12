<template>
  <div class="symbol-image" :style="{ backgroundColor }" @click="playSound">
    <q-img
      :src="`/symbols/${image}`"
      class="symbol-img"
      :alt="alt"
      :ratio="1/1"
       @click="onPlaySound"
    />
  </div>
</template>

<script setup>
const { image, alt, backgroundColor } = defineProps({
  image: String,
  alt: String,
  onPlaySound: Function,
  backgroundColor: {
    type: String,
    default: '#ffffff'
  }
})

// function playSound2() {
//   console.log(sound);
//   if (sound) {
//     new Audio(`/sounds/hr/${sound}`).play()
//   }
// }
</script>

<style scoped>
.symbol-image {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 20px!important;

}

.symbol-img {
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
}
</style>
