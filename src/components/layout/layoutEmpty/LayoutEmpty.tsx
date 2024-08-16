"use client";

import Footer from "@/components/layout/components/Footer";
import Header from "@/components/layout/components/Header";
import Siderbar from "../components/Siderbar";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";

interface LayoutDefaultProps {
  children: ReactNode;
}

export default function LayoutEmpty({ children }: LayoutDefaultProps) {
  return (
    <SessionProvider>
      
        {children}
    </SessionProvider>
  );
}
