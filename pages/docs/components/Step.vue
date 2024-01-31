<script setup>
defineProps({
  title: String,
});
</script>

<template>
  <div role="listitem" class="step relative flex items-start pb-8">
    <div
      class="absolute w-px h-[calc(100%-2.75rem)] top-[2.25rem] left-[0.9rem] bg-[color:var(--vp-c-text-2)] dark:bg-gray-500"
    ></div>
    <div class="w-full overflow-hidden pl-12 pr-px">
      <h4 class="font-semibold text-gray-900 dark:text-gray-200">
        {{ title || "Default Title" }}
      </h4>
      <div class="py-4 text-[color:var(--vp-c-text-2)]">
        <slot> <i>No description provided.</i> </slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.step::before {
  counter-increment: number;
  content: counter(number);
  width: 1.75rem;
  height: 1.75rem;
  flex-shrink: 0;
  border-radius: 0.375rem;
  background-color: var(--vp-c-brand-3);
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
