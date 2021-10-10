import React, { useState } from "react";
import FormInput from "../../components/form-input/form-input.component";
import ActionButton from "../../components/customButton";
import { Link, useHistory } from "react-router-dom";
import { loginUser } from "../../Services/LoginService";
import LabelSection from "../../components/RightSideLabelWithCard";
import localstyles from "./styles.module.css";
import styles from ".././pageGeneralStyles.module.css";
const LoginPage = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
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

    if (!user.email) {
      formIsValid = false;
      errors["email"] = "please input valid email";
    }
    if (!user.password) {
      formIsValid = false;
      errors["password"] = "Password cannot be empty";
    }
    setErrors(errors);
    return formIsValid;
  };

  const onLoginSuccess = (status) => {
    if (status === 200) {
      history.push("/dashboard");
    } else {
      setErrors(status);
      setLoading(false);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      setLoading(true);
      await loginUser(user, onLoginSuccess);
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
            <div className={localstyles.quotes_on_mobile}>
              <div className={localstyles.quote_box}>
                <div className={localstyles.quote_text}>
                  <p>
                    Add an inspiring and motivational quote here. It can be
                    business, finance, personal developemt or any kind.
                    <span className={localstyles.quote_markIcon}>
                      <img
                        src="./icons/quoteMark.svg"
                        alt="quotationMark"
                        width="100%"
                      />
                    </span>
                  </p>
                  <p style={{ color: "#ffffff" }}>-Ifeoluwa Taiwo</p>
                </div>
              </div>
            </div>
            <h4 className={styles.textTitle}>Login</h4>
            <p className={styles.subtext}>Gain access to all work resources</p>
            <div className={styles.input_container}>
              <FormInput
                onChange={handleOnChange}
                label="Work Email"
                name="email"
                autoComplete="email"
                type="text"
                error={errors["email"]}
                required
              />
              <div className={styles.input_withIcon}>
                <FormInput
                  onChange={handleOnChange}
                  label="password"
                  name="password"
                  autoComplete="current-password"
                  error={errors["password"]}
                  type={showPassword ? "text" : "password"}
                  required
                  // showIcon
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

            <Link
              to="/confirm-passwordreset"
              className={styles.forgotPassword_text}
            >
              Forgot password ?
            </Link>
            <p style={{ fontSize: "0.75rem", color: "red" }}>
              {errors["message"]}
            </p>
            <ActionButton>{loading ? "loading.." : "Log in"}</ActionButton>
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

export default LoginPage;
