import queues from "../json/queue.json";
import champions from "../json/champions.json";
import summonerSpells from "../json/summonerSpells.json";
import runes from "../json/runes.json";
import runeTypes from "../json/runeTypes.json";
import items from "../json/items.json";
import {
    ItemIcon,
    ItemIconBlank,
    ParticipantIcon,
    ParticipantsContainer,
    PlayerName,
} from "./styled";
import {
    ChampionIcon,
    ContentContainer,
    RecentChampionContainer,
    RoleGradient,
    RoleName,
    StyledH4,
} from "../recentStats/styled";

// Filters the match data and returns an object with the desired info.
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
            if (currentSummonerData.perks.styles[0].selections[0].perk === rune.id) {
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
    const itemsArray = [
        currentSummonerData.item0,
        currentSummonerData.item1,
        currentSummonerData.item2,
        currentSummonerData.item3,
        currentSummonerData.item4,
        currentSummonerData.item5,
        currentSummonerData.item6,
    ];
    // Maps the items to give them info from a JSON file
    const itemInfoArray = itemsArray.map((usedItem) => {
        const itemInfo = items.find((item) => {
            if (item.id === usedItem) {
                return true;
            }
        });
        return itemInfo;
    });
    // Sorts the items array to start with the Mythic Item
    const sortedItemsArray = itemInfoArray.sort((a, b) => {
        return a.description.includes("rarityMythic") ? -1 : 1;
    });
    // Maps the array and returns components ready for rendering

    const allPlayers = matchData.participants.map((player, idx) => {
        const champion = champions.find((champion) => {
            if (champion.id === player.championId) {
                return true;
            }
        });

        const championPortrait = champion.squarePortraitPath.split("/");
        championPortrait.shift();
        championPortrait.shift();
        championPortrait.shift();
        const joinedPath = championPortrait.join("/");
        const url = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/${joinedPath.toLowerCase()}`;
        return (
            <ParticipantsContainer key={idx}>
                <ParticipantIcon src={url}></ParticipantIcon>
                <PlayerName>
                    {player.summonerName.length > 12
                        ? player.summonerName.substring(0, 8) + "..."
                        : player.summonerName}
                </PlayerName>
            </ParticipantsContainer>
        );
    });

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
        items: sortedItemsArray,
        allPlayers: allPlayers,
    };
};

// This function filters all the data from the matches array and returns an object with stats from all games

export const filterStats = (matchArray, currentSummoner) => {
    const currentSummonerGames = matchArray.map((match) => {
        const currentSummonerData = match.info.participants.find((participant) => {
            return participant.summonerName === currentSummoner ? true : false;
        });
        return currentSummonerData;
    });

    const data = () => {
        let object = {
            kills: 0,
            deaths: 0,
            assists: 0,
            roles: { top: 0, jungle: 0, mid: 0, bot: 0, support: 0 },
            results: { wins: 0, losses: 0 },
            championsPlayed: {},
        };
        currentSummonerGames.forEach((game, index) => {
            // Adds Kills/Deaths/Assists to object
            object.kills += game.kills;
            object.deaths += game.deaths;
            object.assists += game.assists;

            // Switch checks which role you played
            switch (game.teamPosition) {
                case "TOP":
                    object.roles.top++;
                    break;
                case "JUNGLE":
                    object.roles.jungle++;
                    break;
                case "MIDDLE":
                    object.roles.mid++;
                    break;
                case "BOTTOM":
                    object.roles.bot++;
                    break;
                case "UTILITY":
                    object.roles.support++;
                    break;
            }

            // Checks for a win or loss
            game.win === true ? object.results.wins++ : object.results.losses++;

            // Adds your KDA and Games played on specific champions
            if (game.championName in object.championsPlayed) {
                if (game.win) {
                    object.championsPlayed[game.championName].wins++;
                }
                object.championsPlayed[game.championName].kills += game.kills;
                object.championsPlayed[game.championName].deaths += game.deaths;
                object.championsPlayed[game.championName].assists += game.assists;
                object.championsPlayed[game.championName].games++;
                object.championsPlayed[game.championName].kda =
                    // This recalculates the KDA each time a new game is added
                    (
                        (object.championsPlayed[game.championName].kills +
                            object.championsPlayed[game.championName].assists) /
                        object.championsPlayed[game.championName].deaths
                    ).toFixed(2);
            } else {
                object.championsPlayed = {
                    ...object.championsPlayed,
                    [game.championName]: {
                        kills: game.kills,
                        deaths: game.deaths,
                        assists: game.assists,
                        games: 1,
                        wins: game.win ? 1 : 0,
                        id: game.championId,
                        kda: ((game.kills + game.assists) / game.deaths).toFixed(2),
                    },
                };
            }
        });

        // This function returns mapped champions played.
        const championsPlayed = () => {
            // Turning the champions played objet into an array so i can run .map on it
            const championsPlayedArray = Object.keys(object.championsPlayed).map(
                (key) => {
                    const champion = key;
                    const statsObject = object.championsPlayed[key];
                    return { ...statsObject };
                }
            );
            // Sorts champions by games played, if same amount, sort by KDA.
            const sortedChampionsPlayed = championsPlayedArray.sort((a, b) => {
                if (a.games === b.games) {
                    return b.kda - a.kda;
                }
                return b.games - a.games;
            });

            return sortedChampionsPlayed.slice(0, 3);
        };
        // Turning the roles object into an array so i can run .map on it.
        const rolesPlayed = () => {
            const rolesArray = Object.keys(object.roles).map((key) => {
                const role = key.charAt(0).toUpperCase() + key.slice(1);

                const shortenedRole = () => {
                    switch (role) {
                        case "Jungle":
                            return "JNG";
                        case "Support":
                            return "SUP";
                        default:
                            return role.toUpperCase();
                    }
                };

                return { role: shortenedRole(), games: object.roles[key] };
            });
            return rolesArray;
        };

        // Making some final changes to the object.

        object.championsPlayed = championsPlayed();
        object.roles = rolesPlayed();
        object.kda = ((object.kills + object.assists) / object.deaths).toFixed(2);
        object.results = {
            ...object.results,
            winrate:
                (object.results.wins / (object.results.wins + object.results.losses)) *
                100,
            games: object.results.wins + object.results.losses,
        };
        object.averageKills = object.kills / object.results.games;
        object.averageDeaths = object.deaths / object.results.games;
        object.averageAssists = object.assists / object.results.games;

        return object;
    };
    return data();
};
