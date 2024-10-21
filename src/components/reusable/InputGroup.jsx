// eslint-disable-next-line react/prop-types
function InputGroup({
  id,
  name,
  type,
  labelText,
  handleChange,
  data,
  errorMessage,
}) {
  return (
    <>
      <div className="mb-3">
        <label htmlFor={id} className="form-label">
          {labelText}
        </label>
        <input
          type={type}
          className="form-control"
          id={id}
          name={name}
          value={data[id]}
          onChange={(e) => {
            handleChange(e);
          }}
          required
        />
        <div className="invalid-feedback">{errorMessage}</div>
      </div>
    </>
  );
}

export default InputGroup;
