<script setup lang='ts'>
import { useData } from 'vitepress'
import type { Post } from '../../composables/posts.data'
import useAuthors from '../../composables/useAuthors'
import PostIcon from './PostIcon.vue'
import PostAuthor from './PostAuthor.vue'

const props = defineProps<{
  post: Post
}>()
const { site } = useData()
const { findByName } = useAuthors()
const author = findByName(props.post.author)
</script>

<template>
  <article
    class="p-6 rounded-lg border bg-[color:var(--vp-c-bg-soft)] border-[color:var(--vp-c-brand)] shadow-md">
    <div class="flex justify-between items-center mb-5 text-gray-500">
      <span class="bg-primary-100 text-sm font-medium inline-flex items-center rounded">
        <PostIcon :post="post">
          <span class="text-sm">{{ post.date.since }}</span>
        </PostIcon>
      </span>
    </div>
    <h2 class="mb-2 text-2xl font-bold text-[color:var(--vp-c-text-1)]">
      <a :href="`${site.base}blog${post.href}`">{{ post.title }}</a>
    </h2>
    <p class="mb-5 font-medium text-[color:var(--vp-c-text-2)]">
      {{ post.data.description }}
    </p>
    <div class="flex justify-between items-center text-[color:var(--vp-c-text-2)]">
      <PostAuthor :author="author" />
      <a :href="`/blog${post.href}`" class="inline-flex items-center font-medium hover:text-[color:var(--vp-c-brand-1)]">
        Read more
        <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd" />
        </svg>
      </a>
    </div>
    <div class="tags">
      <span v-for="(tag) in post.data.tags" class="tag">
        {{ tag }}
      </span>
    </div>
  </article>
</template>

<style scoped>
.tags {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 1.25rem;
}

.tag {
  font-family: var(--vp-font-family-base);
  border: 1px solid var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  border-radius: 0.75rem;
  font-size: 0.75rem;
  height: 1.5rem;
  line-height: 1.5rem;
  letter-spacing: auto;
  padding: 0 0.5rem;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  margin-right: 0.5rem;
}
</style>
