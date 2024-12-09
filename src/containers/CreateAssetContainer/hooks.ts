import { z } from 'zod'
import { useAppDispatch, useSelectors } from '../../redux/hooks'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createAsset, findAsset } from './actions'
import { AssetType } from '../../api/interfaces'
import {
  selectSearchAsset,
  selectSearchAssets,
} from '../ListAssetContainer/selectors'
import { searchAsset } from '../ListAssetContainer/actions'
import { selectIds } from './selectors'
import { useCallback } from 'react'
import { resetState } from './reducer'

const createAssetForm = z.object({
  assetType: z
    .union([
      z.literal('song'),
      z.literal('artist'),
      z.literal('album'),
      z.literal('playlist'),
    ])
    .refine(value => typeof value === 'string', {
      message: 'Selecione uma das opções acima.',
    }),
  name: z.string(),
  year: z.string().optional(),
  songs: z
    .string()
    .transform(value =>
      value
        .split(',')
        .map(name => name.trim())
        .filter(name => name.length > 0)
    )
    /* .min(1, 'O campo  musicas não pode estar vazio')
    .refine(names => names.length > 0, {
      message: 'Por favor, insira pelo menos um nome válido.',
    }) */
    .optional(),
  country: z.string().optional(),
  artist: z.string().optional(),
  isPrivate: z.union([z.literal('true'), z.literal('false')]).optional(),
  album: z.string().optional(),
})

export type CreateAssetForm = z.infer<typeof createAssetForm>

export const useCreateAsset = () => {
  const dispatch = useAppDispatch()
  const assetIds = useSelectors(selectIds)
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<CreateAssetForm>({
    resolver: zodResolver(createAssetForm),
  })
  const handleCreateAsset = useCallback(
    (data: CreateAssetForm) => {
      if (data.assetType === 'artist') {
        dispatch(
          createAsset({
            assetType: data.assetType,
            name: data.name,
            country: data.country,
          })
        )
      }

      if (data.assetType === 'album') {
        dispatch(findAsset({ assetType: 'artist', assetName: data.artist }))

        assetIds.join() &&
          dispatch(
            createAsset({
              assetType: data.assetType,
              name: data.name,
              artist: {
                '@assetType': 'artist',
                '@key': `artist:${assetIds.join()}`,
              },
              year: Number(data.year),
            })
          )
      }

      if (data.assetType === 'song') {
        dispatch(findAsset({ assetType: 'album', assetName: data.album }))

        assetIds.join() &&
          dispatch(
            createAsset({
              assetType: data.assetType,
              name: data.name,
              album: {
                '@assetType': 'album',
                '@key': `album:${assetIds.join()}`,
              },
            })
          )
      }

      if (data.assetType === 'playlist') {
        data.songs?.map((song: string) =>
          dispatch(
            findAsset({
              assetType: 'song',
              assetName: song ?? undefined,
            })
          )
        )
        assetIds &&
          dispatch(
            createAsset({
              assetType: data.assetType,
              name: data.name,
              songs:
                assetIds.map(assetId => ({
                  '@assetType': 'song',
                  '@key': `song:${assetId}`,
                })) || [],
              country: data.country,
              isPrivate: Boolean(data.isPrivate),
            })
          )
      }
      dispatch(resetState())
      reset()
    },

    [assetIds, dispatch, reset]
  )

  return {
    errors,
    values: watch,
    register,
    handleSubmit,
    handleCreateAsset,
  }
}
