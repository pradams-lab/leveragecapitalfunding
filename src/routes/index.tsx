import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Ticker } from "@/components/sections/ticker";
import { About } from "@/components/sections/about";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Calculator } from "@/components/sections/calculator";
import { Testimonials } from "@/components/sections/testimonials";
import { ApplicationForm } from "@/components/sections/application-form";

const title = "Leverage Capital Funding | Capital de Giro em até 24 Horas";
const description =
  "Adiantamento de recebíveis (MCA) para empresários: liquidez imediata, sem burocracia bancária e sem perda de equity. Aprovação e liberação em até 24 horas.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <Ticker />
        <About />
        <HowItWorks />
        <Calculator />
        <Testimonials />
        <ApplicationForm />
      </main>
      <SiteFooter />
    </div>
  );
}
