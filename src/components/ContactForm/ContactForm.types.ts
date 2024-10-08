import { IContact } from "../../redux/contacts/contacts-types";

export interface IContactFormProps {
  initialValues: IContact;
  onFormSubmit: () => void;
}
