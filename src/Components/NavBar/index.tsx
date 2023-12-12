import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import styled from "@emotion/styled";
import { useState } from "react";

export default function NavBarComponent() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <NavSection>
            <Navbar expand="lg" className="container">
                <LogoImage src={require("../../Assets/Images/Logo.png")} alt="Company Logo" />
                <ToggleIcon
                    aria-controls="basic-navbar-nav"
                    onClick={handleClick}
                />
                <NavbarCollapseStyles
                    id="basic-navbar-nav"
                    className={`${isOpen ? "show" : ""}`}
                >
                    <NavigationLinks>
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/Politics">Politics</NavLink>
                        <NavLink href="/Economy">Economy</NavLink>
                        <CustomNavDropdown title="Categorías" id="basic-nav-dropdown">
                            <NavDropdownItem href="/Tecnology">Tecnology</NavDropdownItem>
                            <NavDropdownItem href="/Science">Science</NavDropdownItem>
                            <NavDropdownItem href="/Entertainment">Entertainment</NavDropdownItem>
                            <NavDropdownItem href="/Culture">Culture</NavDropdownItem>
                            <NavDropdownItem href="/Sports">Sports</NavDropdownItem>
                        </CustomNavDropdown>
                    </NavigationLinks>
                </NavbarCollapseStyles>
            </Navbar>
        </NavSection>
    );
}

const NavSection = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1%;
    font-family: "Noto Serif", serif;
    font-weight: bold;
`;

const LogoImage = styled.img`
    width: 100%;
    max-width: 70px;

    @media (max-width: 600px) {
        max-width: 13%;
    }
`;

const ToggleIcon = styled(Navbar.Toggle)`
    border: none;

    @media (max-width: 300px) {
        font-size: 5vw;
        padding: 0.5vh 2vw;
        border: none;
    }
`;

const NavbarCollapseStyles = styled(Navbar.Collapse)`
    justify-content: flex-end;
`;

const NavigationLinks = styled(Nav)`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 991px) {
        align-items: start;
        justify-content: start;
    }
`;

const NavLink = styled(Nav.Link)`
    transition: border-bottom 0.5s ease;
    font-size: 20px !important;
    padding: 2%;
    transition: border-color 0.3s;
    border: 2px solid transparent;
    text-decoration-line: none;

    @media (max-width: 400px) {
        font-size: 5vw !important;
    }
`;

const CustomNavDropdown = styled(NavDropdown)`
    transition: border-bottom 0.5s ease;
    font-size: 20px !important;
    padding: 2%;
    transition: border-color 0.3s;
    border: 2px solid transparent;
    text-decoration-line: none;

    @media (max-width: 400px) {
        font-size: 5vw !important;
    }
`;

const NavDropdownItem = styled(NavDropdown.Item)`
    transition: border-bottom 0.5s ease;
    font-size: 18px !important;
    padding: 2%;
    transition: border-color 0.3s;
    border: 2px solid transparent;
    text-decoration-line: none;

    @media (max-width: 400px) {
        font-size: 4.5vw !important;
    }
`;