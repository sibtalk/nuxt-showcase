<script setup>
// --- ТЕХНИЧЕСКОЕ ЗАДАНИЕ (Props) ---
// Объявляем "входной порт" нашего компонента. Мы говорим: "Эта карусель ожидает
// получить на вход массив с данными под названием 'items'". Это наш контракт.
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

// --- ПРИБОРНАЯ ПАНЕЛЬ (Состояние) ---

// Создаем "сигнальную лампочку". isMobile будет 'true', если экран узкий.
// ref() — это инструмент Vue, который делает эту лампочку "реактивной": как только
// ее состояние меняется, все, кто на нее смотрит, мгновенно об этом узнают.
const isMobile = ref(false);

// Создаем "инженера-калькулятора". computed() постоянно следит за isMobile.
// Как только isMobile меняется, этот калькулятор мгновенно пересчитывает и
// выдает новый результат: 1 слайд для мобильного, 3 для десктопа.
const slidesInView = computed(() => {
  return isMobile.value ? 1 : 3;
});

// Наш главный "счетчик", который помнит, какой слайд сейчас активен.
const activeIndex = ref(0);
// Временный "сигнал", который мы подаем, чтобы запустить анимацию "пружины".
const bounceEffect = ref("");

// --- ГЛАВНЫЙ МЕХАНИЗМ (Computed Properties) ---

// Главный "механик", который отдает CSS-команду для сдвига ленты.
// Он смотрит на activeIndex и slidesInView и вычисляет точное смещение в процентах.
// Также он учитывает сигнал bounceEffect для создания "пружинящего" движения.
const carouselTransform = computed(() => {
  const baseOffset = -activeIndex.value * (100 / slidesInView.value);
  if (bounceEffect.value === "left")
    return `translateX(calc(${baseOffset}% - 20px))`;
  if (bounceEffect.value === "right")
    return `translateX(calc(${baseOffset}% + 20px))`;
  return `translateX(${baseOffset}%)`;
});

// --- ОРГАНЫ УПРАВЛЕНИЯ (Функции) ---

// Команда для кнопки "Вперед".
function next() {
  // "Проверка безопасности": не вышли ли мы за пределы видимых слайдов?
  if (activeIndex.value < props.items.length - slidesInView.value) {
    activeIndex.value++; // Если нет, переключаем счетчик.
  } else {
    // Если мы у края, запускаем "пружину".
    bounceEffect.value = "left";
    setTimeout(() => (bounceEffect.value = ""), 150);
  }
}

// Команда для кнопки "Назад".
function prev() {
  // "Проверка безопасности": не находимся ли мы в самом начале?
  if (activeIndex.value > 0) {
    activeIndex.value--; // Если нет, переключаем счетчик.
  } else {
    // Если мы у края, запускаем "пружину".
    bounceEffect.value = "right";
    setTimeout(() => (bounceEffect.value = ""), 150);
  }
}

// --- ДАТЧИК АДАПТИВНОСТИ (Lifecycle Hooks) ---

// Наш "датчик" ширины экрана. Он измеряет окно браузера и переключает
// нашу "сигнальную лампочку" isMobile в правильное положение.
function checkScreenSize() {
  // 1024px - это стандартная точка для 'lg' в Tailwind
  isMobile.value = window.innerWidth < 1024;
}

// Профессиональный подход к управлению "датчиком".
// onMounted — это команда "включить датчик в розетку", когда карусель появляется на странице.
onMounted(() => {
  checkScreenSize(); // Проверяем размер сразу при появлении
  window.addEventListener("resize", checkScreenSize); // И следим за изменениями
});

// onUnmounted — "выключить датчик", когда карусель исчезает.
// Это экономит ресурсы и предотвращает ошибки в сложных приложениях.
onUnmounted(() => {
  window.removeEventListener("resize", checkScreenSize);
});
</script>

<template>
  <div class="relative">
    <div class="overflow-hidden">
      <div
        class="flex transition-transform duration-300 ease-in-out"
        :style="{ transform: carouselTransform }"
      >
        <div
          v-for="item in items"
          :key="item.slug"
          class="flex-shrink-0 w-full lg:w-1/3 px-2"
        >
          <div
            class="bg-slate-800 rounded-lg shadow-lg overflow-hidden h-full flex flex-col"
          >
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-48 object-cover"
            />
            <div class="p-6 flex flex-col flex-grow">
              <h2 class="text-2xl font-semibold mb-2">{{ item.title }}</h2>
              <p class="text-slate-400 mb-4 flex-grow">
                {{ item.description }}
              </p>
              <NuxtLink
                :to="`/news/${item.slug}`"
                class="text-sky-400 hover:text-sky-300 transition-colors mt-auto"
              >
                Читать далее &rarr;
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button
      @click="prev"
      class="absolute left-[-1rem] top-1/2 -translate-y-1/2 bg-slate-700/50 hover:bg-slate-700/80 rounded-full p-2 transition-colors z-10"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
    <button
      @click="next"
      class="absolute right-[-1rem] top-1/2 -translate-y-1/2 bg-slate-700/50 hover:bg-slate-700/80 rounded-full p-2 transition-colors z-10"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
</template>
