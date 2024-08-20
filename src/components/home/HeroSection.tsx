import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function HeroSection() {
  return (
    <section className="bg-muted py-12 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Discover the latest electronics
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Shop our wide selection of cutting-edge electronics, from
              smartphones to smart home devices.
            </p>
            <div className="flex gap-4">
              <Button>Shop Now</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
          <div>
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src="/home/head.jpg"
                      alt="Featured Product"
                      width={600}
                      height={400}
                      className="object-cover w-full "
                      style={{ aspectRatio: "600/400", objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
                      <h3 className="text-xl font-bold">
                        Sony WH-1000XM4
                      </h3>
                      <p className="text-sm">
                        Experience immersive audio with our latest
                        noise-cancelling headphones.
                      </p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-lg font-semibold">Rs.84,000</span>
                        <Button size="sm">Shop Now</Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src="/home/monitor.jpg"
                      alt="Featured Product"
                      width={600}
                      height={400}
                      className="object-cover w-full"
                      style={{ aspectRatio: "600/400", objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
                      <h3 className="text-xl font-bold">
                        ROG 29&quot; Ultrawide Gaming Monitor
                      </h3>
                      <p className="text-sm">
                        Immerse yourself in your favorite games with our
                        ultrawide gaming monitor.
                      </p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-lg font-semibold">Rs.229,000</span>
                        <Button size="sm">Shop Now</Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src="/home/alexa.webp"
                      alt="Featured Product"
                      width={600}
                      height={400}
                      className="object-cover w-full"
                      style={{ aspectRatio: "600/400", objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
                      <h3 className="text-xl font-bold">
                        Alexa Echo Dot
                      </h3>
                      <p className="text-sm">
                        Automate your home with Alexa by Amazon.
                      </p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-lg font-semibold">Rs.30,000</span>
                        <Button size="sm">Shop Now</Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
