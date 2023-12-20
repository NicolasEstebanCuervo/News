import styled from "@emotion/styled";
import { useNews } from "../../../Context/ContextData";

export default function CardsNews() {
    const { newsData } = useNews();

    if (!newsData || !newsData.items || newsData.items.length === 0) {
        return <div>Cargando...</div>;
    }

    const fncNewsTechnology = newsData.items.filter(
        (newPost) => newPost.category === "technology"
    );

    const limitedNews = fncNewsTechnology.slice(0, 4);

    const imagesArray = ["TechnologyImage1", "TechnologyImage2", "TechnologyImage3", "TechnologyImage4"];

    return (
        <ContainerCardsNews>
            <TitleCardsNews>Tecnologia</TitleCardsNews>
            <SubContainerCardsNews>
                {limitedNews.map((post, item) => (
                    <ContainerCardIndividual key={item}>
                        <ContainerImage
                            src={
                                require(`../../../Assets/Images/${imagesArray[item]}.webp`)
                            } 
                            alt={`Imagen ${item + 1}`}
                        />
                        <ContainerTexts>
                            <NumberNew>{item + 1}</NumberNew>
                            <TitleNew
                                onClick={() => {
                                    window.location.href = `/Technology/:${post.id}`;
                                }}
                            >
                                {post.title}
                            </TitleNew>
                            <DescriptionNew>
                                {post.description}
                            </DescriptionNew>
                        </ContainerTexts>
                    </ContainerCardIndividual>
                ))}
            </SubContainerCardsNews>
        </ContainerCardsNews>
    );
}

const ContainerCardsNews = styled.section`
    width: 90%;
    gap: 10vh 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    gap: 10vh 0;
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
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;
    max-width: 50%;

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
        max-width: 180px;
    }

    @media (max-width: 1000px) {
        max-width: 150px;
    }

    @media (max-width: 800px) {
        max-width: 130px;
    }

    @media (max-width: 700px) {
        max-width: 120px;
    }

    @media (max-width: 600px) {
        max-width: 170px;
        border-radius: 10%;
    }

    @media (max-width: 550px) {
        max-width: 150px;
    }

    @media (max-width: 450px) {
        max-width: 120px;
    }

    @media (max-width: 400px) {
        max-width: 40%;
    }
`;

const ContainerTexts = styled.div`
    width: 60%;
`;

const NumberNew = styled.h1`
    color: #cecece;
    font-weight: bold;
    font-size: 45px;

    @media (max-width: 1000px) {
        font-size: 40px;
    }

    @media (max-width: 750px) {
        font-size: 30px;
    }

    @media (max-width: 600px) {
        font-size: 7vw;
    }

    @media (max-width: 400px) {
        font-size: 10vw;
    }
`;

const TitleNew = styled.h2`
    font-weight: bold;
    font-size: 25px;
    overflow: hidden;
    cursor: pointer;

    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    @media (max-width: 1000px) {
        font-size: 20px;
    }
    @media (max-width: 600px) {
        font-size: 4vw;
    }

    @media (max-width: 400px) {
        font-size: 7vw;
    }
`;

const DescriptionNew = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 18px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    @media (max-width: 1000px) {
        font-size: 16px;
    }

    @media (max-width: 750px) {
        font-size: 15px;
    }

    @media (max-width: 600px) {
        font-size: 3vw;
    }

    @media (max-width: 400px) {
        font-size: 6vw;
    }
`;
