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
        <>
            <form onSubmit={handreSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    name="title"
                    value={title}
                    onChange={changeTitleFnc}
                ></input>

                <input
                    type="text"
                    placeholder="Comment"
                    name="comment"
                    value={comment}
                    onChange={changeCommentFnc}
                ></input>
                <button type="submit">uwu</button>
            </form>
        </>
    );
}
