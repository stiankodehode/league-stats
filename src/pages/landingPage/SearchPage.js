import {
    SearchPageContainer,
    SearchBox,
    RegionSelect,
    SearchInput,
    SearchButton,
    StyledForm,
    InputBox,
} from "./searchPage/styled";

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SummonerContext } from "../../contextState/summonerContext";

const SearchPage = () => {
    const { summonerData, setSummonerData } = useContext(SummonerContext);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    const summonerSearch = async (e) => {
        e.preventDefault();
        // await summonerData.updateSummonerInfo(searchValue);
        // await summonerData.updateRankInfo();
        // await summonerData.updateMatchIds();
        // await summonerData.updateMatchData();
        setSummonerData(JSON.parse(localStorage.getItem("lastSummoner")));
        navigate("/profile");
    };

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    };
    return (
        <SearchPageContainer>
            <SearchBox>
                <StyledForm>
                    <InputBox>
                        <RegionSelect id="regionSelect">
                            <option>EUW</option>
                            <option>NA</option>
                            <option>KR</option>
                        </RegionSelect>
                        <SearchInput onChange={handleSearch}></SearchInput>
                    </InputBox>
                    <SearchButton onClick={summonerSearch}>Search</SearchButton>
                </StyledForm>
            </SearchBox>
        </SearchPageContainer>
    );
};

export default SearchPage;
