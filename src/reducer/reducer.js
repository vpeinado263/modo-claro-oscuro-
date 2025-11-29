import { initialState } from "../reducer/initial.State";
import { TYPES } from "../actions/actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.INCREMENTAR: {
      return {
        ...state,
        contador: state.contador + action.payload,
      };
    }
    case TYPES.RESETEAR: {
      return initialState;
    }
    case TYPES.DECREMENTAR: {
      return {
        ...state,
        contador: state.contador - action.payload,
      };
    }

    default:
      return state;
  }
};
