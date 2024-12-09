
import { DialogContent } from "../Dialog";
import { Input } from "../Input";

import { IoMdText as TextIcon } from "react-icons/io";
import { z } from "zod";
import { SubmitButtons } from "../SubmitButtons";
import { CreateAssetForm, useCreateAsset } from "../../containers/CreateAssetContainer/hooks";
import { assetTypesMapping } from "../SearchBar";
import { AssetTypeOptionsInput } from "../AssetTypeOptionsInput";
import { ErrorFeedBackForm } from "../ErrorFeedBackForm";
import { FieldErrors, RegisterOptions } from "react-hook-form";
import type { AssetType } from "../../api/interfaces";



export function CreateDialog() {

    const { handleCreateAsset, handleSubmit, errors, register, values } = useCreateAsset()
    const assetTypeSelected = values().assetType



    function CreateFormsByType() {
        return {
            song: (
                <div> <Input {...register('album')} inputClassName="px-4" type="text" placeholder={`Digite o nome do album que deseja cadastrar`} />
                    <ErrorFeedBackForm errors={errors.album?.message} />
                </div>
            ),
            artist: (
                <div className="flex flex-col gap-2">
                    <Input {...register('country')} inputClassName="px-4" type="text" placeholder={`Digite o nome do pais do artista que deseja cadastrar`} />
                    <ErrorFeedBackForm errors={errors.country?.message} />
                </div>
            ),
            album: (
                <div>
                    <div>
                        <Input {...register('artist')} inputClassName="px-4" type="text" placeholder={`Digite o nome do artista que deseja cadastrar`} />
                        <ErrorFeedBackForm errors={errors.name?.message} />
                    </div>
                    <div>
                        <Input {...register('year')} inputClassName="px-4" type="text" placeholder={`Digite o ano do album que deseja cadastrar`} />
                        <ErrorFeedBackForm errors={errors.year?.message} />
                    </div>
                </div>
            ),
            playlist: (
                <div>
                    <div>
                        <Input {...register('songs')} inputClassName="px-4" type="text" placeholder={`Digite as musicas que deseja colocar na playlist(entre virgulas)`} />
                        <ErrorFeedBackForm errors={errors.songs?.message} />
                    </div>
                    <fieldset className="flex flex-col gap-2">
                        <span>Privado</span>
                        <div className="flex items-center gap-3">
                            <Input {...register('isPrivate')} type="radio" id="isPrivate" name="isPrivate" className="bg-transparent w-5" value="true" />
                            <label htmlFor="isPrivate" className="text-sm w-full">Sim</label>
                        </div>
                        <div className="flex items-center gap-3">
                            <Input {...register('isPrivate')} type="radio" id="isPrivate" name="isPrivate" className="bg-transparent w-5 " value="false" />
                            <label htmlFor="isPrivate" className="text-sm w-full">Não</label>
                        </div>
                    </fieldset >
                    <ErrorFeedBackForm errors={errors.isPrivate?.message} />
                </div>
            ),

        }
    }

    return (
        <DialogContent content={
            <form onSubmit={handleSubmit(handleCreateAsset)} className="flex flex-col gap-5  max-w-96 sm:min-w-96">
                <AssetTypeOptionsInput register={register} />
                <ErrorFeedBackForm errors={errors.assetType?.message} />
                <Input {...register('name')} inputClassName="px-4" type="text" placeholder={`Digite o nome que deseja cadastrar (Ex: ${assetTypesMapping[assetTypeSelected as AssetType] || 'Musica'}}`} />
                <ErrorFeedBackForm errors={errors.name?.message} />
                {assetTypeSelected && CreateFormsByType()[assetTypeSelected]}
                <SubmitButtons />
            </ form >
        }
            description="Cadastra abaixo a sua midia" title="Cadastro" />
    )
}