<template>
  <q-select
    v-model="selectedLang"
    :options="options"
    :label="$t('language')"
    dense
    outlined
    emit-value
    map-options
    @update:model-value="changeLanguage"
  />
</template>

<script setup>
import { ref, onMounted,watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const selectedLang = ref(locale.value);
const rawLanguages = ref([]);
const options = ref([]);

onMounted(loadLanguages);
async function loadLanguages() {
  try {
    const res = await fetch('/languages.json');
    const data = await res.json();
    rawLanguages.value = data.languages;
    updateOptions();
  } catch (e) {
    console.error('Failed to load languages.json:', e);
  }
}
function updateOptions() {
  options.value = rawLanguages.value.map(lang => ({
    label: lang.labels[locale.value] || lang.code,
    value: lang.code
  }));
}

// 👇 Watch locale change and update labels dynamically
watch(locale, () => {
  updateOptions();
});
function changeLanguage(langCode) {
  locale.value = langCode;
  selectedLang.value = langCode;
  localStorage.setItem('appLocale', langCode); // ✅ save it persistently
}
</script>
