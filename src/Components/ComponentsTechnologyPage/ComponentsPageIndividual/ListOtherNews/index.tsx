import styled from "@emotion/styled";
import { useNews } from "../../../../Context/Context";

export default function ListOtherNews() {
    const { newsData } = useNews();

    if (!newsData || !newsData.items || newsData.items.length === 0) {
        return <div>Cargando...</div>;
    }

    const fncNewsTechnology = newsData.items.filter(
        (noticia) => noticia.category === "technology"
    );

    const newsLimitadas = fncNewsTechnology.slice(0, 4);

    const imagesArray = ["TechnologyImage5", "TechnologyImage6","TechnologyImage5", "TechnologyImage6"];

    return (
        <ContainerCardsNews>
            <TitleCardsNews>Descubre mas</TitleCardsNews>
            <SubContainerCardsNews>
                {newsLimitadas.map((noticia, item) => (
                    <ContainerCardIndividual key={item}>
                        <ContainerImage
                            src={
                                require(`../../../../Assets/Images/${imagesArray[item]}.webp`)
                            } 
                            alt={`Imagen ${item + 1}`}
                        />
                        <ContainerTexts>
                            <TitleNew
                                onClick={() => {
                                    window.location.href = `/Technology/:${noticia.id}`;
                                }}
                            >
                                {noticia.title}
                            </TitleNew>
                            <DescriptionNew>
                                {noticia.description}
                            </DescriptionNew>
                        </ContainerTexts>
                    </ContainerCardIndividual>
                ))}
            </SubContainerCardsNews>
        </ContainerCardsNews>
    );
}

const ContainerCardsNews = styled.section`
    width: 40%;
    gap: 5vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1000px) {
        width: 95%;
    }

    @media (max-width: 600px) {
        gap: 5vh;
    }

    @media (max-width: 400px) {
        gap: 2vh;
    }
`;

const SubContainerCardsNews = styled.div`
    gap: 5vh 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 400px) {
        gap: 2vh;
    }
`;

const TitleCardsNews = styled.h1`
    text-align: center;
    font-size: 50px;
    font-weight: 800;

    @media (max-width: 750px) {
        font-size: 40px;
    }

    @media (max-width: 400px) {
        font-size: 13vw;
    }
`;

const ContainerCardIndividual = styled.div`
    background: #f7f6f6;
    border: 1px solid #a5a3a3;
    border-radius: 2px;
    gap: 3%;
    width: 80%;
    padding: 3%;
    display: flex;

    @media (min-width: 1600px) {
        max-width: 700px;
    }

    @media (max-width: 600px) {
        max-width: 100%;
    }

    @media (max-width: 400px) {
        justify-content: space-between;
    }
`;

const ContainerImage = styled.img`
    width: 100%;
    max-width: 200px;
    border-radius: 25px;

    @media (max-width: 1250px) {
        max-width: 200px;
    }

    @media (max-width: 1000px) {
        max-width: 170px;
    }

    @media (max-width: 800px) {
        max-width: 150px;
    }

    @media (max-width: 700px) {
        max-width: 130px;
    }

    @media (max-width: 600px) {
        max-width: 190px;
        border-radius: 10%;
    }

    @media (max-width: 550px) {
        max-width: 160px;
    }

    @media (max-width: 450px) {
        max-width: 130px;
    }

    @media (max-width: 400px) {
        max-width: 50%;
    }
`;

const ContainerTexts = styled.div`
    width: 60%;
`;

const TitleNew = styled.h2`
    font-size: 27px;
    font-weight: 800;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
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

const DescriptionNew = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
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
