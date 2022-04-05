import { NARUTO_API } from "../Constant";

const INITIAL_STATE = {
  naruto: [],
};

const narutoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NARUTO_API:
      return {
        ...state,
        naruto: action.payload,
      };

    default:
      return state;
  }
};

export default narutoReducer;
