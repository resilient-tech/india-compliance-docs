---
page: true
date: 2021-06-30
title: page_11
sidebar: true
---
<script setup>
import Page from "../.vitepress/theme/components/Page.vue";
import { useData } from "vitepress";
const { theme } = useData();
const pageSize = theme.value.pageSize;
const posts = theme.value.posts.slice(30,33)
</script>
<Page :posts="posts" :pageCurrent="11" :pagesNum="11" />