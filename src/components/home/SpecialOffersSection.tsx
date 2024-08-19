import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

export function SpecialOffersSection() {
  return (
    <section className="bg-muted/20 py-12 md:py-24">
      <div className="container">
        <h2 className="text-2xl font-bold mb-8">Special Offers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Card className="bg-background shadow-lg">
            <CardHeader>
              <img
                src="/sale50.jpg"
                width={300}
                height={300}
                alt="Offer"
                className="rounded-lg"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">
                Up to 50% off on Android Smartphones.
              </h3>
              <p className="text-muted-foreground text-sm">
                Limited time offer, hurry up and get a brand new Android!
              </p>
              <div className="mt-4">
                <Button className="w-full">Shop Now</Button>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-background shadow-lg">
            <CardHeader>
              <img
                src="/freeDelivery.avif"
                width={300}
                height={300}
                alt="Offer"
                className="rounded-lg"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">
                Free Shipping on Orders over Rs.5000
              </h3>
              <p className="text-muted-foreground text-sm">
                Enjoy free shipping on all eligible orders over Rs.5000.
              </p>
              <div className="mt-4">
                <Button className="w-full">Shop Now</Button>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-background shadow-lg">
            <CardHeader>
              <img
                src="/b1g1f.jpg"
                width={300}
                height={300}
                alt="Offer"
                className="rounded-lg"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">
                Buy One, Get One Free on Headphones
              </h3>
              <p className="text-muted-foreground text-sm">
                Enjoy the best audio experience with this limited-time offer.
              </p>
              <div className="mt-4">
                <Button className="w-full">Shop Now</Button>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-background shadow-lg">
            <CardHeader>
              <img
                src="/discounts.jpg"
                width={300}
                height={300}
                alt="Offer"
                className="rounded-lg"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">
                Discounts on Smart Home Devices
              </h3>
              <p className="text-muted-foreground text-sm">
                Upgrade your home with our latest smart home deals.
              </p>
              <div className="mt-4">
                <Button className="w-full">Shop Now</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
