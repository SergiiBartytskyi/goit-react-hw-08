import { useDispatch } from "react-redux";
import { IoPersonOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";
import clsx from "clsx";
import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    toast(
      (t) => (
        <span className={css.tosterSpan}>
          Are you sure you want to delete this contact?
          <div className={css.toaster}>
            <button
              className={clsx(css.contactBtn, css.contactBtnConfirm)}
              onClick={() => {
                dispatch(deleteContact(contact.id));
                toast.success("You are successfully deleted contact!");
                toast.dismiss(t.id);
              }}
            >
              Yes
            </button>

            <button
              className={clsx(css.contactBtn, css.contactBtnCancelBtn)}
              onClick={() => toast.dismiss(t.id)}
            >
              No
            </button>
          </div>
        </span>
      ),
      {
        duration: Infinity,
      }
    );
  };
  // const handleEdit = () => dispatch(editContact(contact.id));

  return (
    <div className={css.contactContainer}>
      <ul className={css.contactWraper}>
        <li className={css.contactItem}>
          <IoPersonOutline />
          {contact.name}
        </li>
        <li className={css.contactItem}>
          <IoPhonePortraitOutline />
          {contact.number}
        </li>
      </ul>
      <div className={css.btnWrapper}>
        <button className={clsx(css.contactBtn, css.contactBtnEdit)}>
          Edit
        </button>
        <button
          className={clsx(css.contactBtn, css.contactBtnCancelBtn)}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
      <div>
        <Toaster
        // toastOptions={{
        //   duration: Infinity,
        // }}
        />
      </div>
    </div>
  );
};
export default Contact;
