import styled from "@emotion/styled";
import NavBarComponent from "../../Components/NavBar";
import HeaderComponent from "../../Components/ComponentsTechnologyPage/ComponentsPageIndividual/Header";
import MoreText from "../../Components/ComponentsTechnologyPage/ComponentsPageIndividual/MoreText";
import ListComment from "../../Components/ComponentsTechnologyPage/ComponentsPageIndividual/ListComments";
import Footer from "../../Components/Footer";
import { NewsFormProvider } from "../../Context/ContextForm";
import { ImageProvider } from "../../Context/ContextImage";

export default function TechnologyPage() {
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
                    <ImageProvider>
                        <ListComment />
                    </ImageProvider>
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
