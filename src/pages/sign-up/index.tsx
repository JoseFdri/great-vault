import { useState, FormEvent } from "react";
import Link from "next/link";
import styles from "../../styles/sign-up.module.scss";
import { Spinner } from "../../components";
import { OnboardingForm, PasswordsForm, EmailVerificationgForm } from "../../components/forms";

export default function CreateAccount() {
  const [step, setStep] = useState(2);
  const [isLoading, setIsloading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target as HTMLFormElement));
    setIsloading(true);
    setStep(0);
    await new Promise((resolve) => setTimeout(() => resolve(true), 3000));
    console.log(step);
    setIsloading(false);
    if (step === 1) {
      setStep(2);
    }
    if (step === 2) {
      setStep(1);
    }
    console.log(data);
  };

  return (
    <div className="mainBox">
      <div className={styles.formBox}>
        <h1 className="h1">Sign up</h1>
        <div style={{ marginBottom: "40px" }}>
          <span>Already a member? </span>
          <Link href="sign-in" className="txtBlue">
            Sign in
          </Link>
        </div>
        <div style={{ margin: "0 auto" }}>{isLoading && <Spinner />}</div>
        {step === 1 && <OnboardingForm onSubmit={onSubmit} />}
        {step === 2 && <PasswordsForm onSubmit={onSubmit} />}
        {step === 3 && <EmailVerificationgForm onSubmit={onSubmit} />}
      </div>
    </div>
  );
}
