<template>
  <q-layout view="hHh lpR fff">

    <q-btn
      flat
      dense
      round
      icon="menu"
      aria-label="Meni"
      class="hamburger-btn"
      @click="drawer = !drawer"
    />

    <q-drawer v-model="drawer" show-if-above side="left" bordered>
      
      <q-list padding  class="drawer-content">
        <q-img src="vertical-logo.png" width="50%" class="q-mx-auto block"></q-img>
 <div class="q-pa-md"><LanguageSwitcher /></div>
        <h6>{{$t('contact')}}</h6>

        <q-item-label header>Address</q-item-label>
        <div class="q-pa-md text-body2">
          Ulica Božidara Magovca 107<br />
          10000 Zagreb
        </div>

        <q-separator spaced />

        <q-item-label header>Opening hours</q-item-label>
        <div class="q-pa-md text-body2">
          08:00—16:00
        </div>

        <q-separator spaced />

        <q-item-label header>Email</q-item-label>
        <div class="q-pa-md text-body2">
          <a href="mailto:info@dikobraz.hr">info@dikobraz.hr</a>
        </div>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <div class="bottom-toolbar">
      <button
        class="toolbar-btn"
        :class="{ active: activeTab === 0 }"
        @click="goTo('/')"
        aria-label="Home"
      >
        <q-icon name="home" />
        <span>Početna</span>
      </button>

      <button
        class="toolbar-btn"
        :class="{ active: activeTab === 1 }"
        @click="goTo('/category-all')"
        aria-label="Categories"
      >
        <q-icon name="category" />
        <span>Kategorije</span>
      </button>

      <button
        class="toolbar-btn"
        :class="{ active: activeTab === 2 }"
        @click="goTo('/account/1')"
        aria-label="Profile"
      >
        <q-icon name="person" />
        <span>Profil</span>
      </button>
    </div>
  </q-layout>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import LanguageSwitcher from 'components/LanguageSwitcher.vue'
const router = useRouter()
const route = useRoute()

const drawer = ref(false)
const activeTab = ref(0)

const goTo = (path) => {
  router.push(path)
}

watch(
  () => route.path,
  (newPath) => {
    if (newPath.startsWith('/category-all')) {
      activeTab.value = 1
    } else if (newPath === '/') {
      activeTab.value = 0
    } else if (newPath.startsWith('/account')) {
      activeTab.value = 2
    } else {
      activeTab.value = -1
    }
  },
  { immediate: true }
)
</script>

<style scoped>
.hamburger-btn {
  position: fixed;
  top: 8px;
  left: 8px;
  z-index: 4001; /*.qdrawer po defaultu ima zindex 1000, a na mobile 3000 */
}

.bottom-toolbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 64px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 24px;
  box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.1);
  border-top: 1px solid #ddd;
  z-index: 5000;
}

.toolbar-btn {
  background: none;
  border: none;
  outline: none;
  color: #777;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  padding: 6px 12px;
  transition: color 0.3s ease, background-color 0.3s ease;
  border-radius: 12px;
  position: relative;
  width: 64px;
  height: 64px;
  justify-content: center;
}

.toolbar-btn q-icon {
  font-size: 24px;
  margin-bottom: 2px;
}

.toolbar-btn:hover {
  color: #818e9b;
}

.toolbar-btn.active {
  color: #5e4b8b;
  background-color: #e5dbf8;
  border-radius: 50%;
  box-shadow: 0 0 6px rgba(94, 75, 139, 0.3);
}

.drawer-content {
  padding-top: 40px;
}

h6 {
  margin: 12px;
}
</style>
