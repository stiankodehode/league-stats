import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNav = styled.nav`
    width: 100%;
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.24);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.8px);
    -webkit-backdrop-filter: blur(8.8px);
`;

export const NavList = styled.ul`
    list-style: none;
    width: 80%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
`;

export const NavItem = styled.li`
    padding: 1em;
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: white;
    &:hover {
        color: blue;
    }
`;
