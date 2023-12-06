import  {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

export interface NewsItem {
    id: number;
    title: string;
    category: string;
    description?: string;
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

export const NewsProvider = ({ children }:NewsProviderProps) => {
    const [newsData, setNewsData] = useState<NewsData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await import("../Data");
                setNewsData(response.default);
            } catch (error) {
                console.error("Error fetching news data:", error);
            }
        };
        
        fetchData();
    }, []);

    return (
        <NewsContext.Provider value={{ newsData }}>
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
