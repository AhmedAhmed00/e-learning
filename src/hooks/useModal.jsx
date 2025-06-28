import { useState } from "react";
import { useCallback, useMemo } from "react";
import FormModal from "../ui/FormModal";

export default function useModal() {
  const [openModal, setOpenModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  function onClose() {
    setOpenModal(false);
  }

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 200);
  };

  return {
    handleClose,
    isClosing,
    setIsClosing,
    openModal,
    setOpenModal,
    onClose,
  };
}

export function useModalEl(content) {
  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      closeModal();
      setIsClosing(false);
    }, 200);
  }, [closeModal]);

  const Modal = useMemo(() => {
    return open ? (
      <FormModal
        isClosing={isClosing}
        setIsClosing={setIsClosing}
        onClose={handleClose}
        handleClose={handleClose}
        form={content}
      />
    ) : null;
  }, [open, isClosing, content, handleClose]);

  return { openModal, handleClose, closeModal, Modal };
}
