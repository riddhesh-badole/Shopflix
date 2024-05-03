"use client";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export default function AddToBag({
  currency,
  description,
  image,
  name,
  price,
}) {
  const { addItem, handleCartClick } = useShoppingCart();
  const product = {
    name: name,
    descrpition: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    id: "key",
  };
  return (
    <Button
      onClick={() => {
        addItem(product), handleCartClick();
      }}
    >
      Add to carts
    </Button>
  );
}
