import styled from "@emotion/styled";
import { useNews } from "../../../Context/ContextData";

export default function MultiNews() {
    const { newsData } = useNews();

    if (!newsData || !newsData.items || newsData.items.length === 0) {
        return <div>Cargando...</div>;
    }

    const newCulture = newsData.items.filter(
        (newPost) => newPost.category === "culture"
    );

    const newSports = newsData.items.filter(
        (newPost) => newPost.category === "sports"
    );

    const newScience = newsData.items.filter(
        (newPost) => newPost.category === "science"
    );

    const newsLimitedCulture = newCulture.slice(0, 1);
    const newsLimitedSports = newSports.slice(0, 1);
    const newsLimitedScience = newScience.slice(0, 1);

    return (
        <ContainerMultiNews>
            <SubContainerMultiNews>
                {newsLimitedCulture.map((item) => (
                    <CardMultiNews>
                        <TitleCard>Cultura</TitleCard>
                        <SubContainerCardMultiNews>
                            <IconCardMultiNews
                                src={require("../../../Assets/Icons/CultureIcon1.png")}
                            ></IconCardMultiNews>
                            <TitleCardMultiNews onClick={()=>{window.location.href =`/Culture/:${item.id}`}}>
                                {item.title}
                            </TitleCardMultiNews>
                            <DescritionCardMultiNews>
                                {item.description}
                            </DescritionCardMultiNews>
                        </SubContainerCardMultiNews>
                    </CardMultiNews>
                ))}
                {newsLimitedSports.map((item) => (
                    <CardMultiNews>
                        <TitleCard>Deportes</TitleCard>
                        <SubContainerCardMultiNews>
                            <IconCardMultiNews
                                src={require("../../../Assets/Icons/SportIcon1.png")}
                            ></IconCardMultiNews>
                            <TitleCardMultiNews onClick={()=>{window.location.href =`/Sports/:${item.id}`}}>
                                {item.title}
                            </TitleCardMultiNews>
                            <DescritionCardMultiNews>
                                {item.description}
                            </DescritionCardMultiNews>
                        </SubContainerCardMultiNews>
                    </CardMultiNews>
                ))}{" "}
                {newsLimitedScience.map((item) => (
                    <CardMultiNews>
                        <TitleCard>Ciencia</TitleCard>
                        <SubContainerCardMultiNews>
                            <IconCardMultiNews
                                src={require("../../../Assets/Icons/ScienceIcon1.png")}
                            ></IconCardMultiNews>
                            <TitleCardMultiNews onClick={()=>{window.location.href =`/Science/:${item.id}`}}>
                                {item.title}
                            </TitleCardMultiNews>
                            <DescritionCardMultiNews>
                                {item.description}
                            </DescritionCardMultiNews>
                        </SubContainerCardMultiNews>
                    </CardMultiNews>
                ))}
            </SubContainerMultiNews>
        </ContainerMultiNews>
    );
}

const ContainerMultiNews = styled.section`
    background: #f2f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10vh 0;
`;

const SubContainerMultiNews = styled.div`
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;

    @media (max-width: 750px) {
        width: 95%;
    }

    @media (max-width: 500px) {
        flex-direction: column;
        gap: 5vh;
    }
`;

const CardMultiNews = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2vh;
`;

const TitleCard = styled.h1`
    text-align: center;
    font-size: 35   px;
    font-weight: 800;

    @media (max-width: 750px) {
        font-size: 25px;
    }

    @media (max-width: 600px) {
        font-size: 5vw;
    }

    @media (max-width: 500px) {
        font-size: 8vw;
    }

    @media (max-width: 400px) {
        font-size: 10vw;
    }
`;


const SubContainerCardMultiNews = styled.div`
    display: flex;
    gap: 1vh;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    max-width: 400px;
    padding: 3% 5%;
    border-radius: 15px;

    @media (max-width: 600px) {
        border-radius: 10%;
        padding: 5% 8%;
    }

    @media (max-width: 500px) {
        width: 70%;
    }
`;

const IconCardMultiNews = styled.img`
    width: 70px;
    margin: 0 10px;

    @media (max-width: 600px) {
        width: 60px;
    }

    @media (max-width: 500px) {
        width: 80px;
    }

    @media (max-width: 400px) {
        width: 20vw;
    }
`;

const TitleCardMultiNews = styled.h1`
    font-weight: bold;
    cursor: pointer;
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

    @media (max-width: 700px) {
        font-size: 16px;
    }

    @media (max-width: 500px) {
        font-size: 5vw;
    }

    @media (max-width: 400px) {
        font-size: 7vw;
    }
`;

const DescritionCardMultiNews = styled.h2`
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

    @media (max-width: 700px) {
        font-size: 14px;
    }

    @media (max-width: 500px) {
        font-size: 3vw;
    }

    @media (max-width: 400px) {
        font-size: 5vw;
    }
`;
