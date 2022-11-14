import styled from "styled-components";

export const ProfilePageContainer = styled.div`
    margin: 0 auto;
    width: 95%;
`;

export const RankedBannerContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    @media (min-width: 500px) {
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }
    @media (min-width: 850px) {
        justify-content: space-between;
        flex-direction: row;
        width: 100%;
    }
    @media (min-width: 1000px) {
        flex-direction: column;
        width: 35%;
    }
`;

export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media (min-width: 1000px) {
        flex-direction: row;
    }
`;
