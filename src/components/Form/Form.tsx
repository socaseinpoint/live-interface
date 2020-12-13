import { FC, useState } from "react";
import FormContext from "./FormContext";
import { FormErrors, FormValidators } from "./types";

const Form: FC<FormProps> = ({ onSubmit, render, validators }) => {
  const [touched, setTouched] = useState(false);
  const [values, setValues] = useState<{
    [key: string]: any;
  }>({});

  const setValue = (name: string, value: any) => {
    setValues({ ...values, [name]: value });
  };

  const errors: FormErrors = Object.keys(validators).reduce((acc, key) => {
    return {
      ...acc,
      [key]: validators[key].map((validator) => validator(values[key])),
    };
  }, {});

  return (
    <FormContext.Provider
      value={{
        values,
        setValue,
        meta: {
          touched,
          errors,
        },
      }}
    >
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setTouched(true);

          if (
            Object.keys(errors).some((key) =>
              errors[key].some((error) => !!error)
            )
          ) {
            return;
          }

          onSubmit(values);

          setValues({});
          setTouched(false);
        }}
      >
        {render()}
      </form>
    </FormContext.Provider>
  );
};

interface FormProps {
  onSubmit: (values: { [key: string]: any }) => void;
  render: () => React.ReactNode;
  validators: FormValidators;
}

export default Form;
