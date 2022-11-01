import { GetRecentMatchesIds, GetSummonerDataByName } from "./apiCalls";
import axios from "axios";

class Summoner {
    // Constructor feeds in the info it has and can update each individual part when the according function is called.
    constructor(
        apiKey,
        summonerName,
        summonerInfo,
        rankInfo,
        recentMatchIds,
        recentMatchData
    ) {
        this.apiKey = apiKey;
        this.summonerName = summonerName;
        this.summonerInfo = summonerInfo;
        this.rankInfo = rankInfo;
        this.recentMatchIds = recentMatchIds;
        this.recentMatchData = recentMatchData;
    }
    // Updates the info on summoners (Name, ID, PUUID, Level...)
    async updateSummonerInfo(name) {
        const promise = await axios
            .get(
                `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${this.apiKey}`
            )
            .then((res) => res.data);
        this.summonerName = promise.name;
        this.summonerInfo = promise;
    }
    async updateRankInfo() {
        const promise = await axios
            .get(
                `https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${this.summonerInfo.id}?api_key=${this.apiKey}`
            )
            .then((res) => res.data);
        this.rankInfo = promise;
    }

    // Updates the IDs for the recent matches you have played, currently not queue specific. (summonerInfo is required)
    async updateMatchIds() {
        if (this.summonerInfo === undefined) {
            return;
        } else {
            const promise = await axios
                .get(
                    `https://EUROPE.api.riotgames.com/lol/match/v5/matches/by-puuid/${this.summonerInfo.puuid}/ids?start=0&count=10&api_key=${this.apiKey}`
                )
                .then((res) => res.data);
            this.recentMatchIds = promise;
        }
    }
    // Gathers info from the last match the summoner played(Currently only the last during testing, recentMatchIds is required)
    async updateMatchData() {
        if (this.recentMatchIds === undefined) {
            return;
        } else {
            const allPromises = await this.recentMatchIds.map((match) => {
                return `https://EUROPE.api.riotgames.com/lol/match/v5/matches/${match}?api_key=${this.apiKey}`;
            });

            const allMatches = Promise.all(
                allPromises.map((promise) => axios.get(promise))
            ).then(
                axios.spread((...allData) => {
                    return allData;
                })
            );
            const allMatchesFulfilled = await allMatches;
            const mappedMatches = allMatchesFulfilled.map(
                (match) => match.data
            );
            this.recentMatchData = mappedMatches;
        }
    }
}

export default Summoner;
