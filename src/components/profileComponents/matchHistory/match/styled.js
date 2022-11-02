import styled from "styled-components";

export const MatchInfoP = styled.p`
    margin: 0;
    font-size: 12px;
`;

export const KDA = styled.h4`
    font-size: 14px;
`;

export const MatchBox = styled.div`
    margin: 5px 0;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    background-color: ${(props) => (props.win ? "#5383E880" : "#E8405780")};
`;

export const MatchInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 25px;
    width: 80px;
`;

export const GameInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FlexRow = styled.div`
    display: flex;
    align-items: center;
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
    margin-left: 10px;
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
    width: 20px;
    border-radius: 3px;
`;

export const RuneIcon = styled.img`
    width: 20px;
    border-radius: 3px;
`;

export const ChampionLevel = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 70%;
    left: 20%;
    color: black;
    font-weight: 700;
    font-size: 10px;
    border-radius: 50%;
    background-color: white;
    width: 15px;
    height: 15px;
`;
