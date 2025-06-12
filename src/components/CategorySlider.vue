<template>
  <div class="category-slider">
    <div
    v-for="category in categories"
      :key="category.id"
      class="category-slide-item"
      
      @click="goToCategory(category.id)"
    >
      <q-img
        :src="`/category_images/${category.image}`"
        class="category-image"
        fit="contain"
        :alt="category.name"
        style="border-radius: 15px"
        :style="{ backgroundColor: category.color ? category.color + '80' : '#fff' }"
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
  width: 260px;
  cursor: pointer;
  text-align: center;
  user-select: none;
}

.category-image {
  width: 260px;
  height: 260px;
  object-fit: contain;
  border-radius: 20px;
  margin-bottom: 8px;

}

.category-name {
  font-weight: 600;
  font-size: 16px;
  color: #333;
}
</style>
