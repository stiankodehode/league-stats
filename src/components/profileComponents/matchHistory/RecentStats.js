import { filterStats } from "./match/filterFunctions";
import {
    RecentChampions,
    RecentKDA,
    RecentRoles,
    RecentStatsContainer,
    RecentWins,
    WinLossGradient,
} from "./recentStats/styled";

const RecentStats = (props) => {
    const { recentMatchData, currentSummoner } = props;
    const statsData = filterStats(recentMatchData, currentSummoner);

    /* <ContentContainer>
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
    <RolesContainer>{statsData.roles}</RolesContainer> */

    return (
        <RecentStatsContainer>
            <RecentWins>
                <span>{statsData.results.wins} Wins</span>
                <span>{statsData.results.losses} Losses</span>
                <WinLossGradient winrate={statsData.results.winrate} />
            </RecentWins>
            <RecentKDA>
                <span>{statsData.kda} KDA</span>
                <span>
                    {`${statsData.averageKills} / ${statsData.averageDeaths} / ${statsData.averageAssists}`}{" "}
                </span>
            </RecentKDA>
            <RecentChampions>{statsData.championsPlayed}</RecentChampions>
            <RecentRoles>{statsData.roles}</RecentRoles>
        </RecentStatsContainer>
    );
};

export default RecentStats;
