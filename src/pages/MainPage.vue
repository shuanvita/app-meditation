<script setup lang="ts">
import ProfileAvatar from '@/components/ProfileAvatar.vue';
import MeditationList from '@/components/MeditationList.vue';
</script>

<template>
  <div class="grid grid-cols-[370px_1fr]">
    <div>
      <ProfileAvatar />
    </div>
    <div><MeditationList /></div>
  </div>
</template>
