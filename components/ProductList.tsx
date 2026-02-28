"use client";

import { Product } from "@/types/product";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowDownAZ, ArrowDownNarrowWide, RotateCcw, ShoppingCart, Bell } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  const [sortBy, setSortBy] = useState<"name" | "price" | "none">("none");
  const { addItem } = useCart();

  const getSortedProducts = () => {
    if (sortBy === "name") {
      return [...products].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "price") {
      return [...products].sort((a, b) => a.price - b.price);
    }
    return products;
  };

  const sortedProducts = getSortedProducts();

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        <Button 
          variant={sortBy === "name" ? "default" : "outline"}
          size="sm"
          onClick={() => setSortBy("name")}
          className="gap-2"
        >
          <ArrowDownAZ className="size-4" />
          По названию
        </Button>
        <Button 
          variant={sortBy === "price" ? "default" : "outline"}
          size="sm"
          onClick={() => setSortBy("price")}
          className="gap-2"
        >
          <ArrowDownNarrowWide className="size-4" />
          По цене
        </Button>
        <Button 
          variant={sortBy === "none" ? "default" : "outline"}
          size="sm"
          onClick={() => setSortBy("none")}
          className="gap-2"
        >
          <RotateCcw className="size-4" />
          Без сортировки
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <Card 
            key={product.id} 
            className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 border-border/80"
          >
            <CardHeader className="p-0">
              <div className="relative overflow-hidden bg-muted">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground backdrop-blur-sm">
                  {product.category}
                </span>
                <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium ${
                  product.inStock 
                    ? "bg-emerald-500/90 text-white" 
                    : "bg-rose-500/90 text-white"
                } backdrop-blur-sm`}>
                  {product.inStock ? "В наличии" : "Нет в наличии"}
                </span>
              </div>
              <div className="p-5 space-y-1">
                <CardTitle className="text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-sm">{product.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-1 pt-0 px-5">
              <p className="text-2xl font-bold text-primary">
                {product.price.toLocaleString("ru-RU")} ₽
              </p>
            </CardContent>
            <CardFooter className="p-5 pt-0">
              <Button 
                className="w-full gap-2" 
                disabled={!product.inStock}
                onClick={() => product.inStock && addItem(product)}
              >
                {product.inStock ? (
                  <>
                    <ShoppingCart className="size-4" />
                    В корзину
                  </>
                ) : (
                  <>
                    <Bell className="size-4" />
                    Сообщить о поступлении
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}