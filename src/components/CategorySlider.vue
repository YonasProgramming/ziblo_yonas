<template>
  <div class="category-slider">
    <div
    v-for="category in categories.slice(0, 5)"
      :key="category.id"
      class="category-slide-item"
      @click="goToCategory(category.id)"
    >
      <q-img
        :src="category.image"
        class="category-image"
        :alt="category.name"
        style="border-radius: 15px"
      />
      <div class="category-name">{{ category.name }}</div>
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
.category-slider {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 12px;
  display: flex;
  overflow-x: auto;
  gap: 16px;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}

.category-slide-item {
  flex: 0 0 auto;
  width: 350px;
  cursor: pointer;
  text-align: center;
  user-select: none;
}

.category-image {
  width: 350px;
  height: 300px;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.category-name {
  font-weight: 600;
  font-size: 16px;
  color: #333;
}
</style>
