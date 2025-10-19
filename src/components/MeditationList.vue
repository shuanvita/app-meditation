<script setup lang="ts">
import { useMeditationsStore } from '@/stores/meditations.store';
import { onMounted } from 'vue';
import IconStart from '@/icons/IconStart.vue';

const store = useMeditationsStore();

onMounted(() => {
  store.fetchMeditations();
});
</script>

<template>
  <div class="grid grid-cols-2 gap-[22px]">
    <div
      class="bg-card py-[22px] px-[30px] rounded-[20px] text-default-inverted-text"
      v-for="item in store.meditations?.data.meditations"
      :key="item.id"
    >
      <div class="text-[25px] font-medium">{{ item.title }}</div>
      <div class="text-[15px] font-medium">{{ item.description }}</div>
      <div class="flex items-center justify-between mt-4">
        <button
          class="bg-default-bg flex items-center gap-[11px] text-[15px]/[1.2] font-medium text-default-text rounded-[10px] py-[10px] px-[20px] mt-[10px]"
        >
          <span>Старт</span>
          <IconStart />
        </button>
        <div class="text-[15px] opacity-75 font-medium">{{ item.duration_min }} мин</div>
      </div>
    </div>
  </div>
</template>
