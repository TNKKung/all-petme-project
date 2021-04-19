import React, { forwardRef, useImperativeHandle } from "react";

const InputField = forwardRef((props, ref) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value)
    setError("");
    props.onChange(event.target.name, event.target.value)
  }

  const validate = () => {
    //return true if is valid 
    //else return false

    if (props.validation) {

      const temp = props.validation.split(",")
      const rules = temp[0].split("|");

      for (let i = 0; i < rules.length; i++) {
        const current = rules[i];

        if (current === "required") {
          if (!value) {
            setError(`กรุณากรอก ${temp[1]}`);
            return false
          }
        }

        const pair = current.split(":")
        switch (pair[0]) {
          case "min":
            if (value.length < pair[1]) {
              setError(`${temp[1]} ต้องมีความยาวอย่างน้อย ${pair[1]} อักษร`);
              return false
            }
            break;
          case "max":
            if (value.length > pair[1]) {
              setError(`${temp[1]} ต้องมีความยาวไม่เกิน ${pair[1]} อักษร`);
              return false;
            }
            break;
          default:
            break;
        }
      }
    }

    return true;
  }

  useImperativeHandle(ref, () => {
    return {
      validate: () => validate()
    }
  })

  return (
    <div>
        <div className="input-wrapper">
        {props.label && (
            <label>{props.label}</label>
        )}
        <input
            placeholder={props.placeholder}
            name={props.name}
            onChange={(event) => handleChange(event)}
            type={props.type}
            value={props.value ? props.value : value}
            autoComplete={props.autoComplete}
        />
        
        </div>
        {error && (
            <p className="error">{error}</p>
        )}
    </div>
  )
})

InputField.defaultProps = {
  placeholder: "",
  name: "",
  type: "text",
  value: "",
  autoComplete: "off",
  validation: ""
}


export default InputField;