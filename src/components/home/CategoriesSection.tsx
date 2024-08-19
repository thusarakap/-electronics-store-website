import { LaptopIcon, SmartphoneIcon, HeadphonesIcon, CameraIcon, TvIcon, GamepadIcon, TabletIcon, WearablesIcon } from "@/components/ui/icons";
import Link from "next/link";

export function CategoriesSection () {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">Explore Our Categories</h2>
              <p className="text-muted-foreground md:text-xl">
                Browse through our wide range of product categories and find the perfect fit for your needs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="#"
                  className="bg-background rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                  prefetch={false}
                >
                  <LaptopIcon className="h-8 w-8" />
                  <span className="text-sm font-medium">Laptops</span>
                </Link>
                <Link
                  href="#"
                  className="bg-background rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                  prefetch={false}
                >
                  <SmartphoneIcon className="h-8 w-8" />
                  <span className="text-sm font-medium">Smartphones</span>
                </Link>
                <Link
                  href="#"
                  className="bg-background rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                  prefetch={false}
                >
                  <HeadphonesIcon className="h-8 w-8" />
                  <span className="text-sm font-medium">Audio</span>
                </Link>
                <Link
                  href="#"
                  className="bg-background rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                  prefetch={false}
                >
                  <CameraIcon className="h-8 w-8" />
                  <span className="text-sm font-medium">Cameras</span>
                </Link>
                <Link
                  href="#"
                  className="bg-background rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                  prefetch={false}
                >
                  <TvIcon className="h-8 w-8" />
                  <span className="text-sm font-medium">TVs</span>
                </Link>
                <Link
                  href="#"
                  className="bg-background rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                  prefetch={false}
                >
                  <GamepadIcon className="h-8 w-8" />
                  <span className="text-sm font-medium">Gaming</span>
                </Link>
                <Link
                  href="#"
                  className="bg-background rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                  prefetch={false}
                >
                  <TabletIcon className="h-8 w-8" />
                  <span className="text-sm font-medium">Tablets</span>
                </Link><Link
                  href="#"
                  className="bg-background rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                  prefetch={false}
                >
                  <WearablesIcon className="h-8 w-8" />
                  <span className="text-sm font-medium">Wearables</span>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/shoppingCategories.jpg"
                width={500}
                height={500}
                alt="Categories"
                className="max-w-full h-auto rounded-lg shadow-lg"
                style={{ aspectRatio: "500/500", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
  );
}