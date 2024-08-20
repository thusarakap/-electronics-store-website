"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel } from "@/components/ui/alert-dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, DollarSign, WalletCards, Lock } from "lucide-react";

export default function Checkout() {
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
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="Enter your address" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Enter your city" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" placeholder="Enter your state" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="zip">Zip Code</Label>
                <Input id="zip" placeholder="Enter your zip code" />
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
                <RadioGroupItem value="apple" id="apple" className="peer sr-only" />
                <Label
                  htmlFor="apple"
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
              <div className="grid gap-2">
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
              <div className="grid gap-2">
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
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    alt="Product Image"
                    width={64}
                    height={64}
                    className="rounded-md"
                    style={{ aspectRatio: "64/64", objectFit: "cover" }}
                  />
                  <div>
                    <h3 className="font-medium">Acme Wireless Headphones</h3>
                    <p className="text-muted-foreground text-sm">Quantity: 1</p>
                  </div>
                </div>
                <div className="font-medium">$99.99</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    alt="Product Image"
                    width={64}
                    height={64}
                    className="rounded-md"
                    style={{ aspectRatio: "64/64", objectFit: "cover" }}
                  />
                  <div>
                    <h3 className="font-medium">Acme Wireless Keyboard</h3>
                    <p className="text-muted-foreground text-sm">Quantity: 1</p>
                  </div>
                </div>
                <div className="font-medium">$79.99</div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>Subtotal</div>
                <div className="font-medium">$179.98</div>
              </div>
              <div className="flex items-center justify-between">
                <div>Shipping</div>
                <div className="font-medium">$9.99</div>
              </div>
              <div className="flex items-center justify-between">
                <div>Tax</div>
                <div className="font-medium">$14.40</div>
              </div>
              <Separator />
              <div className="flex items-center justify-between font-bold">
                <div>Total</div>
                <div>$204.37</div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
          <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="w-full">Place Order</Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="sm:max-w-md">
            <AlertDialogHeader>
              <AlertDialogTitle>Order Confirmation</AlertDialogTitle>
              <AlertDialogDescription>
                Thank you for your order! Your order number is #12345. Your order will be delivered within 3-5 business
                days.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Close</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
          </CardFooter>
        </Card>
        
      </div>
      <div className="space-y-6">
        
      </div>
      
    </div>
  )
}