import Footer from "@/components/layout/components/Footer";
import Header from "@/components/layout/components/Header";
import Siderbar from "../components/Siderbar";
import { usePathname } from "next/navigation";
import { ReactNode } from 'react';
import { ToastContainer } from "react-toastify";

interface LayoutDefaultProps {
  children: ReactNode;
}
export default function LayoutDefault({ children }:LayoutDefaultProps) {
  return (
    <div>
      <Header />
      <div className="md:flex ">
      <div className="p-6 md:w-full order-2">{children}</div>
        <div className="md:w-1/4 md:order-1">
          <Siderbar />
        </div>

        
      </div>
      <div>
        
        <Footer />
        <ToastContainer position="top-center" />
      </div>
    </div>
  );
}
