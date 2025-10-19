import { API_ROUTES, http } from '@/api';
import type { IMeditationsResponse } from '@/types/meditation.type';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMeditationsStore = defineStore('meditations', () => {
  const meditations = ref<IMeditationsResponse>();

  const fetchMeditations = async () => {
    const { data } = await http.get(API_ROUTES.meditations);

    meditations.value = data;
  };

  return { meditations, fetchMeditations };
});
