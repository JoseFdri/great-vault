import { Header } from "../header";
import { Footer } from "../footer";
import { useRouter } from "next/router";
2;
import React from "react";
import styles from "./styles.module.scss";
import { Navbar } from "../";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const isImgBackground = (pathname: string) => {
  const pagesWithImg = ["/create-account"];
  return pagesWithImg.includes(pathname);
};

export const Layout = ({ children }: DashboardLayoutProps) => {
  const router = useRouter();
  const backgroundClass = isImgBackground(router.pathname) ? styles.backgroundImg : "";
  return (
    <div className={`${backgroundClass} ${styles.mainBox} minh100vh`}>
      <Header title="My keys" description="Your favorite digital key holder" faviconUrl="/favicon.ico" />
      <div className={styles.layout}>
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};
