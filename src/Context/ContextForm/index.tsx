import React, { createContext, useContext, useState, ReactNode, ChangeEvent,useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

interface Comment {
    id: string;
    title: string;
    comment: string;
}

interface NewsFormContextProps {
    title: string;
    comment: string;
    comments: Comment[];
    changeTitleFnc: (event: ChangeEvent<HTMLInputElement>) => void;
    changeCommentFnc: (event: ChangeEvent<HTMLInputElement>) => void;
    deleteCommentFnc: (id: string) => void;
    handleFormFnc: () => void;
}

const NewsContext = createContext<NewsFormContextProps | undefined>(undefined);

interface NewsFormProviderProps {
    children: ReactNode;
}

export const NewsFormProvider = ({ children }: NewsFormProviderProps) => {
    const [title, setTitle] = useState("");
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState<Comment[]>([]);
    const [loaded, setLoaded] = useState(false)

    const changeTitleFnc = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const changeCommentFnc = (event: React.ChangeEvent<HTMLInputElement>) => {
        setComment(event.target.value);
    };

    const handleFormFnc = () => {
        const commentNew: Comment = {
            id: uuidv4({}),
            title: title.trim(),
            comment: comment.trim(),
        };
        addCommentFnc(commentNew);
        setTitle("");
        setComment("");
    };

    const addCommentFnc = (comment: Comment) => {
        if (comment.comment.trim()) {
            setComments((prevComments) => [comment, ...prevComments]);
        }
    };

    const deleteCommentFnc = (id: string) => {
        setComments((prevComments) => prevComments.filter((comment) => comment.id !== id));
    };

    useEffect(() => {
        if (!loaded) {  
            setLoaded(true)
        }

    }, [loaded])

    const contextValue: NewsFormContextProps = {
        title,
        comment,
        comments,
        changeTitleFnc,
        changeCommentFnc,
        deleteCommentFnc,
        handleFormFnc,
    };

    return (
        <NewsContext.Provider value={contextValue}>
            {children}
        </NewsContext.Provider>
    );
};

export const useNewsForm = (): NewsFormContextProps => {
    const context = useContext(NewsContext);
    if (!context) {
        throw new Error("useNews must be used within a NewsProvider");
    }
    return context;
};
