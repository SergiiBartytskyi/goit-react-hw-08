import { useEffect } from "react";
import DocumentTitle from "../../components/DocumentTitle";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";
import {
  selectContactsError,
  selectContactsLoading,
} from "../../redux/contacts/selectors";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import BaseModal from "../../components/BaseModal/BaseModal";
import css from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectContactsLoading);
  const error = useAppSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main className={css.container}>
      <DocumentTitle>Phonebook</DocumentTitle>
      <h1 className={css.title}>Phonebook</h1>

      <div className={css.wrap}>
        <SearchBox />
        <BaseModal />
      </div>
      {isLoading && !error && <Loader />}
      {error && <p className={css.errorMessage}>Error: {error}</p>}
      {!isLoading && !error && <ContactList />}
    </main>
  );
};

export default ContactsPage;
