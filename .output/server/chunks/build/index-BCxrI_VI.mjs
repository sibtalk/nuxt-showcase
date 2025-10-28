import { _ as __nuxt_component_0$1 } from './nuxt-link-bM6M4ckZ.mjs';
import { ref, resolveComponent, mergeProps, unref, computed, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { n as newsData, g as galleryImages } from './news-DqyHI0g-.mjs';
import { u as useSeoMeta } from './composables-D0d1P14E.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';

const _sfc_main$1 = {
  __name: "AppCarousel",
  __ssrInlineRender: true,
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const isMobile = ref(false);
    const slidesInView = computed(() => {
      return isMobile.value ? 1 : 3;
    });
    const activeIndex = ref(0);
    const bounceEffect = ref("");
    const carouselTransform = computed(() => {
      const baseOffset = -activeIndex.value * (100 / slidesInView.value);
      if (bounceEffect.value === "left")
        return `translateX(calc(${baseOffset}% - 20px))`;
      if (bounceEffect.value === "right")
        return `translateX(calc(${baseOffset}% + 20px))`;
      return `translateX(${baseOffset}%)`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="overflow-hidden"><div class="flex transition-transform duration-300 ease-in-out" style="${ssrRenderStyle({ transform: unref(carouselTransform) })}"><!--[-->`);
      ssrRenderList(__props.items, (item) => {
        _push(`<div class="flex-shrink-0 w-full lg:w-1/3 px-2"><div class="bg-slate-800 rounded-lg shadow-lg overflow-hidden h-full flex flex-col"><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.title)} class="w-full h-48 object-cover"><div class="p-6 flex flex-col flex-grow"><h2 class="text-2xl font-semibold mb-2">${ssrInterpolate(item.title)}</h2><p class="text-slate-400 mb-4 flex-grow">${ssrInterpolate(item.description)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/news/${item.slug}`,
          class: "text-sky-400 hover:text-sky-300 transition-colors mt-auto"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Читать далее → `);
            } else {
              return [
                createTextVNode(" Читать далее → ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div><button class="absolute left-[-1rem] top-1/2 -translate-y-1/2 bg-slate-700/50 hover:bg-slate-700/80 rounded-full p-2 transition-colors z-10"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button><button class="absolute right-[-1rem] top-1/2 -translate-y-1/2 bg-slate-700/50 hover:bg-slate-700/80 rounded-full p-2 transition-colors z-10"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppCarousel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "AppCarousel" });
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Новости из мира Нейросетей | Наша Мастерская",
      description: "Самые свежие и интересные новости из мира искусственного интеллекта и нейронных сетей."
    });
    const lightboxVisible = ref(false);
    const lightboxIndex = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCarousel = __nuxt_component_0;
      const _component_vue_easy_lightbox = resolveComponent("vue-easy-lightbox");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-slate-900 text-white min-h-screen" }, _attrs))}><div class="container mx-auto px-4 py-12"><h1 class="text-4xl lg:text-5xl font-bold text-center mb-12"> Новости из мира Нейросетей </h1>`);
      _push(ssrRenderComponent(_component_AppCarousel, { items: unref(newsData) }, null, _parent));
      _push(`<div class="mt-24"><h2 class="text-3xl lg:text-4xl font-bold text-center mb-8">Галерея</h2><p class="text-center text-slate-400 max-w-2xl mx-auto mb-12"> Визуализация будущего, которое создают нейронные сети. Каждое изображение — это окно в мир, где технологии и креативность сливаются воедино. </p><div class="grid grid-cols-2 md:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(unref(galleryImages), (image, index) => {
        _push(`<div class="cursor-pointer"><img${ssrRenderAttr("src", image)} alt="Gallery image" class="rounded-lg hover:opacity-80 transition-opacity"></div>`);
      });
      _push(`<!--]--></div></div>`);
      _push(ssrRenderComponent(_component_vue_easy_lightbox, {
        visible: unref(lightboxVisible),
        imgs: unref(galleryImages),
        index: unref(lightboxIndex),
        onHide: ($event) => lightboxVisible.value = false
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BCxrI_VI.mjs.map
