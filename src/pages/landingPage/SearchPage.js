import {
    SearchPageContainer,
    SearchBox,
    RegionSelect,
    SearchInput,
    SearchButton,
    StyledForm,
} from "./searchPage/styled";

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ApiContext } from "../../contextState/apiContext";

const API_KEY = process.env.REACT_APP_RIOT_LOL_API_KEY;

const SearchPage = () => {
    const { apiData, setApiData } = useContext(ApiContext);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    const summonerSearch = (e) => {
        e.preventDefault();
        axios
            .get(
                `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${searchValue}?api_key=${API_KEY}`
            )
            .then((res) => setApiData(res.data));
        navigate("/profile");
    };

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    };
    console.log(apiData);
    return (
        <SearchPageContainer>
            <SearchBox>
                <StyledForm>
                    <RegionSelect id="regionSelect">
                        <option>EUW</option>
                        <option>NA</option>
                        <option>KR</option>
                    </RegionSelect>
                    <SearchInput onChange={handleSearch}></SearchInput>
                    <SearchButton onClick={summonerSearch}>Search</SearchButton>
                </StyledForm>
            </SearchBox>
        </SearchPageContainer>
    );
};

export default SearchPage;
