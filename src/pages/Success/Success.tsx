import {
  Info,
  ResumeInfoContainer,
  ResumeInfos,
  SuccessContainer,
} from "./styles";
import Illustration from "../../assets/Illustration.svg";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { defaultTheme } from "../../styles/themes/default";
import { useContext } from "react";
import { FormContext } from "../../context/FormProvider";

export const Success = () => {
  const { form } = useContext(FormContext);
  const paymenteMethod = {
    credit: "Cartão de crédito",
    debit: "Cartão de débito",
    cash: "Dinheiro",
  };

  return (
    <SuccessContainer>
      <div>
        <header>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </header>
        <ResumeInfoContainer>
          <ResumeInfos>
            <div>
              <MapPin
                size={32}
                weight='fill'
                style={{ backgroundColor: defaultTheme["purple"] }}
              ></MapPin>
              <Info>
                <span>
                  Entrega em{" "}
                  <strong>
                    {form?.rua}, {form?.numero}
                  </strong>
                </span>
                <span>Farrapos - Porto Alegre, RS</span>
              </Info>
            </div>
            <div>
              <Timer
                size={32}
                weight='fill'
                style={{ backgroundColor: defaultTheme["yellow"] }}
              ></Timer>
              <Info>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </Info>
            </div>
            <div>
              <CurrencyDollar
                size={32}
                style={{ backgroundColor: defaultTheme["yellow-dark"] }}
              ></CurrencyDollar>
              <Info>
                <span>Pagamento na entrega</span>
                {form?.paymentMethod ? (
                  <strong>{paymenteMethod[form?.paymentMethod]}</strong>
                ) : null}
              </Info>
            </div>
          </ResumeInfos>
        </ResumeInfoContainer>
      </div>
      <img src={Illustration} alt='' />
    </SuccessContainer>
  );
};
