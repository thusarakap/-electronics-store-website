"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
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

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (
        filters.category.length > 0 &&
        !filters.category.includes(product.category)
      ) {
        return false;
      }
      if (filters.brand.length > 0 && !filters.brand.includes(product.brand)) {
        return false;
      }
      if (
        product.price < filters.priceRange[0] ||
        product.price > filters.priceRange[1]
      ) {
        return false;
      }
      if (
        searchTerm.length > 0 &&
        !product.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  }, [filters, searchTerm, products]);

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
                    checked={filters.category.includes("Supplements")}
                    onCheckedChange={(checked) => {
                      setFilters({
                        ...filters,
                        category: checked
                          ? [...filters.category, "Supplements"]
                          : filters.category.filter((c) => c !== "Supplements"),
                      });
                    }}
                  />
                  Supplements
                </Label>
              </div>
            </div>
            <div>
              <h3 className="text-base font-medium mb-2">Brand</h3>
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.brand.includes("PetWell")}
                    onCheckedChange={(checked) => {
                      setFilters({
                        ...filters,
                        brand: checked
                          ? [...filters.brand, "PetWell"]
                          : filters.brand.filter((b) => b !== "PetWell"),
                      });
                    }}
                  />
                  PetWell
                </Label>
                <Label className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.brand.includes("PawPerfect")}
                    onCheckedChange={(checked) => {
                      setFilters({
                        ...filters,
                        brand: checked
                          ? [...filters.brand, "PawPerfect"]
                          : filters.brand.filter((b) => b !== "PawPerfect"),
                      });
                    }}
                  />
                  PawPerfect
                </Label>
                <Label className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.brand.includes("CatCare")}
                    onCheckedChange={(checked) => {
                      setFilters({
                        ...filters,
                        brand: checked
                          ? [...filters.brand, "CatCare"]
                          : filters.brand.filter((b) => b !== "CatCare"),
                      });
                    }}
                  />
                  CatCare
                </Label>
                <Label className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.brand.includes("BunnyBest")}
                    onCheckedChange={(checked) => {
                      setFilters({
                        ...filters,
                        brand: checked
                          ? [...filters.brand, "BunnyBest"]
                          : filters.brand.filter((b) => b !== "BunnyBest"),
                      });
                    }}
                  />
                  BunnyBest
                </Label>
                <Label className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.brand.includes("EquineEssentials")}
                    onCheckedChange={(checked) => {
                      setFilters({
                        ...filters,
                        brand: checked
                          ? [...filters.brand, "EquineEssentials"]
                          : filters.brand.filter(
                              (b) => b !== "EquineEssentials"
                            ),
                      });
                    }}
                  />
                  EquineEssentials
                </Label>
                <Label className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.brand.includes("AvianAid")}
                    onCheckedChange={(checked) => {
                      setFilters({
                        ...filters,
                        brand: checked
                          ? [...filters.brand, "AvianAid"]
                          : filters.brand.filter((b) => b !== "AvianAid"),
                      });
                    }}
                  />
                  AvianAid
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
                className="px-2"
                // onClick={() => setSortBy("low")}
                // className={sortBy === "low" ? "text-primary" : ""}
              >
                Price &nbsp;
                <ArrowUp10 className="w-4 h-4" />
                <span className="sr-only">Sort by price high to low</span>
              </Button>

              <Button
                variant="secondary"
                className="px-2"
                // onClick={() => setSortBy("high")}
                // className={sortBy === "high" ? "text-primary" : ""}
              >
                Price &nbsp;
                <ArrowDown01 className="w-4 h-4" />
                <span className="sr-only">Sort by price low to high</span>
              </Button>
              <Button
                variant="secondary"
                className="px-2"
                // onClick={() => setSortBy("newest")}
                // className={sortBy === "newest" ? "text-primary" : ""}
              >
                Newest &nbsp;
                <CalendarArrowUp className="w-4 h-4" />
                <span className="sr-only">Sort by newest</span>
              </Button>
              <Button
                variant="secondary"
                className="px-2"
                // onClick={() => setSortBy("oldest")}
                // className={sortBy === "oldest" ? "text-primary" : ""}
              >
                Oldest &nbsp;
                <CalendarArrowDown className="w-4 h-4" />
                <span className="sr-only">Sort by oldest</span>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              
              <div
                key={product.id}
                className="bg-muted p-4 rounded-lg shadow-sm flex flex-col"
              >
                <Link className="flex flex-col" href={`/products/${product.id}`}>
                
                  <img
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

                <div className="flex items-center text-lg gap-1">
                  <Star className="w-5 h-5" />
                  <span className="font-semibold">
                    {product.rating.toFixed(1)}
                  </span>
                </div>
                </Link>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-lg font-bold">
                    Rs.{product.price.toLocaleString()}
                  </span>
                  <Button className="px-3" onClick={() => addToCart(product)}>
                    Add to Cart
                  </Button>
                </div>
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
