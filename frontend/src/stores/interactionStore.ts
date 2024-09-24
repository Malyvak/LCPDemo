import { defineStore } from 'pinia';
import axios from 'axios';

interface Logs {
  clicks: number;
  scrolls: number;
  refreshes: number;
}

export const useInteractionStore = defineStore('interactionStore', {
  state: () => ({
    logs: {
      clicks: 0,
      scrolls: 0,
      refreshes: 0
    } as Logs
  }),
  
  actions: {
    async fetchLogs() {
      try {
        const response = await axios.get('http://localhost:3000/interactions');
        this.logs = response.data;
      } catch (error) {
        console.error("Failed to fetch logs:", error);
      }
    },
    
    async logInteraction(type: keyof Logs) {
      try {
        await axios.post('http://localhost:3000/interactions', { type });
        this.fetchLogs();  
      } catch (error) {
        console.error("Failed to log interaction:", error);
      }
    }
  }
});
