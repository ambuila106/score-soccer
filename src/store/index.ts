import { createStore } from "vuex";
import { Match } from "@/models/match";

export default createStore({
  state: {
    matchs: [],
    matchsRandoms: [],
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
      if (state.matchsRandoms.length == 0 ) {
        state.matchsRandoms = state.matchs.sort(() => Math.random() - Math.random()).slice(0, 5);
      }
      return state.matchsRandoms;
    },

    getCompetitions(state: any) {
      return state.competitions;
    },

    getTeams(state: any) {
      return state.teams;
    },

    getMatchesByCompetition(state: any) {
      const competition = state.currentCompetition;
      console.log("getMatchesByCompetition", competition)

      const matchesCompetiton = state.matchs.filter((match: Match) => {
        if (match.competition.name == competition) {
          console.log("match competition name", match.competition.name )
          return true
        }
      });

      return matchesCompetiton;
    },

    getMatchesByTeam(state: any) {
      const team = state.currentTeam;
      console.log("team", team)

      const matchesTeam = state.matchs.filter((match: Match) => {
        if (match.team1.name == team || match.team2.name == team) {
          return true
        }
      });

      console.log("matchesTeam", matchesTeam);

      return matchesTeam;
    },

    getMatchesFiltered(state: any, getters: any) {
      console.log("getters current team", state.currentTeam);
      return state.currentTeam
      ? getters.getMatchesByTeam
      : state.currentCompetition
      ? getters.getMatchesByCompetition
      : getters.getRandomMatchs
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

    SAVE_CURRENT_TEAM(state:any, {team, getters} : any) {
      state.currentTeam = team;
      if(team.value) {
        state.currentCompetition = "";
        console.log("team has value",team.value);
        getters.getMatchesFiltered
      }
    },

    SAVE_CURRENT_COMPETITION(state:any, {competition, getters} : any) {
      state.currentCompetition = competition;
      console.log(competition.value);

      if(competition.value) {
        state.currentTeam = "";
        console.log("competition has value", competition.value);
        getters.getMatchesFiltered
      }
    },

    CLEAR_FILTER(state:any) {
      state.currentTeam = "";
      state.currentCompetition = "";
    }
  },

  actions: {
    async saveMatchs({ commit } : any, matchs: Match[]) {
      commit("SAVE_MATCHES", matchs)
    },

    async saveCurrentTeam({ commit, getters } : any, team: string) {
      commit("SAVE_CURRENT_TEAM", {team, getters})
    },

    async saveCurrentCompetition({ commit, getters } : any, competition: string) {
      commit("SAVE_CURRENT_COMPETITION", {competition, getters})
    },

    async clearFilter({ commit } : any) {
      commit("CLEAR_FILTER")
    }
  },
  modules: {},
});
