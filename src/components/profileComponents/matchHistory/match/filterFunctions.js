import queues from "../json/queue.json";
import champions from "../json/champions.json";
import summonerSpells from "../json/summonerSpells.json";
import runes from "../json/runes.json";

export const filterMatchData = (currentSummoner, matchData) => {
    // Finds the type of queue
    const queueType = queues.find((element) => {
        return element.queueId === matchData.queueId;
    });

    // Calculates the match duration
    const matchDuration = `${~~(matchData.gameDuration / 60)}m ${
        matchData.gameDuration % 60
    }s`;

    // Filtered filters all participants to find the current summoner
    const currentSummonerData = matchData.participants.find((summoner) => {
        if (summoner.summonerName === currentSummoner) {
            return true;
        }
    });
    // Filters the champion json file to find played champion with ids/paths to imgs.
    const currentChampion = champions.find((champion) => {
        if (champion.id === currentSummonerData.championId) {
            return true;
        }
    });
    const currentChampionUrl = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${currentChampion.id}.png`;

    // Function that return the used summoner spells in correct order
    const usedSummonerSpells = () => {
        const spell1 = summonerSpells.find((spell) => {
            if (spell.id === currentSummonerData.summoner1Id) {
                return true;
            }
        });
        const spell2 = summonerSpells.find((spell) => {
            if (spell.id === currentSummonerData.summoner2Id) {
                return true;
            }
        });

        // Path names needs to be fixed cause communitydragon paths are not the same as the official riot tgz
        const pathName1 = spell1.iconPath.split("/").pop().toLowerCase();
        const pathName2 = spell2.iconPath.split("/").pop().toLocaleLowerCase();

        return [
            `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/data/spells/icons2d/${pathName1}`,
            `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/data/spells/icons2d/${pathName2}`,
        ];
    };

    // Finds the runes current summoner used

    const usedRunes = () => {
        console.log(currentSummonerData.perks);
        const rune1 = runes.styles.find((perk) => {
            if (currentSummonerData.perks.styles[0].style === perk.id) {
                return true;
            }
        });
        const rune2 = runes.styles.find((perk) => {
            if (currentSummonerData.perks.styles[1].style === perk.id) {
                return true;
            }
        });

        console.log(rune1);
        const pathName1 = rune1.iconPath.split("/").pop().toLowerCase();
        const pathName2 = rune2.iconPath.split("/").pop().toLocaleLowerCase();

        return [
            `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/${pathName1}`,
            `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/${pathName2}`,
        ];
    };

    // returns an object with desired keys and data.
    return {
        queue: queueType.description.split(" ").slice(0, 3).join(" "),
        map: queueType.map,
        result: currentSummonerData.win ? "WIN" : "LOSS",
        matchDuration: matchDuration,
        champion: currentChampionUrl,
        summonerSpells: usedSummonerSpells(),
        runes: usedRunes(),
        level: currentSummonerData.champLevel,
        kills: currentSummonerData.kills,
        assists: currentSummonerData.assists,
        deaths: currentSummonerData.deaths,
    };
};

export const filterMatch = (matchData) => {
    const queueType = queues.filter((element) => {
        return element.queueId === matchData.queueId;
    });

    return { queueType: queueType };
};
