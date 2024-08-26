"use client";

import { useCart } from "../../context/CartContext";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel } from "@/components/ui/alert-dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import { CreditCard, DollarSign, WalletCards, Lock } from "lucide-react";

export default function Checkout() {
  const { cart } = useCart();

  const user = {
    name: "Thusaraka Palliyeguru",
    street: "226/3/2, Narangaskumbura Road",
    city: "Kandy",
    province: "Central",
    postal: "20032",
    }
  
  const subtotal = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  const shipping = 500;
  const tax = subtotal * 0.08; // Assuming 8% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-12 px-4 md:px-0">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Shipping & Payment</h2>
          <p className="text-muted-foreground">Enter your shipping and payment details.</p>
        </div>
        <Card>
          <CardContent>
            <form className="grid gap-4 pt-5">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <label htmlFor="name" className="font-semibold text-lg text-muted-foreground">{user.name}</label>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <label htmlFor="street" className="font-semibold text-lg text-muted-foreground">{user.street}</label>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="city">City</Label>
                  <label htmlFor="city" className="font-semibold text-lg text-muted-foreground">{user.city}</label>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="province">Province</Label>
                  <label htmlFor="province" className="font-semibold text-lg text-muted-foreground">{user.province}</label>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="postal">Postal Code</Label>
                <label htmlFor="postal" className="font-semibold text-lg text-muted-foreground">{user.postal}</label>
              </div>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
              <div>
                <RadioGroupItem value="card" id="card" className="peer sr-only" />
                <Label
                  htmlFor="card"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <CreditCard className="mb-3 h-6 w-6" />
                  Credit Card
                </Label>
              </div>
              <div>
                <RadioGroupItem value="paypal" id="paypal" className="peer sr-only" />
                <Label
                  htmlFor="paypal"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <WalletCards className="mb-3 h-6 w-6" />
                  PayPal
                </Label>
              </div>
              <div>
                <RadioGroupItem value="cash" id="cash" className="peer sr-only" />
                <Label
                  htmlFor="cash"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <DollarSign className="mb-3 h-6 w-6" />
                  Cash
                </Label>
              </div>
            </RadioGroup>
            <div className="grid gap-4 mt-4">
              <div className="grid gap-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" placeholder="Enter your card number" />
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="grid gap-2 min-w-48">
                  <Label htmlFor="expiration">Expiration</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Select>
                      <SelectTrigger id="expiration-month">
                        <SelectValue placeholder="Month" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="01">January</SelectItem>
                        <SelectItem value="02">February</SelectItem>
                        <SelectItem value="03">March</SelectItem>
                        <SelectItem value="04">April</SelectItem>
                        <SelectItem value="05">May</SelectItem>
                        <SelectItem value="06">June</SelectItem>
                        <SelectItem value="07">July</SelectItem>
                        <SelectItem value="08">August</SelectItem>
                        <SelectItem value="09">September</SelectItem>
                        <SelectItem value="10">October</SelectItem>
                        <SelectItem value="11">November</SelectItem>
                        <SelectItem value="12">December</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger id="expiration-year">
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2025">2025</SelectItem>
                        <SelectItem value="2026">2026</SelectItem>
                        <SelectItem value="2027">2027</SelectItem>
                        <SelectItem value="2028">2028</SelectItem>
                        <SelectItem value="2029">2029</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-2 pl-10">
                  <Label htmlFor="cvc">CVV</Label>
                  <Input id="cvc" type="password" placeholder="123" />
                </div>
                <div className="flex items-center justify-end gap-2 mt-4">
                  <Lock className="h-6 w-6 text-primary" />
                  <span className="text-sm text-muted-foreground">Secure payment</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Order Summary</h2>
          <p className="text-muted-foreground">Review your order details before placing the order.</p>
        </div>
        <Card>
          <CardContent>
            <div className="grid gap-4 pt-5">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="rounded-md"
                      style={{ aspectRatio: "64/64", objectFit: "cover" }}
                    />
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-muted-foreground text-sm">Quantity: {item.quantity || 1}</p>
                    </div>
                  </div>
                  <div className="font-medium">Rs.{(item.price * (item.quantity || 1)).toLocaleString()}</div>
                </div>
              ))}
              <Separator />
              <div className="flex items-center justify-between">
                <div>Subtotal</div>
                <div className="font-medium">Rs.{subtotal.toLocaleString()}</div>
              </div>
              <div className="flex items-center justify-between">
                <div>Shipping</div>
                <div className="font-medium">Rs.{shipping.toLocaleString()}</div>
              </div>
              <div className="flex items-center justify-between">
              <div>Tax</div>
                <div className="font-medium">Rs.{tax.toLocaleString()}</div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="text-lg font-bold">Total</div>
                <div className="text-lg font-bold">Rs.{total.toLocaleString()}</div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="w-full sm:w-auto" size="lg">
                  Place Order
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Confirm Your Order</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to place the order? This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <Button className="w-full sm:w-auto" size="lg">
                    Confirm
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
