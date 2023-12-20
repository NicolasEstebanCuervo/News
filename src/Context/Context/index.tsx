import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
    ChangeEvent,
} from "react";
import { v4 as uuidv4 } from "uuid";

interface Comment {
    id: string;
    title: string;
    comment: string;
}

export interface NewsItem {
    id: number;
    title?: string;
    category?: string;
    description?: string;
    name?: string;
    comment?: string;
}

interface NewsData {
    status: string;
    items: NewsItem[];
}

interface NewsContextProps {
    title: string;
    comment: string;
    comments: Comment[];
    changeTitleFnc: (event: ChangeEvent<HTMLInputElement>) => void;
    changeCommentFnc: (event: ChangeEvent<HTMLInputElement>) => void;
    deleteCommentFnc: (id: string) => void;
    handleFormFnc: () => void;
    newsData: NewsData | null;
}

const NewsContext = createContext<NewsContextProps | undefined>(undefined);

interface NewsProviderProps {
    children: ReactNode;
}

export const NewsProvider = ({ children }: NewsProviderProps) => {
    const [title, setTitle] = useState("");
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState<Comment[]>([]);
    const [newsData, setNewsData] = useState<NewsData | null>(null);

    const changeTitleFnc = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const changeCommentFnc = (event: React.ChangeEvent<HTMLInputElement>) => {
        setComment(event.target.value);
    };

    const handleFormFnc = () => {
        const commentNew: Comment = {
            id: uuidv4({}),
            title: title,
            comment: comment,
        };
        addCommentFnc(commentNew);
        setTitle("");
        setComment("");
    };

    const addCommentFnc = (comment: Comment) => {
        if (comment.comment.trim()) {
            setComments((comments) => {
                comment.comment = comment.comment.trim();
                comment.title = comment.title.trim();
                return [comment, ...comments];
            });
        }
    };

    const deleteCommentFnc = (id: string) => {
        setComments((currentComments) =>
            currentComments.filter((comment) => comment.id !== id)
        );
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await import("../Data");
                const responseData: NewsData = response.default;
                setNewsData(responseData);
            } catch (error) {
                console.error("Error fetching news data:", error);
            }
        };

        fetchData();
    }, []);

    const contextValue: NewsContextProps = {
        title,
        comment,
        comments,
        changeTitleFnc,
        changeCommentFnc,
        deleteCommentFnc,
        handleFormFnc,
        newsData,
    };

    return (
        <NewsContext.Provider value={contextValue}>
            {children}
        </NewsContext.Provider>
    );
};

export const useNews = (): NewsContextProps => {
    const context = useContext(NewsContext);
    if (!context) {
        throw new Error("useNews must be used within a NewsProvider");
    }
    return context;
};
