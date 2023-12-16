import styled from "@emotion/styled";
import NavBarComponent from "../../Components/NavBar";
import ListComment from "../../Components/ComponentsTechnologyPage/ComponentsPageIndividual/ListComments";
import Footer from "../../Components/Footer";
export default function TechnologyPage() {
    return (
        <ContainerMain>
            <NavBarComponent />
            <SubContainerMain>
                <ListComment/>
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
