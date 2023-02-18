import styles from "../../styles/Create-account.module.scss";
import { Input, Button } from "../../components";

export default function CreateAccount() {
  return (
    <div className={styles.mainBox}>
      <div className={styles.formBox}>
        <h1 className="h1">Create account</h1>
        <form action="" className={styles.form}>
          <Input type="text" label="Name" icons={{ firstUrl: "/imgs/icons/user.png" }} />
          <Input type="text" label="Email" icons={{ firstUrl: "/imgs/icons/mail.png" }} />
          <Input
            type="password"
            label="Password"
            icons={{ firstUrl: "/imgs/icons/eye.png", secondUrl: "/imgs/icons/eye_closed.png" }}
          />
          <Button style={{ marginTop: "20px" }} type="primary" link="">
            Sign up
          </Button>
        </form>
      </div>
    </div>
  );
}
