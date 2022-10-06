import { RichText } from "@graphcms/rich-text-react-renderer";
import { PostHygraph } from "../../../../@types/graphql/PostHygraph";
import { NextImage } from "../../../../ui/nextImage/NextImage";
import classes from "./postSection.module.css";
import cx from "classnames";
import { BandcampSection } from "../bandcampSection/BandcampSection";

export function PostSection({ dataPost }: PostHygraph) {
    return (
        <section className={classes.row}>
            <div className={classes.section}>
                <NextImage imgURL={dataPost.photoPost.url} additionalClass={cx(classes.image)} coverMode />

                <div className={classes.text}>
                    <RichText content={dataPost.textPost.raw} />
                </div>
            </div>
            <BandcampSection />
        </section>
    );
}
