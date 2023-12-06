import styled from "@emotion/styled";

function Footer() {
    return (
        <FooterContainer>
            <LogoFooter src={require("../../Assets/Images/Logo.png")} />
            <TitleFooter>
                ©Nicolas Rojas 2023. Todos los derechos reservados.
            </TitleFooter>
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.footer`
    background: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1%;
    padding: 50px 0;

    @media (max-width: 800px) {
        padding: 5% 0;
    }

    @media (max-width: 200px) {
        gap: 10px;
    }
`;

const LogoFooter = styled.img`
    width: 35px;
    height: auto;

    @media (max-width: 5550px) {
        width: 30px;
    }

    @media (max-width: 400px) {
        display: none;
    }
`;

const TitleFooter = styled.h1`
    text-align: center;
    font-size: 20px;
    color: #4e4e4e;
    margin: 0;

    @media (max-width: 750px) {
        font-size: 17px;
    }

    @media (max-width: 550px) {
        font-size: 15px;
    }

    @media (max-width: 500px) {
        font-size: 3vw;
    }

    @media (max-width: 400px) {
        font-size: 4vw;
    }

    @media (max-width: 300px) {
        font-size: 6vw;
    }
`;
