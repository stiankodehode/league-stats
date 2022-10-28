import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import SearchPage from "./landingPage/SearchPage";
import ProfilePage from "./landingPage/ProfilePage";
import Leaderboard from "./landingPage/Leaderboard";
import { SummonerContext } from "../contextState/summonerContext";
import { useContext } from "react";
const LandingPage = () => {
    const { summonerData, setSummonerData } = useContext(SummonerContext);
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="*" element={<SearchPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
        </>
    );
};

export default LandingPage;
