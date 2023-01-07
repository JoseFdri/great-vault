import { Header } from "../header";
import { Footer } from "../footer";
import React from "react";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: DashboardLayoutProps) {
  return (
    <>
      <Header title="My keys" description="Your favorite digital key holder" faviconUrl="/favicon.ico" />
      {children}
      <Footer />
    </>
  );
}
