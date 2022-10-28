import LandingPage from "./pages/LandingPage";
import { SummonerContext } from "./contextState/summonerContext";
import { useState } from "react";
import { AppContainer } from "./components/globalStyled";
import Summoner from "./lib/summoner";

const API_KEY = process.env.REACT_APP_RIOT_LOL_API_KEY;

function App() {
    const [summonerData, setSummonerData] = useState(new Summoner(API_KEY));

    return (
        <SummonerContext.Provider value={{ summonerData, setSummonerData }}>
            <AppContainer>
                <LandingPage />
            </AppContainer>
        </SummonerContext.Provider>
    );
}

export default App;
