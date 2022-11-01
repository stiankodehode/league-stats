import { filterMatchData, filterMatch } from "./match/filterFunctions";

import {
    MatchBox,
    MatchInfoBox,
    GameInfoBox,
    SummonerChampionImg,
    ChampionLevel,
    ChampionRunesKda,
    MatchInfoP,
    FlexRow,
    FlexColumn,
    SummonerSpellIcon,
    RuneIcon,
} from "./match/styled";

const Match = (props) => {
    const { matchData, currentSummoner } = props;
    const currentMatch = filterMatchData(currentSummoner, matchData);
    return (
        <MatchBox win={currentMatch.result === "WIN" ? true : false}>
            <MatchInfoBox>
                <MatchInfoP>{currentMatch.queue}</MatchInfoP>
                {/* <MatchInfoP>{currentMatch.map}</MatchInfoP> */}
                <MatchInfoP>{currentMatch.result}</MatchInfoP>
                <MatchInfoP>{currentMatch.matchDuration}</MatchInfoP>
            </MatchInfoBox>
            <GameInfoBox>
                <ChampionRunesKda>
                    <FlexRow>
                        <SummonerChampionImg
                            src={currentMatch.champion}
                        ></SummonerChampionImg>

                        <ChampionLevel>{currentMatch.level}</ChampionLevel>
                        <FlexColumn>
                            <SummonerSpellIcon
                                src={currentMatch.summonerSpells[0]}
                            ></SummonerSpellIcon>
                            <SummonerSpellIcon
                                src={currentMatch.summonerSpells[1]}
                            ></SummonerSpellIcon>
                        </FlexColumn>
                        <FlexColumn>
                            <RuneIcon src={currentMatch.runes[0]}></RuneIcon>
                            <RuneIcon src={currentMatch.runes[1]}></RuneIcon>
                        </FlexColumn>
                    </FlexRow>
                </ChampionRunesKda>
            </GameInfoBox>
        </MatchBox>
    );
};

export default Match;
