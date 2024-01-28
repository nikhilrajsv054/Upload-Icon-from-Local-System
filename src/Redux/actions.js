// iconActions.js
import { UPLOAD_ICON } from './actionTypes';

export const uploadIcon = (icon) => ({
  type: UPLOAD_ICON,
  payload: icon,
});
