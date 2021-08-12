<template>
  <div class="home">
    <h1>Recomendados:</h1>
    <div v-for="match in matches" :key="match.title">
      {{ match.title }}
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();
    console.log(store.getters.getCurrentTeam);
    const matches = computed(() =>
      store.getters.getCurrentTeam
        ? store.getters.getMatchesByTeam
        : store.getters.getCurrenCompetition
        ? store.getters.getMatchesByCompetition
        : store.getters.getRandomMatchs
    );

    return { matches };
  },
};
</script>
