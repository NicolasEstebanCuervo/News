import styled from "@emotion/styled";
import { useNews } from "../../../Context/Context";

export default function EconomyNew() {
    const { newsData } = useNews();

    if (!newsData || !newsData.items || newsData.items.length === 0) {
        return <div>Cargando...</div>;
    }

    const noticiasEconomia = newsData.items.filter(
        (noticia) => noticia.category === "economy"
    );

    if (noticiasEconomia.length === 0) {
        return <div>No hay noticias de economia disponibles.</div>;
    }

    const numeroAleatorio = Math.floor(
        Math.random() * noticiasEconomia.length
    );

    const noticiaSeleccionada = noticiasEconomia[numeroAleatorio];

    return (
        <ContainerPoliticaNew>
            {noticiaSeleccionada && (
                <TitlePoliticaNews href={`/Economy/:${noticiaSeleccionada.id}`}>
                    {noticiaSeleccionada.title}
                </TitlePoliticaNews>
            )}
            <SubContainerPoliticaNew>
                <TextContainer>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin eget justo ut sem hendrerit porttitor. Ut vel enim
                        nec odio fringilla dignissim. Nullam aliquet, neque ac
                        luctus bibendum, libero enim ultricies libero, a
                        fermentum nibh justo vel lectus. Lorem ipsum dolor sit
                        amet, consectetur aliquet, neque ac luctus bibendum,
                        libero enim ultricies libero, a fermentum nibh justo vel
                        lectus.
                    </Text>
                    <LineDivider />
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin eget justo ut sem hendrerit porttitor. Ut vel enim
                        nec odio fringilla dignissim. Nullam aliquet, neque ac
                        luctus bibendum, libero enim ultricies libero, a
                        fermentum nibh justo vel lectus. Lorem ipsum dolor sit
                        amet, consectetur aliquet, neque ac luctus bibendum,
                        libero enim ultricies libero, a fermentum nibh justo vel
                        lectus.
                    </Text>
                    <LineDivider />
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin eget justo ut sem hendrerit porttitor. Ut vel enim
                        nec odio fringilla dignissim. Nullam aliquet, neque ac
                        luctus bibendum, libero enim ultricies libero, a
                        fermentum nibh justo vel lectus. Lorem ipsum dolor sit
                        amet, consectetur aliquet, neque ac luctus bibendum,
                        libero enim ultricies libero, a fermentum nibh justo vel
                        lectus.
                    </Text>
                </TextContainer>
                <TextContainer>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin eget justo ut sem hendrerit porttitor. Ut vel enim
                        nec odio fringilla dignissim. Nullam aliquet, neque ac
                        luctus bibendum, libero enim ultricies libero, a
                        fermentum nibh justo vel lectus. Lorem ipsum dolor sit
                        amet, consectetur aliquet, neque ac luctus bibendum,
                        libero enim ultricies libero, a fermentum nibh justo vel
                        lectus.
                    </Text>
                    <LineDivider />
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin eget justo ut sem hendrerit porttitor. Ut vel enim
                        nec odio fringilla dignissim. Nullam aliquet, neque ac
                        luctus bibendum, libero enim ultricies libero, a
                        fermentum nibh justo vel lectus. Lorem ipsum dolor sit
                        amet, consectetur aliquet, neque ac luctus bibendum,
                        libero enim ultricies libero, a fermentum nibh justo vel
                        lectus.
                    </Text>
                    <LineDivider />
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin eget justo ut sem hendrerit porttitor. Ut vel enim
                        nec odio fringilla dignissim. Nullam aliquet, neque ac
                        luctus bibendum, libero enim ultricies libero, a
                        fermentum nibh justo vel lectus. Lorem ipsum dolor sit
                        amet, consectetur aliquet, neque ac luctus bibendum,
                        libero enim ultricies libero, a fermentum nibh justo vel
                        lectus.
                    </Text>
                </TextContainer>
            </SubContainerPoliticaNew>
        </ContainerPoliticaNew>
    );
}

const ContainerPoliticaNew = styled.section`
    display: flex;
    gap: 5vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Noto Serif", serif;
`;

const TitlePoliticaNews = styled.a`
    width: 70%;
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    text-decoration-line: none;
    color: #000;

    @media (max-width: 750px) {
        width: 65%;
        font-size: 35px;
        width: 100%;
    }

    @media (max-width: 400px) {
        font-size: 7vw;
    }
`;

const SubContainerPoliticaNew = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    gap: 5%;

    @media (max-width: 800px) {
        width: 90%;
    }

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

const TextContainer = styled.div`
    flex: 1;
    margin: 0 10px;
`;

const Text = styled.p`
    font-size: 20px;
    margin: 0;

    @media (max-width: 1200px) {
        font-size: 22px;
    }

    @media (max-width: 1000px) {
        font-size: 20px;
    }

    @media (max-width: 700px) {
        font-size: 18px;
    }

    @media (max-width: 600px) {
        font-size: 4vw;
    }

    @media (max-width: 400px) {
        font-size: 5vw;
    }
`;

const LineDivider = styled.hr`
    color: #161616;
`;
