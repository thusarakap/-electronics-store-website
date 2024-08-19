"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MouseEvent } from "react";
import { FacebookIcon, GoogleIcon } from "@/components/ui/icons";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SignUp() {
  const handleLinkClick = (
    e: MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetUrl: string
  ) => {
    e.preventDefault();
    const form = document.querySelector(".form");
    if (form) {
      form.classList.add("fade-out");
    }
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 200);
  };

  return (
    <div>
      <div className="form">
        <Card className="w-max p-6 register-form fade-in">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
            <CardDescription>
              Create your account by filling out the information below.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-6 ">
              <div className="flex flex-col space-y-4 w-72">
                <h1 className="text-xl font-bold">Profile</h1>

                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    aria-label="Name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    aria-label="email"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    aria-label="Password"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Confirm Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Re-enter your password"
                    aria-label="Password"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tel">Contact Number</Label>
                  <Input
                    id="tel"
                    type="tel"
                    placeholder="Enter your contact number"
                    aria-label="Tel"
                    required
                  />
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-col space-y-4 w-72">
                <h1 className="text-xl font-bold">Address</h1>

                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name with initials"
                    aria-label="Name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="text">Street address</Label>
                  <Input
                    id="street-address"
                    type="text"
                    placeholder="Enter your street address"
                    aria-label="Text"
                    required
                  />
                </div>

                <div className="space-y-2 w-44">
                  <Label htmlFor="text">Postal code (optional)</Label>
                  <Input
                    id="post-code"
                    type="text"
                    placeholder="Enter your post code"
                    aria-label="Text"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="text">City</Label>
                  <Input
                    id="city"
                    type="text"
                    placeholder="Enter your city"
                    aria-label="city"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="text">Province</Label>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Province" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="central">Central</SelectItem>
                        <SelectItem value="eastern">Eastern</SelectItem>
                        <SelectItem value="north-central">
                          North Central
                        </SelectItem>
                        <SelectItem value="nothern">Nothern</SelectItem>
                        <SelectItem value="north-western">
                          North Western
                        </SelectItem>
                        <SelectItem value="sabaragamuwa">
                          Sabaragamuwa
                        </SelectItem>
                        <SelectItem value="southern">Southern</SelectItem>
                        <SelectItem value="uva">Uva</SelectItem>
                        <SelectItem value="western">Western</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </CardFooter>
          <p className="message text-center mt-1">
            Already registered?{" "}
            <a
              href="/login"
              className="underline"
              onClick={(e) => handleLinkClick(e, "/login")}
            >
              Sign In
            </a>
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-muted" />
            <p className="px-4 text-muted-foreground">or continue with</p>
            <div className="h-px flex-1 bg-muted" />
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <Button variant="outline" className="flex-1">
              <FacebookIcon className="mr-2 h-4 w-4" />
              Facebook
            </Button>
            <Button variant="outline" className="flex-1">
              <GoogleIcon className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
