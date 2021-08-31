import styled from "styled-components";
import speakerMobile from "../assets/home/mobile/image-speaker-zx9.png";
import speakerTablet from "../assets/home/tablet/image-speaker-zx9.png";
import speakerDesktop from "../assets/home/desktop/image-speaker-zx9.png";
import LinkButton from "../UI/LinkButton";
import Paragraph from "./Paragraph";

const Card = styled.div`
    display: grid;
    place-items: center;
    text-align: center;
    color: #fff;
    background-color: ${(props) => props.theme.palette.primary.main};
    background-image: url(${require("../assets/home/desktop/pattern-circles.svg").default});
    background-size: cover;
    background-position: center;
    padding: 16.8% 7.4%;
    border-radius: 10px;
    margin-top: 7.5rem;
    overflow: hidden;
    position: relative;

    @media (min-width: 768px) {
        padding: 8% 24.6%;
        margin-bottom: 2rem;
    }

    @media (min-width: 1440px) {
        grid-template-columns: 1fr 1fr;
        column-gap: 7.8%;
        justify-items: start;
        text-align: left;
        padding: 6rem 8.5% 0 10.5%;
        margin-bottom: 48px;
    }
`;

const Img = styled.img`
    width: 10.75rem;
    margin-bottom: 2rem;

    &.tablet,
    &.desktop {
        display: none;
    }

    @media (min-width: 768px) {
        &.mobile {
            display: none;
        }

        &.tablet {
            display: block;
        }
    }

    @media (min-width: 1440px) {
        &.tablet {
            display: none;
        }

        &.desktop {
            display: block;
            width: 100%;
            max-width: 410px;
            grid-row: 1 / 4;
            position: relative;
            top: 2.5rem;
            justify-self: center;
        }
    }
`;

const Speaker = styled.h2`
    font-size: 2.25rem;
    line-height: 2.5rem;
    letter-spacing: 1.3px;
    text-transform: uppercase;
    margin: 1.5rem auto;
    width: 80%;

    @media (min-width: 768px) {
        font-size: 3.5rem;
        line-height: 3.625rem;
    }

    @media (min-width: 1440px) {
        font-size: 3.5rem;
        line-height: 3.625rem;
    }
`;

const Description = styled(Paragraph)`
    margin-bottom: 1.5rem;
    margin-inline: auto;

    @media (min-width: 768px) {
        width: 90%;
        margin-bottom: 2.5rem;
    }

    @media (min-width: 1440px) {
        width: 70%;
    }
`;

const Content = styled.div`
    @media (min-width: 1440px) {
        grid-row: 1 / 4;
        margin-bottom: 10rem;

        h2, p {
            margin-inline: 0;
        }
    }
`;

export default function PremiumSpeaker() {

    return (
        <Card>
            <Img data-aos="fade-up" src={speakerMobile} alt="zx9 speaker" className="mobile" />
            <Img data-aos="fade-up" src={speakerTablet} alt="zx9 speaker" className="tablet" />
            <Img data-aos="fade-up" src={speakerDesktop} alt="zx9 speaker" className="desktop" />
            <Content data-aos="zoom-out">
                <Speaker>zx9 speaker</Speaker>
                <Description>
                    Upgrade to premium speakers that are phenomenally built to
                    deliver truly remarkable sound.
                </Description>
                    <LinkButton to='/product/zx9-speaker' background="#000" backgroundHover="#4C4C4C"/>
            </Content>
        </Card>
    );
}
