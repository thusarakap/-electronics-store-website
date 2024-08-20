"use client";

import { useCart } from "../context/CartContext";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon, TrashIcon } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Cart() {
  const { cart, addToCart, removeFromCart } = useCart();

  const updateQuantity = (id: number, quantity: number) => {
    const product = cart.find((item) => item.id === id);
    if (product) {
      if (quantity <= 0) {
        removeFromCart(id);
      } else {
        const updatedProduct = { ...product, quantity };
        removeFromCart(id);
        addToCart(updatedProduct);
      }
    }
  };

  const total = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  return (
    <section className="flex flex-col w-full py-12 h-screen">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <h1 className="text-3xl font-bold tracking-tight">Shopping Cart</h1>
            <p className="text-muted-foreground text-lg">Review your items and proceed to checkout.</p>
          </div>
        </div>
        <div className="grid gap-8 h-screen items-baseline">
          <div className="grid gap-6">
            {cart.map((item) => (
              <div key={item.id} className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: "80/80", objectFit: "cover" }}
                />
                <div className="grid gap-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm mt-1 leading-none text-muted-foreground">
                    Rs.{total.toLocaleString()} x {item.quantity || 1} <span className="font-semibold">&nbsp;|&nbsp;</span> Rs.{(item.price * (item.quantity || 1)).toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                    disabled={(item.quantity || 1) === 1}
                  >
                    <MinusIcon className="h-4 w-4" />
                  </Button>
                  <span className="font-semibold">{item.quantity || 1}</span>
                  <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}>
                    <PlusIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => removeFromCart(item.id)}>
                    <TrashIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div>
            <Separator className="my-6"/>
          <div className="grid gap-4 md:grid-cols-[1fr_auto] items-start">
            <div className="grid gap-2">
              <p className="text-muted-foreground text-lg">Subtotal ({cart.length} items)</p>
              <p className="text-2xl font-bold">Rs.{total.toLocaleString()}</p>
            </div>
            <Link href="/cart/checkout">
            <Button size="lg">Proceed to Checkout</Button>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}