"use client";
import { CartProvider } from "use-shopping-cart";
export default function CartServise({ children }) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY}
      successUrl="https://shopflix-one.vercel.app/sucesss"
      cancelUrl="https://shopflix-one.vercel.app/error"
      currency="INR"
      billingAddressCollection={true}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </CartProvider>
  );
}
