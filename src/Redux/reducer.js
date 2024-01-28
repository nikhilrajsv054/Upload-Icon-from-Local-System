// iconReducer.js
import { UPLOAD_ICON } from "./actionTypes"

const initialState = {
  icons: [],
};

const iconReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_ICON:
      return {
        ...state,
        icons: [...state.icons, action.payload],
      };
    default:
      return state;
  }
};

export default iconReducer;
