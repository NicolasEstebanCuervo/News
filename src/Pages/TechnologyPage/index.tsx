import styled from "@emotion/styled";
import NavBarComponent from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import HeaderComponent from "../../Components/ComponentsTechnologyPage/Header";
import TechnologyNew from "../../Components/ComponentsTechnologyPage/TechnologyNew";
import WeeklyNews from "../../Components/ComponentsTechnologyPage/WeeklyNews";
import MultiNews from "../../Components/ComponentsTechnologyPage/MultiNews";
import MultiTecnology from "../../Components/ComponentsTechnologyPage/MultiTecnology";

export default function TechnologyPage() {
    return (
        <ContainerMain>
            <NavBarComponent />
            <SubContainerMain>
                <HeaderComponent />
                <TechnologyNew />
                <WeeklyNews />
                <MultiNews />
                <MultiTecnology />
            </SubContainerMain>
            <Footer />
        </ContainerMain>
    );
}

const ContainerMain = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5vh;

    @media (max-width: 400px) {
        gap: 2vh;
    }
`;

const SubContainerMain = styled.div`
    display: flex;
    gap: 10vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 600px) {
        gap: 5vh;
    }

    @media (max-width: 400px) {
        gap: 2vh;
    }
`;
