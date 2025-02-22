import { configureStore } from '@reduxjs/toolkit'
import {BaseApi} from '../baseQuery/BaseApi'

export const store = configureStore({
    reducer: {
      [BaseApi.reducerPath]: BaseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(BaseApi.middleware),
  });
  
  export default store;