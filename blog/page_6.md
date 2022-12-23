---
page: true
date: 2021-06-30
title: page_6
sidebar: true
---
<script setup>
import Page from "../.vitepress/theme/components/Page.vue";
import { useData } from "vitepress";
const { theme } = useData();
const pageSize = theme.value.pageSize;
const posts = theme.value.posts.slice(15,18)
</script>
<Page :posts="posts" :pageCurrent="6" :pagesNum="11" />