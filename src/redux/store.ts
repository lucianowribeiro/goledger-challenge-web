import { type Action, configureStore, type ThunkAction } from '@reduxjs/toolkit'
import selectReducer from '../containers/SelectedAssetContainer/reducer'
import listReducer from '../containers/ListAssetContainer/reducer'

export const store = configureStore({
  reducer: {
    list: listReducer,
    select: selectReducer,
  },
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']

export type AppThunk = ThunkAction<void, RootState, unknown, Action>