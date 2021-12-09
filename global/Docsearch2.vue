<script>
// @ts-ignore: docsearch type issue
import docsearch from '@docsearch/js';
import {usePageLang, useRouteLocale} from '@vuepress/client';
import {computed, h, onMounted, watch} from 'vue';
// import { useDocsearchShim } from '../composables';
import '@docsearch/css';

export default {
  name: 'Docsearch2', // eslint-disable-line
  props: {
      options: {
          type: Object,
          required: true,
      },
  },
  setup(props) {
    const routeLocale = useRouteLocale();
    const lang = usePageLang();
    // const docsearchShim = useDocsearchShim();
    // resolve docsearch props for current locale
    const propsLocale = computed(() => {
        let _a;
        return ({
            ...props.options,
            ...(_a = props.options.locales) === null || _a === void 0 ? void 0 : _a[routeLocale.value],
        });
    });
    const facetFilters = [];
    const initialize = () => {
        let _a; let _b;
        facetFilters.splice(0, facetFilters.length, `lang:${lang.value}`, ...((_b = (_a = propsLocale.value.searchParameters) === null || _a === void 0 ? void 0 : _a.facetFilters) !== null && _b !== void 0 ? _b : []));
        docsearch({
            // ...docsearchShim,
            ...propsLocale.value,
            container: '#docsearch-container',
            searchParameters: {
                ...propsLocale.value.searchParameters,
                facetFilters,
            },
        });
    };
    onMounted(() => {
        initialize();
        // re-initialize if the options is changed
        watch([routeLocale, propsLocale], ([curRouteLocale, curPropsLocale], [prevRouteLocale, prevPropsLocale]) => {
            if (curRouteLocale === prevRouteLocale) {
return;
}
            if (JSON.stringify(curPropsLocale) !== JSON.stringify(prevPropsLocale)) {
                initialize();
            }
        });
        // modify the facetFilters in place to avoid re-initializing docsearch
        // when page lang is changed
        watch(lang, (curLang, prevLang) => {
            if (curLang !== prevLang) {
                const prevIndex = facetFilters.findIndex(item => item === `lang:${prevLang}`);
                if (prevIndex > -1) {
                    facetFilters.splice(prevIndex, 1, `lang:${curLang}`);
                }
            }
        });
    });
  },
  render() {
    return h('div', {id: 'docsearch-container'});
  },
};
</script>
