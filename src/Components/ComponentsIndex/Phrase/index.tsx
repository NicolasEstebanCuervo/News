import styled from "@emotion/styled";
import { useEffect, useState } from "react";

export default function Phrase () {
    const titlePhrases = [
        "Mantente informado con las últimas noticias y titulares de última hora en nuestra plataforma de noticias.",
        "Explora un mundo de eventos actuales y cobertura en profundidad en nuestro sitio web de noticias.",
        "Descubre las historias que más importan con nuestra cobertura de noticias completa.",
        "Involúcrate con información oportuna y confiable de nuestra fuente de noticias de confianza.",
        "Descubre un centro de excelencia periodística y mantente conectado con el pulso del mundo en nuestro sitio de noticias.",
    ];

    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [currentPhrase, setCurrentPhrase] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        if (isTyping) {
            const phraseTimeout = setTimeout(() => {
                if (currentPhrase.length < titlePhrases[currentPhraseIndex].length) {
                    const nextCharIndex = currentPhrase.length;
                    setCurrentPhrase(
                        titlePhrases[currentPhraseIndex].substring(0, nextCharIndex + 1)
                    );
                } else {
                    setIsTyping(false);
                    setTimeout(() => {
                        setCurrentPhrase("");
                        setCurrentPhraseIndex(
                            (prevIndex) => (prevIndex + 1) % titlePhrases.length
                        );
                        setIsTyping(true);
                    }, 3000); 
                }
            }, 50);

            return () => clearTimeout(phraseTimeout);
        }
    }, [currentPhrase, currentPhraseIndex, isTyping, titlePhrases]);

    return (
        <HeaderContainer>
            <SubContainerPhrase>
                    <TitlePharse>{currentPhrase}</TitlePharse>
            </SubContainerPhrase>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 30vh; 
    padding: 5%; 
    width:100%;
    background-color: rgb(3, 21, 39);

    @media (max-width: 1250px) {
        min-height: 20px;
    }

    @media (max-width: 1000px) {
        min-height: 15vh; 
    }

`;

const SubContainerPhrase = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
`;

const TitlePharse = styled.h1`
    font-size: 70px;
    color: #fff;

    @media (max-width: 1250px) {
        font-size: 60px;
    }

    @media (max-width: 1000px) {
        font-size: 40px;
    }

    @media (max-width: 750px) {
        font-size: 45px;
    }

    @media (max-width: 550px) {
        font-size: 7vw;
    }

    @media (max-width: 250px) {
        font-size: 9vw;
    }
`;