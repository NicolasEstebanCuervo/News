import styled from "@emotion/styled";

export default function MoreText() {

    return (
        <ContainerNew>
            <SubContainerNew>
                <TextContainer>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin eget justo ut sem hendrerit porttitor. Ut vel enim
                        nec odio fringilla dignissim. Nullam aliquet, neque ac
                        luctus bibendum, libero enim ultricies libero, a
                        fermentum nibh justo vel lectus. Lorem ipsum dolor sit
                        amet, consectetur aliquet, neque ac luctus bibendum,
                        libero enim ultricies libero, a fermentum nibh justo vel
                        lectus.
                    </Text>
                    <LineDivider />
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin eget justo ut sem hendrerit porttitor. Ut vel enim
                        nec odio fringilla dignissim. Nullam aliquet, neque ac
                        luctus bibendum, libero enim ultricies libero, a
                        fermentum nibh justo vel lectus. Lorem ipsum dolor sit
                        amet, consectetur aliquet, neque ac luctus bibendum,
                        libero enim ultricies libero, a fermentum nibh justo vel
                        lectus.
                    </Text>
                    <LineDivider />
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin eget justo ut sem hendrerit porttitor. Ut vel enim
                        nec odio fringilla dignissim. Nullam aliquet, neque ac
                        luctus bibendum, libero enim ultricies libero, a
                        fermentum nibh justo vel lectus. Lorem ipsum dolor sit
                        amet, consectetur aliquet, neque ac luctus bibendum,
                        libero enim ultricies libero, a fermentum nibh justo vel
                        lectus.
                    </Text>
                    <LineDivider />
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin eget justo ut sem hendrerit porttitor. Ut vel enim
                        nec odio fringilla dignissim. Nullam aliquet, neque ac
                        luctus bibendum, libero enim ultricies libero, a
                        fermentum nibh justo vel lectus. Lorem ipsum dolor sit
                        amet, consectetur aliquet, neque ac luctus bibendum,
                        libero enim ultricies libero, a fermentum nibh justo vel
                        lectus.
                    </Text>{" "}
                    <LineDivider />
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin eget justo ut sem hendrerit porttitor. Ut vel enim
                        nec odio fringilla dignissim. Nullam aliquet, neque ac
                        luctus bibendum, libero enim ultricies libero, a
                        fermentum nibh justo vel lectus. Lorem ipsum dolor sit
                        amet, consectetur aliquet, neque ac luctus bibendum,
                        libero enim ultricies libero, a fermentum nibh justo vel
                        lectus.
                    </Text>
                </TextContainer>
                <TextContainer>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin eget justo ut sem hendrerit porttitor. Ut vel enim
                        nec odio fringilla dignissim. Nullam aliquet, neque ac
                        luctus bibendum, libero enim ultricies libero, a
                        fermentum nibh justo vel lectus. Lorem ipsum dolor sit
                        amet, consectetur aliquet, neque ac luctus bibendum,
                        libero enim ultricies libero, a fermentum nibh justo vel
                        lectus.
                    </Text>
                    <LineDivider />
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin eget justo ut sem hendrerit porttitor. Ut vel enim
                        nec odio fringilla dignissim. Nullam aliquet, neque ac
                        luctus bibendum, libero enim ultricies libero, a
                        fermentum nibh justo vel lectus. Lorem ipsum dolor sit
                        amet, consectetur aliquet, neque ac luctus bibendum,
                        libero enim ultricies libero, a fermentum nibh justo vel
                        lectus.
                    </Text>
                    <LineDivider />
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin eget justo ut sem hendrerit porttitor. Ut vel enim
                        nec odio fringilla dignissim. Nullam aliquet, neque ac
                        luctus bibendum, libero enim ultricies libero, a
                        fermentum nibh justo vel lectus. Lorem ipsum dolor sit
                        amet, consectetur aliquet, neque ac luctus bibendum,
                        libero enim ultricies libero, a fermentum nibh justo vel
                        lectus.
                    </Text>
                    <LineDivider />
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin eget justo ut sem hendrerit porttitor. Ut vel enim
                        nec odio fringilla dignissim. Nullam aliquet, neque ac
                        luctus bibendum, libero enim ultricies libero, a
                        fermentum nibh justo vel lectus. Lorem ipsum dolor sit
                        amet, consectetur aliquet, neque ac luctus bibendum,
                        libero enim ultricies libero, a fermentum nibh justo vel
                        lectus.
                    </Text>{" "}
                    <LineDivider />
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin eget justo ut sem hendrerit porttitor. Ut vel enim
                        nec odio fringilla dignissim. Nullam aliquet, neque ac
                        luctus bibendum, libero enim ultricies libero, a
                        fermentum nibh justo vel lectus. Lorem ipsum dolor sit
                        amet, consectetur aliquet, neque ac luctus bibendum,
                        libero enim ultricies libero, a fermentum nibh justo vel
                        lectus.
                    </Text>
                </TextContainer>
            </SubContainerNew>
        </ContainerNew>
    );
}

const ContainerNew = styled.section`
    display: flex;
    gap: 5vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Noto Serif", serif;
`;

const SubContainerNew = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    gap: 5%;

    @media (max-width: 800px) {
        width: 90%;
    }

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

const TextContainer = styled.div`
    flex: 1;
    margin: 0 10px;
`;

const Text = styled.p`
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

const LineDivider = styled.hr`
    color: #161616;
`;
