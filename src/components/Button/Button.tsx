import { FC } from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

const Button: FC<ButtonProps> = ({ onClick, title, autoWidth }) => {
  return (
    <button
      className={classNames(
        styles.button,
        autoWidth && styles["button_auto-width"]
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

Button.defaultProps = {
  autoWidth: false,
};

interface ButtonProps {
  onClick?: () => void;
  title: string;
  autoWidth?: boolean;
}

export default Button;
