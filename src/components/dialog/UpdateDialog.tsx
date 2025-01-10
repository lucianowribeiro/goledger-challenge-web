import { DialogContent } from "../Dialog";
import { Input } from "../Input";
import { IoMdText as TextIcon } from "react-icons/io";
import { SubmitButtons } from "../SubmitButtons";
import { useUpdateAsset } from "../../containers/UpdateAssetContainer/hooks";

type UpdateDialogProps = {
    assetType: string
    title: string
}
export function UpdateDialog() {
    const { handleUpdateAsset, assetName } = useUpdateAsset()
    return (
        <DialogContent
            description={`Deseja atualizar o(a) ${assetName}?`} title="Confirmação" content={
                <div>
                    <SubmitButtons handleUpdateAsset={handleUpdateAsset} />
                </div>
            } />
    )
}