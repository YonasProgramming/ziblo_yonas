<template>
  <q-layout view="hHh lpR fff">
<div class="row">
  
  <div class="col-12 justify-center items-center text-center">
    <router-link to="/"> <q-img src="horizontal-logo.png" width="200px" class="q-mt-lg q-mx-auto block"></q-img></router-link>
  </div>
</div>
 

   

    <q-page-container class="q-pb-xl q-mb-lg">
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
        <span>{{$t('home')}}</span>
      </button>

      <button
        class="toolbar-btn"
        :class="{ active: activeTab === 1 }"
        @click="goTo('/category-all')"
        aria-label="Categories"
      >
        <q-icon name="category" />
        <span>{{$t('Categories')}}</span>
      </button>
 <button
        class="toolbar-btn"
        :class="{ active: activeTab === 3 }"
        @click="goTo('/game')"
        aria-label="game"
      >
        <q-icon name="smart_toy" />
        <span>{{$t('Game')}}</span>
      </button>
      <button
        class="toolbar-btn"
        :class="{ active: activeTab === 2 }"
        @click="goTo('/contact')"
        aria-label="Profile"
      >
        <q-icon name="person" />
        <span>{{$t('profile')}}</span>
      </button>
    </div>
  </q-layout>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()


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
    }else if (newPath === '/game') {
      activeTab.value = 3
    } else {
      activeTab.value = -1
    }
  },
  { immediate: true }
)
</script>
<style>
.q-page{
min-height:calc(100vh - 90px -90px)!important
}
</style>
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
  /* height: 64px; */
  background-color: #f0f0f0;
  display: flex;
  justify-content: space-around;
  align-items: center;
 padding: 10px 5px;
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
.q-icon{
  width: 1em;
}
.toolbar-btn .q-icon {
  font-size: 20px;
  width: 40px;
  height: 40px;
  margin-bottom: 2px;
  margin-top: 10px;
  padding: 0 1px 2px;
}

.toolbar-btn:hover {
  color: #818e9b;
}

.toolbar-btn.active .q-icon{
  color: #fff;
  background-color: #ff8a25;
  border-radius: 50%;
 
}

.drawer-content {
  padding-top: 40px;
}

h6 {
  margin: 12px;
}

</style>
