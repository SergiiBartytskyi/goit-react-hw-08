import { useAppDispatch } from "../../redux/hooks";
import { FC, useId } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import { ILoginFormValues } from "./LoginForm.types";

const FeedbackSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required!"),
  password: Yup.string()
    .min(7, "The password must contain at least 7 characters")
    .matches(/[A-Z]/, "The password must contain at least one capital letter.")
    .matches(/[a-z]/, "The password must contain at least one lowercase letter")
    .matches(/[0-9]/, "The password must contain at least one number")
    .matches(
      /[@$!%*?&]/,
      "The password must contain at least one special character (@, $, !, %, *, ?, &)"
    )
    .required("Required!"),
});

const initialValues: ILoginFormValues = { email: "", password: "" };

const LoginForm: FC = () => {
  const dispatch = useAppDispatch();
  const userEmailId = useId();
  const userPasswordId = useId();

  const handleSubmit = (
    values: ILoginFormValues,
    actions: FormikHelpers<ILoginFormValues>
  ) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.formContainer}>
        <div className={css.formWrap}>
          <label htmlFor={userEmailId} className={css.formLabel}>
            Email
          </label>
          <Field
            type="email"
            name="email"
            id={userEmailId}
            className={css.formInput}
          />
          <ErrorMessage
            className={css.formError}
            name="email"
            component="span"
          />
        </div>
        <div className={css.formWrap}>
          <label htmlFor={userPasswordId} className={css.formLabel}>
            Password
          </label>
          <Field
            type="password"
            name="password"
            id={userPasswordId}
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
