<template>
  <div class="flex justify-end items-center mb-4 space-x-2">
    <div class="flex-1 h-px bg-gray-300 mr-4" />
    <a
      href="#"
      @click.prevent="handleClick(`http://www.facebook.com/share.php?u=${info.url}`)"
    >
      <img class="w-12" src="../assets/images/ico.share.facebook.png" alt="facebook-share">
    </a>
    <a
      href="#"
      @click.prevent="handleClick(`https://social-plugins.line.me/lineit/share?url=${info.url}`)"
    >
      <img class="w-12" src="../assets/images/ico.share.line.png" alt="line-share">
    </a>
  </div>
</template>

<script setup>
import useInfoData from '../composables/useInfoData';

const { info } = useInfoData();

const handleClick = (url) => {
  window.open(url, 'newwindow', 'width=460,height=600')
  return false;
}
</script>

