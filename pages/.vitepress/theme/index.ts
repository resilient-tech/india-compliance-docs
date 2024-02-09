import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme';
import { inBrowser, useRoute } from 'vitepress';
import mediumZoom from "medium-zoom";
import { nextTick, watch } from 'vue';
import type { App } from 'vue';
import { anu } from 'anu-vue';
import Posts from './components/blog/Posts.vue';
import Post from './components/blog/Post.vue';
import PostDetail from './components/blog/PostDetail.vue';
import PostIcon from './components/blog/PostIcon.vue';
import PostAuthor from './components/blog/PostAuthor.vue';
import AuthorDetail from './components/blog/AuthorDetail.vue';
import Step from './components/Step.vue'
import Steps from './components/Steps.vue'

import './index.css';
import 'uno.css';

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
  
  enhanceApp({ app }: { app: App }) {
    app.use(anu, {
      registerComponents: true,
    })
    
    app.component('Posts', Posts)
    app.component('Post', Post)
    app.component('PostDetail', PostDetail)
    app.component('PostIcon', PostIcon)
    app.component('PostAuthor', PostAuthor)
    app.component('AuthorDetail', AuthorDetail)
    app.component('Step', Step)
    app.component('Steps', Steps)
  },
} satisfies Theme
