<template>
  <div @click="goToMatch(match.title)" class="match-card">
    <div class="match-card__head">
      <img :src="match.thumbnail" />
    </div>

    <div class="match-card__content">
      <h4>{{ match.title }}</h4>
      <p>{{ match.competition.name }}</p>
      <span class="text-small">{{ dateToLanguage(match.date) }}</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { useRouter } from 'vue-router'

export default {
  props: ["match"],
  name: "match-card",

  setup() {
    const router = useRouter();

    function dateToLanguage(date) {
      return moment(String(date)).format("LLLL");
    }

    function goToMatch(title) {
      router.push({ name: "Match", params: { matchTitle: title } });
    }
    return { dateToLanguage, goToMatch };
  },
}
</script>