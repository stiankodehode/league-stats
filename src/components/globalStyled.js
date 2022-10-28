import styled from "styled-components";

export const BackgroundImage = styled.div`
    background: rgb(173, 214, 244);
    background: radial-gradient(
        circle,
        rgba(0, 0, 0, 0.5) 55%,
        rgba(88, 92, 162, 0.9) 95%
    );
    background-repeat: none;
    background-size: cover;
    height: 100vh;
`;

export const AppContainer = styled.div`
    background-image: linear-gradient(
            90deg,
            #122361 0%,
            #00000080 35%,
            #00000080 65%,
            #122361 100%
        ),
        url("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/53/53000.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-color: #122361;
    height: 100vh;
`;
