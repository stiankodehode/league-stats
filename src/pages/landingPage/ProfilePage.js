import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { SummonerContext } from "../../contextState/summonerContext";

import ProfileBanner from "../../components/profileComponents/ProfileBanner";

import { ProfilePageContainer } from "./profilePage/styled";

const ProfilePage = () => {
    const { summonerData, setSummonerData } = useContext(SummonerContext);
    const { summonerInfo } = summonerData;
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
            <></>
        </ProfilePageContainer>
    );
};

export default ProfilePage;
