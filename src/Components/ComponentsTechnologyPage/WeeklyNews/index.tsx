import styled from "@emotion/styled";
import { useNews } from "../../../Context/ContextData";

export default function WeeklyNews() {
    const { newsData } = useNews();

    if (!newsData || !newsData.items || newsData.items.length === 0) {
        return <div>Cargando...</div>;
    }

    const fncNewsTechnology = newsData.items.filter(
        (newPost) => newPost.category === "technology"
    );

    return (
        <WeeklyNewsContainer>
            <WeeklyNewsTitle>Noticia de la semana</WeeklyNewsTitle>
            {fncNewsTechnology.slice(0, 1).map((post, index) => (
                <WeeklyNewsItem key={index}>
                    <NewsImage
                        src={require("../../../Assets/Images/TechnologyImage5.webp")}
                        alt={post.title}
                    />
                    <NewsInfoContainer>
                        <NewsTitle href={`/Technology/:${post.id}`}>{post.title}</NewsTitle>
                        <NewsParagraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aliquam sed ipsa enim aut ea. Amet quae
                            blanditiis ex voluptas similique consequatur, cumque
                            facere necessitatibus sequi eaque mollitia fuga
                            nihil excepturi?Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Itaque quidem error
                            maiores fugit nulla.
                        </NewsParagraph>
                    </NewsInfoContainer>
                </WeeklyNewsItem>
            ))}
        </WeeklyNewsContainer>
    );
}

const WeeklyNewsContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    gap: 5vh;
    font-family: "Noto Serif", serif;

    @media (max-width: 700px) {
        gap: 2vh;
    }
`;

const WeeklyNewsTitle = styled.h1`
    text-align: center;
    font-size: 50px;
    font-weight: bold;


    @media (max-width: 750px) {
        font-size: 40px;
        width: 100%;
    }

    @media (max-width: 400px) {
        font-size: 8vw;
    }
`;

const WeeklyNewsItem = styled.div`
    background: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    border-radius: 15px;
    justify-content: space-between;
    padding: 2%;
    gap: 5%;

    @media (max-width: 1250px) {
        width: 95%;
    }

    @media (max-width: 700px) {
        width: 100%;
        gap: 2vh;
        flex-direction: column;
    }
`;

const NewsImage = styled.img`
    width: 100%;
    max-width: 400px;
    border-radius: 25px;

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
        max-width: 250px;
    }


    @media (max-width: 700px) {
        max-width: 480px;
    }

    @media (max-width: 600px) {
        border-radius: 2%;
    }
`;

const NewsInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 700px) {
        padding: 0 5%;
    }

`;

const NewsTitle = styled.a`
    font-size: 35px;
    margin: 0;
    font-weight: bold;
    text-decoration-line: none;
    color: #000;

    @media (max-width: 1200px) {
        font-size: 30px;
    }

    @media (max-width: 1000px) {
        font-size: 25px;
    }

    @media (max-width: 600px) {
        font-size: 6vw;
    }

    @media (max-width: 400px) {
        font-size: 7vw;
    }
`;

const NewsParagraph = styled.p`
    font-size: 20px;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;

    @media (max-width: 1200px) {
        font-size: 18px;
    }

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
