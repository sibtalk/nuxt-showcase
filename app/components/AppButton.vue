<script setup>
// Мы объявляем, что наш компонент может принимать свойство 'to'
defineProps({
  to: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <!-- Если 'to' существует, используем NuxtLink, иначе - обычную кнопку -->
  <NuxtLink
    v-if="to"
    :to="to"
    class="inline-block bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded transition-colors"
  >
    <!-- <slot /> — это место, куда будет вставлен текст кнопки -->
    <slot />
  </NuxtLink>
  <button
    v-else
    class="inline-block bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded transition-colors"
  >
    <slot />
  </button>
</template>
