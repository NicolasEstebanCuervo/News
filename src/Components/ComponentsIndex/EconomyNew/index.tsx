import styled from "@emotion/styled";
import { useNews } from "../../../Context/ContextData";

export default function EconomyPage() {
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
        <EconomySection>
            <SubContainerEconomy>
                {newSelected && (
                    <TextContainer>
                        <TitleEconomy>{newSelected.title}</TitleEconomy>
                        <DescriptionEconomy>
                            {newSelected.description}
                        </DescriptionEconomy>
                        <LearnMoreButton
                            href={`/Economy/:${newSelected.id}`}
                        >
                            Learn More About
                        </LearnMoreButton>
                    </TextContainer>
                )}
                <EconomyImage
                    src={require("../../../Assets/Images/EconomyImage1.webp")}
                    alt="Economy Image"
                />
            </SubContainerEconomy>
        </EconomySection>
    );
}

const EconomySection = styled.section`
    width: 90%;
    display: flex;
    justify-content: center;
    padding: 5% 0;
    font-family: "Noto Serif", serif;
`;

const SubContainerEconomy = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    gap: 5%;

    @media (max-width: 1250px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2vh;
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 600px;
`;

const TitleEconomy = styled.h1`
    font-size: 50px;
    font-weight: 800;

    @media (max-width: 1250px) {
        font-size: 40px;
        text-align: center;
    }

    @media (max-width: 1000px) {
        font-size: 30px;
    }

    @media (max-width: 750px) {
        font-size: 25px;
    }

    @media (max-width: 600px) {
        font-size: 7vw;
    }

    @media (max-width: 400px) {
        font-size: 8vw;
    }
`;

const DescriptionEconomy = styled.p`
    font-size: 20px;

    @media (max-width: 1250px) {
        font-size: 15px;
    }

    @media (max-width: 1000px) {
        font-size: 20px;
    }

    @media (max-width: 750px) {
        font-size: 15px;
    }

    @media (max-width: 600px) {
        font-size: 5vw;
    }

    @media (max-width: 400px) {
        font-size: 6vw;
    }
`;

const LearnMoreButton = styled.a`
    display: flex;
    align-items: center;
    font-size: 30px;
    font-weight: 900;
    border: none;
    cursor: pointer;
    gap: 1rem;
    color: #1E8449;
    text-decoration-line: none;
    @media (max-width: 1250px) {
        font-size: 25px;
    }

    @media (max-width: 1000px) {
        font-size: 20px;
    }

    @media (max-width: 750px) {
        font-size: 15px;
    }

    @media (max-width: 600px) {
        font-size: 5vw;
    }

    @media (max-width: 400px) {
        font-size: 6vw;
    }
`;

const EconomyImage = styled.img`
    max-width: 600px;
    width: 100%;
    border-radius: 15px;

    @media (max-width: 1500px) {
        max-width: 550px;
    }

    @media (max-width: 1300px) {
        max-width: 45%;
    }

    @media (max-width: 1250px) {
        max-width: 600px;
    }

    @media (max-width: 750px) {
        max-width: 550px;
    }

    @media (max-width: 600px) {
        max-width: 100%;
    }
`;
