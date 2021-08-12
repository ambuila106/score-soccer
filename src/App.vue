<template>
  <router-view />
</template>

<script>
import matchAPI from "@/api/match";
import { useStore } from "vuex";
import { onMounted, ref, computed } from "vue";

export default {
  setup() {
    const store = useStore();
    const matches = computed(() => store.getters.getMatchs);

    onMounted(async () => {
      const matchesResult = await matchAPI.getMatches();
      store.dispatch("saveMatchs", matchesResult);
    });

    return { matches };
  },
}
</script>
