<template>
  <router-view />
</template>

<script>
import matchAPI from "@/api/match";
import { ref } from 'vue';

export default {
  async setup() {
    console.log(await matchAPI.getMatches());
  }
}
</script>
