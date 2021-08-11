export interface TeamResponse {
  name: string;
  url: string;
}

export interface CompetitionResponse {
  id: number;
  name: string;
  url: string;
}

export interface VideoResponse {
  title: string;
  embed: string;
}

export interface MatchResponse {
  title: string;
  embed: string;
  thumbnail: string;
  date: string;
  side1: TeamResponse;
  side2: TeamResponse;
  competition: CompetitionResponse;
  videos: VideoResponse[];
}

export class Team {
  name: string;
  url: string;

  constructor(team: TeamResponse) {
    this.name = team.name;
    this.url = team.url;
  }
}

export class Competition {
  id: number;
  name: string;
  url: string;

  constructor(competition: CompetitionResponse) {
    this.id = competition.id;
    this.name = competition.name;
    this.url = competition.url;
  }
}

export class Video {
  title: string;
  embed: string;

  constructor(video: VideoResponse) {
    this.title = video.title;
    this.embed = video.embed;
  }
}

export class Match {
  title: string;
  embed: string;
  thumbnail: string;
  date: string;
  team1: Team;
  team2: Team;
  competition: Competition;
  videos: Video[] = [];

  constructor(match: MatchResponse) {
    this.title = match.title;
    this.embed = match.embed;
    this.thumbnail = match.thumbnail;
    this.date = match.date;
    this.team1 = new Team(match.side1);
    this.team2 = new Team(match.side2);
    this.competition = new Competition(match.competition);
    if (match.videos) {
      this.videos = match.videos?.map((video) => {
        return new Video(video);
      })
    }
  }
}

export default Math;