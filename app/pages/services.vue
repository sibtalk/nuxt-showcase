<!-- Содержимое templates/pages/services.vue -->
<script setup>
// Готовим "реактивные" данные для SEO.
// Nuxt автоматически импортирует 'computed'
const pageTitle = computed(() => "Услуги | Наша Мастерская");
const pageDescription = computed(
  () => "Мы проектируем и создаем надежные веб-решения для вашего бизнеса."
);

// Переопределяем глобальные SEO-настройки для этой страницы
useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: "Профессиональные Услуги по Веб-Разработке",
  ogDescription: pageDescription,
});
</script>

<template>
  <div class="bg-slate-900 text-white min-h-screen">
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-4xl lg:text-5xl font-bold mb-4">Наши Услуги</h1>
      <p class="text-slate-400 text-lg">
        Мы создаем цифровые решения, которые работают.
      </p>
    </div>
  </div>
</template>
