import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import SearchPage from "./landingPage/SearchPage";
import ProfilePage from "./landingPage/ProfilePage";
import Leaderboard from "./landingPage/Leaderboard";

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
        </>
    );
};

export default LandingPage;
