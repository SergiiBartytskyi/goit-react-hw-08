import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { openModal, closeModal } from "../../redux/modal/slice";
import {
  selectModalOpen,
  selectEditingContact,
} from "../../redux/modal/selectors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ContactForm from "../ContactForm/ContactForm";
import css from "./BaseModal.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const basicContactValue = {
  name: "",
  number: "",
};

const BaseModal = () => {
  const dispatch = useAppDispatch();
  const open = useAppSelector(selectModalOpen);
  const editingContact = useAppSelector(selectEditingContact);

  const handleFormSubmit = () => {
    dispatch(closeModal());
  };

  const handleOpenModal = () => {
    dispatch(openModal(null));
  };

  return (
    <div>
      <button className={css.modalBtn} onClick={handleOpenModal}>
        Add Contact
      </button>
      <Modal
        open={open}
        onClose={() => dispatch(closeModal())}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className={css.title}
          >
            {editingContact ? "Edit Contact" : "Add New Contact"}
          </Typography>
          <ContactForm
            onFormSubmit={handleFormSubmit}
            initialValues={editingContact || basicContactValue}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default BaseModal;
