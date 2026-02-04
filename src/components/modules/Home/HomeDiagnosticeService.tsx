import { Clock, FileCheck, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HomeDiagnosticImg from "../../../assests/images/home_diagnostic_service.webp";

const HomeDiagnosticService = () => {
  const features = [
    {
      icon: Clock,
      text: "Faster and convenient tests booking",
    },
    {
      icon: Home,
      text: "Certified professionals will collect sample from home/office",
    },
    {
      icon: FileCheck,
      text: "Get report at DocTime app within 24 hours",
    },
  ];

  return (
    <div className=" w-full bg-white relative">
      {/* Teal Glow Background */}
      <div
        className="absolute inset-0 z-0 dark:hidden"
        style={{
          backgroundImage: `
        radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #14b8a6 100%)
      `,
          backgroundSize: "100% 100%",
        }}
      />
      {/* Dark Mode Glow Background */}
      <div
        className="absolute inset-0 z-0 hidden dark:block"
        style={{
          backgroundImage: `radial-gradient(125% 125% at 50% 10%, #1f2937 40%, #065f46 100%)`,
          backgroundSize: "100% 100%",
        }}
      />
      <section className="py-20 px-4 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-16 lg:gap-24 items-center">
            <div className="space-y-8 lg:space-y-10">
              {/* Heading */}
              <div className="space-y-4">
                <h3 className="text-primary text-base lg:text-lg font-semibold">
                  Home Diagnostic Service
                </h3>
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                  Sample collection at your Doorstep
                </h2>
                <p className="text-muted-foreground text-base lg:text-lg">
                  Making healthcare easily accessible anytime, anywhere.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-5">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex gap-4 items-start">
                      {/* Icon */}
                      <div className="flex-0 mt-1">
                        <IconComponent
                          className="w-6 h-6 text-foreground"
                          strokeWidth={1.5}
                        />
                      </div>

                      {/* Text */}
                      <p className="text-foreground text-base lg:text-lg leading-relaxed">
                        {feature.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  href="/book-test"
                  className="inline-block px-8 py-3.5 bg-primary hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Book Test
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src={HomeDiagnosticImg}
                alt="Home Diagnostic Service"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeDiagnosticService;
