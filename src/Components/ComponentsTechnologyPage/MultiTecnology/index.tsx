import styled from "@emotion/styled";
import { useNews } from "../../../Context/Context";

export default function MultiTechnology() {
    const { newsData } = useNews();

    if (!newsData || !newsData.items || newsData.items.length === 0) {
        return <div>Cargando...</div>;
    }

    const noticiasTecnologia = newsData.items.filter(
        (noticia) => noticia.category === "technology"
    );

    const noticiasArray: number[] = [];

    while (noticiasArray.length < 3) {
        const numeroAleatorio = Math.floor(Math.random() * noticiasTecnologia.length);
        if (!noticiasArray.includes(numeroAleatorio)) {
            noticiasArray.push(numeroAleatorio);
        }
    }
    
    const imagenesFijas = ['TechnologyIcon1.png', 'TechnologyIcon2.png', 'TechnologyIcon3.png'];

    return (
        <ContainerMultiNew>
            <TitleMultiNew>En la capital del país.</TitleMultiNew>
            <SubContainerMultiNew>
                {noticiasArray.map((index, i) => (
                    <CardMultiNew key={index}>
                        <SubContainerCardMultiNew>
                            <IconCardMultiNew
                                src={require(`../../../Assets/Icons/${imagenesFijas[i]}`)}
                            ></IconCardMultiNew>
                            <TitleCardMultiNew
                                onClick={() => {
                                    window.location.href = `/Technology/:${noticiasTecnologia[index].id}`;
                                }}
                            >
                                {noticiasTecnologia[index].title}
                            </TitleCardMultiNew>
                            <DescritionCardMultiNew>
                                {noticiasTecnologia[index].description}
                            </DescritionCardMultiNew>
                        </SubContainerCardMultiNew>
                    </CardMultiNew>
                ))}
            </SubContainerMultiNew>
        </ContainerMultiNew>
    );
    
}

const ContainerMultiNew = styled.section`
    background: #f2f4f4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10vh 0;

    gap: 5vh;

    @media (max-width: 700px) {
        gap: 2vh;
    }
`;

const SubContainerMultiNew = styled.div`
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

const CardMultiNew = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2vh;
`;

const TitleMultiNew = styled.h1`
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

const SubContainerCardMultiNew = styled.div`
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

const IconCardMultiNew = styled.img`
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

const TitleCardMultiNew = styled.h1`
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

const DescritionCardMultiNew = styled.h2`
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
