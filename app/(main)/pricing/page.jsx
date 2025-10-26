import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Pricing from "@/components/pricing";

const PricingPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-start mb-2">
        <Link
          href="/"
          className="mt-10 flex items-center text-muted-foreground hover:text-white transition-colors"
        >
          <ArrowLeft className="mr-2 h-7 w-7" />
          Back to Home
        </Link>
      </div>

      <div className="max-w-full text-center mb-12 mx-auto">
        <Badge
          variant="outline"
          className="bg-indigo-900/30 border-indigo-700/30 px-4 py-1 text-indigo-400 text-sm font-medium mb-4"
        >
          Affordable Healthcare
        </Badge>

        <h1 className="text-4xl md:text-5xl gradient-title font-bold mb-4">
          Simple, Transparent Pricing
        </h1>

        {/* Choose the perfect consultation package that fits your healthcare needs with no hidden fees or long-term commitments */}
        <p className="text-lg text-muted-foreground mx-auto max-w-2xl">
          Access quality healthcare without breaking the bank. Our pricing is
          designed to be affordable and straightforward, so you can focus on
          what matters most - your health.
        </p>
      </div>

      <Pricing />
      <div className="max-w-3xl mx-auto mt-16 text-center">
        <h2 className="text-2xl text-white font-bold mb-2">
          Questions? We're Here to Help
        </h2>
        <p className="text-muted-foreground mb-4">
          Contact our support team at support@VaidyaMeet.commitments
        </p>
      </div>
    </div>
  );
};

export default PricingPage;
