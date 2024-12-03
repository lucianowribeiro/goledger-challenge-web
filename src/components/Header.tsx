import { FloatButton } from "./FloatButton";
import { SearchBar } from "./SearchBar";

export function Header() {
    return (
        <>
            <div className="flex flex-1 justify-center sm:justify-between">
                <div className="flex gap-2 items-center">
                    <img src="../logo.svg" className="size-5 bg-white rounded-full" alt="go leader logo" />
                    <p className="font-semibold"> Go Ledger - Challenge</p>
                </div>
                <FloatButton />
            </div>
            <SearchBar />
        </>
    )
}