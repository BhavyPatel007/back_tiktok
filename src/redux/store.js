import { configureStore } from '@reduxjs/toolkit';
import getpostTelent from './telent/JobPost'


export default configureStore({
  reducer: {
 telent: getpostTelent
  },
});
