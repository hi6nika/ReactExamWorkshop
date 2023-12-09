import { useState } from "react";

export default function useSelectForm(submitHandler, initialValues) {
  const [values, setValues] = useState(initialValues);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((state) => ({ ...state, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    submitHandler(values);
  };

  return {
    values,
    onChange,
    onSubmit,
  };
}
