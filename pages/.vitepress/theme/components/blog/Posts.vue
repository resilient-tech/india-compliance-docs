<script setup lang="ts">
import { useData } from 'vitepress'
import usePosts from '../../composables/usePosts'
import Post from './Post.vue'

const { allPosts: posts } = usePosts()

const { theme } = useData()
</script>

<template>
  <div class="mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
      <h2
        class="mb-4 text-4xl lg:text-5xl tracking-normal font-extrabold text-[color:var(--vp-c-brand)]">
        {{ theme.blog?.title }}
      </h2>
      <p class="font-medium sm:text-2xl text-[color:var(--vp-c-text-2)]">
        {{ theme.blog?.description }}
      </p>
    </div>
    <div class="p-2 grid gap-6 lg:grid-cols-2">
      <div v-for="post of posts">
        <Post :post="post" />
      </div>
    </div>
  </div>
</template>
