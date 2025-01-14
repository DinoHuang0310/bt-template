<template>
  <div class="relative bg-gray-100">
    <header class="sticky flex justify-between items-center w-full top-0 px-4 py-2 bg-white border-b z-50">
      <div class="w-16 xl:w-20">
        <a class="relative block w-full pb-[43.75%]" href="https://www.businesstoday.com.tw/" target="_blank">
          <img class="absolute w-full h-full object-cover" src="./assets/images/businesstoday.svg" alt="businesstoday">
        </a>
      </div>
      <BtNavbar :navList="info.menu" :closeByBackdrop="true" :collapse="true" />
    </header>

    <main :style="{'background-image': `url(${imgUrl})`}">
      <div
        class="pb-[110%] sm:pb-[40%] bg-cover bg-center shadow-inner"
        :style="{'background-image': `url(${setBanner})`}"
      />

      <article>
        <h1 class="text-2xl lg:text-3xl xl:text-4xl sm:text-center my-8 xl:leading-snug mx-auto w-11/12 max-w-screen-lg min-h-[1.375em]">
          {{ info.title }}
        </h1>

        <div class="container pb-20">
          <Introduction v-if="info?.description" />
          
          <ContentWrapper class="my-8">
            <Content v-if="info" />
          </ContentWrapper>
        </div>
      </article>

      <div v-if="info.slider" class="bg-white">
        <div id="slider" class="container w-5/6 sm:w-full py-20">
          <Title>{{ info.slider.title }}</Title>
          <BtSlider
            :sliderData="info.slider.content"
            :showNavigation="false"
            showPagination
            theme="outside-title"
          />
        </div>
      </div>

      <div v-if="info.news" id="card" class="container py-20">
        <Title>{{ info.news.title }}</Title>
        <NewsCard
          v-for="list in info.news.content"
          :key="list.index"
          class="my-4"
          :article="list"
        />
      </div>

    </main>

    <BtFooter :copyright="info ? info.copyright : null" :showFloat="false" />

    <!-- light box container -->
    <ModalsContainer />

  </div>
</template>

<script setup>
import { computed } from 'vue';
import { ModalsContainer } from 'vue-final-modal';
import useInfoData from './composables/useInfoData';
import useClientSize from './composables/useClientSize';
import useClientConfig from './composables/useClientConfig';

import BtNavbar from './components/BtNavbar/Nav.vue';
import BtFooter from './components/BtFooter.vue';
import Content from './components/Content.vue';
import ContentWrapper from './components/ContentWrapper.vue';
import Introduction from './components/Introduction.vue';
import BtSlider from './components/BtSlider.vue';
import NewsCard from './components/NewsCard.vue';
import Title from './components/Title.vue';

const { isMobile } = useClientSize()
const { isDev } = useClientConfig()

const imgUrl = new URL('./assets/images/background.png', import.meta.url)

const { info, getInfo } = useInfoData();

const setBanner = computed(() => {
  const image = `/images/banner${isMobile.value ? '_m' : ''}.png`
  return `${isDev ? '' : '.'}${image}`
})

getInfo();
</script>