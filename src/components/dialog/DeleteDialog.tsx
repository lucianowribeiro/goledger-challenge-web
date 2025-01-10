import { useDeleteAsset } from "../../containers/DeleteAssetContainer/hooks";
import { DialogContent } from "../Dialog";
import { SubmitButtons } from "../SubmitButtons";

type DeleteDialogProps = {
    assetType: string
    title: string
}
export function DeleteDialog() {
    const { handleDeleteAsset, assetName } = useDeleteAsset()

    return (
        <DialogContent
            description={<span>Deseja excluir o(a) <strong>{assetName}</strong></span>} title="Confirmação" content={

                <div>
                    <SubmitButtons handleDeleteAsset={handleDeleteAsset} />
                </div>

            } />
    )
}
