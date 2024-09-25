<script setup lang="ts">
  import { useInteractionStore } from '@/stores/interactionStore';
  import { ref, watch, onMounted } from 'vue';
  import Button from 'primevue/button';
  import Menu from 'primevue/menu';
  import Drawer from 'primevue/drawer';
  import ScrollPanel from 'primevue/scrollpanel';
  import LineView from './views/LineView.vue';
  import PieView from './views/PieView.vue';
  import BarView from './views/BarView.vue';
  import HomeView from './views/HomeView.vue';

  const interactionStore = useInteractionStore();

  const visible = ref(false);

  type ChartType = "bar" | "pie" | "line" | "home";
  const LOCAL_STORAGE_KEY = 'currentChart';

  const currentChart = ref<ChartType>(localStorage.getItem(LOCAL_STORAGE_KEY) as ChartType || "home");

  watch(currentChart, (newChart: ChartType) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, newChart);
  });

  const menuItems = ref([
    {
        label: 'Bar Graph',
        icon: 'pi pi-chart-bar',
        command: () => {
          currentChart.value = "bar";
          visible.value = false;
        }
    },
    {
        label: 'Pie Chart',
        icon: 'pi pi-chart-pie',
        command: () => {
          currentChart.value = "pie";
          visible.value = false;
        }
    },
    {
        label: 'Line Graph',
        icon: 'pi pi-chart-line',
        command: () => {
          currentChart.value = "line";
          visible.value = false;
        }
    }
  ]);

  onMounted(() => {
    interactionStore.initialiseLogs();

    window.addEventListener('click', () => interactionStore.logInteraction('clicks'));
    document.getElementById("scrollbar")!.addEventListener('mouseover', () => interactionStore.logInteraction('scrolls'));
    window.addEventListener('beforeunload', () => interactionStore.logInteraction('refreshes'));
  });
</script>

<template>
  <header class="fixed h-16 w-full">
    <nav class="flex justify-between items-center bg-indigo-800 py-4 px-6">
      <h1 class="text-white text-3xl font-roboto">LCP Demo</h1>
      <div class="flex">
        <div class="mr-4 flex justify-center items-center">
          <ScrollPanel id="scrollbar" class="hidden sm:block rounded-md text-white bg-indigo-500 w-16 h-12">
            <p class="pl-4">S</p>
            <p class="pl-4">C</p>
            <p class="pl-4">R</p>
            <p class="pl-4">O</p>
            <p class="pl-4">L</p>
            <p class="pl-4">L</p>
          </ScrollPanel>
        </div>
        <Button class="mr-4" @click="currentChart = 'home'">Home</Button>
        <Button @click="interactionStore.resetLogs">Reset</Button>
      </div>
    </nav>
  </header>
  
  <main class="font-prompt bg-gradient-to-t from-indigo-200 h-full">
    <div class="w-full pt-36 mx-auto">
        <HomeView v-if="currentChart == 'home'"/>
        <BarView v-if="currentChart == 'bar'"/>
        <PieView v-if="currentChart == 'pie'"/>
        <LineView v-if="currentChart == 'line'"/>
        <div class="flex justify-center items-center">
          <p class="text-indigo-700 mr-4 text-xl">Select Charts</p>
          <Button icon="pi pi-arrow-right" @click="visible = true" />
        </div>
    </div>

    <Drawer 
      v-model:visible="visible" 
      header="Charts"
      :show-close-icon="false"
      pt:header:class="bg-indigo-800 py-4"
      pt:title:class="text-white"
      pt:content:class="bg-indigo-100"
    >
      <Menu class="mt-4" :model="menuItems"/>
    </Drawer>
  </main>
</template>
