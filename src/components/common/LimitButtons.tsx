import { Fragment } from "react/jsx-runtime"
import { Button } from "../ui/Button"

const limitMapping = {
    5: 5,
    10: 10,
    20: 20,
    50: 50,
    100: 100
}

export function LimitActions({ handleSearchByLimit }: { handleSearchByLimit: ({ limit }: { limit: number }) => void }) {
    return (
        <div className="flex justify-center gap-3 flex-wrap items-center">
            {Object.entries(limitMapping).map(([key, limit]) => {
                return (
                    <Fragment key={key}>
                        <Button
                            onClick={
                                () => handleSearchByLimit({ limit })
                            }
                        >
                            {limit}
                        </Button>
                    </Fragment>
                )
            })}
        </div >
    )
}
