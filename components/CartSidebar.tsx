"use client";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
export default function CartSidebar() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
    isOpen,
    closeCart,
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        className="fixed top-0 right-0 h-full w-full max-w-md bg-card border-l border-border shadow-xl z-50 flex flex-col"
        role="dialog"
        aria-label="Корзина"
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <ShoppingBag className="size-5" />
            Корзина {totalItems > 0 && `(${totalItems})`}
          </h2>
          <Button variant="ghost" size="icon" onClick={closeCart}>
            <X className="size-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
              <ShoppingBag className="size-16 mb-4 opacity-30" />
              <p className="text-center">Корзина пуста</p>
              <p className="text-sm mt-1">Добавьте товары из каталога</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map(({ product, quantity }) => (
                <li
                  key={product.id}
                  className="flex gap-4 p-3 rounded-lg bg-muted/50 border border-border/50"
                >
                  <div className="relative w-20 h-20 shrink-0 rounded-md overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-primary font-bold mt-1">
                      {product.price.toLocaleString("ru-RU")} ₽
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="size-7"
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                      >
                        <Minus className="size-3" />
                      </Button>
                      <span className="w-6 text-center text-sm font-medium">
                        {quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="size-7"
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                      >
                        <Plus className="size-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="ml-auto text-destructive hover:text-destructive"
                        onClick={() => removeItem(product.id)}
                      >
                        Удалить
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t border-border space-y-3">
            <div className="flex justify-between text-lg font-bold">
              <span>Итого:</span>
              <span>{totalPrice.toLocaleString("ru-RU")} ₽</span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1" onClick={clearCart}>
                Очистить
              </Button>
              <Button className="flex-1">Оформить заказ</Button>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
