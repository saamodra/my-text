export type ActionReducerProps = {
  type: string
  payload: any
}

const reducer = (state: any, action: ActionReducerProps) => {
  switch (action.type) {
    case 'SET_TITLE':
      return {
        ...state,
        pageTitle: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
