import React, { useEffect, useState } from "react";
import { useNews } from "../../../../Context/ContextData";
import { useNewsForm } from "../../../../Context/ContextForm";
import Comment from "../Comment";
import FormComponent from "../FormComment";
import styled from "@emotion/styled";

const ListComments = () => {
    const [heartFilled, setHeartFilled] = useState(false);

    const context = useNews();
    const contextForm = useNewsForm();

    const { newsData } = context;

    const {
        comments,
        title,
        comment,
        deleteCommentFnc,
        changeTitleFnc,
        changeCommentFnc,
        handleFormFnc,
    } = contextForm;

    const fncNewComments =
        newsData?.items?.filter((comment) => comment.category === "comment") ||
        [];

    useEffect(() => {
        const randomImageUrl = generateProfileImageURL(Date.now());
    }, []);

    const generateProfileImageURL = (email: number): string => {
        return `https://api.dicebear.com/7.x/micah/svg?seed=${email}.svg`;
    };

    return (
        <ContainerComments>
            <SubContainerComments>
                <TitleCardsNews>Comentarios</TitleCardsNews>
                <FormComponent
                    title={title}
                    comment={comment}
                    changeTitleFnc={changeTitleFnc}
                    changeCommentFnc={changeCommentFnc}
                    handleFormFnc={handleFormFnc}
                />
                <div>
                    {comments.map((comment) => (
                        <Comment
                            key={comment.id}
                            id={comment.id}
                            title={comment.title}
                            comment={comment.comment}
                            deleteCommentFnc={deleteCommentFnc}
                            randomImage={generateProfileImageURL(
                                Math.floor(Math.random() * 100) + 1
                            )}
                        />
                    ))}
                </div>
                {fncNewComments.map((comment) => (
                    <ContainerComment key={comment.id}>
                        <HeartIcon
                            className={`bi ${
                                heartFilled ? "bi-suit-heart-fill" : "bi-heart"
                            }`}
                            onClick={() => setHeartFilled(!heartFilled)}
                        ></HeartIcon>
                        <ImageComment
                            src={generateProfileImageURL(
                                Math.floor(Math.random() * 100) + 1
                            )}
                            alt={`${comment.name}'s avatar`}
                        />
                        <ContainerTexsComments>
                            <Name>{comment.name}</Name>
                            <CommentPerson>{comment.comment}</CommentPerson>
                        </ContainerTexsComments>
                    </ContainerComment>
                ))}
            </SubContainerComments>
        </ContainerComments>
    );
};

export default ListComments;

const ContainerComments = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Noto Serif", serif;
    width: 90%;
`;

const SubContainerComments = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 5vh;

    @media (max-width: 1200px) {
        width: 70%;
    }

    @media (max-width: 1000px) {
        width: 80%;
    }

    @media (max-width: 700px) {
        gap: 2vh;
        width: 90%;
    }

    @media (max-width: 400px) {
        width: 95%;
    }
`;

const TitleCardsNews = styled.h1`
    text-align: center;
    font-size: 50px;
    font-weight: 800;

    @media (max-width: 750px) {
        font-size: 40px;
    }

    @media (max-width: 400px) {
        font-size: 13vw;
    }
`;

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

const HeartIcon = styled.i`
    font-size: 20px;
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
