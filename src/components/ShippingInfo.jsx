import CheckoutSection, {
    Container,
    InputContainer,
    Label,
    Title,
} from "./CheckoutSection";
import Input from "../UI/Input";
import { useFormContext } from "react-hook-form";

import ErrorMessage from "./ErrorMessage";

export default function ShippingInfo() {
    const {
        formState: { errors },
    } = useFormContext();
    return (
        <CheckoutSection>
            <Title>Shipping Info</Title>
            <Container>
                <InputContainer className="full-width">
                    <Label htmlFor="address">Your Address</Label>
                    <Input
                        name="address"
                        id="address"
                        required
                        placeholder="1137 Williams Avenue"
                    />
                    {errors.address && (
                        <ErrorMessage>Enter a valid address</ErrorMessage>
                    )}
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="zip_code">ZIP Code</Label>
                    <Input
                        name="zip_code"
                        id="zip_code"
                        required
                        placeholder="10001"
                        type="number"
                    />
                    {errors.zip_code && (
                        <ErrorMessage>Enter a valid ZIP</ErrorMessage>
                    )}
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="city">City</Label>
                    <Input
                        name="city"
                        id="city"
                        required
                        placeholder="New York"
                    />
                    {errors.city && (
                        <ErrorMessage>Enter a valid city</ErrorMessage>
                    )}
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="country">Country</Label>
                    <Input
                        name="country"
                        id="country"
                        required
                        placeholder="United States"
                    />
                    {errors.country && <ErrorMessage>Enter a valid country</ErrorMessage>}
                </InputContainer>
            </Container>
        </CheckoutSection>
    );
}
