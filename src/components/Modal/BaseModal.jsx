import { useDispatch, useSelector } from "react-redux";
import {
  openModal,
  closeModal,
  selectModalOpen,
  selectEditingContact,
} from "../../redux/modal/slice";
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

const BaseModal = () => {
  const dispatch = useDispatch();
  const open = useSelector(selectModalOpen);
  const editingContact = useSelector(selectEditingContact);

  const handleOpen = () => dispatch(openModal());
  const handleClose = () => dispatch(closeModal());

  const handleFormSubmit = () => {
    handleClose();
  };

  return (
    <div>
      <button className={css.modalBtn} onClick={handleOpen}>
        Add Contact
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {editingContact ? "Edit Contact" : "Add New Contact"}
          </Typography>
          <ContactForm
            onFormSubmit={handleFormSubmit}
            initialValues={editingContact || { name: "", number: "" }}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default BaseModal;
