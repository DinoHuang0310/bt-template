<template>

  <Share v-if="info.url" />
  <div class="space-y-4 font-light first-letter:float-left first-letter:text-4xl first-letter:font-light first-letter:mr-1">

    <div v-for="(list, index) in info.article" :key="index">
      <EChart
        v-if="list.type === 'chart'"
        class="mt-8"
        :class="list.className"
        :chartOption="list.content"
      />
      <BtYouTubePlayer v-else-if="list.type === 'youtube'" :videoId="list.content" />
      <component v-else :is="list.type" :class="list.className">
        {{ list.content }}
      </component>
    </div>

    <div v-if="info.url" class="text-center">
      <a
        class="inline-block border border-secondary px-4 py-2 mt-4 font-normal"
        :href="info.url"
        target="blank"
      >了解更多</a>
    </div>
    
  </div>
</template>

<script setup>
import useInfoData from '../composables/useInfoData';

import Share from '../components/Share.vue';
import BtYouTubePlayer from '../components/BtYouTubePlayer/Player.vue';
import EChart from './EChart.vue';

const { info } = useInfoData();

</script>
