<template>
  <div class="category-button-slider">
    <div class="button-wrapper">
      <q-btn
        v-for="category in categories"
        :key="category.id"
        flat
        rounded
        dense
        class="category-button"
        @click="goToCategory(category.id)"
         :style="{ backgroundColor: category.color ? category.color + '80' : '#fff' }"
        :label="category.name"
      />
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'

const { categories } = defineProps({
  categories: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['go-to-category'])

function goToCategory(id) {
  emit('go-to-category', id)
}
</script>

<style scoped>
.category-button-slider {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 12px;
  overflow-x: auto;
  margin-bottom: 50px;
}

.button-wrapper {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  padding: 8px 0;
}

.category-button {
  background-color: #f5f5f5;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-weight: 300;
  white-space: nowrap;
  padding: 4px 12px;
}
</style>
