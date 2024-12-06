import type { RootState } from '../../app/store'

export const selectAllAssetsByType = (state: RootState) => state.list

export const selectLoading = (state: RootState) =>
  state.list.status === 'pending'

export const selectEmpty = (state: RootState) => state.list.status === 'idle'

export const selectError = (state: RootState) => state.list.error
