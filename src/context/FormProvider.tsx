import { ReactNode, createContext, useState } from "react";
import { FormDataType } from "../Interfaces/FormDataType";

interface FormContextType {
  form: FormDataType | undefined;
  setForm: React.Dispatch<React.SetStateAction<FormDataType>>;
}

interface FormContextProviderProps {
  children: ReactNode;
}

export const FormContext = createContext({} as FormContextType);
FormContext.displayName = "FormContext";

export const FormProvider = ({ children }: FormContextProviderProps) => {
  const [form, setForm] = useState<FormDataType>({
    bairro: "",
    cep: "",
    rua: "",
    cidade: "",
    numero: "",
    uf: "",
    complemento: "",
    paymentMethod: "cash",
  });

  return (
    <FormContext.Provider value={{ form, setForm }}>
      {children}
    </FormContext.Provider>
  );
};
