import { getCurrentUser } from "@/actions/onboarding";
import { redirect } from "next/navigation";
import React from "react";

export const metadata = {
  title: "Onboarding - Vaidyameet",
  description:
    "Welcome to Vaidyameet! Start your journey with us by completing the onboarding process. Let's get you set up for a seamless experience.",
};

const OnboardingLayout = async ({ children }) => {
  const user = await getCurrentUser();

  if (user) {
    if (user.role === "PATIENT") {
      redirect("/doctors");
    } else if (user.role === "DOCTOR") {
      if (user.verificationStatus === "VERIFIED") {
        redirect("/doctor");
      } else {
        redirect("/doctor/verification");
      }
    } else if (user.role === "ADMIN") {
      redirect("/admin");
    }
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className=" text-3xl md:text-4xl font-bold gradient-title mb-2">
            Welcome to Vaidyameet
          </h1>
          <p className="text-muted-foreground text-lg">
            Tell us how you want to use the platform
          </p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default OnboardingLayout;
