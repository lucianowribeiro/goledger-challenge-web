import { DialogContent } from "../ui/Dialog";

type DeleteDialogProps = {
    assetType: string
    title: string
}
export function DeleteDialog() {
    return (
        <DialogContent
            description="Deseja excluir o(a) ${ } ${ }" title="Confirmação" />
    )
}