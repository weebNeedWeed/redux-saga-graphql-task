import modalConstants from "./../constants/modal";

export const changeDisplayStatus = function (status) {
  return {
    type: modalConstants.CHANGE_DISPLAY_STATUS,
    payload: {
      status,
    },
  };
};
export const changeModalTitle = function (title) {
  return {
    type: modalConstants.CHANGE_MODAL_TITLE,
    payload: {
      title,
    },
  };
};
export const changeModalContent = function (component) {
  return {
    type: modalConstants.CHANGE_MODAL_CONTENT,
    payload: {
      component,
    },
  };
};
