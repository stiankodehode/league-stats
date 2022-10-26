import LandingPage from "./pages/LandingPage";
import { ApiContext } from "./contextState/apiContext";
import { useState } from "react";

function App() {
    const [apiData, setApiData] = useState();

    return (
        <ApiContext.Provider value={{ apiData, setApiData }}>
            <LandingPage />;
        </ApiContext.Provider>
    );
}

export default App;
