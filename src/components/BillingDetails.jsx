import CheckoutSection, {
    Container,
    InputContainer,
    Label,
    Title,
} from "./CheckoutSection";
import Input from "../UI/Input";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

export default function BillingDetails(props) {
    const {
        formState: { errors },
    } = useFormContext();

    return (
        <CheckoutSection>
            <Title>Billing details</Title>
            <Container>
                <InputContainer>
                    <Label htmlFor="name">Name</Label>
                    <Input
                        // register={register}
                        name="name"
                        required
                        placeholder="Alexei Ward"
                        
                    />
                    {errors.name && <ErrorMessage>Name required</ErrorMessage>}
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        name="email"
                        type="email"
                        required
                        placeholder="alexei@mail.com"
                    />
                    {errors.email && <ErrorMessage>Enter a valid e-mail</ErrorMessage>}
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                        name="phone"
                        required
                        placeholder="+1 202-555-0136"
                        type="number"
                    />
                    {errors.phone && <ErrorMessage>Enter a valid phone number</ErrorMessage>}
                </InputContainer>
            </Container>
        </CheckoutSection>
    );
}
