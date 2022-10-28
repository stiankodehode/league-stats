import axios from "axios";

export const GetSummonerDataByName = async (apiKey, summonerName) => {
    const promise = await axios
        .get(
            `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${apiKey}`
        )
        .then((res) => res.data);
    return promise;
};

export const GetMatchData = (apiKey, summonerPUUID) => {
    const promise = axios
        .get(
            `https://EUROPE.api.riotgames.com/lol/match/v5/matches/by-puuid/${summonerPUUID}/ids?api_key=${apiKey}`
        )
        .then((res) =>
            axios
                .get(
                    `https://EUROPE.api.riotgames.com/lol/match/v5/matches/${res.data[0]}?api_key=${apiKey}`
                )
                .then((res) => res.data)
        );
    const data = promise.then((response) => response);
    return data;
};

export const GetRecentMatchesIds = async (apiKey, summonerPUUID) => {
    const promise = await axios
        .get(
            `https://EUROPE.api.riotgames.com/lol/match/v5/matches/by-puuid/${summonerPUUID}/ids?api_key=${apiKey}`
        )
        .then((res) => res.data);
    return promise;
};
