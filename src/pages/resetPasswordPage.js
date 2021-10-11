import React, { useState } from "react";
import FormInput from "../components/form-input/form-input.component";
import ActionButton from "../components/customButton";
import { Link, useHistory } from "react-router-dom";
import LabelSection from "../components/RightSideLabelWithCard";
import styles from "./pageGeneralStyles.module.css";
import { passwordReset } from "../Services/resetPassword";

const ResetPassword = () => {
  // eslint-disable-next-line
  const history = useHistory();

  const [user, setUser] = useState({
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setshowPassword] = useState(false);

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!user.password) {
      formIsValid = false;
      errors["password"] = "please input new password";
    }
    if (user.password.length < 8) {
      formIsValid = false;
      errors["password"] = "The password must be at least 8 characters.";
    }
    if (!user.password_confirmation) {
      formIsValid = false;
      errors["password_confirmation"] = "please confirm new Password";
    }
    if (user.password_confirmation !== user.password) {
      formIsValid = false;
      errors["password_confirmation"] = "Password mismatch";
    }
    setErrors(errors);
    return formIsValid;
  };

  const onLoginSuccess = (status) => {
    if (status === 202) {
      history.push("/successful");
    } else {
      setErrors(status);
      setLoading(false);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      setLoading(true);
      await passwordReset(user, onLoginSuccess);
      setLoading(false);
    }
  };
  return (
    <section className={styles.page_holder}>
      <aside className={styles.leftside_section}>
        <Link to="/" className={styles.business_logo}>
          <img
            src="./icons/uk-dion_logo.svg"
            alt="business_logo"
            width="100%"
          />
        </Link>
        <form onSubmit={onSubmit} className={styles.form_container}>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "spaceBetween",
                alignItem: "center",
              }}
            >
              <div>
                <h4 className={styles.textTitle}>Reset Password</h4>
                <p className={styles.subtext}>
                  Gain access to all work resources
                </p>
              </div>
              <span className={styles.reset_icon}>
                <img
                  src="./icons/password_icon.svg"
                  alt="reset password icon"
                  width="100%"
                />
              </span>
            </div>

            <div className={styles.input_container}>
              <div className={styles.input_withIcon}>
                <FormInput
                  label="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="password"
                  error={errors["password"]}
                  required
                  onChange={handleOnChange}
                  showIcon
                />
                <span
                  onClick={() => {
                    setshowPassword(!showPassword);
                  }}
                  className={styles.input_Icon}
                >
                  <img
                    src="./icons/show.svg"
                    alt="show password"
                    width="50px"
                  />
                </span>
              </div>
              <div className={styles.input_withIcon}>
                <FormInput
                  label="Confirm Password"
                  type={showPassword ? "text" : "password"}
                  name="password_confirmation"
                  autoComplete="password"
                  onChange={handleOnChange}
                  required
                  error={errors["password_confirmation"]}
                  showIcon
                />
                <span
                  onClick={() => {
                    setshowPassword(!showPassword);
                  }}
                  className={styles.input_Icon}
                >
                  <img
                    src="./icons/show.svg"
                    alt="show password"
                    width="50px"
                  />
                </span>
              </div>
            </div>
            <p
              style={{ fontSize: "0.75rem", color: "red", textAlign: "center" }}
            >
              {errors["message"]}
            </p>
            <ActionButton>
              {loading ? "loading" : "Reset Password"}
            </ActionButton>
          </div>
        </form>
        <div>
          <p className={styles.subtext}>
            © 2021 uk-dion group. All rights reserved.
          </p>
        </div>
      </aside>
      <div className={styles.rightside_section}>
        <LabelSection />
      </div>
    </section>
  );
};

export default ResetPassword;
