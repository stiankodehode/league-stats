import styled from "styled-components";

export const BannerContainer = styled.div`
    padding: 10px;
    margin-bottom: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.42);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(11.4px);
    -webkit-backdrop-filter: blur(11.4px);
`;

export const StyledHeading = styled.h2`
    font-size: 16px;
    margin-bottom: 10px;
    color: white;
`;

export const RankIcon = styled.img`
    width: 75px;
`;

export const RankedQueueHeading = styled.h2`
    font-size: 20px;
    color: white;
`;

export const FlexContainer = styled.div`
    display: flex;
`;

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`;

export const LPHeading = styled.h3`
    font-size: 14px;
    color: white;
`;

export const WinLossHeading = styled.h3`
    font-size: 14px;
    color: gray;
`;
export const WinrateHeading = styled.h3`
    font-size: 12px;
    color: gray;
`;
export const HardstuckHeading = styled.h3`
    font-size: 10px;
    color: gray;
`;
