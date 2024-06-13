import { PricingProvider } from "../web/providers/pricingContext";
import { SquaresPattern } from "./_components/SquaresPattern";
import { Footer } from "./_components/footer";
import { Header } from "./_components/navbar-1";
import { PreFooter } from "./_components/pre-footer";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return ( 
    <div className="flex flex-col h-full dark:bg-[#1F1F1F]">
      {/* <Navbar /> */}
      <Header />
      <PricingProvider>
      <main className="flex-grow pt-12 md:pt-20 isolate">
        {children}
        <SquaresPattern />
      </main>
      </PricingProvider>
      <PreFooter />
      <Footer />
    </div>
  );
}
 
export default MarketingLayout;
