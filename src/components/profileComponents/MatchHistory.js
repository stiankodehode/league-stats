import Match from "./matchHistory/Match";
import RecentStats from "./matchHistory/RecentStats";
import { MatchHistoryContainer } from "./matchHistory/styled";

const MatchHistory = (props) => {
    const { recentMatchData, currentSummoner } = props;
    const mappedMatches = recentMatchData.map((match, idx) => (
        <Match
            key={idx}
            matchData={match.info}
            currentSummoner={currentSummoner}
        ></Match>
    ));
    return (
        <MatchHistoryContainer>
            <RecentStats />
            {mappedMatches[0]}
        </MatchHistoryContainer>
    );
};

export default MatchHistory;
