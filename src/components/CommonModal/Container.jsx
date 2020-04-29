import React from "react";

import CommonModal from "./Index";

import { useSelector, useDispatch } from "react-redux";

import * as modalActions from "./../../actions/modal";

function CommonModalContainer() {
  const dispatch = useDispatch();

  const displayStatus = useSelector((state) => state.modal.displayStatus);

  const component = useSelector((state) => state.modal.modalContent);

  const title = useSelector((state) => state.modal.modalTitle);

  const handleCloseModal = () =>
    dispatch(modalActions.changeDisplayStatus(false));

  return (
    <CommonModal
      open={displayStatus}
      handleCloseModal={handleCloseModal}
      title={title}
      component={component}
    />
  );
}

export default CommonModalContainer;
