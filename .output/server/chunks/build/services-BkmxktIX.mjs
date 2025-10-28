import { computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { u as useSeoMeta } from './composables-D0d1P14E.mjs';
import './server.mjs';
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
  __name: "services",
  __ssrInlineRender: true,
  setup(__props) {
    const pageTitle = computed(() => "Услуги | Наша Мастерская");
    const pageDescription = computed(
      () => "Мы проектируем и создаем надежные веб-решения для вашего бизнеса."
    );
    useSeoMeta({
      title: pageTitle,
      description: pageDescription,
      ogTitle: "Профессиональные Услуги по Веб-Разработке",
      ogDescription: pageDescription
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-slate-900 text-white min-h-screen" }, _attrs))}><div class="container mx-auto px-4 py-12"><h1 class="text-4xl lg:text-5xl font-bold mb-4">Наши Услуги</h1><p class="text-slate-400 text-lg"> Мы создаем цифровые решения, которые работают. </p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=services-BkmxktIX.mjs.map
