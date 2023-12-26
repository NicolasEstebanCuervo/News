import styled from "@emotion/styled";
import { useNews } from "../../../../Context/ContextData";
import { useParams } from "react-router-dom";

const HeaderComponent = () => {
    const { newsData } = useNews();
    const { id } = useParams();
    let idWithoutFirstDigit: string | undefined;

    if (id !== undefined) {
        idWithoutFirstDigit = id.slice(1);
    } else {
        console.error("El parámetro 'id' es undefined");
    }

    if (id !== undefined) {
        idWithoutFirstDigit = id.slice(1);
    } else {
        console.error("El parámetro 'id' es undefined");
    }

    if (!newsData || !newsData.items || newsData.items.length === 0) {
        return <div>Cargando...</div>;
    }

    const fncNewsTechnology = newsData.items.filter(
        (newPost) => newPost.id === Number(idWithoutFirstDigit)
    );

    const newSelected = fncNewsTechnology[0];

    return (
        <Header>
            <SubContainerHeader>
                {newSelected && (
                    <ContainerTextsHeader>
                        <TitleHeader>{newSelected.title}</TitleHeader>
                        <SubtitleHeader>
                            {newSelected.description}
                        </SubtitleHeader>
                    </ContainerTextsHeader>
                )}
            </SubContainerHeader>
        </Header>
    );
};

export default HeaderComponent;

const Header = styled.header`
    height: 70vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
            to right,
            hsla(218, 61%, 32%, 1) 0%,
            hsla(0, 0%, 0%, 0.573)
        ),
        url(${require("../../../../Assets/Images/ScienceImage6.webp")});
        font-family: "Noto Serif", serif;
`;

const SubContainerHeader = styled.header`
    width: 90%;
`;

const ContainerTextsHeader = styled.section`
    display: flex;
    height: 430px;
    width: 100;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`;

const TitleHeader = styled.h1`
    font-size: 70px;
    font-weight: bold;
    color: #fff;

    @media (max-width: 1000px) {
        font-size: 3vw;
    }

    @media (max-width: 700px) {
        font-size: 8vw;
    }

    @media (max-width: 400px) {
        font-size: 10vw;
    }
`;

const SubtitleHeader = styled.h1`
    color: #fff;
    font-size: 25px;

    @media (max-width: 1000px) {
        font-size: 3vw;
    }

    @media (max-width: 700px) {
        font-size: 5vw;
    }

    @media (max-width: 400px) {
        font-size: 6vw;
    }
`;
