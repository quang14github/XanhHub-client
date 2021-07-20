import React from "react";

export default function Cart(props) {
  return (
    <div>
      <p>Your Cart: Duong Minh Quang 19 years old who has his own bike =))</p>
      <button onClick={() => props.checkout(!props.toCheckout)}>
        CHECKOUT!!!
      </button>
    </div>
  );
}
