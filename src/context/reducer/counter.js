import { DEC, INC, RESET } from "../action/type";

export const counter = (state = 0, action) => {
  switch (action.type) {
    case INC:
      return (state = state + action.payload);
    case DEC:
      return (state = state - 1);
    case RESET:
      return (state = 0);
    default:
      return state;
  }
};
