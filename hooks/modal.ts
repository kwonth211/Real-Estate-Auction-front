import React, { useEffect, useState } from "react";

const useModal = () => {
  const [modalVisibility, setModalVisibility] = useState(false);

  const closeModal = () => {
    setModalVisibility(false);
  };
  const openModal = () => {
    setModalVisibility(true);
  };

  return {
    openModal,
    closeModal,
    modalVisibility,
  };
};
export default useModal;
