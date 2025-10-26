import Image from "next/image";
import React from "react";
import Link from "next/link";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { checkUser } from "@/lib/checkUser";
import { Badge } from "./ui/badge";
import { CreditCard, Stethoscope, User } from "lucide-react";
import { Calendar } from "lucide-react";
import { checkAndAllocateCredits } from "@/actions/credits";
// import { Badge } from "./ui/badge";
// import { CreditCard } from "lucide-react";

const Header = async () => {
  const user = await checkUser();
  if (user?.role === "PATIENT") {
    await checkAndAllocateCredits(user);
  }
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-10 supports-[backdrop-filter]:bg-background/60">
      <nav className="w-full px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/vm.png"
            alt="VaidyaMeet Logo"
            width={100}
            height={100}
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-2">
          <SignedIn>
            {user?.role === "ADMIN" && (
              <Link href="/admin">
                <Button
                  variant="outline"
                  className="hidden md:inline-flex items-center gap-2"
                >
                  <Stethoscope className="h-4 w-4" />
                  Admin Dashboard
                </Button>
                <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                  <Calendar className="h-4 w-4" />
                </Button>
              </Link>
            )}

            {user?.role === "DOCTOR" && (
              <Link href="/doctor">
                <Button
                  variant="outline"
                  className="hidden md:inline-flex items-center gap-2"
                >
                  <Stethoscope className="h-4 w-4" />
                  Doctor Dashboard
                </Button>
                <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                  <Calendar className="h-4 w-4" />
                </Button>
              </Link>
            )}

            {user?.role === "PATIENT" && (
              <Link href="/appointments">
                <Button
                  variant="outline"
                  className="hidden md:inline-flex items-center gap-2"
                >
                  <Calendar className="h-4 w-4" />
                  My Appointments
                </Button>
                <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                  <Calendar className="h-4 w-4" />
                </Button>
              </Link>
            )}

            {user?.role === "UNASSIGNED" && (
              <Link href="/onboarding">
                <Button
                  variant="outline"
                  className="hidden md:inline-flex items-center gap-2"
                >
                  <User className="h-4 w-4" />
                  Complete Profile
                </Button>
                <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                  <User className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </SignedIn>

          {(!user || user?.role === "PATIENT") && (
            <Link href="/pricing">
              <Badge
                variant="outline"
                className="h-9 bg-indigo-900/20 border-indigo-700/30 px-3 py-1 flex items-center gap-2"
              >
                <CreditCard className="h-3.5 w-3.5 text-indigo-400" />
                <span className="text-indigo-400">
                  {user && user?.role === "PATIENT" ? (
                    <>
                      {user.credits}{" "}
                      <span className="hidden md:inline">Credits</span>
                    </>
                  ) : (
                    <>Pricing</>
                  )}
                </span>
              </Badge>
            </Link>
          )}

          <SignedOut>
            <SignInButton>
              <Button
                variant="secondary"
                className="hover:bg-secondary/80 cursor-pointer"
              >
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
            appearance={{
              elements: {
                avatarBox: "w-10 h-10",
                userPreviewMainIdentifier: "font-semibold",
                userButtonPopoverCard: "shadow-xl",
              },
            }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
