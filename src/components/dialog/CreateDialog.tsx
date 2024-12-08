
import { DialogContent } from "../ui/Dialog";
import { Input } from "../ui/Input";

import { IoMdText as TextIcon } from "react-icons/io";
import { RadioInput } from "../ui/RadioInput";

export function CreateDialog() {
    return (
        <DialogContent content={
            <form className="flex flex-col gap-5">
                <RadioInput />
                <Input icon={<TextIcon className="ml-3" />} type="text" placeholder={"Digite a sua descricao"}>
                </Input>
            </ form >
        }
            description="Cadastra abaixo a sua midia" title="Cadastro" />
    )
}