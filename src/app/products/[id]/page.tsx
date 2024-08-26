"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Heart, Minus, Plus, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useCart } from "../../context/CartContext"; 

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

const relatedProducts = [
  { id: 1, name: "Sony WH-1000XM4", price: 84000, image: "/products/wh-1000xm4.jpg" },
  { id: 2, name: "iPad Air 4", price: 205990, image: "/products/ipad-air-4.jpg" },
  { id: 3, name: "Samsung Galaxy S24 Ultra", price: 329900, image: "/products/galaxy-s24-ultra.webp" },
  { id: 4, name: "Apple Airpods Pro", price: 67999, image: "/products/airpods-pro.jpeg" }
];

export default function ProductPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1); // Manage the quantity state
  const { id } = useParams(); // Get the product ID from the route parameters
  const { addToCart } = useCart(); // Use the addToCart function from the CartContext

  useEffect(() => {
    // Fetch product data based on the ID
    fetch(`/products.json`)
      .then((response) => response.json())
      .then((data: Product[]) => {
        const foundProduct = data.find((product) => product.id === parseInt(id as string));
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          console.error("Product not found");
        }
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity }); // Add product with the selected quantity
    }
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta)); // Ensure quantity is at least 1
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container py-8">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start py-8 md:py-12">
        <div className="grid gap-4 md:gap-8">
          <div className="grid gap-4">
            <Image
              src={product.image}
              alt="Product Image"
              width={800}
              height={800}
              className="aspect-square object-cover w-full rounded-lg overflow-hidden"
            />
            <div className="hidden md:grid grid-cols-5 gap-3">
              {[...Array(5)].map((_, index) => (
                <button key={index} className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
                  <Image
                    src="/placeholder.svg"
                    alt={`Preview thumbnail ${index + 1}`}
                    width={100}
                    height={100}
                    className="aspect-square object-cover"
                  />
                  <span className="sr-only">View Image {index + 1}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-6 md:gap-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className={`w-5 h-5 ${index < product.rating ? 'fill-primary' : 'fill-muted stroke-muted-foreground'}`} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({product.rating} reviews)</span>
            </div>
          </div>
          <div className="grid gap-4">
            <p className="text-base leading-relaxed">{product.description}</p>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <span className="text-base font-medium">Price</span>
                <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-base font-medium">Quantity</span>
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="outline" onClick={() => handleQuantityChange(-1)}>
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="text-base font-medium">{quantity}</span>
                  <Button size="icon" variant="outline" onClick={() => handleQuantityChange(1)}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <Button size="lg" onClick={handleAddToCart}>
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline">
              <Heart className="w-5 h-5 mr-2" />
              Add to Wishlist
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-muted py-8 rounded-xl md:py-12">
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Product Details</h2>
          <div className="grid gap-6 md:gap-10">
            <div className="grid gap-2">
              <h3 className="text-lg md:text-xl font-semibold">Description</h3>
              <p className="text-base leading-relaxed">{product.description}</p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-lg md:text-xl font-semibold">Specifications</h3>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium">Material</span>
                  <span className="text-base">ABS Plastic</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium">Dimensions</span>
                  <span className="text-base">30mm X 150mm X 10mm</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium">Weight</span>
                  <span className="text-base">200g</span>
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <h3 className="text-lg md:text-xl font-semibold">Reviews</h3>
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/ChamariPalliyeguru.webp"
                      alt="User Avatar"
                      width={48}
                      height={48}
                      className="rounded-full"
                      style={{ aspectRatio: "48/48", objectFit: "cover" }}
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-base font-medium">Chamari Palliyeguru</span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, index) => (
                          <Star key={index} className={`w-4 h-4 ${index < 5 ? 'fill-primary' : 'fill-muted stroke-muted-foreground'}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-base leading-relaxed">Amazing product! It exceeded my expectations.</p>
                  </div>
                </div>
                {/* Add more reviews here */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Related Products</h2>
        <Carousel>
          {relatedProducts.map((product) => (
            <CarouselItem key={product.id} className="relative flex items-center justify-center h-[300px] md:h-[400px]">
              <Image
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full rounded-lg"
              />
              <Card className="absolute bottom-0 w-full bg-gradient-to-t from-black via-transparent to-transparent text-white p-4">
                <CardContent>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-lg">${product.price.toFixed(2)}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
          <CarouselPrevious className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10">
            <Button variant="outline" size="icon">
              <span className="sr-only">Previous</span>
              &lt;
            </Button>
          </CarouselPrevious>
          <CarouselNext className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10">
            <Button variant="outline" size="icon">
              <span className="sr-only">Next</span>
              &gt;
            </Button>
          </CarouselNext>
        </Carousel>
      </section>
    </div>
  );
}
