import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "../../components/DocumentTitle";
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";
import {
  selectContactsError,
  selectContactsLoading,
} from "../../redux/contacts/slice";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import BaseModal from "../../components/Modal/BaseModal";
import css from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main className={css.container}>
      <DocumentTitle>Phonebook</DocumentTitle>
      <h1>Phonebook</h1>

      <div className={css.wrap}>
        <SearchBox />
        <BaseModal />
      </div>
      {isLoading && !error && <Loader />}
      {error && <b>{error}</b>}
      <ContactList />
    </main>
  );
};

export default ContactsPage;
