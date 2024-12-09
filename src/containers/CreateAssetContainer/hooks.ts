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
import { selectId } from './selectors'
import { useCallback } from 'react'

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
  name: z.string().min(1, 'O campo não pode estar vazio'),
  year: z.string().min(1, 'O campo não pode estar vazio').optional(),
  songs: z
    .string()
    .min(1, 'O campo não pode estar vazio')
    .transform(value =>
      value
        .split(',')
        .map(name => name.trim())
        .filter(name => name.length > 0)
    )
    .refine(names => names.length > 0, {
      message: 'Por favor, insira pelo menos um nome válido.',
    })
    .optional(),
  country: z.string().min(1, 'O campo não pode estar vazio').optional(),
  artist: z.string().min(1, 'O campo não pode estar vazio').optional(),
  isPrivate: z.boolean().optional(),
  album: z.string().min(1, 'O campo não pode estar vazio').optional(),
})

export type CreateAssetForm = z.infer<typeof createAssetForm>

export const useCreateAsset = () => {
  const dispatch = useAppDispatch()
  const assetId = useSelectors(selectId)
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
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
        dispatch(
          findAsset({ assetType: data.assetType, assetName: data.artist })
        )

        assetId &&
          dispatch(
            createAsset({
              assetType: data.assetType,
              name: data.name,
              artist: {
                '@assetType': 'artist',
                '@key': `artist:${assetId}`,
              },
              year: Number(data.year),
            })
          )
      }

      if (data.assetType === 'song') {
        dispatch(
          findAsset({ assetType: data.assetType, assetName: data.album })
        )
        dispatch(
          createAsset({
            assetType: data.assetType,
            name: data.name,
            year: Number(data.year),
            album: {
              '@assetType': 'album',
              '@key': `artist:${assetId}`,
            },
          })
        )
      }

      if (data.assetType === 'playlist') {
        dispatch(
          findAsset({
            assetType: data.assetType,
            assetName: data.songs?.[0] ?? undefined,
          })
        )
        dispatch(
          createAsset({
            assetType: data.assetType,
            name: data.name,
            songs:
              data.songs?.map(song => ({
                name: song,
                '@assetType': 'song',
                '@key': `playlist:${assetId}`,
              })) || [],
            country: data.country,
            isPrivate: Boolean(data.isPrivate),
          })
        )
      }
    },
    [assetId, dispatch]
  )

  return {
    errors,
    values: watch,
    register,
    handleSubmit,
    handleCreateAsset,
  }
}
