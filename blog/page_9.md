---
page: true
date: 2021-06-30
title: page_9
sidebar: true
---
<script setup>
import Page from "../.vitepress/theme/components/Page.vue";
import { useData } from "vitepress";
const { theme } = useData();
const pageSize = theme.value.pageSize;
const posts = theme.value.posts.slice(24,27)
</script>
<Page :posts="posts" :pageCurrent="9" :pagesNum="11" />