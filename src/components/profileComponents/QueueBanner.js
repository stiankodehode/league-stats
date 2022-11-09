import {
    BannerContainer,
    FlexContainer,
    FlexColumn,
    LPHeading,
    RankedQueueHeading,
    WinLossHeading,
    WinrateHeading,
    HardstuckHeading,
    RankIcon,
    StyledHeading,
} from "./queueBanner/styled";

const QueueBanner = (props) => {
    const { data } = props;

    // Calculates your winrate percentage
    const winPercentage = () => {
        const allGames = data.wins + data.losses;
        const winPercentage = (data.wins / allGames) * 100;
        const roundedWinPercentage = Math.round(winPercentage);
        return roundedWinPercentage;
    };

    return (
        <BannerContainer>
            <StyledHeading>
                {data.queueType === "RANKED_SOLO_5x5" ? "Ranked Solo/Duo" : "Ranked Flex"}
            </StyledHeading>
            <FlexContainer>
                <RankIcon
                    src={`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/${data.tier.toLowerCase()}.png`}
                />
                <FlexColumn>
                    <RankedQueueHeading>
                        {`${data.tier.charAt(0).toUpperCase()}${data.tier
                            .slice(1)
                            .toLowerCase()} ${data.rank}`}
                    </RankedQueueHeading>
                    <LPHeading>{data.leaguePoints} LP</LPHeading>
                </FlexColumn>
                <FlexColumn>
                    <WinLossHeading>{`${data.wins}W ${data.losses}L`}</WinLossHeading>
                    <WinLossHeading>{`${winPercentage()}% Winrate`}</WinLossHeading>
                    <HardstuckHeading>{`${
                        data.veteran ? "(Hardstuck)" : "(Not Hardstuck)"
                    }`}</HardstuckHeading>
                </FlexColumn>
            </FlexContainer>
        </BannerContainer>
    );
};

export default QueueBanner;
