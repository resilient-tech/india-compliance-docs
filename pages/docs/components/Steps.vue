<script setup></script>

<template>
  <div role="list" class="steps ml-3.5 my-10">
    <slot></slot>
  </div>
</template>

<style scoped>
.steps {
  counter-reset: number 0;
}
</style>
