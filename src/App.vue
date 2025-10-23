<script setup lang="ts">
import { RouterView } from 'vue-router';
import IconLogo from './icons/IconLogo.vue';
</script>

<template>
  <header class="grid grid-cols-[auto_1fr] items-center justify-baseline pt-10">
    <IconLogo />
    <nav class="justify-self-end">
      <ul class="flex item-center gap-[55px]">
        <li class="pr-[55px] border-r-3 border-[#3A5051]/[0.5]">
          <router-link to="/main">Медитация</router-link>
        </li>
        <li class="pr-[55px] border-r-3 border-[#3A5051]/[0.5]">
          <router-link to="/stat">Статистика</router-link>
        </li>
        <li>
          <router-link to="/">Выход</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>
