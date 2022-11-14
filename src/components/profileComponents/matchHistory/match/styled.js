import styled from "styled-components";

// TYPOGRAPHY

export const ResultSpan = styled.span`
    font-weight: 700;
`;
export const QueueSpan = styled.span`
    font-weight: 400;
`;
export const DateSpan = styled.span`
    font-weight: 300;
    opacity: 0.8;
    font-size: 0.75rem;
`;

export const ChampionLevel = styled.span`
    position: absolute;
    left: 70%;
    bottom: -2px;
    border-top-left-radius: 25%;
    background-color: #0a0245;
    padding: 2px;
    border: none;
    color: white;
    font-size: 0.6rem;
    font-weight: 700;
`;

export const KDAText = styled.span`
    font-size: 0.8rem;
    margin-left: 0.25rem;
`;

// CONTAINERS
export const MatchBox = styled.div`
    margin: 5px 0;
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 5px;
    background-color: ${(props) => (props.win ? "#5383E880" : "#E8405780")};
`;

export const MatchDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const MatchInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
`;

export const FlexRow = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
`;
export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-end;
`;

export const ChampionIconBox = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 10px;
    outline: 3px solid black;
`;

export const RuneBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1px;
    border-radius: 20%;
    background-color: #00000020;
`;

export const ItemsBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: center;
`;

// IMG

export const ChampionIcon = styled.img`
    width: 55px;
`;

export const SummonerSpellIcon = styled.img`
    width: 20px;
    border-radius: 3px;
`;

export const RuneIcon = styled.img`
    width: 18px;
    border-radius: 3px;
`;

export const ItemIcon = styled.img`
    width: 20px;
    border-radius: 3px;
    outline: 2px solid #00000080;
`;
export const ItemIconBlank = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 3px;
    margin: 1px;
    outline: 2px solid #00000080;
    background-color: #00000020;
`;
// export const MatchInfo = styled.span`
//     margin: 0;
//     font-size: 12px;
// `;

export const KDA = styled.span`
    font-size: 14px;
`;

export const PlayerName = styled.span`
    margin: 0;
    margin: 2px 5px;
    font-size: 10px;
    min-width: fit-content;
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

export const KDABox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    min-width: 60px;
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

export const ParticipantIcon = styled.img`
    width: 15px;
    border-radius: 5px;
`;
