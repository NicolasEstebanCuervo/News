import styled from "@emotion/styled";
import NavBarComponent from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import HeaderComponent from "../../Components/ComponentsSportsPage/Header";
import WeeklyNews from "../../Components/ComponentsSportsPage/WeeklyNews";
import MultiNews from "../../Components/ComponentsSportsPage/MultiNews";
import MultiSports from "../../Components/ComponentsSportsPage/MultiSports";

export default function SportsPage() {
    return (
        <ContainerMain>
            <NavBarComponent />
            <SubContainerMain>
                <HeaderComponent />
                <WeeklyNews/>
                <MultiNews />
                <MultiSports />
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