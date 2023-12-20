import styled from "@emotion/styled";
import { NewsItem, useNews } from "../../../Context/ContextData";

export default function NewComponent() {
    const { newsData } = useNews();

    if (!newsData) {
        return <div>Cargando...</div>;
    }

    return (
        <ContainerNewComponent>
            <TitleNew>Politica</TitleNew>
            {newsData.items.slice(0,3).map((item: NewsItem)=> (
                <ContainerNew key={item.id}>
                    <TitleNewIndividual onClick={()=>{window.location.href =`/Politics/:${item.id}`}}>{item.title}</TitleNewIndividual>
                    <DescriptionNew>{item.description}</DescriptionNew>
                    <LineDivider />
                </ContainerNew>
            ))}
        </ContainerNewComponent>
    );
}

const ContainerNewComponent = styled.section`
    background: #030616;
    padding: 1%;
    width: 30%;
    height: 30%;
    max-width: 500px;

    @media (max-width: 600px) {
        display: none;
    }

    @media (max-width: 800px) {
        width: 35%;
        padding: 2% 3%;
    }
`;

const TitleNew = styled.h1`
    font-size: 30px;
    font-weight: 800;
    color: #deaf10;

    @media (max-width: 1000px) {
        font-size: 25px;
    }

    @media (max-width: 750px) {
        font-size: 20px;
    }
`;

const ContainerNew = styled.div`
    
`;

const TitleNewIndividual = styled.h1`
    cursor: pointer;
    font-size: 20px;
    font-weight: 800;
    color: #ffffff;

    @media (max-width: 1000px) {
        font-size: 17px;
    }

    @media (max-width: 750px) {
        font-size: 15px;
    }
`;

const DescriptionNew = styled.h3`
    font-size: 18px;
    margin: 0;
    color: #fff;

    @media (max-width: 1000px) {
        font-size: 15px;
    }

    @media (max-width: 750px) {
        font-size: 13px;
    }
`;

const LineDivider = styled.hr`
    color: #fff;
`;
