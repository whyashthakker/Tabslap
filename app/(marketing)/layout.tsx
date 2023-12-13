import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return ( 
    <div className="flex flex-col h-full dark:bg-[#1F1F1F]">
      <Navbar />
      <main className="flex-grow pt-20 md:pt-28">
        {children}
      </main>
      <Footer />
    </div>
  );
}
 
export default MarketingLayout;
