import { socialLinks } from "../../../data/socialLinks";
import { NextImage } from "../../../ui/nextImage/NextImage";
import classes from "./socialList.module.css";

export function SocialList() {
    return (
        <>
            {socialLinks.map(({ img, href }) => (
                <a href={href} key={href}>
                    <NextImage imgURL={img} additionalClass={classes.imgSocial} />
                </a>
            ))}
        </>
    );
}
