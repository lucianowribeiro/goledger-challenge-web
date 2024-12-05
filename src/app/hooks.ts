import { type TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from './store'

export const useSelectors: TypedUseSelectorHook<RootState> = useSelector
