import styled from "@emotion/styled";
import NavBarComponent from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import HeaderComponent from "../../Components/ComponentsPoliticsPage/Header";
import PoliticNew from "../../Components/ComponentsPoliticsPage/PoliticNew/Index";
import WeeklyNews from "../../Components/ComponentsPoliticsPage/WeeklyNews";
import MultiNews from "../../Components/ComponentsPoliticsPage/MultiNews";
import MultiPolitics from "../../Components/ComponentsPoliticsPage/MultiPolitics";

export default function PoliticsPage() {
    return (
        <ContainerMain>
            <NavBarComponent />
            <SubContainerMain>
                <HeaderComponent />
                <PoliticNew/>
                <WeeklyNews/>
                <MultiNews />
                <MultiPolitics />
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