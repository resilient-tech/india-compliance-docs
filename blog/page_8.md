---
page: true
date: 2021-06-30
title: page_8
sidebar: true
---
<script setup>
import Page from "../.vitepress/theme/components/Page.vue";
import { useData } from "vitepress";
const { theme } = useData();
const pageSize = theme.value.pageSize;
const posts = theme.value.posts.slice(21,24)
</script>
<Page :posts="posts" :pageCurrent="8" :pagesNum="11" />