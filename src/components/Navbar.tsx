"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BoltIcon,
  ShoppingCartIcon,
  UserIcon,
  MenuIcon,
} from "@/components/ui/icons";
import { ModeToggle } from "@/components/ui/themeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "../app/context/CartContext";
import { Zap } from "lucide-react";

export function Navbar() {
  const { cart } = useCart();

  return (
    <header className="bg-background border-b">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Zap className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold">Electro</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link
            href="/"
            className="text-m font-medium hover:underline"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-m font-medium hover:underline"
            prefetch={false}
          >
            Products
          </Link>
          <Link
            href="/contact-us"
            className="text-m font-medium hover:underline"
            prefetch={false}
          >
            Contact Us
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <ModeToggle />

          <Link href="/login" prefetch={false}>
            <Button variant="ghost" size="icon">
              <UserIcon className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>

          <Link href="/cart" prefetch={false}>
            <Button className="relative" variant="ghost" size="icon">
              <ShoppingCartIcon className="w-5 h-5" />
              <span className="absolute -top-0 -right-0 bg-accent text-accent-foreground rounded-full px-1.5 py-0.5 text-xs font-medium">
                {cart.length}
              </span>
            </Button>
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full md:hidden"
              aria-label="Toggle navigation menu"
            >
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          
          <SheetContent side="right">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Zap className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold">Electro</span>
        </Link>
            <div className="py-6">
              <div className="ml-2">
              <Link
                href="/"
                className="flex w-full items-center py-3 text-2xl font-semibold"
                prefetch={false}
              >
                Home
              </Link>

              

              <Link
                href="/products"
                className="flex w-full items-center py-3 text-2xl font-semibold"
                prefetch={false}
              >
                Products
              </Link>

              <Link
                href="/contact-us"
                className="flex w-full items-center py-3 text-2xl font-semibold"
                prefetch={false}
              >
                Contact Us
              </Link>

              </div>

              <div className="flex items-center gap-2 py-4">
                <ModeToggle />

                <Link href="/login" prefetch={false}>
                  <Button variant="ghost" size="icon">
                    <UserIcon className="h-5 w-5" />
                    <span className="sr-only">Account</span>
                  </Button>
                </Link>

                <Link href="/cart" prefetch={false}>
                  <Button className="relative" variant="ghost" size="icon">
                    <ShoppingCartIcon className="w-5 h-5" />
                    <span className="absolute -top-0 -right-0 bg-accent text-accent-foreground rounded-full px-1.5 py-0.5 text-xs font-medium">
                      {cart.length}
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
