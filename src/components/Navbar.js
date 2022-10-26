import { StyledNav, NavItem, NavList, NavLink } from "./navbar/styled";

const Navbar = () => {
    return (
        <StyledNav>
            <NavList>
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/leaderboard">Leaderboard</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>About</NavLink>
                </NavItem>
            </NavList>
        </StyledNav>
    );
};

export default Navbar;
