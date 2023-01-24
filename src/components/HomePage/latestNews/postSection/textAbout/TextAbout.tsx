import classes from "./textAbout.module.css";
import cx from "classnames";
type Props = { isMobileVersion?: true };

export function TextAbout({ isMobileVersion }: Props) {
    return (
        <p className={isMobileVersion ? classes.textMobile : classes.text}>
            One person team discovering field recording and sound design still expanding their sound libraries
            and equipment. Listening is my hobby from buildings acoustics to making music and recording
            sounds. I am using my own libraries to make various ambience type videos and I always find
            interesting ways to implent them. I am working hard to achieve clean samples.
        </p>
    );
}
