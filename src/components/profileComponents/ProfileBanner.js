import {
    ProfileBannerBox,
    ProfileInfo,
    SummonerLevel,
    FlexColumn,
    SummonerName,
    UpdateButton,
    ProfileIcon,
} from "./profileBanner/styled";

const ProfileBanner = (props) => {
    const { summonerInfo } = props;
    return (
        <ProfileBannerBox>
            <ProfileInfo>
                <ProfileIcon
                    src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${summonerInfo.profileIconId}.jpg`}
                ></ProfileIcon>
                <SummonerLevel>{summonerInfo.summonerLevel}</SummonerLevel>
                <FlexColumn>
                    <SummonerName>{summonerInfo.name}</SummonerName>
                    <UpdateButton>Update!</UpdateButton>
                </FlexColumn>
            </ProfileInfo>
        </ProfileBannerBox>
    );
};

export default ProfileBanner;
