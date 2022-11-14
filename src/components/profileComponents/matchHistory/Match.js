import { filterMatchData } from "./match/filterFunctions";

import {
    MatchBox,
    ItemIconBlank,
    ItemIcon,
    MatchInfo,
    FlexRow,
    ResultSpan,
    QueueSpan,
    DateSpan,
    FlexColumn,
    ChampionIcon,
    ChampionIconBox,
    ChampionLevel,
    SummonerSpellIcon,
    RuneIcon,
    RuneBox,
    MatchDetails,
    KDAText,
} from "./match/styled";

const Match = (props) => {
    const { matchData, currentSummoner } = props;
    const currentMatch = filterMatchData(currentSummoner, matchData);

    const mappedItems = currentMatch.items.map((usedItem, idx) => {
        if (usedItem.id === 0) {
            return <ItemIconBlank key={idx} index={idx}></ItemIconBlank>;
        }
        const item = usedItem.iconPath.split("/");
        item.shift();
        item.shift();
        item.shift();
        const joinedPath = item.join("/");
        const url = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/${joinedPath.toLowerCase()}`;
        return <ItemIcon key={idx} src={url} index={idx}></ItemIcon>;
    });

    return (
        <MatchBox win={currentMatch.result === "WIN" ? true : false}>
            <MatchInfo>
                <ResultSpan>{currentMatch.result}</ResultSpan>

                <FlexRow>
                    <QueueSpan>{currentMatch.queue}</QueueSpan>
                    <DateSpan>{currentMatch.date}</DateSpan>
                </FlexRow>
            </MatchInfo>

            <MatchDetails>
                <FlexRow>
                    <ChampionIconBox>
                        <ChampionIcon src={currentMatch.champion}></ChampionIcon>
                        <ChampionLevel>{currentMatch.level}</ChampionLevel>
                    </ChampionIconBox>

                    <FlexColumn>
                        <SummonerSpellIcon
                            src={currentMatch.summonerSpells[0]}
                        ></SummonerSpellIcon>
                        <SummonerSpellIcon
                            src={currentMatch.summonerSpells[1]}
                        ></SummonerSpellIcon>
                    </FlexColumn>

                    <FlexColumn>
                        <RuneBox>
                            <RuneIcon src={currentMatch.runes.primary} />
                        </RuneBox>
                        <RuneBox>
                            <RuneIcon src={currentMatch.runes.secondary} />
                        </RuneBox>
                    </FlexColumn>
                </FlexRow>
                <FlexColumn>
                    <FlexRow>{mappedItems}</FlexRow>
                    <FlexRow>
                        <KDAText>
                            {currentMatch.kills} / {currentMatch.deaths} /{" "}
                            {currentMatch.assists}
                        </KDAText>
                        <KDAText>{currentMatch.kda} KDA</KDAText>
                        <KDAText>
                            {currentMatch.cs}({currentMatch.csEachMinute}) CS
                        </KDAText>
                    </FlexRow>
                </FlexColumn>
            </MatchDetails>
        </MatchBox>
    );
};

export default Match;
