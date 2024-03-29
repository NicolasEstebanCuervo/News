import styled from "@emotion/styled";
import NavBarComponent from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import HeaderComponent from "../../Components/ComponentsCulturePage/Header";
import CultureNew from "../../Components/ComponentsCulturePage/CultureNew";
import WeeklyNews from "../../Components/ComponentsCulturePage/WeeklyNews";
import MultiNews from "../../Components/ComponentsCulturePage/MultiNews";
import MultiCulture from "../../Components/ComponentsCulturePage/MultiCulture";

export default function CulturePage() {
    return (
        <ContainerMain>
            <NavBarComponent />
            <SubContainerMain>
                <HeaderComponent />
                <CultureNew/>
                <WeeklyNews/>
                <MultiNews />
                <MultiCulture />
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