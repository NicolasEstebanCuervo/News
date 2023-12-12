import styled from "@emotion/styled";
import HeaderComponent from "../../Components/ComponentsIndex/Header";
import NavBarComponent from "../../Components/NavBar";
import NewComponent from "../../Components/ComponentsIndex/New";
import CardsNews from "../../Components/ComponentsIndex/CardsNews";
import MultiNews from "../../Components/ComponentsIndex/MultiNews";
import Footer from "../../Components/Footer";
import EconomyNew from "../../Components/ComponentsIndex/EconomyNew";
import Phrase from "../../Components/ComponentsIndex/Phrase";

export default function IndexPage() {
    return (
        <ContainerMain>
            <NavBarComponent />
            <SubContainerMain>
                <ContainerHeader>
                    <HeaderComponent />
                    <NewComponent />
                </ContainerHeader>
                <Phrase />
                <CardsNews />
                <MultiNews />
                <EconomyNew />
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

const ContainerHeader = styled.div`
    gap: 5%;
    display: flex;
    justify-content: center;
`;
