import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BoltIcon, SearchIcon, ShoppingCartIcon, UserIcon } from '@/components/ui/icons'
import { ModeToggle } from '@/components/ui/themeToggle'

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
        </div>
      </header>
    )
}
