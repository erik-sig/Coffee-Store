import { Routes, Route } from "react-router-dom";
import { Checkout } from "./pages/Checkout/Checkout";
import { Home } from "./pages/Home/Home";
import { Success } from "./pages/Success/Success";
import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout";

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        <Route path='/success' element={<Success></Success>}></Route>
      </Route>
    </Routes>
  );
};
