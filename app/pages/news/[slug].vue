<script setup>
// Импортируем наш "каталог"
import { newsData } from "../../data/news";

// Получаем доступ к текущему маршруту
const route = useRoute();
// Находим в "каталоге" новость, чей slug совпадает с тем, что в URL
const newsItem = newsData.find((item) => item.slug === route.params.slug);

// Динамически заполняем "паспорт" и "буклет" данными из найденной новости
if (newsItem) {
  useSeoMeta({
    title: `${newsItem.title} | Наша Мастерская`,
    description: newsItem.description,
    ogTitle: newsItem.title,
    ogDescription: newsItem.description,
    ogImage: newsItem.image,
  });
}
</script>

<template>
  <div class="bg-slate-900 text-white min-h-screen">
    <div class="container mx-auto px-4 py-12">
      <!-- Если новость найдена, показываем ее -->
      <article v-if="newsItem">
        <img
          :src="newsItem.image"
          :alt="newsItem.title"
          class="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
        />
        <h1 class="text-4xl lg:text-5xl font-bold mb-4">
          {{ newsItem.title }}
        </h1>
        <p class="text-slate-400 text-lg whitespace-pre-line">
          {{ newsItem.content }}
        </p>
      </article>
      <!-- Если новость не найдена, показываем сообщение -->
      <div v-else>
        <h1 class="text-4xl font-bold">Новость не найдена</h1>
        <p>К сожалению, мы не смогли найти запрошенную вами новость.</p>
      </div>
    </div>
  </div>
</template>
