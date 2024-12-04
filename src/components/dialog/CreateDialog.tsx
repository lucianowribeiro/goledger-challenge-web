import { DialogContent } from "../ui/Dialog";
import { Input } from "../ui/Input";
import { GrMultimedia as MultimediaIcon } from "react-icons/gr";
import { IoMdText as TextIcon } from "react-icons/io";

export function CreateDialog() {
    return (
        <DialogContent content={
            <div className="flex flex-col gap-5">
                <Input icon={<MultimediaIcon className="ml-3" />} type="range" placeholder={"Escolhe o seu tipo de midia"}>
                </Input>
                <Input icon={<TextIcon className="ml-3" />} type="text" placeholder={"Digite a sua descricao"}>
                </Input>
            </ div >} description="Cadastra abaixo a sua midia" title="Cadastro" />
    )
}