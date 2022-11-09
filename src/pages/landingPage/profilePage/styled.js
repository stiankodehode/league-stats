import styled from "styled-components";

export const ProfilePageContainer = styled.div`
    margin: 0 auto;
    width: 80%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    @media (max-width: 1200px) {
        align-items: center;
    }
`;

export const RankedStats = styled.aside`
    display: flex;
    flex-direction: column;
    min-width: 325px;
    @media (max-width: 1200px) {
        flex-direction: row;
        justify-content: space-between;
        min-width: 70%;
    }
`;

export const PageWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
    }
`;
