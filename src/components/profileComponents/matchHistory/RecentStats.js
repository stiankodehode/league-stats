import { filterStats } from "./match/filterFunctions";
import {
    ChampionsContainer,
    ContentContainer,
    FlexRow,
    KDAContainer,
    RecentStatsContainer,
    StyledH3,
    StyledH4,
    WinLossContainer,
    WinLossGradient,
} from "./recentStats/styled";

const RecentStats = (props) => {
    const { recentMatchData, currentSummoner } = props;
    const statsData = filterStats(recentMatchData, currentSummoner);

    return (
        <RecentStatsContainer>
            <ContentContainer>
                <FlexRow>
                    <StyledH4>{statsData.results.wins} Wins</StyledH4>
                    <StyledH4>{statsData.results.losses} Losses</StyledH4>
                </FlexRow>
                <WinLossGradient winrate={statsData.results.winrate} />
            </ContentContainer>
            <ContentContainer>
                <StyledH3>{statsData.kda} KDA</StyledH3>
                <StyledH3>{`${statsData.averageKills} / ${statsData.averageDeaths} / ${statsData.averageAssists}`}</StyledH3>
            </ContentContainer>
            <ChampionsContainer>{statsData.championsPlayed}</ChampionsContainer>
            <ChampionsContainer>{statsData.roles}</ChampionsContainer>
        </RecentStatsContainer>
    );
};

export default RecentStats;
