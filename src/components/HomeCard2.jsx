import styled from "styled-components";
import LinkButton from "../UI/LinkButton";
import Card from "../UI/Card";

const Container = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;

    .image,
    .content {
        grid-column: 1 / 3;
        height: 100%;
        width: 100%;
    }

    img {
        border-radius: 10px;
        width: 100%;
    }

    .tablet,
    .desktop {
        display: none;
    }

    @media (min-width: 768px) {
        margin-top: 2rem;

        .image {
            grid-column: 1 / 2;
        }

        .content {
            grid-column: 2 / 3;
        }

        .mobile {
            display: none;
        }

        .tablet {
            display: block;
        }
    }

    @media (min-width: 1200px) {
        gap: 1.875rem;
        margin-top: 3rem;

        .tablet {
            display: none;
        }

        .desktop {
            display: block;
        }
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 12%;
`;

const Title = styled.h3`
    text-transform: uppercase;
    font-size: 1.75rem;
    line-height: 2.4375rem;
    letter-spacing: 2px;
    font-weight: 700;
    margin-bottom: 2rem;
`;

export default function ProductCard2() {
    return (
        <Container>
            <Card className="image">
                <div data-aos-offset="300" data-aos="fade-right">
                    <img
                        className="mobile"
                        src={
                            require("../assets/home/mobile/image-earphones-yx1.jpg")
                                .default
                        }
                        alt="yx1 earphone"
                    />
                    <img
                        className="tablet"
                        src={
                            require("../assets/home/tablet/image-earphones-yx1.jpg")
                                .default
                        }
                        alt="yx1 earphone"
                    />
                    <img
                        className="desktop"
                        src={
                            require("../assets/home/desktop/image-earphones-yx1.jpg")
                                .default
                        }
                        alt="yx1 earphone"
                    />
                </div>
            </Card>
            <Card
                backgroundColor="#F1F1F1"
                className="content"
                dataAos="fade-left"
            >
                <Content data-aos="fade-left" data-aos-offset="300">
                    <Title>yx1 earphones</Title>
                    <LinkButton
                        to="/yx1-earphones"
                        background="transparent"
                        backgroundHover="#000"
                        border
                        color="#000"
                    />
                </Content>
            </Card>
        </Container>
    );
}
