import { Path, UseFormRegister } from "react-hook-form";
import { InputText } from "../../pages/Checkout/styles";
import { Box, Container, ErrorMessage } from "./styles";
import { HTMLAttributes } from "react";
import { FormDataType } from "../../Interfaces/FormDataType";

interface Props {
  register: UseFormRegister<FormDataType>;
  name: Path<FormDataType>;
  placeholder: string;
  containerProps?: HTMLAttributes<HTMLDivElement>;
  error?: string;
}

export const TextInput = ({
  placeholder,
  register,
  name,
  containerProps,
  error,
}: Props) => {
  return (
    <Box {...containerProps}>
      <Container>
        <InputText placeholder={placeholder} {...register(name)} />
      </Container>

      {error ? <ErrorMessage role='alert'>{error}</ErrorMessage> : null}
    </Box>
  );
};
