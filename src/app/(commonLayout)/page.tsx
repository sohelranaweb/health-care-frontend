import CorporatePartner from "@/components/modules/Home/CorporatePartner";
import Hero from "@/components/modules/Home/Hero";
import HomeDiagnosticService from "@/components/modules/Home/HomeDiagnosticeService";
import PremiumMember from "@/components/modules/Home/PremiumMember";
import Specialities from "@/components/modules/Home/Specialities";
import WhySrCare from "@/components/modules/Home/WhySrCare";
import Head from "next/head";

export default async function Home() {
  return (
    <>
      <Head>
        <title>AI-Powered Healthcare - Find Your Perfect Doctor</title>
        <meta
          name="description"
          content="Discover top-rated doctors tailored to your needs with our AI-powered healthcare platform. Get personalized recommendations and book appointments effortlessly."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Hero></Hero>
        <WhySrCare></WhySrCare>
        <Specialities></Specialities>
        <HomeDiagnosticService></HomeDiagnosticService>
        <PremiumMember></PremiumMember>
        <CorporatePartner></CorporatePartner>
      </main>
    </>
  );
}
