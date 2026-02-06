"use client";
import Image from "next/image";
import CorporatePartnerImg from "../../../assests/images/corporate-member.webp";
import Link from "next/link";
export default function CorporatePartner() {
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
      <section className="relative py-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={CorporatePartnerImg}
                  alt="Corporate-Partner"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative element - house roof shape */}
              <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none">
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full opacity-20"
                  fill="none"
                >
                  <path
                    d="M20 100 L100 20 L180 100 L180 180 L20 180 Z"
                    stroke="#3B82F6"
                    strokeWidth="8"
                    fill="transparent"
                  />
                </svg>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <h3 className="text-primary font-medium text-lg">
                Become a Corporate Partner
              </h3>

              <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                Empower your workforce with seamless Healthcare Solutions
              </h2>

              <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
                <p>
                  Ensure the well-being of your employees with our comprehensive
                  healthcare platform, offering convenient healthcare packages
                  which includes online consultations, health records, OPD/IPD
                  benefits and personalized care management.
                </p>
              </div>

              <div className="pt-4">
                <Link href="ngos">
                  <button className="bg-primary hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
