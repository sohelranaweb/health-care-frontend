import React from "react";
import Image from "next/image";
import { ISpecialty } from "@/types/specialities.interface";
import Link from "next/link";

interface ISpecialitiesProps {
  specialities: ISpecialty[];
}

const SpecialtyCard = ({ specialities }: ISpecialitiesProps) => {
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
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-2xl font-medium text-primary mb-2">
              Available specialties
            </h1>
            <p className="text-4xl font-bold">
              Explore Doctors from {specialities.length}+ clinical areas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {specialities.map((specialty) => (
              <div
                key={specialty.id}
                className="group relative bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Card Content */}
                <Link
                  href="consultation"
                  className="p-6 flex flex-col items-center text-center"
                >
                  {/* Icon Container */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-4 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14">
                      <Image
                        src={specialty.icon}
                        alt={specialty.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 48px, 56px"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                    {specialty.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {specialty.description}
                  </p>

                  {/* Hover Indicator */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="inline-flex items-center text-primary text-sm font-medium">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>

                {/* Border Accent on Hover */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialtyCard;
