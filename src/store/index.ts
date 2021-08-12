import { createStore } from "vuex";
import { Match } from "@/models/match";

export default createStore({
  state: {
    matchs: [],
    competitions: [],
    teams: [],
    currentTeam: "",
    currentCompetition: "",
  },

  getters: {
    getMatchs(state: any) {
      return state.matchs;
    },

    getRandomMatchs(state: any) {
      return state.matchs.sort(() => Math.random() - Math.random()).slice(0, 5)
    },

    getCompetitions(state: any) {
      return state.competitions;
    },

    getTeams(state: any) {
      return state.teams;
    },

    getMatchesByCompetition(state: any) {
      const competition = state.currentCompetition;

      state.matchs.filter((match: Match) => {
        if (match.competition.name == competition) {
          return true
        }
      });
    },

    getMatchesByTeam(state: any) {
      const team = state.currentTeam;
      console.log("team", team)

      const matchesTeam = state.matchs.filter((match: Match) => {
        if (match.team1.name == team || match.team1.name == team) {
          return true
        }
      });

      console.log("matchesTeam", matchesTeam);

      return matchesTeam;
    }
  },

  mutations: {
    SAVE_MATCHES(state:any, matchs:any) {
      state.matchs = matchs;

      let competitions = matchs.map((match: Match) => {
        return match.competition;
      });

      const hash:any = {};

      competitions = competitions.filter(function(current:any) {
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

    SAVE_CURRENT_TEAM(state:any, team:string) {
      state.currentTeam = team;
      console.log(state.currentTeam);
    },

    SAVE_CURRENT_COMPETITON(state:any, competition:string) {
      state.currentCompetition = competition;
    }
  },

  actions: {
    async saveMatchs({ commit } : any, matchs: Match[]) {
      commit("SAVE_MATCHES", matchs)
    },

    async saveCurrentTeam({ commit } : any, team: string) {
      commit("SAVE_CURRENT_TEAM", team)
    },

    async saveCurrentCompetition({ commit } : any, competition: string) {
      commit("SAVE_CURRENT_COMPETITION", competition)
    },
  },
  modules: {},
});
