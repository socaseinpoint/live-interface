import { FC, useState } from "react";
import Input from "../Input";
import { InputProps } from "../Input/Input";
import { PUBLIC_URL } from "../../constants";
import styles from "./PasswordInput.module.scss";

const PasswordInput: FC<InputProps> = (props) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  return (
    <div className={styles.root}>
      <Input {...props} type={isPasswordShown ? "text" : "password"} />
      <div
        className={styles["show-password"]}
        onClick={() => setIsPasswordShown(!isPasswordShown)}
      >
        <img
          src={PUBLIC_URL + "icons/view.svg"}
          className={styles.icon}
          alt="Toggle password"
        />
      </div>
    </div>
  );
};

export default PasswordInput;
