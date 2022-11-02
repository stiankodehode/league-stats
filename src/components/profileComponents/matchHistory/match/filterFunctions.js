import queues from "../json/queue.json";
import champions from "../json/champions.json";
import summonerSpells from "../json/summonerSpells.json";
import runes from "../json/runes.json";
import runeTypes from "../json/runeTypes.json";

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
        const fileName1 = spell1.iconPath.split("/").pop().toLowerCase();
        const fileName2 = spell2.iconPath.split("/").pop().toLocaleLowerCase();

        return [
            `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/data/spells/icons2d/${fileName1}`,
            `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/data/spells/icons2d/${fileName2}`,
        ];
    };

    // Finds the runes current summoner used

    const usedRunes = () => {
        // Keystone used
        const primaryRune = runes.find((rune) => {
            if (
                currentSummonerData.perks.styles[0].selections[0].perk ===
                rune.id
            ) {
                return rune;
            }
        });
        // Secondary rune tree used
        const secondaryRune = runeTypes.styles.find((rune) => {
            if (currentSummonerData.perks.styles[1].style === rune.id) {
                return rune;
            }
        });
        // filepath for the Keystone rune
        const filePath1 = () => {
            const rune = primaryRune.iconPath.split("/");
            rune.shift();
            rune.shift();
            rune.shift();
            const joinedPath = rune.join("/");
            return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/${joinedPath.toLowerCase()}`;
        };
        // filepath for secondary rune tree
        const filePath2 = () => {
            const rune = secondaryRune.iconPath.split("/");
            rune.shift();
            rune.shift();
            rune.shift();
            const joinedPath = rune.join("/");
            return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/${joinedPath.toLowerCase()}`;
        };
        // returns the file paths
        return { primary: filePath1(), secondary: filePath2() };
    };
    // Math for KDA,
    const kda =
        (currentSummonerData.kills + currentSummonerData.assists) /
        currentSummonerData.deaths;
    // Math for cs/minute
    const csEachMinute = (
        (currentSummonerData.totalMinionsKilled / matchData.gameDuration) *
        60
    ).toFixed(1);
    // the date the current match was played on.
    const gameStart = new Date(matchData.gameStartTimestamp);
    const startDate = () => {
        const date = ` ${gameStart.getUTCDate()}.${
            gameStart.getUTCMonth() + 1
        }.${gameStart.getUTCFullYear()}`;
        return date;
    };

    // Items used
    

    // returns an object with desired keys and data.
    return {
        queue: queueType.description.split(" ").slice(0, 3).join(" "),
        map: queueType.map,
        result: currentSummonerData.win ? "WIN" : "LOSS",
        matchDuration: matchDuration,
        date: startDate(),
        champion: currentChampionUrl,
        summonerSpells: usedSummonerSpells(),
        runes: usedRunes(),
        level: currentSummonerData.champLevel,
        kills: currentSummonerData.kills,
        assists: currentSummonerData.assists,
        deaths: currentSummonerData.deaths,
        kda: kda.toFixed(2),
        cs: currentSummonerData.totalMinionsKilled,
        csEachMinute: csEachMinute,
        visionScore: currentSummonerData.visionScore,
    };
};

export const filterMatch = (matchData) => {
    const queueType = queues.filter((element) => {
        return element.queueId === matchData.queueId;
    });

    return { queueType: queueType };
};
