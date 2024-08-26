"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "@/components/ui/icons";
import { useCart } from "../context/CartContext";
import {
  ArrowDown01,
  ArrowUp10,
  CalendarArrowDown,
  CalendarArrowUp,
  LayoutGrid,
  List,
  Star,
} from "lucide-react";
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  image: string;
  rating: number;
}

export default function Products() {
  interface Filters {
    category: string[];
    brand: string[];
    priceRange: number[];
  }

  const [filters, setFilters] = useState<Filters>({
    category: [],
    brand: [],
    priceRange: [0, 1000000],
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState("high")
  const [viewMode, setViewMode] = useState("grid")

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        if (filters.category.length > 0 && !filters.category.includes(product.category)) {
          return false
        }
        if (filters.brand.length > 0 && !filters.brand.includes(product.brand)) {
          return false
        }
        if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
          return false
        }
        if (searchTerm.length > 0 && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return false
        }
        return true
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "low":
            return a.price - b.price
          case "high":
            return b.price - a.price
          case "newest":
            return b.id - a.id
          case "oldest":
            return a.id - b.id
          default:
            return 0
        }
      })
  }, [filters, searchTerm, sortBy, products])

  const { cart, addToCart } = useCart();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 py-8">
        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-lg font-bold mb-4">Filters</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-base font-medium mb-2">Category</h3>
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.category.includes("Smartphones")}
                    onCheckedChange={(checked) => {
                      setFilters({
                        ...filters,
                        category: checked
                          ? [...filters.category, "Smartphones"]
                          : filters.category.filter((c) => c !== "Smartphones"),
                      });
                    }}
                  />
                  Smartphones
                </Label>
                <Label className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.category.includes("Headphones")}
                    onCheckedChange={(checked) => {
                      setFilters({
                        ...filters,
                        category: checked
                          ? [...filters.category, "Headphones"]
                          : filters.category.filter((c) => c !== "Headphones"),
                      });
                    }}
                  />
                  Headphones
                </Label>
                <Label className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.category.includes("Laptops")}
                    onCheckedChange={(checked) => {
                      setFilters({
                        ...filters,
                        category: checked
                          ? [...filters.category, "Laptops"]
                          : filters.category.filter((c) => c !== "Laptops"),
                      });
                    }}
                  />
                  Laptops
                </Label>
                <Label className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.category.includes("Gaming Consoles")}
                    onCheckedChange={(checked) => {
                      setFilters({
                        ...filters,
                        category: checked
                          ? [...filters.category, "Gaming Consoles"]
                          : filters.category.filter((c) => c !== "Gaming Consoles"),
                      });
                    }}
                  />
                  Gaming Consoles
                </Label>
              </div>
              
            </div>
            <div>
              <h3 className="text-base font-medium mb-2">Brand</h3>
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.brand.includes("Apple")}
                    onCheckedChange={(checked) => {
                      setFilters({
                        ...filters,
                        brand: checked
                          ? [...filters.brand, "Apple"]
                          : filters.brand.filter((b) => b !== "Apple"),
                      });
                    }}
                  />
                  Apple
                </Label>
                <Label className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.brand.includes("Samsung")}
                    onCheckedChange={(checked) => {
                      setFilters({
                        ...filters,
                        brand: checked
                          ? [...filters.brand, "Samsung"]
                          : filters.brand.filter((b) => b !== "Samsung"),
                      });
                    }}
                  />
                  Samsung
                </Label>
                <Label className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.brand.includes("Sony")}
                    onCheckedChange={(checked) => {
                      setFilters({
                        ...filters,
                        brand: checked
                          ? [...filters.brand, "Sony"]
                          : filters.brand.filter((b) => b !== "Sony"),
                      });
                    }}
                  />
                  Sony
                </Label>
                <Label className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.brand.includes("LG")}
                    onCheckedChange={(checked) => {
                      setFilters({
                        ...filters,
                        brand: checked
                          ? [...filters.brand, "LG"]
                          : filters.brand.filter((b) => b !== "LG"),
                      });
                    }}
                  />
                  LG
                </Label>
                <Label className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.brand.includes("Google")}
                    onCheckedChange={(checked) => {
                      setFilters({
                        ...filters,
                        brand: checked
                          ? [...filters.brand, "Google"]
                          : filters.brand.filter(
                              (b) => b !== "Google"
                            ),
                      });
                    }}
                  />
                  Google
                </Label>
                <Label className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.brand.includes("Amazon")}
                    onCheckedChange={(checked) => {
                      setFilters({
                        ...filters,
                        brand: checked
                          ? [...filters.brand, "Amazon"]
                          : filters.brand.filter((b) => b !== "Amazon"),
                      });
                    }}
                  />
                  Amazon
                </Label>
              </div>
            </div>
            <div>
              <h3 className="text-base font-medium mb-2">Price Range</h3>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <Label>Min Price</Label>
                  <Input
                    className="mt-1"
                    type="text"
                    value={filters.priceRange[0]}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        priceRange: [
                          Number(e.target.value),
                          filters.priceRange[1],
                        ],
                      })
                    }
                  />
                </div>
                <div className="flex-1">
                  <Label>Max Price</Label>
                  <Input
                    className="mt-1"
                    type="input"
                    value={filters.priceRange[1]}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        priceRange: [
                          filters.priceRange[0],
                          Number(e.target.value),
                        ],
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-4">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
            <div className="ml-4 flex items-center gap-2">
              <Button
                variant="secondary"
                className={`px-2 ${sortBy === "low" ? "text-primary" : ""}`}
                onClick={() => setSortBy("low")}
              >
                Price &nbsp;
                <ArrowUp10 className="w-4 h-4" />
                <span className="sr-only">Sort by price high to low</span>
              </Button>

              <Button
                variant="secondary"
                className={`px-2 ${sortBy === "high" ? "text-primary" : ""}`}
                onClick={() => setSortBy("high")}
              >
                Price &nbsp;
                <ArrowDown01 className="w-4 h-4" />
                <span className="sr-only">Sort by price low to high</span>
              </Button>
              <Button
                variant="secondary"
                className={`px-2 ${sortBy === "newest" ? "text-primary" : ""}`}
                onClick={() => setSortBy("newest")}
              >
                Newest &nbsp;
                <CalendarArrowUp className="w-4 h-4" />
                <span className="sr-only">Sort by newest</span>
              </Button>
              <Button
                variant="secondary"
                className={`px-2 ${sortBy === "oldest" ? "text-primary" : ""}`}
                onClick={() => setSortBy("oldest")}
              >
                Oldest &nbsp;
                <CalendarArrowDown className="w-4 h-4" />
                <span className="sr-only">Sort by oldest</span>
              </Button>
              <div className="ml-4 flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "secondary" : "ghost"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="sr-only">Grid view</span>
              </Button>
                <Button
                  variant={viewMode === "list" ? "secondary" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                  <span className="sr-only">List view</span>
                </Button>
                </div>
            </div>
          </div>
          {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              
              <div
                key={product.id}
                className="bg-muted p-4 rounded-lg shadow-sm flex flex-col"
              >
                <Link className="flex flex-col" href={`/products/${product.id}`}>
                
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    style={{ aspectRatio: "300/300", objectFit: "cover" }}
                  />
                  <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                
                <p className="text-muted-foreground mb-4 flex-grow">
                  {product.description}
                </p>

                
                </Link>
                <div className="mt-auto">
                <div className="flex items-center text-lg gap-1">
                  <Star className="w-5 h-5" />
                  <span className="font-semibold">
                    {product.rating.toFixed(1)}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  
                  <span className="text-lg font-bold">
                    Rs.{product.price.toLocaleString()}
                  </span>
                  <Button className="px-3" onClick={() => addToCart({ ...product, quantity: 1 })}>
                    Add to Cart
                  </Button>
                </div>
              </div>
              </div>
              
            ))}
          </div>
          ) : (
            <div className="space-y-4">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-muted p-4 rounded-lg shadow-sm flex items-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="w-24 h-24 object-cover rounded-lg mr-4"
                    style={{ aspectRatio: "100/100", objectFit: "cover" }}
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">${product.price}</span>
                      <Button className="px-3" onClick={() => addToCart({ ...product, quantity: 1 })}>Add to Cart</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
