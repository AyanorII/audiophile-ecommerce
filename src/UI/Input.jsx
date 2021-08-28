import styled from "styled-components";
import { useFormContext } from "react-hook-form";

const StyledInput = styled.input`
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.palette.primary.main};
    outline: none;
    font-weight: 700;
    padding-left: 1.5rem;
    padding-block: 1.125rem;
    width: 100%;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &[type="number"] {
        -moz-appearance: textfield;
    }

    &:empty {
        border-color: #00000050;
    }

    &:focus,
    &:hover {
        border-color: ${(props) => props.theme.palette.primary.main};
    }

    &::placeholder {
        opacity: 0.4;
        font-size: 0.875rem;
    }
`;

export default function Input({
    name,
    required,
    id,
    placeholder,
    type,
    ...props
}) {
    const {
        register,
        formState: { errors },
    } = useFormContext();
    return (
        <StyledInput
            name={name}
            type={type ? type : "text"}
            id={id}
            placeholder={placeholder}
            {...register(name, { required: required })}
        ></StyledInput>
    );
}
