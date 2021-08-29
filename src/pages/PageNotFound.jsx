import styled from "styled-components";
import CategorySection from "../components/CategorySection";
import Page from "../components/Page";

const Container = styled.div`
    text-align: center;
    margin: 15% auto;
    font-weight: 700;
`;

const Protocol = styled.p`
    font-size: 7.5rem;
    margin: 0 auto;
`;

const NotFound = styled.p`
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
`;

const Check = styled.p`
    font-size: 1.25rem;
    margin-bottom: 2rem;
`;

const Products = styled.p`
    font-size: 1.2rem;
    margin-bottom: 5rem;
    `

export default function PageNotFound() {
    return (
        <Page blank>
            <Container>
                <Protocol>404</Protocol>
                <NotFound>Page not found</NotFound>
                <Check>
                    Looks like this page does not exist. Check the URL and try
                    again
                </Check>
                <Products>Our products</Products>
                <CategorySection />
            </Container>
        </Page>
    );
}
