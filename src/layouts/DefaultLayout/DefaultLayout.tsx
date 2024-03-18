import { Header } from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
};
