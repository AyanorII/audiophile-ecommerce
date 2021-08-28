import styled from "styled-components";
import { useForm, Controller, FormProvider } from "react-hook-form";
import Input from "../UI/Input";
import Page from "../components/Page";
import BillingDetails from "../components/BillingDetails";
import ShippingInfo from "../components/ShippingInfo";
import PaymentDetails from "../components/PaymentDetails";
import Summary from "../components/Summary";

const Form = styled.form`
    display: grid;
    row-gap: 2rem;

    @media (min-width: 1200px) {
        grid-template-columns: 1fr 0.5fr;
        column-gap: 3.5rem;
    }
`;

const Heading = styled.h2`
    font-size: 1.75rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-block: 2rem;
`;

const BG = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f1f1f1;
    padding: 5% 0;

    @media (min-width: 768px) {
        padding: 5% 2.5%;
    }

    @media (min-width: 1200px) {
        padding: 2.5% 0;
    }
`;

export default function Checkout(props) {
    const form = useForm();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        control,
    } = form;

    const onSubmit = () => console.log("purchased");

    return (
        <BG>
            <Page checkout padding>
                <Heading>Checkout</Heading>
                <FormProvider {...form}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <BillingDetails />
                        <ShippingInfo />
                        <PaymentDetails />
                        <Summary
                            cart={props.cart}
                            totalPrice={props.totalPrice}
                        />
                    </Form>
                </FormProvider>
            </Page>
        </BG>
    );
}
