import { FC, useId } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { addContact, editContact } from "../../redux/contacts/operations";
import { IContactFormProps } from "./ContactForm.types";
import { IContact } from "../../redux/contacts/contacts-types";
import css from "./ContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().max(22, "Too Long!").required("Required"),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      "Incorrect phone number format. Enter in the format 123-45-67"
    )
    .min(9, "Too Short!")
    .max(9, "Too Long!")
    .required("Required"),
});

const ContactForm: FC<IContactFormProps> = ({
  initialValues,
  onFormSubmit,
}) => {
  const dispatch = useAppDispatch();
  const userNameId = useId();
  const userNumberId = useId();

  const handleSubmit = (values: IContact, actions: FormikHelpers<IContact>) => {
    if (initialValues.id) {
      dispatch(editContact(values));
      toast.success("Contact successfully updated!");
    } else {
      dispatch(addContact(values));
      toast.success("Contact successfully created!");
    }
    onFormSubmit();
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
          <label htmlFor={userNameId}>Name</label>
          <Field
            type="text"
            className={css.formInput}
            name="name"
            id={userNameId}
          />
          <ErrorMessage
            className={css.formError}
            name="name"
            component="span"
          />
        </div>

        <div className={css.formWrap}>
          <label htmlFor={userNumberId}>Number</label>
          <Field
            type="tel"
            className={css.formInput}
            name="number"
            id={userNumberId}
          />
          <ErrorMessage
            className={css.formError}
            name="number"
            component="span"
          />
        </div>

        <button type="submit" className={css.formBtn}>
          {initialValues.id ? "Edit" : "Add Contact"}
        </button>
        <Toaster />
      </Form>
    </Formik>
  );
};

export default ContactForm;
