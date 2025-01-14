<template>
  <div class="w-11/12 sm:w-full mx-auto">
    <div
      class="border-l-4 border-secondary p-2 xl:px-4 mb-4 text-base xl:leading-relaxed min-h-[2rem] space-y-2"
      v-html="info.description"
    />
  </div>
</template>

<script setup>
import useInfoData from '../composables/useInfoData';

const { info } = useInfoData();
</script>