import { FC, useRef, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

type textInputProps = {
  type: string;
  label: string;
  placeholder?: string;
  id: string;
  name: string;
  icons?: {
    firstUrl?: string;
    secondUrl?: string;
  };
};

export const Input: FC<textInputProps> = ({ type, id, name, label, placeholder, icons }: textInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [focusClass, setFocusClass] = useState("");
  const [iconUrl, setIconUrl] = useState<string>(icons?.firstUrl ?? "");
  const [inputType, setInputType] = useState(type);

  const inputTypeText = "text";
  const inputTypePassword = "password";

  const focus = () => {
    inputRef?.current?.focus();
    setFocusClass(styles.focus);
  };

  const onIconClick = () => {
    if (icons?.secondUrl && iconUrl === icons.firstUrl) {
      setIconUrl(icons.secondUrl);
      setInputType(inputTypeText);
    } else if (icons?.firstUrl) {
      setIconUrl(icons.firstUrl);
      setInputType(inputTypePassword);
    }
  };

  const iconHtml = (
    <div className={styles.imgFluid}>
      <Image
        src={iconUrl}
        alt={label}
        fill={true}
        className={icons?.secondUrl ? styles.interactiveIcon : ""}
        onClick={onIconClick}
      />
    </div>
  );

  return (
    <div className={`${styles.box} ${focusClass}`} onClick={focus} onBlur={() => setFocusClass("")}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.inputWrap}>
        <input ref={inputRef} type={inputType} id={id} name={name} className={styles.input} placeholder={placeholder} />

        {iconUrl && iconHtml}
      </div>
    </div>
  );
};
