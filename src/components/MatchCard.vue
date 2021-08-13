<template>
  <div class="match-card">
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
import moment from 'moment'
export default {
  props: ["match"],
  name: "match-card",

  setup() {
    function dateToLanguage(date) {
      return moment(String(date)).format("LLLL");
    }
    return { dateToLanguage }
  }
}
</script>