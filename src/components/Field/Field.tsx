import { FC, useContext } from "react";
import FormContext from "../Form/FormContext";
import { FieldRenderProps } from "./types";

const Field: FC<FieldProps> = ({ name, render, placeholder }) => {
  const { meta, setValue, values } = useContext(FormContext);

  return (
    <>
      {render({
        value: values[name],
        onChange: (value: string) => setValue(name, value),
        meta: {
          touched: meta.touched,
          errors: meta.errors[name],
        },
        placeholder,
      })}
    </>
  );
};

interface FieldProps {
  name: string;
  render: (props: FieldRenderProps) => React.ReactElement;
  placeholder: string;
}

export default Field;
