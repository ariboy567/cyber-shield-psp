import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HelpButton from "./HelpButton";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <HelpButton />
    </div>
  );
};

export default MainLayout;
