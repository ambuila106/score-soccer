<template>
  <div class="home">
    <h1 class="home__title">Partidos Jugados:</h1>

    <hr />

    <div class="home__match" v-for="match in matches" :key="match.title">
      <MatchCard :match="match" />
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";
import MatchCard from "@/components/MatchCard.vue";

export default {
  components: {
    MatchCard
  },

  setup() {
    const store = useStore();
    const matches = computed(() => store.getters.getMatchesFiltered);

    return { matches };
  },
};
</script>
