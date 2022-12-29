import DefaultTheme from 'vitepress/theme';
import { inBrowser, useRoute } from 'vitepress';
import mediumZoom from "medium-zoom";
import { nextTick, watch } from 'vue';
import Archives from './components/Archives.vue';
import Tags from './components/Tags.vue';
import Page from './components/Page.vue';
import Comment from './components/Comment.vue';

import './index.css';

export default {
    ...DefaultTheme,
    setup() {
        const route = useRoute()
        watch(
          () => route.path,
          () => nextTick(() => {
            if (inBrowser)
              mediumZoom(".main img", { background: "var(--vp-c-bg)" })
          }),
          { immediate: true },
        )
      },
      
    enhanceApp({ app }) {
        // register global compoment
        app.component('Tags', Tags)
        app.component('Archives', Archives)
        app.component('Page', Page)
        app.component('Comment', Comment)        
      },
}
