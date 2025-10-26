import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { features, testimonials } from "@/lib/data"; // Importing features data
import { creditBenefits } from "@/lib/data"; // Importing credit benefits data
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <div className="bg-background pt-10">
      <section className="relative overflow-hidden py-20">
        <div className="w-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Badge
                variant="outline"
                className="bg-indigo-900/30 border-indigo-700/30 px-4 py-2 text-indigo-400 text-sm font-medium"
              >
                HealthCare made simple
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4">
                Connects with Vaidyas <br />
                <span className="gradient-title">anytime, anywhere</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-md">
                From booking appointments to follow-ups, VaidyaMeet ensures
                every step of your healthcare journey is smooth and hassle-free.
                Stay connected with your doctors and focus on what truly matters
                – your well-being.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  <Link href={"/onboarding"}>
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-indigo-700/30 hover:bg-muted/80"
                >
                  <Link href={"/doctors"}>
                    Find Doctors <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/home-background.png"
                alt="Doctor consultation dashboard"
                fill
                priority
                className="object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our Platform connects patients with healthcare providers
              seamlessly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              return (
                <Card
                  key={index}
                  className="border-indigo-900/20 hover:border-indigo-800/40 transition-all duration-300"
                >
                  <CardHeader className="pb-2">
                    <div className="border-indigo-900/20 p-3 rounded-lg w-fit mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text=xl font-semibold text-white">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-indigo-900/30 border-indigo-700/30 px-4 py-2 text-indigo-400 text-sm font-medium"
            >
              Affordable Healthcare
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Consultation Packages
            </h2>
            <p className="text-muted-foreground t ext-lg max-w-2xl mx-auto">
              choose the right package for your needs
            </p>
          </div>

          <div>
            <div className="mb-10">
              {/* pricing table */}
              <Pricing />
            </div>

            <Card className="border-indigo-900/30 bg-muted/20 hover:border-indigo-800/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white flex items-center">
                  <Stethoscope className="h-5 w-5 mr-2 text-indigo-400" />
                  How Our Credit System Works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {creditBenefits.map((benefit, index) => {
                    return (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="mr-3 mt-1 bg-indigo-900/20 p-1 rounded-full">
                          <Check className="h-4 w-4 text-indigo-400 mt-1" />
                        </div>
                        <p
                          className="text-muted-foreground"
                          dangerouslySetInnerHTML={{ __html: benefit }}
                        />
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-indigo-900/30 border-indigo-700/30 px-4 py-2 text-indigo-400 text-sm font-medium"
            >
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 pt-4">
              What Our Users Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Here from patients and doctors who uses our platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              return (
                <Card
                  key={index}
                  className="border-indigo-900/20 hover:border-indigo-800/40 transition-all duration-300"
                >
                  <CardContent className="pt-2 ">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 rounded-full bg-indigo-900/20 flex items-center justify-center mr-4 text-indigo-400 font-bold">
                        <span className="text-indigo-400 font-bold">
                          {testimonial.initials}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-indigo-900/30 to-indigo-950/20 hover:border-indigo-800/40 transition-all duration-300">
            <CardContent className="p-8 md:p-10 lg:p-14 relative overflow-hidden">
              <div>
                <h2 className="text-white font-bold text-3xl md:text-4xl">
                  Ready to take control of your healthcare?
                </h2>
                <p className="text-muted-foreground text-lg">
                  Join thousands of users who have simplified their healthcare
                  journey with our platform. Get started today and experince
                  healthcare the way it should be
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <Button
                    size="lg"
                    className="bg-indigo-600 text-white hover:bg-indigo-700"
                    asChild
                  >
                    <Link href="/sign-up">Get Started</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-indigo-600 text-white hover:bg-indigo-700"
                    asChild
                  >
                    <Link href="/pricing">View pricing </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
