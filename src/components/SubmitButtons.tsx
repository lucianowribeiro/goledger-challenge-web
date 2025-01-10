import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "./Button";



export function SubmitButtons({ handleDeleteAsset, handleUpdateAsset }: { handleDeleteAsset?: () => void, handleUpdateAsset?: () => void }) {
    return (
        <div className="flex gap-5 justify-evenly sm:justify-center">
            <DialogClose asChild><Button type="button" variant="tertiary" className="w-20">Fechar</Button></DialogClose>
            <Button type="submit" variant="secondary" className=" w-36" onClick={handleDeleteAsset || handleUpdateAsset}>Confirmar</Button>

        </div>
    )
}