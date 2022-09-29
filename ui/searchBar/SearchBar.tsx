import { ChangeEvent } from "react";

export function SearchBar({
    valueInput,
    change,
}: {
    valueInput: string;
    change: (newState: string) => void;
}) {
    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        change(event.target.value);
    }

    return (
        <>
            <input value={valueInput} onChange={handleInputChange} />
        </>
    );
}
