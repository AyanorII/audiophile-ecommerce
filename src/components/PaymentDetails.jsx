import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import { Title, Container, InputContainer, Label } from "./CheckoutSection";
import Input from "../UI/Input";
import styled from "styled-components";
import CashOnDeliveryMessage from "./CashOnDeliveryMessage";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

const StyledContainer = styled(Container) `
    grid-template-columns: 1fr 1fr;
`


const StyledLabel = styled(Label)`
    margin-bottom: -8px;

    @media (min-width: 768px) {
        grid-row: 1 / 3;
    }
`;

const StyledTitle = styled(Title)`
    margin-bottom: 2rem;
`;

const EMoneyContainer = styled.div`
    display: grid;
    gap: 1.5rem;
    grid-column: 1 / 3;

    @media (min-width: 768px) {
        grid-column: 1 /3;
        grid-template-columns: 1fr 1fr;

        & + div:first-of-type {
            grid-column: 1 / 3;
        }
        & + div:last-of-type {
            grid-column: 1 / 3;
        }
    }
`;

const useStyles = makeStyles({
    root: {
        width: "100%",
        border: "1px solid #00000050",
        paddingLeft: "0.75rem",
        paddingBlock: "0.4rem",
        borderRadius: "10px",
        margin: 0,
        gridColumn: "1 / 3",
        "&:first-of-type": {
            marginBottom: "-8px",
        },
    },
    span: {
        fontWeight: 700,
        fontSize: "0.875rem",
    },
});

export default function RadioButtonsGroup() {
    const {
        formState: { errors },
    } = useFormContext();

    const [value, setValue] = React.useState("e-money");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const classes = useStyles();

    return (
        <FormControl component="fieldset">
            <StyledTitle>Payment Details</StyledTitle>
            <RadioGroup
                aria-label="payment-method"
                name="payment-method"
                value={value}
                onChange={handleChange}
            >
                <StyledContainer>
                    <StyledLabel>Payment Method</StyledLabel>
                    <FormControlLabel
                        value="e-money"
                        control={<Radio color="primary" />}
                        label="e-Money"
                        classes={{ root: classes.root }}
                    />
                    <FormControlLabel
                        value="cash"
                        control={<Radio color="primary" />}
                        label="Cash on Delivery"
                        classes={{ root: classes.root }}
                    />
                    {value === "e-money" && (
                        <EMoneyContainer>
                            <InputContainer>
                                <Label>e-Money Number</Label>
                                <Input
                                    name="eNumber"
                                    type="number"
                                    placeholder="238521993"
                                    required={
                                        value === "e-money" ? true : false
                                    }
                                />
                                {errors.eNumber && <ErrorMessage>e-Money number required</ErrorMessage>}
                            </InputContainer>
                            <InputContainer>
                                <Label>e-Money PIN</Label>
                                <Input
                                    name="ePIN"
                                    type="number"
                                    placeholder="6891"
                                    required={
                                        value === "e-money" ? true : false
                                    }
                                />
                                {errors.ePIN && <ErrorMessage>Please enter a valid PIN</ErrorMessage>}
                            </InputContainer>
                        </EMoneyContainer>
                    )}
                    {value === "cash" && <CashOnDeliveryMessage />}
                </StyledContainer>
            </RadioGroup>
        </FormControl>
    );
}
