import { filterStats } from "./match/filterFunctions";

const RecentStats = (props) => {
    const { recentMatchData, currentSummoner } = props;
    const statsData = filterStats(recentMatchData, currentSummoner);
    return <h1>recent stats</h1>;
};

export default RecentStats;
