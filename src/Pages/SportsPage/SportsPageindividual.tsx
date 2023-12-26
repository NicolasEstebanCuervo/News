import styled from "@emotion/styled";
import NavBarComponent from "../../Components/NavBar";
import HeaderComponent from "../../Components/ComponentsSportsPage/ComponentsPageIndividual/Header";
import MoreText from "../../Components/ComponentsSportsPage/ComponentsPageIndividual/MoreText";
import ListComment from "../../Components/ComponentsSportsPage/ComponentsPageIndividual/ListComments";
import Footer from "../../Components/Footer";
import { NewsFormProvider } from "../../Context/ContextForm";

export default function SportsPageIndividual() {
    return (
        <ContainerMain>
            <NavBarComponent />
            <SubContainerMain>
                <ContainerHeader>
                    <HeaderComponent />
                    <MoreText />
                </ContainerHeader>
                <LineDivider />
                <NewsFormProvider>
                        <ListComment />
                </NewsFormProvider>
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

const ContainerHeader = styled.div`
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

const SubContainerMain = styled.div`
    display: flex;
    gap: 20vh;
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

const LineDivider = styled.hr`
    color: #161616;
    width: 90%;
    margin: 0;
`;
