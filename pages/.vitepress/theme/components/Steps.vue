<script setup>
import { ref, onMounted } from 'vue';

const stepsRef = ref(null);

function modifyStyleOfLastStep() {
  const lineElementOfLastStep = Array.from(stepsRef.value.querySelectorAll('.line')).pop();
  if (!lineElementOfLastStep) return;
  
  lineElementOfLastStep.className = "line absolute w-px h-[calc(100%-2.75rem)] top-[2.25rem] left-[0.9rem] bg-transparent bg-gradient-to-b from-gray-200 dark:from-white/10 via-80% to-transparent";
}

onMounted(() => {
  modifyStyleOfLastStep();
});
</script>

<template>
  <div role="list" class="steps ml-3.5 my-10" ref="stepsRef">
    <slot></slot>
  </div>
</template>

<style scoped>
.steps {
  counter-reset: number 0;
}
</style>
