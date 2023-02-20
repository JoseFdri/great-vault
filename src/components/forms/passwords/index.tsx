import { FormEvent } from "react";
import { Input } from "../../";
import styles from "../styles.module.scss";

type PasswordsFormProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export const PasswordsForm = ({ onSubmit }: PasswordsFormProps) => {
  return (
    <form action="POST" className={`${styles.form} `} onSubmit={onSubmit}>
      <Input
        type="password"
        label="Password"
        id="password"
        name="password"
        icons={{ firstUrl: "/imgs/icons/eye.png", secondUrl: "/imgs/icons/eye_closed.png" }}
      />
      <Input
        type="password"
        label="Repeat password"
        id="repeatPassword"
        name="repeatPassword"
        icons={{ firstUrl: "/imgs/icons/eye.png", secondUrl: "/imgs/icons/eye_closed.png" }}
      />
      <button style={{ marginTop: "20px", marginBottom: "10px" }} className="btnPrimary">
        Next
      </button>
    </form>
  );
};
