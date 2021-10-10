import React from "react";

import "./form-input.styles.css";

const FormInput = ({ label, required, error, showIcon, ...otherProps }) => {
  // const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="group">
      {label && <label className={required ? "required" : null}>{label}</label>}
      {error && (
        <span
          style={{ color: "#dd2b0e", fontSize: "0.8rem", display: "block" }}
        >
          {error}
        </span>
      )}
      {/* <div className={`${showIcon ? "show_password_icon" : null}`}> */}
      <input
        className={`${showIcon ? "show_password_icon" : null} forminput`}
        type={showIcon ? "text" : null}
        {...otherProps}
      />
      {/* {showIcon && (
          <span
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className="input_Icon"
          >
            <img src="./icons/show.svg" alt="show password" width="50px" />
          </span>
        )}
      </div> */}
      {/* {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null} */}
    </div>
  );
};
export default FormInput;
