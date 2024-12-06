import {
  type TypedUseSelectorHook,
  useDispatch,
  UseDispatch,
  useSelector,
} from 'react-redux'
import type { AppDispatch, RootState } from './store'
import { ThunkDispatch } from 'redux-thunk'

export const useSelectors: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
