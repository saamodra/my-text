import {
  SET_TITLE, SHOW_CATEGORY_MODAL, SHOW_TEXT_MODAL, HIDE_MODAL,
} from './action';

export type ActionReducerProps = {
  type: string
  payload: any
}

const reducer = (state: any, action: ActionReducerProps) => {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        pageTitle: action.payload,
      };
    case SHOW_CATEGORY_MODAL:
      return {
        ...state,
        categoryModal: true,
      };
    case SHOW_TEXT_MODAL:
      return {
        ...state,
        textModal: true,
      };
    case HIDE_MODAL:
      return {
        ...state,
        textModal: false,
        categoryModal: false,
      };
    default:
      return state;
  }
};

export default reducer;
