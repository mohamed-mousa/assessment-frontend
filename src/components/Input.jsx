const Input = (props) => {
  return (
    <div className="relative">
      <input
        className={props.styles ? props.styles : "input"}
        value={props.value}
        onKeyUp={props.keyUp}
        onChange={props.change}
        required={props.required}
        type={props.type || "text"}
        placeholder={props.placeholder}
        disabled={props.disabled ? "disabled" : ""}
      />
      {props.children}
    </div>
  );
};

export default Input;
