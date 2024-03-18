export interface FormDataType {
  cep: string;
  rua: string;
  bairro: string;
  uf: string;
  numero: string;
  complemento?: string;
  cidade: string;
  paymentMethod: "credit" | "debit" | "cash";
}
