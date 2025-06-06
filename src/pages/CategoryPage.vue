<template>
  <q-page class="q-pa-md bg-grey-2">
    <q-btn flat icon="arrow_back" @click="$router.back()" class="q-mb-md" />

    <div class="text-h5 q-mb-md">{{ categoryName }}</div>

    <div class="pojam-list">
      <q-card
        v-for="pojam in pojmovi"
        :key="pojam.id"
        clickable
        @click="goToPojam(pojam.id)"
        class="pojam-card"
      >
        <q-img :src="`/src/assets/${pojam.image || 'default.svg'}`" style="height: 140px" />
        <div class="pojam-name">
          {{ pojam.translations.hr.title }}
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const categoryId = Number(route.params.id)

const categoriesData = {
  1: { name: 'Ljudi i tijelo' },
}
// Samo test - ovo obrisi- cupaj iz jsona
const pojmoviData = {
  1: [
        {
      id: 1,
      name: "head",
      image: "head.svg",
      translations: { hr: { title: "Glava" } }
    },
    {
      id: 2,
      name: "eye",
      image: "eye.svg",
      translations: { hr: { title: "Oko" } }
    },
    {
      id: 3,
      name: "hair",
      image: "hair.svg",
      translations: { hr: { title: "Kosa" } }
    },
    {
      id: 4,
      name: "eye_brow",
      image: "eye_brow.svg",
      translations: { hr: { title: "Obrva" } }
    },
    {
      id: 5,
      name: "ear",
      image: "ear.svg",
      translations: { hr: { title: "Uho" } }
    },
    {
      id: 6,
      name: "mouth",
      image: "mouth.svg",
      translations: { hr: { title: "Usta" } }
    },
    {
      id: 7,
      name: "nose",
      image: "nose.svg",
      translations: { hr: { title: "Nos" } }
    },
    {
      id: 8,
      name: "teeth",
      image: "teeth.svg",
      translations: { hr: { title: "Zubi" } }
    },
    {
      id: 9,
      name: "tongue",
      image: "tongue.svg",
      translations: { hr: { title: "Jezik" } }
    },
    {
      id: 10,
      name: "neck",
      image: "neck.svg",
      translations: { hr: { title: "Vrat" } }
    },
    {
      id: 11,
      name: "hand",
      image: "hand.svg",
      translations: { hr: { title: "Ruka (šaka)" } }
    },
    {
      id: 12,
      name: "arm",
      image: "arm.svg",
      translations: { hr: { title: "Ruka" } }
    },
    {
      id: 14,
      name: "chest",
      image: "chest.svg",
      translations: { hr: { title: "Prsa" } }
    },
    {
      id: 15,
      name: "stomach",
      image: "stomach.svg",
      translations: { hr: { title: "Trbuh" } }
    },
    {
      id: 16,
      name: "back",
      image: "back.svg",
      translations: { hr: { title: "Leđa" } }
    },
    {
      id: 17,
      name: "waist",
      image: "waist.svg",
      translations: { hr: { title: "Struk" } }
    },
    {
      id: 18,
      name: "buttocks",
      image: "buttocks.svg",
      translations: { hr: { title: "Stražnjica" } }
    },
    {
      id: 19,
      name: "leg",
      image: "leg.svg",
      translations: { hr: { title: "Noga" } }
    },
    {
      id: 20,
      name: "foot",
      image: "foot.svg",
      translations: { hr: { title: "Stopalo" } }
    },
    {
      id: 21,
      name: "knee",
      image: "knee.svg",
      translations: { hr: { title: "Koljeno" } }
    },
    {
      id: 22,
      name: 'leg',
      image: 'leg.svg',
      translations: {
        hr: { title: 'Noga' }
      }
    },
    {
      id: 23,
      name: 'foot',
      image: 'foot.svg',
      translations: {
        hr: { title: 'Stopalo' }
      }
    },
    {
      id: 24,
      name: 'knee',
      image: 'knee.svg',
      translations: {
        hr: { title: 'Koljeno' }
      }
    },
    {
      id: 25,
      name: 'finger',
      image: 'finger.svg',
      translations: {
        hr: { title: 'Prst' }
      }
    },
    {
      id: 26,
      name: 'toe',
      image: 'toe.svg',
      translations: {
        hr: { title: 'Prst na nozi' }
      }
    },
    // Samo test - ovo obrisi
  ],
}

const categoryName = ref('')
const pojmovi = ref([])

onMounted(() => {
  categoryName.value = categoriesData[categoryId]?.name || 'Nepoznata kategorija'
  pojmovi.value = pojmoviData[categoryId] || []
})

function goToPojam(pojamId) {
  router.push(`/pojam/${pojamId}`)
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
  border-radius: 12px;
  overflow: hidden;
  transition: box-shadow 0.2s ease;
  position: relative;
}

.pojam-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.pojam-name {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.3);
  color: #222;
  padding: 8px 12px;
  font-weight: 600;
  font-size: 1.1rem;
  backdrop-filter: blur(8px);
  user-select: none;
}
</style>
