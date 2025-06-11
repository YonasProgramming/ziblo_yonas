<template>
  <q-page class="q-pa-md bg-grey-2">
    <TopHeader @toggle-drawer="toggleDrawer" />

    <CategorySearch v-model="search" />

    <div class="categories-list q-mt-lg">
      
      <q-card
        v-for="category in filteredCategories"
        :key="category.id"
        clickable
        @click="goToCategory(category.id)"
        class="category-card q-pb-lg"
        :style="{ backgroundColor: category.color ? category.color + '80' : '#fff' }"
      >
        <q-img :src="`/category_images/${category.image}`" style="height: 130px"  fit="contain"/>
        <div class="category-name ">
          {{ getTranslatedTitle(category).value }}
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

import TopHeader from 'components/TopHeader.vue'
import CategorySearch from 'components/CategorySearch.vue'
import categoryData from 'src/assets/categories_data.json'

const router = useRouter()
const translatedTitlesMap = ref(new Map())

const { locale } = useI18n()

const categories = ref([])
const search = ref('')
function setupTranslatedTitles() {
  const map = new Map()
  categories.value.forEach(category => {
    map.set(
      category.id,
      computed(() => category.translations?.[locale.value].title || category.category || 'Bez naziva')
    )
  })
  translatedTitlesMap.value = map
}
onMounted(() => {
  categories.value = categoryData
  setupTranslatedTitles()
})

// Rebuild computed titles when locale changes
watch(locale, () => {
  setupTranslatedTitles()
})

// Filter categories by translated title reactive to locale and search
const filteredCategories = computed(() => {
  const term = search.value.toLowerCase()
  return categories.value.filter(category => {
    const titleRef = translatedTitlesMap.value.get(category.id)
    if (!titleRef) return false
    return titleRef.value.toLowerCase().includes(term)
  })
})

function getTranslatedTitle(category) {
  return translatedTitlesMap.value.get(category.id) || ref(category.category || 'Bez naziva')
}

function goToCategory(id) {
  router.push(`/category/${id}`)
}

function toggleDrawer() {
  console.log('Drawer toggled')
}
</script>

<style scoped lang="scss" src="../css/categoryAll.scss"></style>
