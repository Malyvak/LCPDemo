<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue';
import { useInteractionStore } from '@/stores/interactionStore';

const interactionStore = useInteractionStore();

onMounted(() => {
  interactionStore.fetchLogs(); // Fetch logs on mount

  window.addEventListener('click', () => interactionStore.logInteraction('clicks'));
  window.addEventListener('scroll', () => interactionStore.logInteraction('scrolls'));
  window.addEventListener('beforeunload', () => interactionStore.logInteraction('refreshes'));
});
</script>

<template>
  <RouterView />
</template>
