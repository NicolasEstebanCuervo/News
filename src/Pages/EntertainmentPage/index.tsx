import styled from "@emotion/styled";
import NavBarComponent from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import HeaderComponent from "../../Components/ComponentsEntertainmentPage/Header";
import WeeklyNews from "../../Components/ComponentsEntertainmentPage/WeeklyNews";
import MultiNews from "../../Components/ComponentsEntertainmentPage/MultiNews";
import MultiEntertainment from "../../Components/ComponentsEntertainmentPage/MultiEntertainment";
import EntertainmentNew from "../../Components/ComponentsEntertainmentPage/EntertainmentNew";

export default function EntertainmentPage() {
    return (
        <ContainerMain>
            <NavBarComponent />
            <SubContainerMain>
                <HeaderComponent />
                <EntertainmentNew/>
                <WeeklyNews/>
                <MultiNews />
                <MultiEntertainment />
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