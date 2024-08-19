import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BoltIcon, ShoppingCartIcon, UserIcon, MenuIcon } from '@/components/ui/icons'
import { ModeToggle } from '@/components/ui/themeToggle'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function Navbar() {
    return (
        <header className="bg-background border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <BoltIcon className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">Electro</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="/" className="text-m font-medium hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-m font-medium hover:underline" prefetch={false}>
              Products
            </Link>
            <Link href="/contact-us" className="text-m font-medium hover:underline" prefetch={false}>
              Contact Us
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button variant="ghost" size="icon">
              <ShoppingCartIcon className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
            <Button variant="ghost" size="icon">
            <Link href="/login" prefetch={false}>
              <UserIcon className="h-5 w-5" />
              <span className="sr-only">Account</span>
                </Link>
            </Button>
          </div>
          <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full md:hidden" aria-label="Toggle navigation menu">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 py-6">
              <Link href="/" className="flex w-full items-center py-3 text-2xl font-semibold" prefetch={false}>
                Home
              </Link>
              <Link href="#about" className="flex w-full items-center py-3 text-2xl font-semibold" prefetch={false}>
              Products
              </Link>
              <Link href="/contact-us" className="flex w-full items-center py-3 text-2xl font-semibold" prefetch={false}>
              Contact Us
              </Link>
              <div className="flex items-center gap-2">
            <ModeToggle />
            <Button variant="ghost" size="icon">
              <ShoppingCartIcon className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
            <Button variant="ghost" size="icon">
            <Link href="/login" prefetch={false}>
              <UserIcon className="h-5 w-5" />
              <span className="sr-only">Account</span>
                </Link>
            </Button>
          </div>
            </div>
          </SheetContent>
        </Sheet>
        </div>
      </header>
    )
}