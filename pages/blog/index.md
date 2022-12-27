---
page: true
date: 2021-06-30
title: Blog
sidebar: true
editLink: false
lastUpdated: false
---
<script setup>
import Page from "../.vitepress/theme/components/Page.vue";
import { useData } from "vitepress";
const { theme } = useData();
const pageSize = theme.value.pageSize;
const posts = theme.value.posts.slice(0,3)
</script>
<Page :posts="posts" :pageCurrent="1" :pagesNum="1" />