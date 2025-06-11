<template>
  <div class="random-btn-wrapper">
    <q-btn
      :label="$t('random selection')"
      class="random-btn"
      rounded
      unelevated
      color="primary"
      text-color="dark"
      @click="$emit('random-click')"
    />
  </div>
</template>

<style scoped>
.random-btn-wrapper {
  max-width: 900px;
  margin: 0 auto 48px auto;
  padding: 0 12px;
  display: flex;
  justify-content: center;
}

.random-btn {
  background-color: #7e57c2;
  color: white;
  font-weight: 600;
  padding: 8px 24px;
  transition: background-color 0.3s ease;
}

.random-btn:hover {
  background-color: #673ab7;
}
</style>
