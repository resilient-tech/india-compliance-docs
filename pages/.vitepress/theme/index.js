import DefaultTheme from 'vitepress/theme';
import Archives from './components/Archives.vue';
import Tags from './components/Tags.vue';
import Page from './components/Page.vue';
import Comment from './components/Comment.vue';
import { onMounted } from "vue";
import mediumZoom from "medium-zoom";


import './index.css';

export default {
    ...DefaultTheme,
    setup() {
        onMounted(() => {
            mediumZoom(".main img", { background: "var(--vp-c-bg)" });
        });
    },    
    enhanceApp({ app }) {
        // register global compoment
        app.component('Tags', Tags)
        app.component('Archives', Archives)
        app.component('Page', Page)
        app.component('Comment', Comment)
    }
}