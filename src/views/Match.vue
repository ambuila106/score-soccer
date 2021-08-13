<template>
  <div>
    <div class="match__embed">
      <div v-html="match.embed"></div>
    </div>

    <div class="match__content">
      <h4>{{ match.title }}</h4>
      <p>{{ match.competition.name }}</p>
      <span class="text-small">{{ dateToLanguage(match.date) }}</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { useRoute } from 'vue-router';
import { useStore } from "vuex";

import { computed } from "vue";

export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    const matchTitle = route.params.matchTitle;
    store.dispatch("saveCurrentMatch", matchTitle);
    const match = computed(() => store.state.currentMatch);

    function dateToLanguage(date) {
      return moment(String(date)).format("LLLL");
    }

    return { match, dateToLanguage };
  }
}
</script>