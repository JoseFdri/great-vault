import Link from "next/link";
import React, { FC } from "react";
import styles from "./styles.module.scss";

type ButtonProps = {
  type: string;
  classes: string[];
  link: string;
  children: React.ReactNode;
  style?: Record<string, string>;
};

const buttonClasses: Record<string, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  tertiary: styles.tertiary,
};

export const Button: FC<ButtonProps> = ({ type, link, children, style }) => {
  return (
    <Link href={link} className={buttonClasses[type]} style={style}>
      {children}
    </Link>
  );
};
