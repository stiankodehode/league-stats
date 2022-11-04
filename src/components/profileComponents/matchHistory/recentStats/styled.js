import styled from "styled-components";

export const RecentStatsContainer = styled.div`
    margin: 5px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-radius: 5px;
    background-color: #121233;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
`;
export const ChampionsContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const WinLossGradient = styled.div`
    margin-top: 5px;
    width: 90%;
    height: 20px;
    border-radius: 5px;
    background: ${(props) => `linear-gradient(
        90deg,
        rgba(60, 65, 185, 1) ${props.winrate}%,
        rgba(157, 27, 27, 1) ${props.winrate}%
    )`};
`;

export const RoleGradient = styled.div`
    height: 50px;
    width: 15px;
    background: ${(props) => `linear-gradient(
        0deg,
        rgba(60, 65, 185, 1) ${props.percentage}%,
        rgba(255, 255, 255, 0.25) ${props.percentage}%
    )`};
`;

export const FlexRow = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`;

export const StyledH4 = styled.h4`
    font-size: 12px;
`;

export const StyledH3 = styled.h3`
    font-size: 16px;
`;
export const RoleName = styled.h3`
    font-size: 10px;
    margin-bottom: 5px;
`;

export const ChampionIcon = styled.img`
    width: 30px;
    border-radius: 25px;
`;
