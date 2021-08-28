import styled from "styled-components";

const Container = styled.section`
    display: grid;
    gap: 1.25rem;
    margin-bottom: 7.5rem;

    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }

    .tablet, .desktop {
        display: none;
    }

    @media (min-width: 768px) {
        grid-template-columns: 0.8fr 1fr;

        .mobile {
            display: none;
        }

        .tablet {
            display: block;
        }

        .third {
            grid-row: 1 / 3;
            grid-column: 2 / 3;
        }
    }

    @media (min-width: 1200px) {
        gap: 2rem;
        margin-bottom: 10rem;
        
        .tablet {
            display: none;
        }

        .desktop {
            display: block;
        }
    }
`;

export default function Gallery(props) {
    return (
        <Container>
            <div className="first" data-aos="zoom-in">
                <img className="mobile" src={require("../" + props.first.mobile.slice(2)).default} alt="" />
                <img
                    className="tablet"
                    src={require("../" + props.first.tablet.slice(2)).default}
                    alt=""
                />
                <img
                    className="desktop"
                    src={require("../" + props.first.desktop.slice(2)).default}
                    alt=""
                />
            </div>
            <div className="second" data-aos="zoom-in" data-aos-delay="100">
                <img className="mobile" src={require("../" + props.second.mobile.slice(2)).default} alt="" />
                <img
                    className="tablet"
                    src={require("../" + props.second.tablet.slice(2)).default}
                    alt=""
                />
                <img
                    className="desktop"
                    src={require("../" + props.second.desktop.slice(2)).default}
                    alt=""
                />
            </div>
            <div className="third" data-aos="zoom-in" data-aos-delay="200">
                <img className="mobile" src={require("../" + props.third.mobile.slice(2)).default} alt="" />
                <img
                    className="tablet"
                    src={require("../" + props.third.tablet.slice(2)).default}
                    alt=""
                />
                <img
                    className="desktop"
                    src={require("../" + props.third.desktop.slice(2)).default}
                    alt=""
                />
            </div>
        </Container>
    );
}
