import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/countersilces'

export const store = configureStore({
    reducer: {
        counter:counterReducer
    },
  })
