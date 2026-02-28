"use client";

import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import CartSidebar from "./CartSidebar";

export default function Header() {
  const { totalItems, toggleCart } = useCart();

  return (
    <>
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Каталог товаров
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Электроника и аксессуары
            </p>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="relative size-12"
            onClick={toggleCart}
            aria-label={`Корзина, ${totalItems} товаров`}
          >
            <ShoppingCart className="size-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 size-5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            )}
          </Button>
        </div>
      </header>
      <CartSidebar />
    </>
  );
}
