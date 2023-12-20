import styled from "@emotion/styled";
import { useState, FormEvent, ChangeEvent } from "react";
interface FormProps {
    changeTitleFnc: (event: React.ChangeEvent<HTMLInputElement>) => void;
    changeCommentFnc: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleFormFnc: () => void;
    title: string;
    comment: string;
}

export default function FormComponent({
    changeTitleFnc,
    changeCommentFnc,
    handleFormFnc,
    title,
    comment,
}: FormProps) {
    const handreSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        handleFormFnc();
    };

    return (
        <ContainerComment onSubmit={handreSubmit}>
            <ContainerTexsComments>
                <Name
                    type="text"
                    placeholder="Nombre"
                    name="title"
                    value={title}
                    onChange={changeTitleFnc}
                ></Name>

                <CommentPerson
                    type="textarea"
                    placeholder="Comentario"
                    name="comment"
                    value={comment}
                    onChange={changeCommentFnc}
                ></CommentPerson>
            </ContainerTexsComments>
            <LineDivider />
            <Submit type="submit">Enviar</Submit>
        </ContainerComment>
    );
}

const ContainerComment = styled.form`
    background: #f7f6f6;
    border: 1px solid #a5a3a3;
    border-radius: 2px;
    gap: 1%;
    padding: 2% 0;
    display: flex;
    flex-direction: column;
    align-items: start;
`;

const ContainerTexsComments = styled.div`
    display: flex;
    gap: 3vh;
    flex-direction: column;
    justify-content: center;
    background: #f7f6f6;
    margin-left: 2%;
`;

const Name = styled.input`
    font-size: 27px;
    background: #f7f6f6;
    font-weight: 800;
    border: none;

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
    :focus {
        outline: none;
        border: none;
    }
`;

const CommentPerson = styled.input`
    font-size: 20px;
    width: 100%;
    background: #f7f6f6;
    margin: 0;
    border: none;
    height: 5vh;

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

    :focus {
        outline: none;
        border: none;
    }
`;

const LineDivider = styled.hr`
    color: #000;
    width: 100%;
`;

const Submit = styled.button`
    align-self: flex-end;
    color: #e8e0e0;
    text-decoration: none;
    background-color: #1E8449;
    border: none;
    padding: 8px 25px;
    text-align: center;
    font-size: 17px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
    margin-right: 2%;

    :hover {
        background: #196e3c
    }

    @media (max-width: 400px) {
        font-size: 5vw;
        padding: 1vh 10vw;
    }
`;
