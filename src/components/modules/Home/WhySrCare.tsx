import { Check, Stethoscope, Pill, Heart } from "lucide-react";
import whySrCareImg from "../../../assests/images/whysrcare.webp";
import Image from "next/image";

const WhySrCare = () => {
  const features = [
    {
      icon: "bg-blue-500",
      text: "Access any GP or specialist doctor you need at anytime from anywhere.",
    },
    {
      icon: "bg-emerald-500",
      text: "Access to online prescriptions, medicine delivery, and diagnostic tests.",
    },
    {
      icon: "bg-purple-500",
      text: "Easy subscription packages to protect you and your loved one's health and wellbeing.",
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
      <section className="py-16 px-4 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src={whySrCareImg}
                alt="Why SR Care"
                width={500}
                height={300}
              />
            </div>
            {/* Right side - Content */}
            <div className="space-y-8">
              {/* Heading */}
              <div className="space-y-4">
                <h3 className="text-primary text-lg font-semibold">
                  Why SR Care?
                </h3>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Bangladesh's leading healthcare app for online doctor
                  consultation
                </h2>
              </div>

              {/* Features List */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4 items-start group">
                    {/* Icon */}
                    <div
                      className={`${feature.icon} rounded-full p-2 flex-0 transition-transform group-hover:scale-110 shadow-md`}
                    >
                      <Check className="w-5 h-5 text-white" strokeWidth={3} />
                    </div>

                    {/* Text */}
                    <p className="text-foreground/90 text-lg leading-relaxed pt-1">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhySrCare;
