import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { SummonerContext } from "../../contextState/summonerContext";

import ProfileBanner from "../../components/profileComponents/ProfileBanner";

import {
    ProfilePageContainer,
    RankedStats,
    PageWrapper,
} from "./profilePage/styled";
import QueueBanner from "../../components/profileComponents/QueueBanner";
import MatchHistory from "../../components/profileComponents/MatchHistory";

const ProfilePage = () => {
    const { summonerData, setSummonerData } = useContext(SummonerContext);
    const { summonerInfo } = summonerData;
    console.log(summonerData);

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
            <PageWrapper>
                <RankedStats>
                    <QueueBanner data={summonerData.rankInfo[1]} />
                    <QueueBanner data={summonerData.rankInfo[0]} />
                </RankedStats>
                <MatchHistory />
            </PageWrapper>
        </ProfilePageContainer>
    );
};

export default ProfilePage;
