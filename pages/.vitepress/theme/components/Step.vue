<script setup>
defineProps({
  title: String,
});
</script>

<template>
  <div role="listitem" class="step relative flex items-start pb-6">
    <div
      class="line absolute w-px h-[calc(100%-2.75rem)] top-[2.25rem] left-[0.9rem] bg-gray-200 dark:bg-[color:var(--vp-c-bg-soft-lighter)]">
    </div>
    <div class="w-full overflow-hidden pl-12 pr-px">
      <h4 class="font-medium text-[color:var(--vp-c-text-1)]">
        {{ title || "Default Title" }}
      </h4>
      <div class="text-[color:var(--vp-c-text-2)]">
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
  background-color: var(--vp-button-alt-bg);
  color: var(--vp-c-text-1);
  font-weight: 600;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
