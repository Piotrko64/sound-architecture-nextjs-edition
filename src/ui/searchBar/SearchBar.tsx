import { ChangeEvent, useRef } from "react";
import { NextImage } from "../nextImage/NextImage";
import classes from "./searchBar.module.css";

type Props = {
    valueInput: string;
    changeValue: (newState: string) => void;
};

export function SearchBar({ valueInput, changeValue }: Props) {
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
            <input
                value={valueInput}
                onChange={handleInputChange}
                className={classes.input}
                ref={input}
                placeholder={"Search sounds"}
            />
            <NextImage
                imgURL={`/assets/searchBar/${valueInput ? "x" : "loupe"}.png`}
                additionalClass={classes.icon}
                click={resetInputChange}
                title={`${valueInput ? "reset" : ""}`}
            />
        </div>
    );
}
