import { FormEvent } from "react";
import { Input } from "../../";
import styles from "../styles.module.scss";

type OnboardingFormProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export const OnboardingForm = ({ onSubmit }: OnboardingFormProps) => {
  return (
    <form className={`${styles.form} `} method="post" onSubmit={onSubmit}>
      <Input id="name" name="name" type="text" label="Name" icons={{ firstUrl: "/imgs/icons/user.png" }} />
      <Input id="email" name="email" type="text" label="Email" icons={{ firstUrl: "/imgs/icons/mail.png" }} />
      <button style={{ marginTop: "20px", marginBottom: "10px" }} className="btnPrimary">
        Next
      </button>
    </form>
  );
};
