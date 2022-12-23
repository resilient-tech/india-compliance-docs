---
page: true
date: 2021-06-30
title: page_5
sidebar: true
---
<script setup>
import Page from "../.vitepress/theme/components/Page.vue";
import { useData } from "vitepress";
const { theme } = useData();
const pageSize = theme.value.pageSize;
const posts = theme.value.posts.slice(12,15)
</script>
<Page :posts="posts" :pageCurrent="5" :pagesNum="11" />