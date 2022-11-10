import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { SummonerContext } from "../../contextState/summonerContext";

import ProfileBanner from "../../components/profileComponents/ProfileBanner";

import { ProfilePageContainer, RankedStats, PageWrapper } from "./profilePage/styled";
import RankedBanner from "../../components/profileComponents/RankedBanner";
import MatchHistory from "../../components/profileComponents/MatchHistory";

const ProfilePage = () => {
    const { summonerData, setSummonerData } = useContext(SummonerContext);
    const { summonerInfo, recentMatchData } = summonerData;
    const navigate = useNavigate();
    useEffect(() => {
        if (summonerInfo === undefined) {
            navigate("/");
        }
    }, []);

    if (!summonerInfo) {
        return <h1>error</h1>;
    }
    return (
        <ProfilePageContainer>
            <ProfileBanner summonerInfo={summonerInfo} />
            <RankedBanner data={summonerData.rankInfo[1]} />
            <RankedBanner data={summonerData.rankInfo[0]} />
            <MatchHistory
                recentMatchData={recentMatchData}
                currentSummoner={summonerData}
            />
        </ProfilePageContainer>
    );
};

export default ProfilePage;
