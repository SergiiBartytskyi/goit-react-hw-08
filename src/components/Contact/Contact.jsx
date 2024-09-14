import { useDispatch } from "react-redux";
import { IoPersonOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  // const handleEdit = () => dispatch(editContact(contact.id));

  return (
    <div className={css.contactContainer}>
      <ul>
        <li className={css.contactWraper}>
          <IoPersonOutline />
          {contact.name}
        </li>
        <li className={css.contactWraper}>
          <IoPhonePortraitOutline />
          {contact.number}
        </li>
      </ul>
      {/* <button className={css.contactBtn} onClick={handleEdit}>
        Edit
      </button> */}
      <button className={css.contactBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
