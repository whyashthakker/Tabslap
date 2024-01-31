import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";
import StickyBanner from "./_components/sticky-banner";
import { Header } from "./_components/navbar-1";
import { PreFooter } from "./_components/pre-footer";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return ( 
    <div className="flex flex-col h-full dark:bg-[#1F1F1F]">
      {/* <Navbar /> */}
      <Header />
      <main className="flex-grow pt-20 md:pt-28">
        {children}
      </main>
      <PreFooter />
      <Footer />
    </div>
  );
}
 
export default MarketingLayout;
