import { configureStore } from '@reduxjs/toolkit'
<<<<<<< HEAD
import { BaseApi } from '../baseQuery/BaseApi'

export const store = configureStore({
    reducer: {
        [BaseApi.reducerPath]: BaseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        }).concat(BaseApi.middleware),
});
=======
import counterReducer from '../slices/countersilces'

export const store = configureStore({
    reducer: {
        counter:counterReducer
    },
  })
>>>>>>> 74e274513bfd9382915811aeecf5fdd2f89f1e7e
