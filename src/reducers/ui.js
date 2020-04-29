import uiConstants from "./../constants/ui";

const initialState = {
  globalLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case uiConstants.SET_GLOBAL_LOADING:
      return {
        ...state,
        globalLoading: action.payload.status,
      };
    default:
      return state;
  }
};

export default reducer;
