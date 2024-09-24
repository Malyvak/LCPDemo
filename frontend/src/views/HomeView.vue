<script setup lang="ts">
  import Button from 'primevue/button';
  import { useInteractionStore } from '@/stores/interactionStore';

  const interactionStore = useInteractionStore();
</script>

<template>
  <header class="fixed h-16 w-full">
    <nav class="flex justify-between items-center bg-indigo-800 py-2 px-6">
      <h1 class="text-white text-2xl font-bold">LCP Demo</h1>
      <div>
        <Button
          label="Log in"
          pt:root="bg-indigo-800 hover:bg-indigo-600 active:bg-indigo-500 cursor-pointer py-2 px-4"
          pt:label="text-white text-lg"
        />
      </div>
    </nav>
  </header>
  <main class="bg-gradient-to-t from-indigo-200 h-full px-4 py-4">
    <div class="mt-12">
      <h1>Interaction Logs</h1>
      <div>
        <p>Clicks: {{ interactionStore.logs.clicks }}</p>
        <p>Scrolls: {{ interactionStore.logs.scrolls }}</p>
        <p>Refreshes: {{ interactionStore.logs.refreshes }}</p>
      </div>
    </div>
  </main>
  <footer>

  </footer>
</template>
