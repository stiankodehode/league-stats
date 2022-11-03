import styled from "styled-components";

export const MatchInfoP = styled.p`
    margin: 0;
    font-size: 12px;
`;

export const KDA = styled.h4`
    font-size: 14px;
`;

export const PlayerParagraph = styled.p`
    margin: 0;
    margin: 2px 5px;
    font-size: 10px;
`;

export const MatchBox = styled.div`
    margin: 5px 0;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    background-color: ${(props) => (props.win ? "#5383E880" : "#E8405780")};
`;
export const RelativePosition = styled.div`
    position: relative;
`;
export const MatchInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    min-width: 80px;
`;
export const FlexRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const FlexSpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
`;

export const SummonersBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
`;

export const RuneBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    border-radius: 3px;
    margin-left: 2px;
    background-color: #00000020;
`;

export const KDABox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    min-width: 60px;
`;

export const ItemsBox = styled.div`
    min-width: 125px;
    height: 60px;
    gap: 2px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
`;

export const PlayersBox = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 85px;
    min-width: 150px;
`;

export const ParticipantsContainer = styled.div`
    display: flex;
    align-items: center;
    width: 75px;
`;

export const ChampionRunesKda = styled.div`
    position: relative;
`;

export const SummonerChampionImg = styled.img`
    width: 50px;
    border-radius: 50%;
    margin-right: 5px;
`;

export const SummonerSpellIcon = styled.img`
    width: 25px;
    border-radius: 3px;
`;

export const RuneIcon = styled.img`
    width: 25px;
    border-radius: 3px;
`;
export const ItemIcon = styled.img`
    width: 25px;
    border-radius: 3px;
    margin: 1px;
    outline: 2px solid #00000080;
    ${(props) => (props.index === 6 ? "margin-top: 15%; margin-left: 3px;" : null)}
`;
export const ItemIconBlank = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 3px;
    margin: 1px;
    outline: 2px solid #00000080;
    background-color: #00000020;
`;

export const ParticipantIcon = styled.img`
    width: 12px;
`;

export const ChampionLevel = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 70%;
    left: 65%;
    color: black;
    font-weight: 700;
    font-size: 12px;
    border-radius: 50%;
    background-color: white;
    width: 16px;
    height: 16px;
`;
