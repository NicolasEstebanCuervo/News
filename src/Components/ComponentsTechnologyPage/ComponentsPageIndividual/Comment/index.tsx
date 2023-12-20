import styled from "@emotion/styled";

export interface commentProps {
    id: string;
    title: string;
    comment: string;
    randomImage: string;
    deleteCommentFnc: (id: string) => void;
}

export default function Comment({
    id,
    title,
    comment,
    deleteCommentFnc,
    randomImage,
}: commentProps) {
    return (
        <ContainerComment>
            <ImageComment src={randomImage} />
            <ExitIcon
                onClick={() => deleteCommentFnc(id)}
                className="bi bi-x-lg"
            ></ExitIcon>
            <ContainerTexsComments>
                <Name>{title}</Name>
                <CommentPerson>{comment}</CommentPerson>
            </ContainerTexsComments>
        </ContainerComment>
    );
}

const ContainerComment = styled.div`
    background: #f7f6f6;
    border: 1px solid #a5a3a3;
    border-radius: 2px;
    gap: 1%;
    padding: 2% 1%;
    display: flex;
    align-items: start;
    position: relative;
`;

const ImageComment = styled.img`
    width: 60px;

    @media (max-width: 400px) {
        width: 50px;
    }

    @media (max-width: 300px) {
        width: 40px;
    }

    @media (max-width: 200px) {
        width: 30px;
    }

    @media (max-width: 100px) {
        width: 5%;
    }
`;

const ExitIcon = styled.i`
    position: absolute;
    top: 5%;
    right: 1.5%;
    cursor: pointer;

    @media (max-width: 500px) {
        top: 1%;
    }

    @media (max-width: 300px) {
        font-size: 5vw;
    }
`;

const ContainerTexsComments = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Name = styled.h1`
    font-size: 27px;
    font-weight: 800;

    @media (max-width: 1200px) {
        font-size: 25px;
    }

    @media (max-width: 700px) {
        font-size: 27px;
    }

    @media (max-width: 600px) {
        font-size: 6vw;
    }

    @media (max-width: 400px) {
        font-size: 7vw;
    }
`;

const CommentPerson = styled.p`
    font-size: 17px;
    margin: 0;

    @media (max-width: 1200px) {
        font-size: 20px;
    }

    @media (max-width: 700px) {
        font-size: 17px;
    }

    @media (max-width: 600px) {
        font-size: 4vw;
    }

    @media (max-width: 400px) {
        font-size: 5vw;
    }
`;
