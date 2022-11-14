import styled from "styled-components";

// Typography

export const RoleName = styled.span`
    font-size: 0.75rem;
`;

export const RoleCount = styled.span`
    font-size: 0.7rem;
`;

export const ChampionKDAText = styled.span`
    font-size: 0.6rem;
`;
export const KDAText = styled.span`
    font-size: 1.25rem;
`;

//
export const RecentStatsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    gap: 15px;
    color: white;
    padding-bottom: 1rem;
    border-bottom: 2px solid #5e50c580;
    @media (min-width: 850px) {
        align-items: center;
        justify-content: space-evenly;
    }
`;

export const RecentWins = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
    @media (min-width: 850px) {
        width: 22%;
    }
`;
export const RecentKDA = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
    @media (min-width: 850px) {
        width: 22%;
    }
`;

export const RecentChampions = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 45%;
    @media (min-width: 850px) {
        width: 25%;
    }
`;

export const RecentRoles = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 45%;
    @media (min-width: 850px) {
        width: 22%;
    }
`;

export const RoleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
    flex-direction: column;
`;

export const RecentChampionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
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

export const ChampionIcon = styled.img`
    width: 30px;
    border-radius: 25px;
`;
