"use client"

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [animationClass, setAnimationClass] = useState("");

  const toggleForm = () => {
    setAnimationClass("fade-out");
    setTimeout(() => {
      setIsLogin(!isLogin);
      setAnimationClass("fade-in");
    }, 300);
  };

  return (
    <div className="login-page flex flex-col justify-center items-center h-screen">
      <div className={`form ${animationClass}`}>
        {isLogin ? (
          <Card className="w-full max-w-md p-6 login-form">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Login</CardTitle>
              <CardDescription>Enter your username and password to access your account.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" type="text" placeholder="Enter your username" aria-label="Username" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" aria-label="Password" required />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button type="submit" className="w-full">
                Login
              </Button>
            </CardFooter>
            <p className="message text-center mt-4">
              Not registered?{" "}
              <a href="#" onClick={toggleForm}>
                Create account
              </a>
            </p>
          </Card>
        ) : (
          <Card className="w-full max-w-md p-6 register-form">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
              <CardDescription>Create your account by filling out the information below.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="Enter your name" aria-label="Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" aria-label="Password" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email address" aria-label="Email" required />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button type="submit" className="w-full">
                Create
              </Button>
            </CardFooter>
            <p className="message text-center mt-4">
              Already registered?{" "}
              <a href="#" onClick={toggleForm}>
                Sign In
              </a>
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}