import styled from "styled-components";

export const MatchHistoryContainer = styled.div`
    padding: 10px;
    margin-left: 25px;
    color: white;
    width: 70%;
    min-width: 600px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.42);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(11.4px);
    -webkit-backdrop-filter: blur(11.4px);
    @media (max-width: 1200px) {
        margin-left: 0;
    }
`;
