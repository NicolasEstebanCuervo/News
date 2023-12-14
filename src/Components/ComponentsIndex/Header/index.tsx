import styled from "@emotion/styled";
import { useNews } from "../../../Context/Context";

export default function HeaderComponent() {
    const { newsData } = useNews();

    if (!newsData || !newsData.items || newsData.items.length === 0) {
        return <div>Cargando...</div>;
    }

    const fncNewsPolitics = newsData.items.filter(
        (noticia) => noticia.category === "politics"
    );

    const numRandom = Math.floor(
        Math.random() * fncNewsPolitics.length
    );

    const newSelected = fncNewsPolitics[numRandom];

    return (
        <ContainerMain>
            <ContainerImage
                src={require("../../../Assets/Images/PoliticsImage1.webp")}
            ></ContainerImage>

            {newSelected && (
                <ContainerTexts key={newSelected.id}>
                    <ContainerTitleHeader>
                        <TitleTextHeader>
                            {newSelected.title}
                        </TitleTextHeader>
                    </ContainerTitleHeader>
                    <ContainerTextsDescription>
                        <DescriptionHeader>
                            {newSelected.description}
                        </DescriptionHeader>
                        <ButtonHeader
                            href={`/Politics/:${newSelected.id}`}
                        >
                            Read More
                        </ButtonHeader>
                    </ContainerTextsDescription>
                </ContainerTexts>
            )}
        </ContainerMain>
    );
}

const ContainerMain = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3vh;
    max-width: 750px;
    width: 50%;
    padding: 5% 0;
    font-family: "Noto Serif", serif;

    @media (max-width: 900px) {
        width: 50%;
    }

    @media (max-width: 600px) {
        width: 90%;
    }
`;

const ContainerImage = styled.img`
    max-width: 600px;

    @media (max-width: 1250px) {
        max-width: 650px;
    }

    @media (max-width: 1200px) {
        max-width: 600px;
    }

    @media (max-width: 1100px) {
        max-width: 550px;
    }

    @media (max-width: 1000px) {
        max-width: 500px;
    }

    @media (max-width: 900px) {
        max-width: 450px;
    }
    @media (max-width: 800px) {
        max-width: 400px;
    }

    @media (max-width: 700px) {
        max-width: 350px;
    }

    @media (max-width: 600px) {
        max-width: 480px;
    }
    @media (max-width: 500px) {
        width: 100%;
    }
`;

const ContainerTexts = styled.div`
    display: flex;
    gap: 2%;
    justify-content: center;
    width: 90%;

    @media (max-width: 1500px) {
        width: 100%;
    }

    @media (max-width: 1200px) {
        flex-direction: column;
    }

    @media (max-width: 800px) {
        width: 55vw;
        flex-direction: column;
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`;

const ContainerTitleHeader = styled.div`
    width: 60%;
    @media (max-width: 1200px) {
        width: 100%;
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
        font-size: 22px;
    }

    @media (max-width: 900px) {
        font-size: 20px;
    }

    @media (max-width: 700px) {
        font-size: 18px;
    }

    @media (max-width: 600px) {
        font-size: 6vw;
    }

    @media (max-width: 400px) {
        font-size: 7vw;
    }
`;

const ContainerTextsDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 50%;

    @media (max-width: 1200px) {
        width: 100%;
    }
`;

const DescriptionHeader = styled.h3`
    font-size: 17px;
    margin: 0;

    @media (max-width: 1200px) {
        font-size: 20px;
    }
    
    @media (max-width: 1000px) {
        font-size: 18px;
    }

    @media (max-width: 700px) {
        font-size: 16px;
    }

    @media (max-width: 600px) {
        font-size: 4vw;
    }

    @media (max-width: 400px) {
        font-size: 5vw;
    }
`;

const ButtonHeader = styled.a`
    color: #000;
    text-decoration: none;
    background-color: #f9c80e;
    border: none;
    padding: 8px 45px;
    text-align: center;
    font-size: 174
    nmpx;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 15px;
    transition: background-color 0.3s;

    :hover {
        background: #e7b910;
    }

    @media (max-width: 400px) {
        font-size: 5vw;
        padding: 1vh 10vw;
    }
`;
