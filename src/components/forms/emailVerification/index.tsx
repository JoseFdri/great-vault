import { FormEvent } from "react";
import { Input } from "../../";
import styles from "../styles.module.scss";

type EmailVerificationgFormProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export const EmailVerificationgForm = ({ onSubmit }: EmailVerificationgFormProps) => {
  return (
    <form action="POST" className={`${styles.form} `} onSubmit={onSubmit}>
      <h2 className="txtCenter">Verify your email address</h2>
      <div className={styles.description} style={{ marginBottom: "10px" }}>
        <span>
          We sent a 6-digit verification code to <b>{"driferjose@gmail.com"}</b>
        </span>
      </div>
      <Input type="text" label="Enter code" id="verify_email_address" name="verify_email_address" />
      <div className="smallLegend txtCenter">
        <span>Didn&apos;t get the code?</span>
        <button className="btnLink">Send again.</button>
      </div>
      <div className="smallLegend txtCenter">
        <span>Wrong email address?</span>
        <button className="btnLink">Go back.</button>
      </div>
      <button type="submit" style={{ marginTop: "20px", marginBottom: "10px" }} className="btnPrimary">
        Next
      </button>
    </form>
  );
};
