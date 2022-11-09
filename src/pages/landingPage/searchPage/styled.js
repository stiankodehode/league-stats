import styled from "styled-components";

export const SearchPageContainer = styled.div`
    margin: 0 auto;
    width: 100%;
`;

export const SearchBox = styled.div`
    margin: 0 auto;
    margin-top: 200px;
    max-width: 80%;
`;

export const InputBox = styled.div`
    padding: 1em 2em;
    background: rgba(148, 190, 233, 0.5);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.8px);
    -webkit-backdrop-filter: blur(8.8px);
    border-radius: 25px 0 0 25px;
    display: flex;
    justify-content: center;
`;

export const FlexColumn = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
`;

export const StyledForm = styled.form`
    display: flex;
    padding: 1em;
    justify-content: center;
`;

export const RegionSelect = styled.select`
    border: none;
    outline: none;
`;

export const SearchInput = styled.input`
    border: none;
    outline: none;
    border-bottom: 2px solid #00000080;
    margin-left: 5px;
    background: none;
    ::placeholder {
        color: #ffffff80;
    }
`;

export const SearchButton = styled.button`
    border-radius: 0 25px 25px 0;
    border: none;
    background: #023e8a;
    color: white;
    font-weight: 700;
    padding: 0 1em;
`;
