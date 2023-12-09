import styled from "@emotion/styled";

export default function MultiNews() {
    return (
        <ContainerMultiNews>
            <TitleMultiNews>Latest news in the capital</TitleMultiNews>
            <SubContainerMultiNews>
                <ContainerIndividualMultiNews>
                    <ImagenMultiNews
                        src={require("../../../Assets/Images/imagen8.png")}
                    />
                    <TitleIndividualMultiNews>Maze AI</TitleIndividualMultiNews>
                    <DescriptionMultiNews>
                        Level up your precision and efficiency with AI features
                        like dynamic follow-up, contextual suggestions, and bias
                        detection.
                    </DescriptionMultiNews>
                    <ButtonMultiNews>Explore Maze AI </ButtonMultiNews>
                </ContainerIndividualMultiNews>

                <ContainerIndividualMultiNews>
                    <ImagenMultiNews
                        src={require("../../../Assets/Images/imagen8.png")}
                    />
                    <TitleIndividualMultiNews>Maze AI</TitleIndividualMultiNews>
                    <DescriptionMultiNews>
                        Level up your precision and efficiency with AI features
                        like dynamic follow-up, contextual suggestions, and bias
                        detection.
                    </DescriptionMultiNews>
                    <ButtonMultiNews>Explore Maze AI </ButtonMultiNews>
                </ContainerIndividualMultiNews>

                <ContainerIndividualMultiNews>
                    <ImagenMultiNews
                        src={require("../../../Assets/Images/imagen8.png")}
                    />
                    <TitleIndividualMultiNews>Maze AI</TitleIndividualMultiNews>
                    <DescriptionMultiNews>
                        Level up your precision and efficiency with AI features
                        like dynamic follow-up, contextual suggestions, and bias
                        detection.
                    </DescriptionMultiNews>
                    <ButtonMultiNews>Explore Maze AI </ButtonMultiNews>
                </ContainerIndividualMultiNews>
            </SubContainerMultiNews>
        </ContainerMultiNews>
    );
}

const ContainerMultiNews = styled.section`
    background-color: rgb(3, 21, 39);
    width: 100%;
    padding: 5% 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5vh;

    @media (max-width: 700px) {
        gap: 2vh;
    }
`;

const TitleMultiNews = styled.h1`
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    color: #fff;

    @media (max-width: 750px) {
        font-size: 40px;
        width: 100%;
    }

    @media (max-width: 400px) {
        font-size: 8vw;
    }
`;

const SubContainerMultiNews = styled.div`
    width: 90%;
    gap: 5%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 700px) {
        flex-direction: column;
        gap: 5vh;
    }
`;

const ContainerIndividualMultiNews = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1vh;
    background-color: rgba(28, 44, 61, 0.898);
    width: 30%;
    padding: 3% 4%;
    border-radius: 20px;
    transition: box-shadow 0.3s ease, border 0.4s ease;

    @media (max-width: 700px) {
        width: 70%;
    }

    @media (max-width: 600px) {
        width: 80%;
    }

    @media (max-width: 500px) {
        width: 90%;
    }

    @media (max-width: 600px) {
        border-radius: 2%;
    }

    &&:hover {
        outline: 1px solid #fff;
        box-shadow: 0px 0px 12px 0px rgba(255, 255, 255, 1);
    }
`;

const ImagenMultiNews = styled.img`
    max-width: 400px;

    @media (max-width: 1250px) {
        max-width: 350px;
    }

    @media (max-width: 1000px) {
        max-width: 320px;
    }

    @media (max-width: 800px) {
        max-width: 300px;
    }

    @media (max-width: 750px) {
        max-width: 280px;
    }

    @media (max-width: 700px) {
        max-width: 480px;
        width: 100%;
    }
`;

const TitleIndividualMultiNews = styled.h1`
    color: #fff;
    font-weight: bold;
    text-align: center;
    font-size: 35px;
    margin: 0;

    @media (max-width: 1200px) {
        font-size: 30px;
    }

    @media (max-width: 1000px) {
        font-size: 25px;
    }

    @media (max-width: 600px) {
        font-size: 8vw;
    }

    @media (max-width: 300px) {
        font-size: 10vw;
    }
`;

const DescriptionMultiNews = styled.p`
    color: #fff;
    text-align: center;
    font-size: 17px;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;

    @media (max-width: 1000px) {
        font-size: 15px;
    }

    @media (max-width: 700px) {
        display: flex;
    }

    @media (max-width: 600px) {
        font-size: 4vw;
    }

    @media (max-width: 400px) {
        font-size: 5vw;
    }
`;

const ButtonMultiNews = styled.a`
    text-decoration-line: none;
    color: #ffffff92;
    align-self: flex-start;
    font-size: 22px;
    font-weight: bold;
    margin: 0;
    cursor: pointer;

    @media (max-width: 1000px) {
        font-size: 18px;
    }

    @media (max-width: 800px) {
        font-size: 16px;
    }

    @media (max-width: 700px) {
        align-self: center;
        font-size: 18px;
    }

    @media (max-width: 600px) {
        font-size: 5vw;
    }

    @media (max-width: 400px) {
        font-size: 7vw;
    }
`;
