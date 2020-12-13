import React from "react";
import { FormContextValue } from "./types";

const FormContext = React.createContext<FormContextValue>({
  values: {},
  setValue: (_: string, __: any) => {},
  meta: {
    touched: false,
    errors: {},
  },
});

export default FormContext;
