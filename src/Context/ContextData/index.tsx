import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
    ChangeEvent,
} from "react";
import { v4 as uuidv4 } from "uuid";

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
    newsData: NewsData | null;
}

const NewsContext = createContext<NewsContextProps | undefined>(undefined);

interface NewsProviderProps {
    children: ReactNode;
}

export const NewsProvider = ({ children }: NewsProviderProps) => {
    const [newsData, setNewsData] = useState<NewsData | null>(null);
    const [loaded, setLoaded] = useState(false)

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
        if (!loaded) {
            fetchData()
            setLoaded(true)
        }
    }, [loaded])


    const contextValue: NewsContextProps = {
        newsData
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
