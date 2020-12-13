const isRequired = (errMessage: string) => (value: string) =>
  !value ? errMessage : undefined;

export default isRequired;
