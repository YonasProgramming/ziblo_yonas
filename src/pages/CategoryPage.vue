<template>
  <q-page class="q-pa-md ">
    <q-btn flat icon="arrow_back" @click="$router.push('/category-all')" class="q-mb-md q-pa-md" />

    <div class="text-h5 q-mb-md">
      {{ categoryName }}
    </div>
    <q-input bg-color="white"
     standout="text-primary" rounded v-model="searchQuery" :label="$t('Search symbols')"
      class="q-mb-md" clearable debounce="300">
      <template #prepend>
        <q-icon name="search" />
      </template>
    </q-input>

    <div class="pojam-list">
      <q-card v-for="pojam in pojmovi" :key="pojam.id" clickable @click="goToPojam(pojam)">
        <q-img :src="`/symbols/${pojam.image || 'default.svg'}`" style="height: 130px" fit="contain"
          class="pojam-card q-pb-xl"
          :style="{ backgroundColor: pojam.category.color ? pojam.category.color + '80' : '#fff' }" />
        <div class="pojam-name">
          {{ translatedTitle(pojam).value }}
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import rawData from 'src/assets/symbols_data.json'
import { useI18n } from 'vue-i18n'
const route = useRoute()
const router = useRouter()
const categoryId = Number(route.params.id)

const { locale } = useI18n()

const categoryName = ref('Nepoznata kategorija')
const categoryColor = ref('#ffffff')
const allPojmovi = ref([])
const searchQuery = ref('')
const pojmovi = computed(() => {
  if (!searchQuery.value) return allPojmovi.value
  const q = searchQuery.value.toLowerCase()
  return allPojmovi.value.filter((item) =>
    translatedTitle(item).value.toLowerCase().includes(q)
  )
})

const translatedTitle = (pojam) =>
  computed(() => pojam.translations?.[locale.value]?.title || 'Bez naziva')
function updateCategoryInfo() {
  if (allPojmovi.value.length > 0) {
    const cat = pojmovi.value[0].category
    categoryName.value =
      cat.translations?.[locale.value]?.title || 'Nepoznata kategorija'
    categoryColor.value = cat.color || '#ffffff'
  }
}

onMounted(() => {
  allPojmovi.value = rawData.filter((item) => item.category?.id === categoryId)
  updateCategoryInfo()
})

// 👇 react to language change
watch(locale, () => {
  updateCategoryInfo()
})


function goToPojam(pojam) {
  router.push(`/pojam/${pojam.category.id}/${pojam.id}`)
}
</script>

<style scoped>
.pojam-list {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
}

.pojam-card {
  cursor: pointer;
  border-radius: 20px !important;
  overflow: hidden;
  transition: box-shadow 0.2s ease;
  position: relative;
}

.pojam-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.pojam-name {
  /* position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.3);
  color: #222; */
  padding: 5px 5px 10px 5px;
  font-weight: 600;
  font-size: 1.1rem;

}

.q-card {
  box-shadow: none;
  background-color: transparent;
}
</style>
