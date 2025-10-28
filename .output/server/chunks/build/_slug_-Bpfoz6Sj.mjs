import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { n as newsData } from './news-DqyHI0g-.mjs';
import { u as useRoute } from './server.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const newsItem = newsData.find((item) => item.slug === route.params.slug);
    if (newsItem) {
      useSeoMeta({
        title: `${newsItem.title} | Наша Мастерская`,
        description: newsItem.description,
        ogTitle: newsItem.title,
        ogDescription: newsItem.description,
        ogImage: newsItem.image
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-slate-900 text-white min-h-screen" }, _attrs))}><div class="container mx-auto px-4 py-12">`);
      if (unref(newsItem)) {
        _push(`<article><img${ssrRenderAttr("src", unref(newsItem).image)}${ssrRenderAttr("alt", unref(newsItem).title)} class="w-full h-96 object-cover rounded-lg shadow-lg mb-8"><h1 class="text-4xl lg:text-5xl font-bold mb-4">${ssrInterpolate(unref(newsItem).title)}</h1><p class="text-slate-400 text-lg whitespace-pre-line">${ssrInterpolate(unref(newsItem).content)}</p></article>`);
      } else {
        _push(`<div><h1 class="text-4xl font-bold">Новость не найдена</h1><p>К сожалению, мы не смогли найти запрошенную вами новость.</p></div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-Bpfoz6Sj.mjs.map
