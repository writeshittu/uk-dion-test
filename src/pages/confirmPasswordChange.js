import React, { useState } from "react";
import { RequestPasswordresetLink } from "../Services/RequestPasswordChangeLink";
import FormInput from "../components/form-input/form-input.component";
import ActionButton from "../components/customButton";
import { Link, useHistory } from "react-router-dom";
import LabelSection from "../components/RightSideLabelWithCard";
import styles from "./pageGeneralStyles.module.css";
const LoginPage = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

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
    setErrors(errors);
    return formIsValid;
  };

  const onSuccess = (status) => {
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
      await RequestPasswordresetLink(user, onSuccess);
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
            <h4 className={styles.textTitle}>Send confirmation link</h4>
            <p className={styles.subtext}>Gain access to all work resources</p>
            <div
              className={styles.input_container}
              style={{ marginBottom: "30px" }}
            >
              <FormInput
                error={errors["email"]}
                name="email"
                label="Work Email"
                onChange={handleOnChange}
                type="text"
                required
              />
            </div>
            <p
              style={{ fontSize: "0.75rem", color: "red", textAlign: "center" }}
            >
              {errors["message"]}
            </p>
            <ActionButton>
              {loading ? "please wait.." : "Send Confirmation"}
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

export default LoginPage;
