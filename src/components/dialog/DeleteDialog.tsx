import { DialogContent } from "../ui/Dialog";

type DeleteDialogProps = {
    mediaType: string
    title: string
}
export function DeleteDialog() {
    return (
        <DialogContent
            description="Deseja excluir o(a) ${ } ${ }" title="Confirmação" />
    )
}