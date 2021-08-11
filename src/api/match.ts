import axios, { AxiosRequestConfig } from 'axios';
import {Match, MatchResponse} from '@/models/match';

export default {
  async getMatches(): Promise<Match[]> {
    try {
      const options: AxiosRequestConfig = { baseURL: "https://www.scorebat.com/video-api/v1/" };
      const matches = (await axios.request(options)).data.map((matchesResult: MatchResponse) => {
        return new Match(matchesResult);
      })
      return matches;
    } catch (e) {
      console.log(e)
      return [];
    }
  }
}