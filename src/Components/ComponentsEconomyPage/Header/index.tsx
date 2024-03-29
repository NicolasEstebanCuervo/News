import styled from "@emotion/styled";
import { useNews } from "../../../Context/ContextData";

export default function HeaderComponent() {
    const { newsData } = useNews();

    if (!newsData || !newsData.items || newsData.items.length === 0) {
        return <div>Cargando...</div>;
    }

    const fncNewsEconomy = newsData.items.filter(
        (newPost) => newPost.category === "economy"
    );

    const numRandom = Math.floor(
        Math.random() * fncNewsEconomy.length
    );

    const newSelected = fncNewsEconomy[numRandom];

    return (
        <ContainerMain>
            <ContainerImage
                src={require("../../../Assets/Images/EconomyImage3.webp")}
            ></ContainerImage>

            {newSelected && (
                <ContainerTexts key={newSelected.id}>
                    <ContainerTitleHeader>
                        <TitleTextHeader href={`/Economy/:${newSelected.id}`}>
                            {newSelected.title}
                        </TitleTextHeader>
                    </ContainerTitleHeader>
                    <ContainerTextsDescription>
                        <DescriptionHeader>
                            {newSelected.description}
                        </DescriptionHeader>
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
    width: 90%;
    font-family: "Noto Serif", serif;
`;

const ContainerImage = styled.img`
    width: 60%;

    @media (max-width: 1200px) {
        width: 80%;
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`;

const ContainerTexts = styled.div`
    display: flex;
    gap: 2%;
    justify-content: center;
    width: 60%;

    @media (max-width: 1200px) {
        flex-direction: column;
        width: 80%;
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`;

const ContainerTitleHeader = styled.div`
    width: 60%;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

const TitleTextHeader = styled.a`
    text-decoration-line: none;
    color: #000;
    font-size: 30px;
    font-weight: 800;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;

    @media (max-width: 1200px) {
        font-size: 25px;
    }

    @media (max-width: 900px) {
        font-size: 23px;
    }

    @media (max-width: 700px) {
        font-size: 20px;
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
