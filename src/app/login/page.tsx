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
import { FacebookIcon, GoogleIcon } from "@/components/ui/icons";
import { MouseEvent } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function Login() {
  const handleLinkClick = (
    e: MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetUrl: string
  ) => {
    e.preventDefault();
    const form = document.querySelector(".form") as HTMLElement;
    form.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 200);
  };

  return (
    <div>
      <div className="form">
        <Card className="w-full max-w-md p-6 login-form fade-in">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <CardDescription>
              Enter your username and password to access your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Email</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your Email"
                aria-label="Username"
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

              <div className="flex w-full justify-between">
                <Label className="flex items-center gap-2">
                  <Checkbox />
                  Remember me
                </Label>
                <Button variant="link" className="text-primary-foreground flex items-center gap-2">
                  <Link href="#" className="hover:underline">
                    Forgot password?
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Link href="/user" className="w-full" prefetch={false}>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </Link>
          </CardFooter>
          <p className="message text-center mt-2">
            Not registered?{" "}
            <a
              href="/signup"
              className="underline"
              onClick={(e) => handleLinkClick(e, "/signup")}
            >
              Sign Up
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
