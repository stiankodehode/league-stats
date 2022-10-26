import axios from "axios";

export const GetSummonerData = (apiKey, summonerName) => {
    const promise = axios.get(
        `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${apiKey}`
    );
    const summonerData = promise.then((res) => res.data);
};
