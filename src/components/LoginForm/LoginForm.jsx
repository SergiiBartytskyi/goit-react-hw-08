import { useDispatch } from "react-redux";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

const FeedbackSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(7, "Пароль має містити мінімум 7 символів")
    .matches(/[A-Z]/, "Пароль має містити хоча б одну велику літеру")
    .matches(/[a-z]/, "Пароль має містити хоча б одну маленьку літеру")
    .matches(/[0-9]/, "Пароль має містити хоча б одну цифру")
    .matches(
      /[@$!%*?&]/,
      "Пароль має містити хоча б один спеціальний символ (@, $, !, %, *, ?, &)"
    )
    .required("Пароль є обов'язковим"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const userEmail = useId();
  const userPassword = useId();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        console.log("login success");
      })
      .catch(() => {
        console.log("login error");
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.formContainer}>
        <div className={css.formWrap}>
          <label htmlFor={userEmail} className={css.label}>
            Email
          </label>
          <Field
            type="email"
            name="email"
            id={userEmail}
            className={css.formInput}
          />
          <ErrorMessage
            className={css.formError}
            name="email"
            component="span"
          />
        </div>
        <div className={css.formWrap}>
          <label htmlFor={userPassword} className={css.label}>
            Password
          </label>
          <Field
            type="password"
            name="password"
            id={userPassword}
            className={css.formInput}
          />
          <ErrorMessage
            className={css.formError}
            name="password"
            component="span"
          />
        </div>
        <button type="submit" className={css.formBtn}>
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
