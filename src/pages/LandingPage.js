import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import { SummonerContext } from "../contextState/summonerContext";

import Navbar from "../components/Navbar";
import SearchPage from "./landingPage/SearchPage";
import ProfilePage from "./landingPage/ProfilePage";
import Leaderboard from "./landingPage/Leaderboard";
import { Spacer } from "../components/globalStyled";

const LandingPage = () => {
    const { summonerData, setSummonerData } = useContext(SummonerContext);
    return (
        <>
            <Navbar />
            <Spacer />
            <Routes>
                <Route path="*" element={<SearchPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
        </>
    );
};

export default LandingPage;
