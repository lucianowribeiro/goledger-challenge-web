import type { RootState } from '../../redux/store'

export const selectLoading = (state: RootState) =>
  state.list.status === 'idle' || state.list.status === 'pending'

export const selectError = (state: RootState) => state.list.error

export const selectId = (state: RootState) => state.create.id
