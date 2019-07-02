import { trialType } from '../actions/types';

const initialState = {};

export default (
  state = initialState, action,
) => {
  switch (action.type) {
    case trialType.INIT:
      return {
        ...state,
        message: action.payload,

      };
    default:
      return state;
  }
};
