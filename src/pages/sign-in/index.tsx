import Link from "next/link";
import styles from "../../styles/sign-in.module.scss";
import { Input } from "../../components";

export default function CreateAccount() {
  return (
    <div className="mainBox">
      <div className={styles.formBox}>
        <h1 className="h1">Sign in</h1>
        <div style={{ marginBottom: "40px" }}>
          <span>Not a member? </span>
          <Link href="sign-up" className="txtBlue">
            Sign up
          </Link>
        </div>
        <form action="" className={styles.form}>
          <Input id="email" name="email" type="email" label="Email" icons={{ firstUrl: "/imgs/icons/mail.png" }} />
          <Input
            type="password"
            label="Password"
            id="password"
            name="password"
            icons={{ firstUrl: "/imgs/icons/eye.png", secondUrl: "/imgs/icons/eye_closed.png" }}
          />
          <button style={{ marginTop: "10px" }} className="btnPrimary">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
