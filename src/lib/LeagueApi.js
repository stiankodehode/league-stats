import { GetSummonerData } from "./leagueApi/fetchFunctions";

class LeagueApi {
    constructor(key, summonerName) {
        this.apiKey = key;
        this.summonerData = GetSummonerData(key, summonerName);
    }
}

export default LeagueApi;
