import styled from "@emotion/styled";

export default function EconomyPage() {
    return (
        <EconomySection>
            <SubContainerEconomy>
                <TextContainer>
                    <TitleEconomy>Explore Our Economy Tailored to Your Needs</TitleEconomy>
                    <DescriptionEconomy>
                        Discover how we can assist you in achieving your economic goals.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Discover how we can assist you in achieving your economic goals.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Discover how we can assist you in achieving your economic goals.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Discover how we can assist you in achieving your economic goals.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </DescriptionEconomy>
                        <LearnMoreButton href="/economy">
                            Learn More About
                            <ButtonIcon className="bi bi-arrow-right-short"></ButtonIcon>
                        </LearnMoreButton>
                </TextContainer>
                <EconomyImage src={require("../../../Assets/Images/imagen7.jpg")} alt="Economy Image" />
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
    color: #f9c80e;
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

const ButtonIcon = styled.i`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    border-radius: 50%;
    width: 30px;
    height: 30px;

    @media (max-width: 500px) {
        font-size: 8vw;
        width: 8vw;
        height: 8vw;
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
`