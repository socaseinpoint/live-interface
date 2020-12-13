export type Validate = (value: string) => string | undefined;

export type FormValidators = { [key: string]: Validate[] };

export type FormErrors = {
  [key: string]: string[];
};

export type FormContextValue = {
  values: {
    [key: string]: any;
  };
  setValue: (name: string, value: any) => void;
  meta: {
    touched: boolean;
    errors: FormErrors;
  };
};
