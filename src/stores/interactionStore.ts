import { defineStore } from 'pinia';

interface Logs {
  clicks: number;
  scrolls: number;
  refreshes: number;
}

const LOCAL_STORAGE_KEY = 'interactionLogs';

export const useInteractionStore = defineStore('interactionStore', {
  state: () => ({
    logs: {
      clicks: 0,
      scrolls: 0,
      refreshes: 0
    } as Logs
  }),

  actions: {
    initialiseLogs() {
      const storedLogs = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedLogs) {
        this.logs = JSON.parse(storedLogs);
      }
    },

    logInteraction(type: keyof Logs) {
      if (this.logs[type] !== undefined) {
        this.logs[type]++;
        this.saveLogsToLocalStorage();
      }
    },

    saveLogsToLocalStorage() {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.logs));
    }
  }
});
