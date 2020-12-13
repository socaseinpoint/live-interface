export type FieldRenderProps = {
  value: any;
  onChange: (value: any) => void;
  meta: {
    touched: boolean;
    errors: string[];
  };
  placeholder: string;
};
