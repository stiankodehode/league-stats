import { filterMatchData, filterMatch } from "./match/filterFunctions";

import {
    MatchBox,
    MatchInfoBox,
    SummonerChampionImg,
    SummonerSpellIcon,
    ChampionLevel,
    MatchInfo,
    PlayersBox,
    FlexRow,
    RuneIcon,
    RuneBox,
    SummonersBox,
    KDABox,
    KDA,
    ItemsBox,
    RelativePosition,
    FlexSpaceBetween,
} from "./match/styled";

const Match = (props) => {
    const { matchData, currentSummoner } = props;
    const currentMatch = filterMatchData(currentSummoner, matchData);
    return (
        <MatchBox win={currentMatch.result === "WIN" ? true : false}>
            <MatchInfoBox>
                <MatchInfo>{currentMatch.queue}</MatchInfo>
                {/* <MatchInfo>{currentMatch.map}</MatchInfo> */}
                <MatchInfo>{currentMatch.result}</MatchInfo>
                <MatchInfo>{currentMatch.matchDuration}</MatchInfo>
                <MatchInfo>{currentMatch.date}</MatchInfo>
            </MatchInfoBox>
            <FlexSpaceBetween>
                <FlexRow>
                    <RelativePosition>
                        <SummonerChampionImg
                            src={currentMatch.champion}
                        ></SummonerChampionImg>

                        <ChampionLevel>{currentMatch.level}</ChampionLevel>
                    </RelativePosition>
                    <SummonersBox>
                        <SummonerSpellIcon
                            src={currentMatch.summonerSpells[0]}
                        ></SummonerSpellIcon>
                        <SummonerSpellIcon
                            src={currentMatch.summonerSpells[1]}
                        ></SummonerSpellIcon>
                    </SummonersBox>
                    <RuneBox>
                        <RuneIcon src={currentMatch.runes.primary}></RuneIcon>
                        <RuneIcon src={currentMatch.runes.secondary}></RuneIcon>
                    </RuneBox>
                </FlexRow>
                <KDABox>
                    <KDA>{`${currentMatch.kills} / ${currentMatch.deaths} / ${currentMatch.assists}`}</KDA>
                    <KDA>{currentMatch.kda} KDA</KDA>
                    <KDA>{`${currentMatch.cs} (${currentMatch.csEachMinute})`}</KDA>
                    <KDA>{`Vision: ${currentMatch.visionScore}`}</KDA>
                </KDABox>
                <ItemsBox>{currentMatch.items}</ItemsBox>
                <PlayersBox>{currentMatch.allPlayers}</PlayersBox>
            </FlexSpaceBetween>
        </MatchBox>
    );
};

export default Match;
