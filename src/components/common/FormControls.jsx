export const renderFieldInput = ({
  input,
  label,
  type,
  step,
  meta: { touched, error },
}) => {
  return (
    <div className="renderedField">
      <label>{label}</label>
      <input {...input} step={step && step} required type={type} />
      {touched && error && <span style={touched && error ? { color: "red" } : {}} className="errorMessage">{error}</span>}

      <div
        className="underline"
        style={
          touched && error ? { background: "red", transform: "scaleX(1)" } : {}
        }
      ></div>
      <span className="validationSign"></span>
    </div>
  );
};
