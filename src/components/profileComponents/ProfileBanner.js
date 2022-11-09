import {
    ProfileBannerBox,
    ProfileIcon,
    ProfileIconContainer,
    ProfileLevel,
    ProfileInfo,
    ProfileName,
    UpdateButton,
} from "./profileBanner/styled";

const ProfileBanner = (props) => {
    const { summonerInfo } = props;
    return (
        <ProfileBannerBox>
            <ProfileIconContainer>
                <ProfileIcon
                    src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${summonerInfo.profileIconId}.jpg`}
                ></ProfileIcon>
                <ProfileLevel>{summonerInfo.summonerLevel}</ProfileLevel>
            </ProfileIconContainer>
            <ProfileInfo>
                <ProfileName>{summonerInfo.name}</ProfileName>
                <UpdateButton>Update!</UpdateButton>
            </ProfileInfo>
        </ProfileBannerBox>
    );
};

export default ProfileBanner;
