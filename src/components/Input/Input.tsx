import { ChangeEvent, FC, useEffect } from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";
import { FieldRenderProps } from "../Field/types";

const Input: FC<FieldRenderProps & InputProps> = ({
  onChange,
  value,
  placeholder,
  icon,
  meta,
  type,
}) => {
  const { touched, errors } = meta;

  return (
    <div className={styles.root}>
      {icon && <img src={icon} alt="Icon" className={styles.icon} />}
      <input
        type={type}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onChange(e.target.value);
        }}
        value={value || ""}
        placeholder={placeholder}
        className={classNames(styles.input, !!icon && styles["input_icon"])}
      />
      {touched && errors && errors.length && (
        <div className={styles.errors}>{errors.map((error) => error)}</div>
      )}
    </div>
  );
};

Input.defaultProps = {
  type: "text",
};

export type InputProps = FieldRenderProps & {
  icon?: string;
  type?: "text" | "password" | "email";
};

export default Input;
