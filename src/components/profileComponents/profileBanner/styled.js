import styled from "styled-components";

export const ProfileBannerBox = styled.div`
    display: flex;
    padding: 1rem;
    margin: 0 auto;
    width: 100%;

    background: rgba(7, 2, 55, 0.596);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    @media (min-width: 500px) {
        margin: 0 auto;
        max-width: 400px;
    }
    @media (min-width: 1000px) {
        max-width: 35%;
        margin: 0;
    }
`;

export const ProfileIconContainer = styled.div`
    width: 40%;
    max-width: 100px;
    position: relative;
`;

export const ProfileIcon = styled.img`
    width: 100px;
    border: 3px solid #5e50c5;
    border-radius: 25px;
`;

export const ProfileLevel = styled.span`
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #0a0245;
    padding: 5px;
    border: 2px solid #5e50c5;
    border-radius: 25%;
    color: white;
    font-weight: 700;
`;

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-left: 15px;
`;

export const ProfileName = styled.h1`
    color: #ffffff;
    padding-right: 1rem;
    font-size: 36px;
    border-right: 2px solid #5e50c580;
`;

export const UpdateButton = styled.button`
    border: none;
    color: white;
    font-size: 20px;
    font-weight: 700;
    padding: 10px;
    background-color: blue;
    border-radius: 10px;
`;
