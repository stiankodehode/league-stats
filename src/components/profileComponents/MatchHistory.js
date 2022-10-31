import RecentStats from "./matchHistory/RecentStats";
import { MatchHistoryContainer } from "./matchHistory/styled";

const MatchHistory = (props) => {
    return (
        <MatchHistoryContainer>
            <RecentStats />
        </MatchHistoryContainer>
    );
};

export default MatchHistory;
