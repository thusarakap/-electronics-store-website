import Link from "next/link"
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "./ui/icons"


export function Footer() {
    return (
        <footer className="bg-muted/40 py-8">
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">About</h3>
            <Link href="#" className="text-sm text-muted-foreground hover:underline" prefetch={false}>
              Company
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline" prefetch={false}>
              Careers
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline" prefetch={false}>
              Press
            </Link>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Products</h3>
            <Link href="#" className="text-sm text-muted-foreground hover:underline" prefetch={false}>
              Smartphones
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline" prefetch={false}>
              Laptops
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline" prefetch={false}>
              Tablets
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline" prefetch={false}>
              Accessories
            </Link>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Support</h3>
            <Link href="#" className="text-sm text-muted-foreground hover:underline" prefetch={false}>
              Contact Us
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline" prefetch={false}>
              FAQs
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline" prefetch={false}>
              Shipping & Returns
            </Link>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                <FacebookIcon className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                <TwitterIcon className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                <InstagramIcon className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                <LinkedinIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="container mt-8 text-center text-sm text-muted-foreground">
          &copy; 2024 Electro. All rights reserved.
        </div>
      </footer>
    )
}