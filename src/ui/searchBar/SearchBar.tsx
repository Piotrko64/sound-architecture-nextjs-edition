import { ChangeEvent, useRef } from "react";
import { NextImage } from "../nextImage/NextImage";
import classes from "./searchBar.module.css";

export function SearchBar({
    valueInput,
    changeValue,
}: {
    valueInput: string;
    changeValue: (newState: string) => void;
}) {
    const input = useRef<HTMLInputElement>(null);

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        changeValue(event.target.value);
    }
    function resetInputChange() {
        changeValue("");
        input.current!.focus();
    }

    return (
        <div className={classes.containerInput}>
            <input value={valueInput} onChange={handleInputChange} className={classes.input} ref={input} />
            <NextImage
                imgURL={`/assets/searchBar/${valueInput ? "x" : "loupe"}.png`}
                additionalClass={classes.icon}
                click={resetInputChange}
            />
        </div>
    );
}
