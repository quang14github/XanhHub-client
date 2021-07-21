import React from "react";
import { useState } from "react";
import Layout from "Components/Layout";
import Checkout from "Components/Checkout";
import Cart from "Components/Cart";
export default function CartPage() {
  const [toCheckout, setToCheckout] = useState(false);
  return (
    <Layout>
      <Cart
        checkout={(state) => setToCheckout(state)}
        toCheckout={toCheckout}
      />
      {toCheckout && <Checkout />}
    </Layout>
  );
}
