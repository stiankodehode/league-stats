import {
    BannerContainer,
    FlexColumn,
    GamesSpan,
    Hardstuck,
    LP,
    Rank,
    RankedIcon,
    RankedInfoContainer,
    RankedType,
    TierContainer,
} from "./rankedBanner/styled";

const QueueBanner = (props) => {
    const { data } = props;

    // Queuetype
    const queueType =
        data.queueType === "RANKED_SOLO_5x5" ? "Ranked Solo/Duo" : "Ranked Flex";

    // New string containing Rank and Division
    const tier = `${data.tier.charAt(0).toUpperCase()}${data.tier
        .slice(1)
        .toLowerCase()} ${data.rank}`;

    // Rank icon Url
    const rankIconUrl = `https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/${data.tier.toLowerCase()}.png`;

    // Calculates your winrate percentage
    const winPercentage = () => {
        const allGames = data.wins + data.losses;
        const winPercentage = (data.wins / allGames) * 100;
        const roundedWinPercentage = Math.round(winPercentage);
        return roundedWinPercentage;
    };

    return (
        <BannerContainer>
            <RankedType>{queueType}</RankedType>
            <TierContainer>
                <RankedIcon src={rankIconUrl} />
                <RankedInfoContainer>
                    <FlexColumn>
                        <Rank>{tier}</Rank>
                        <LP>{data.leaguePoints} LP</LP>
                    </FlexColumn>
                    <FlexColumn>
                        <GamesSpan>{`${data.wins}W ${data.losses}L`}</GamesSpan>
                        <GamesSpan>{`${winPercentage()}% Winrate`}</GamesSpan>
                        <Hardstuck>{`${
                            data.veteran ? "(Hardstuck)" : "(Not Hardstuck)"
                        }`}</Hardstuck>
                    </FlexColumn>
                </RankedInfoContainer>
            </TierContainer>
        </BannerContainer>
    );
};

export default QueueBanner;
