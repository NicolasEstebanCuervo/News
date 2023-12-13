import styled from "@emotion/styled";
import NavBarComponent from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import HeaderComponent from "../../Components/ComponentsTecnologyPage/Header";
import WeeklyNews from "../../Components/ComponentsTecnologyPage/WeeklyNews";
import MultiNews from "../../Components/ComponentsTecnologyPage/MultiNews";
import MultiTecnology from "../../Components/ComponentsTecnologyPage/MultiTecnology";

export default function     TecnologyPage() {
    return (
        <ContainerMain>
            <NavBarComponent />
            <SubContainerMain>
                <HeaderComponent />
                <WeeklyNews/>
                <MultiNews />
                <MultiTecnology />
            </SubContainerMain>
            <Footer/>
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