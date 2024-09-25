<script lang="ts" setup>
import { ref, watch, onMounted } from "vue";
import Chart from 'primevue/chart';
import { useInteractionStore } from '@/stores/interactionStore';

const interactionStore = useInteractionStore();

const chartData = ref({
    labels: ['Clicks', 'Scrolls', 'Refreshes'],
    datasets: [
        {
            label: 'User Interactions',
            backgroundColor: ['rgb(59 130 246)', 'rgb(217 70 239)', 'rgb(239 68 68)'],
            data: [0,0,0]  
        }
    ],
});

const chartOptions = ref({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        }
    },
    scales: {
        x: {
            grid: {
                display: false
            }
        },
        y: {
            grid: {

            }
        }
    }
})

function updateChartData() {
    chartData.value.datasets[0].data = [
        interactionStore.logs.clicks,
        interactionStore.logs.scrolls,
        interactionStore.logs.refreshes
    ];
};

onMounted(() => {
    interactionStore.initialiseLogs;
    updateChartData();
});

watch(() => interactionStore.logs, () => 
    {
        updateChartData();
    }, 
    { 
        deep: true 
    }  
); 
</script>

<template>
    <h1 class="text-center text-2xl font-semibold tracking-wider text-indigo-700 font-roboto mb-6">Bar Graph</h1>
    <div class="flex justify-center mb-10 w-full">
        <Chart class="w-3/4 h-48" type="bar" :data="chartData" :options="chartOptions" />
    </div>
</template>