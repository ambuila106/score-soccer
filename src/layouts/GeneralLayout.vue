<template>
  <div class="general-layout">
    <button @click="clear()">Todos</button>
    <div>
      <span class="general-layout__label">Equipos</span>

      <select v-model="teamSelected" @click="filterByTeam()">
        <option v-for="team in teams" :key="team.name">{{ team.name }}</option>
      </select>
    </div>

    <div>
      <span class="general-layout__label">Ligas</span>

      <select v-model="competitionSelected" @click="filterByCompetition()">
        <option v-for="competition in competitions" :key="competition.name">
          {{ competition.name }}
        </option>
      </select>
    </div>

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
    const teamSelected = ref();
    const competitionSelected = ref();

    function filterByTeam() {
      console.log("test")
      store.dispatch("saveCurrentTeam", teamSelected);
    }

    function filterByCompetition() {
      store.dispatch("saveCurrentCompetition", competitionSelected);
    }

    function clear() {
      store.dispatch("clearFilter", competitionSelected);
    }

    return {
      teams,
      competitions,
      filterByTeam,
      teamSelected,
      filterByCompetition,
      competitionSelected,
      clear,
    };
  },
}
</script>