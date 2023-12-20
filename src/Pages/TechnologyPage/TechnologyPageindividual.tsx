import styled from "@emotion/styled";
import NavBarComponent from "../../Components/NavBar";
import HeaderComponent from "../../Components/ComponentsTechnologyPage/ComponentsPageIndividual/Header";
import MoreText from "../../Components/ComponentsTechnologyPage/ComponentsPageIndividual/MoreText";
import ListComment from "../../Components/ComponentsTechnologyPage/ComponentsPageIndividual/ListComments";
import ListOtherNews from "../../Components/ComponentsTechnologyPage/ComponentsPageIndividual/ListOtherNews";
import Footer from "../../Components/Footer";

export default function TechnologyPage() {
    return (
        <ContainerMain>
            <NavBarComponent />
            <SubContainerMain>
                <ContainerHeader>
                    <HeaderComponent />
                    <LineDivider />

                    <MoreText />
                </ContainerHeader>
                <LineDivider2 />

                <ContainerLists>
                    <ListComment />
                    <ListOtherNews />
                </ContainerLists>
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
    width: 70%;
    margin: 0;

    @media (max-width: 600px) {
        width: 90%;
    }
`;

const LineDivider2 = styled.hr`
    color: #161616;
    width: 90%;
    margin: 0;
`;

const ContainerLists = styled.main`
    gap: 5%;
    display: flex;
    justify-content: center;
`;
