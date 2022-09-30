import { ChangeEvent } from "react";
import classes from "./searchBar.module.css";

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
            <input value={valueInput} onChange={handleInputChange} className={classes.input} />
        </>
    );
}
