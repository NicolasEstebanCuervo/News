import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface ImageContextProps {
    addImageUrl: (url: string) => void;
    getImageUrls: () => string[];
}

const ImageContext = createContext<ImageContextProps | undefined>(undefined);

interface ImageProviderProps {
    children: ReactNode;
}

export const ImageProvider: React.FC<ImageProviderProps> = ({ children }) => {
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    const [loaded, setLoaded] = useState(false);

    const addImageUrl = (url:string) => {
        setImageUrls([...imageUrls, url]);
    };
    const getImageUrls = () => imageUrls;

    const contextValue: ImageContextProps = {
        addImageUrl,
        getImageUrls,
    };

    useEffect(() => {
        if (!loaded) {
            const randomImageUrl = `https://api.dicebear.com/7.x/micah/svg?seed=${
                Math.floor(Math.random() * 100) + 1
            }.svg`;
            addImageUrl(randomImageUrl);
            setLoaded(true);
        }
    }, [loaded]);

    return (
        <ImageContext.Provider value={contextValue}>
            {children}
        </ImageContext.Provider>
    );
};

export const useImage = (): ImageContextProps => {
    const context = useContext(ImageContext);
    if (!context) {
        throw new Error("useImage debe ser usado dentro de ImageProvider");
    }
    return context;
};
