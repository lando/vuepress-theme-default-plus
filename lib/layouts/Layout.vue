<template>
  <ParentLayout>
    <template #sidebar-top>
      <CarbonAds v-if="showCarbonAds" />
    </template>
    <template #page-top>
      <Sponsors v-if="showSponsors" />
    </template>
  </ParentLayout>
</template>

<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue';
import CarbonAds from '../components/CarbonAds.vue';
import Sponsors from '../components/SponsorsList.vue';
import {useThemeData} from '@vuepress/plugin-theme-data/lib/client';

// Get theme data
const themeData = useThemeData();
console.log(themeData);
// Get the config from themedata
const {showCarbonAds = true} = themeData.value;
const {showSponsors = true} = themeData.value;

</script>

<style lang="scss">
@import '../styles/main.scss';
</style>
