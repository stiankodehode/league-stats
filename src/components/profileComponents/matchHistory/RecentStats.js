import { filterStats } from "./match/filterFunctions";
import {
    RecentChampions,
    RecentKDA,
    RecentRoles,
    RecentStatsContainer,
    RecentWins,
    WinLossGradient,
    RoleGradient,
    ChampionIcon,
    RecentChampionContainer,
    RoleContainer,
    RoleName,
    RoleCount,
    KDAText,
    ChampionKDAText,
} from "./recentStats/styled";

const RecentStats = (props) => {
    const { recentMatchData, currentSummoner } = props;
    const statsData = filterStats(recentMatchData, currentSummoner);

    const mappedRoles = statsData.roles.map((role, idx) => {
        const percentage =
            (role.games / (statsData.results.wins + statsData.results.losses)) * 100;
        return (
            <RoleContainer key={idx}>
                <RoleName>{role.role}</RoleName>
                <RoleCount>({role.games})</RoleCount>
                <RoleGradient percentage={percentage} />
            </RoleContainer>
        );
    });

    const mappedChampions = statsData.championsPlayed.map((champion, idx) => {
        const url = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${champion.id}.png`;
        return (
            <RecentChampionContainer key={idx}>
                <ChampionIcon src={url} />
                <ChampionKDAText>{`${champion.wins}W ${
                    champion.games - champion.wins
                }L`}</ChampionKDAText>
                <ChampionKDAText>{champion.kda} KDA</ChampionKDAText>
            </RecentChampionContainer>
        );
    });

    return (
        <RecentStatsContainer>
            <RecentWins>
                <span>
                    {statsData.results.wins} Wins / {statsData.results.losses} Losses
                </span>

                <WinLossGradient winrate={statsData.results.winrate} />
            </RecentWins>
            <RecentKDA>
                <KDAText>{statsData.kda} KDA</KDAText>
                <KDAText>
                    {`${statsData.averageKills} / ${statsData.averageDeaths} / ${statsData.averageAssists}`}{" "}
                </KDAText>
            </RecentKDA>
            <RecentChampions>{mappedChampions}</RecentChampions>
            <RecentRoles>{mappedRoles}</RecentRoles>
        </RecentStatsContainer>
    );
};

export default RecentStats;
