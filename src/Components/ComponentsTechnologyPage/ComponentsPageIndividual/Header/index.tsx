import styled from "@emotion/styled";
import { useNews } from "../../../../Context/Context";
import { useParams } from "react-router-dom";

export default function HeaderComponent() {
    const { newsData } = useNews();
    const { id } = useParams();
    let idWithoutFirstDigit: string | undefined;

    if (id !== undefined) {
        idWithoutFirstDigit = id.slice(1);
    } else {
        console.error("El parámetro 'id' es undefined");
    }

    if (id !== undefined) {
        idWithoutFirstDigit = id.slice(1);
    } else {
        console.error("El parámetro 'id' es undefined");
    }

    if (!newsData || !newsData.items || newsData.items.length === 0) {
        return <div>Cargando...</div>;
    }

    const fncNewsTechnology = newsData.items.filter(
        (noticia) => noticia.id === Number(idWithoutFirstDigit)
    );

    const newSelected = fncNewsTechnology[0];

    return (
        <ContainerMain>
            <ContainerImage
                src={require("../../../../Assets/Images/TechnologyImage6.webp")}
            ></ContainerImage>

            {newSelected && (
                <ContainerTexts key={newSelected.id}>
                    <TitleTextHeader>{newSelected.title}</TitleTextHeader>
                    <DescriptionHeader>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla placerat turpis eget semper scelerisque. Phasellus
                        nec gravida ipsum. Curabitur bibendum sapien erat, in
                        suscipit ipsum placerat elementum. Quisque vestibulum,
                        erat vel finibus facilisis, quam orci luctus enim, id
                        suscipit sapien mauris nec diam. Aliquam ut dignissim
                        ex. Fusce eu augue sed nisi molestie pretium.
                        Pellentesque mattis tempus leo vitae sollicitudin. Donec
                        pulvinar urna erat, quis dapibus justo sollicitudin
                        auctor.
                    </DescriptionHeader>
                </ContainerTexts>
            )}
        </ContainerMain>
    );
}

const ContainerMain = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3vh;
    width: 90%;
    font-family: "Noto Serif", serif;

    @media (max-width: 700px) {
        flex-direction: column;
    }

    @media (max-width: 1000px) {
        display: block;
    }

    @media (max-width: 700px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const ContainerImage = styled.img`
    width: 45%;
    max-width: 500px;

    @media (max-width: 1100px) {
        width: 50%;
        float: left;
        margin: 0 2% 2% 0;
    }

    @media (max-width: 1000px) {
        width: 60%;
    }

    @media (max-width: 800px) {
        width: 65%;
    }

    @media (max-width: 700px) {
        width: 100%;
        float: none;
    }
`;

const ContainerTexts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2%;
    justify-content: center;
    max-width: 500px;

    @media (max-width: 1000px) {
        display: block;
        max-width: 100%;
    }

    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

const TitleTextHeader = styled.h1`
    font-size: 27px;
    font-weight: 800;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;

    @media (max-width: 1200px) {
        font-size: 25px;
    }

    @media (max-width: 700px) {
        font-size: 27px;
    }

    @media (max-width: 600px) {
        font-size: 6vw;
    }

    @media (max-width: 400px) {
        font-size: 7vw;
    }
`;

const DescriptionHeader = styled.h3`
    font-size: 17px;
    margin: 0;

    @media (max-width: 1200px) {
        font-size: 20px;
    }

    @media (max-width: 700px) {
        font-size: 17px;
    }

    @media (max-width: 600px) {
        font-size: 4vw;
    }

    @media (max-width: 400px) {
        font-size: 5vw;
    }
`;
