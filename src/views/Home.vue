<template>
  <div class="home">
    <h1>Partidos Jugados:</h1>
    <div v-for="match in matches" :key="match.title">
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
