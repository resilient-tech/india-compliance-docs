<script setup lang="ts">
import { useData } from 'vitepress'
import usePosts from '../../composables/usePosts'
import useAuthors from '../../composables/useAuthors'

const { site } = useData()

const { currentPost: post, path, prevPost, nextPost } = usePosts()
const { findByName } = useAuthors()
const author = findByName(post.value.author)
</script>

<template>
  <div>
    <div>
      <h1 class="mb-2 mt-2 text-2xl font-bold">
        <div class="post-title">{{ post.title }}</div>
      </h1>
      <hr>
      <div class="flex justify-between items-center mb-1 mt-2 text-gray-500">
        <PostAuthor :author="author" />
        <span class="bg-primary-100  text-sm font-medium inline-flex items-center rounded">
          <PostIcon :post="post" />
        </span>
        <span class="text-sm">{{ post.date.since }}</span>
      </div>
      <div class="flex justify-between items-center mt-2 text-gray-500">
        <a v-if="prevPost" :href="`${site.base}blog${prevPost.href}`"
          class="inline-flex items-center font-medium dark:text-white hover:text-[color:var(--vp-c-brand-1)]">
          <div class="i-bx:arrow-back mr-2" />
          <span>Previous Post</span>
        </a>
        <div v-if="!prevPost" />
        <a v-if="nextPost" :href="`${site.base}blog${nextPost.href}`"
          class="inline-flex items-center font-medium dark:text-white hover:text-[color:var(--vp-c-brand-1)]">
          <span>Next Post</span>
          <div class="i-bx:right-arrow-alt ml-2" />
        </a>
      </div>
    </div>
    <hr>
    <slot />
  </div>
</template>

<style scoped>
.vp-doc h1,
h2,
h3,
hr {
  margin: 12px 0 0 0;
}

.post-title {
  padding-bottom: 10px;
  margin-bottom: 5px;
}
</style>
