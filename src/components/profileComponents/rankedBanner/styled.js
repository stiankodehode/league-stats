import styled from "styled-components";

export const BannerContainer = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin: 1rem auto;
    padding: 1rem;
    background: rgba(7, 2, 55, 0.596);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
`;

export const RankedIcon = styled.img`
    width: 75px;
    margin-right: 1rem;
`;

export const RankedType = styled.h3`
    font-size: 20px;
    border-bottom: 2px solid #5e50c580;
    color: #fff;
`;

export const RankedInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const TierContainer = styled.div`
    display: flex;
`;

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Rank = styled.span`
    font-size: 1.25rem;
    font-weight: 700;
`;

export const LP = styled.span`
    font-size: 1rem;
`;

export const GamesSpan = styled.span`
    font-size: 0.9rem;
`;

export const Hardstuck = styled.span`
    font-size: 0.75rem;
`;
