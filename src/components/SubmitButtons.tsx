import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "./Button";
import type { CreateAssetForm } from "../containers/CreateAssetContainer/hooks";
import type { FieldErrors } from "react-hook-form";
import { ErrorFeedBackForm } from "./ErrorFeedBackForm";



export function SubmitButtons({ handleDeleteAsset }: { handleDeleteAsset?: () => void }) {
    return (
        <div className="flex gap-5 justify-evenly sm:justify-center">
            <DialogClose asChild><Button type="button" variant="tertiary" className="w-20">Fechar</Button></DialogClose>
            <Button type="submit" variant="secondary" className=" w-36" onClick={handleDeleteAsset}>Confirmar</Button>

        </div>
    )
}