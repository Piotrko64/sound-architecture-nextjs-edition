import { ImageBackground } from "./imageBackground/ImageBackground";
import { TextHeader } from "./textHeader/TextHeader";
import classes from "./theHeader.module.css";

export function TheHeader() {
    return (
        <header className={classes.header}>
            <TextHeader />
            <ImageBackground />
        </header>
    );
}
