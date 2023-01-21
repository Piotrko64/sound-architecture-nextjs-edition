import { ChangeEvent, useEffect, useRef, useState } from "react";
import { NextImage } from "../nextImage/NextImage";
import classes from "./searchBar.module.css";

const TIME_TYPE = 1000;

type Props = {
    valueInput: string;
    changeValue: (newState: string) => void;
};

export function SearchBar({ valueInput, changeValue }: Props) {
    const input = useRef<HTMLInputElement>(null);
    const [valueSearchBar, setValueSearchBar] = useState(valueInput);

    let timer: NodeJS.Timer;

    useEffect(() => {
        timer = setTimeout(() => {
            changeValue(valueSearchBar);
        }, TIME_TYPE);

        return () => clearTimeout(timer);
    }, [valueSearchBar]);

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setValueSearchBar(event.target.value);
    }

    function resetInputChange() {
        setValueSearchBar("");
        changeValue("");
        input.current!.focus();
    }

    return (
        <div className={classes.containerInput}>
            <input
                value={valueSearchBar}
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
