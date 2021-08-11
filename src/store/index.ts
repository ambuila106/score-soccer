import { createStore } from "vuex";
import { Match } from "@/models/match";

export default createStore({
  state: {
    matchs: [],
    competitions: [],
    teams: [],
  },

  getters: {
    getMatchs(state: any) {
      return state.matchs;
    },

    getCompetitions(state: any) {
      return state.competitions;
    },

    getTeams(state: any) {
      return state.teams;
    },
  },

  mutations: {},

  actions: {
    async saveMatchs(state:any, matchs: Match[]) {
      state.matchs = matchs;

      let competitions = matchs.map((match: Match) => {
        return match.competition;
      });

      const hash:any = {};

      competitions = competitions.filter(function(current) {
        const exists = !hash[current.id];
        hash[current.id] = true;
        return exists;
      });

      state.competitions = competitions;

      let teams:any = matchs.map((match: Match) => {
        return [match.team1, match.team2];
      });

      teams = teams.flat().filter(function(current:any) {
        const exists = !hash[current.name];
        hash[current.name] = true;
        return exists;
      });

      state.teams = teams;
    },
  },
  modules: {},
});
