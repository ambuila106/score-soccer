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
    const matches = computed(() => store.getters.getMatchesFiltered);

    return { matches };
  },
};
</script>
