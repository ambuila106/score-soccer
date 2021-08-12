<template>
  <div class="general-layout">
    <span>Equipos</span>
    <select v-model="teamSelected" @click="filterByTeam()">
      <option v-for="team in teams" :key="team.name">{{ team.name }}</option>
    </select>

    <span>Ligas</span>
    <select>
      <option v-for="competition in competitions" :key="competition.name">
        {{ competition.name }}
      </option>
    </select>
  </div>
  <router-view />
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";

export default {
  setup() {
    const store = useStore();
    const teams = computed(() => store.getters.getTeams);
    const competitions = computed(() => store.getters.getCompetitions);
    const teamSelected = ref("");

    function filterByTeam() {
      store.dispatch("saveCurrentTeam", teamSelected);
    }

    return { teams, competitions, filterByTeam, teamSelected };
  },
}
</script>