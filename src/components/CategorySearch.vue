<template>
  <q-input
    :model-value="modelValue"
    @update:model-value="updateValue"
   standout="bg-primary text-white"
   rounded
    clearable
    debounce="300"
    :label="$t('Search categories')"
    class="q-ma-md"
   
  >
    <template #prepend>
      <q-icon name="search" />
    </template>
  </q-input>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const { modelValue } = defineProps({
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])

function updateValue(val) {
  emit('update:modelValue', val)
}
</script>
