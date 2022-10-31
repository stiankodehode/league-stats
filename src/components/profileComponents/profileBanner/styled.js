import styled from "styled-components";

export const ProfileBannerBox = styled.div`
    padding-top: 25px;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
`;

export const ProfileInfo = styled.div`
    padding: 25px;
    width: 250px;
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 25px;
    background: rgba(0, 0, 0, 0.42);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(11.4px);
    -webkit-backdrop-filter: blur(11.4px);
`;

export const ProfileIcon = styled.img`
    width: 75px;
    border-radius: 10px;
    margin-right: 20px;
`;

export const SummonerName = styled.h2`
    font-size: 32px;
    color: #ffffff;
`;

export const SummonerLevel = styled.h3`
    position: absolute;
    background-color: blue;
    border-radius: 10px;
    padding: 2px 5px;
    color: white;
    top: 72%;
    left: 45px;
    font-size: 14px;
`;

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: inherit;
`;

export const UpdateButton = styled.button`
    padding: 0.5em;
    margin-top: 10px;
    font-weight: bold;
    border: none;
    background-color: blue;
    color: white;
    border-radius: 10px;
    max-width: 80%;
    min-width: 60%;
    cursor: pointer;
    &:hover {
        background-color: darkblue;
    }
`;
