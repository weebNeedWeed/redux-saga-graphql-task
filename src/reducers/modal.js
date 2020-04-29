import modalConstants from "./../constants/modal";

const initialState = {
  modalTitle: "",
  modalContent: null,
  displayStatus: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case modalConstants.CHANGE_DISPLAY_STATUS:
      return {
        ...state,
        displayStatus: action.payload.status,
      };
    case modalConstants.CHANGE_MODAL_TITLE:
      return {
        ...state,
        modalTitle: action.payload.title,
      };
    case modalConstants.CHANGE_MODAL_CONTENT:
      return {
        ...state,
        modalContent: action.payload.component,
      };
    default:
      return state;
  }
};

export default reducer;
