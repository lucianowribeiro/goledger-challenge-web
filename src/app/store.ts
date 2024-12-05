import { type Action, configureStore, type ThunkAction } from '@reduxjs/toolkit'
import toogleReducer from '../features/toogle/toogleSlice'
import listReducer from '../features/list/listSlice'

export const store = configureStore({
  reducer: {
    list: listReducer,
    toggle: toogleReducer,
  },
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']

export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
