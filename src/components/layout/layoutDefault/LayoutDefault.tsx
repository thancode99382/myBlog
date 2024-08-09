import Footer from "@/components/layout/components/Footer";
import Header from "@/components/layout/components/Header";
import Siderbar from "../components/Siderbar";
import { usePathname } from "next/navigation";

export default function LayoutDefault({ children }) {
  return (
    <div>
      <Header />
      <div className="flex w-full">
        <div className="w-1/4 ">
          <Siderbar />
          </div>

        <div className="p-6 w-full" >{children}</div>
      </div>
<div> <Footer />  </div>
      
    </div>
  );
}
