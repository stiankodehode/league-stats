import styled from "styled-components";

export const MatchHistoryContainer = styled.div`
    color: white;
    width: 100%;
    margin: 1rem auto 0;
    padding: 1rem;
    background: rgba(7, 2, 55, 0.596);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    @media (min-width: 1000px) {
        justify-content: space-between;

        width: 63%;
    }
`;
