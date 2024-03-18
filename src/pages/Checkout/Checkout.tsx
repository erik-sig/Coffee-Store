import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from "@phosphor-icons/react";
import {
  AdressContainer,
  AdressForm,
  AdressHeader,
  BuyButton,
  CartContainer,
  CartInfo,
  CheckoutContainer,
  ErrorPaymenteMethod,
  PaymentHeader,
  PaymentMethod,
  PaymentMethodContainer,
} from "./styles";
import { defaultTheme } from "../../styles/themes/default";
import { useForm } from "react-hook-form";
import { useCart } from "../../hooks/useCart";
import { CoffeeCartItem } from "../../components/CoffeeCartItem/CoffeeCartItem";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput } from "../../components/TextInput/TextInput";
import { FormDataType } from "../../Interfaces/FormDataType";
import { useContext } from "react";
import { FormContext } from "../../context/FormProvider";
import { useNavigate } from "react-router-dom";

const newFormSchema = zod.object({
  cep: zod.string().min(1, { message: "Informe um CEP" }),
  rua: zod.string().min(1, { message: "Informe uma rua" }),
  bairro: zod.string().min(1, { message: "Informe um bairro" }),
  uf: zod.string().min(2, { message: "Informe um estado" }),
  numero: zod.string().min(1, { message: "Informe um número" }),
  cidade: zod.string().min(1, { message: "Informe uma cidade" }),
  paymentMethod: zod.enum(["credit", "debit", "cash"], {
    invalid_type_error: "Informe um método de pagamento",
  }),
});

export const Checkout = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: zodResolver(newFormSchema),
  });

  const navigate = useNavigate();

  const { setForm } = useContext(FormContext);
  const { cartItems } = useCart();
  const handleCreateNewData = (data: FormDataType) => {
    setForm(data);
    navigate("/success");
  };

  const { totalValue } = useCart();

  const selectedPaymentMethod = watch("paymentMethod");

  return (
    <CheckoutContainer>
      <AdressContainer>
        <h2>Complete seu pedido</h2>
        <div>
          <AdressHeader>
            <MapPin size={22} color={defaultTheme["yellow-dark"]}></MapPin>
            <div>
              <h3>Endereço de entrega</h3>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </AdressHeader>
          <AdressForm>
            <form id='order' onSubmit={handleSubmit(handleCreateNewData)}>
              <TextInput
                register={register}
                placeholder='CEP'
                name='cep'
                error={errors.cep?.message}
                containerProps={{ style: { gridArea: "cep" } }}
              />
              <TextInput
                register={register}
                placeholder='Rua'
                containerProps={{ style: { gridArea: "rua" } }}
                name='rua'
                error={errors.rua?.message}
              />
              <TextInput
                register={register}
                placeholder='numero'
                name='numero'
                containerProps={{ style: { gridArea: "numero" } }}
                error={errors.numero?.message}
              />
              <TextInput
                register={register}
                placeholder='Complemento (opcional)'
                name='complemento'
                containerProps={{ style: { gridArea: "complemento" } }}
                error={errors.complemento?.message}
              />
              <TextInput
                register={register}
                placeholder='Bairro'
                name='bairro'
                containerProps={{ style: { gridArea: "bairro" } }}
                error={errors.bairro?.message}
              />
              <TextInput
                register={register}
                placeholder='Cidade'
                containerProps={{ style: { gridArea: "cidade" } }}
                name='cidade'
                error={errors.cidade?.message}
              />
              <TextInput
                register={register}
                placeholder='UF'
                containerProps={{ style: { gridArea: "uf" } }}
                name='uf'
                error={errors.uf?.message}
              />
            </form>
          </AdressForm>
        </div>
        <PaymentMethodContainer>
          <PaymentHeader>
            <CurrencyDollar size={22}></CurrencyDollar>
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </PaymentHeader>
          <PaymentMethod>
            <label data-state={selectedPaymentMethod === "credit"}>
              <input
                type='radio'
                value='credit'
                {...register("paymentMethod")}
              />
              <CreditCard></CreditCard>
              <span>CARTÃO DE CRÉDITO</span>
            </label>
            <label data-state={selectedPaymentMethod === "debit"}>
              <input
                type='radio'
                value='debit'
                {...register("paymentMethod")}
              />
              <Bank></Bank>
              <span>CARTÃO DE DÉBITO</span>
            </label>
            <label data-state={selectedPaymentMethod === "cash"}>
              <input type='radio' value='cash' {...register("paymentMethod")} />
              <Money> </Money>
              <span>DINHEIRO</span>
            </label>
          </PaymentMethod>
          <ErrorPaymenteMethod>
            {errors.paymentMethod?.message}
          </ErrorPaymenteMethod>
        </PaymentMethodContainer>
      </AdressContainer>

      <CartContainer>
        <h2>Cafés selecionados</h2>
        <div>
          {cartItems.map((item) => (
            <CoffeeCartItem item={item}></CoffeeCartItem>
          ))}
          <CartInfo>
            <div>
              <span>Total de itens</span>
              <span>R$ {totalValue.toFixed(2)}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <span>Total</span>
              <span>R$ {(totalValue + 3.5).toFixed(2)}</span>
            </div>
          </CartInfo>
          <BuyButton type='submit' form='order'>
            CONFIRMAR PEDIDO
          </BuyButton>
        </div>
      </CartContainer>
    </CheckoutContainer>
  );
};
