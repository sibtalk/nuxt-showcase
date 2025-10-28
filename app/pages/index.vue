<!-- Полностью замените содержимое app/pages/index.vue -->
<script setup>
import { newsData, galleryImages } from "../data/news";

useSeoMeta({
  title: "Новости из мира Нейросетей | Наша Мастерская",
  description:
    "Самые свежие и интересные новости из мира искусственного интеллекта и нейронных сетей.",
});

const lightboxVisible = ref(false);
const lightboxIndex = ref(0);

function showLightbox(index) {
  lightboxIndex.value = index;
  lightboxVisible.value = true;
}
</script>

<template>
  <div class="bg-slate-900 text-white min-h-screen">
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-4xl lg:text-5xl font-bold text-center mb-12">
        Новости из мира Нейросетей
      </h1>

      <AppCarousel :items="newsData" />

      <div class="mt-24">
        <h2 class="text-3xl lg:text-4xl font-bold text-center mb-8">Галерея</h2>
        <p class="text-center text-slate-400 max-w-2xl mx-auto mb-12">
          Визуализация будущего, которое создают нейронные сети. Каждое
          изображение — это окно в мир, где технологии и креативность сливаются
          воедино.
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            v-for="(image, index) in galleryImages"
            :key="image"
            @click="showLightbox(index)"
            class="cursor-pointer"
          >
            <img
              :src="image"
              alt="Gallery image"
              class="rounded-lg hover:opacity-80 transition-opacity"
            />
          </div>
        </div>
      </div>

      <vue-easy-lightbox
        :visible="lightboxVisible"
        :imgs="galleryImages"
        :index="lightboxIndex"
        @hide="lightboxVisible = false"
      />
    </div>
  </div>
</template>
