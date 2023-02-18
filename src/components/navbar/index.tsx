import { FC } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

export const Navbar: FC = () => {
  return (
    <nav className={styles.mainBox}>
      <div className={styles.logo}>The Great Vault</div>
      <div className={styles.navItem}>
        <Link href="#">Home</Link>
      </div>
    </nav>
  );
};
