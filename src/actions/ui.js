import uiConstants from "./../constants/ui";

/*
 * set global loading
 * @param {Global Loading display status} status
 */
export const setGlobalLoading = (status) => {
  return {
    type: uiConstants.SET_GLOBAL_LOADING,
    payload: {
      status,
    },
  };
};
