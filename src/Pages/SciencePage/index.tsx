import styled from "@emotion/styled";
import NavBarComponent from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import HeaderComponent from "../../Components/ComponentsSciencePage/Header";
import WeeklyNews from "../../Components/ComponentsSciencePage/WeeklyNews";
import MultiNews from "../../Components/ComponentsSciencePage/MultiNews";
import MultiScience from "../../Components/ComponentsSciencePage/MultiScience";

export default function SciencePage() {
    return (
        <ContainerMain>
            <NavBarComponent />
            <SubContainerMain>
                <HeaderComponent />
                <WeeklyNews/>
                <MultiNews />
                <MultiScience />
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