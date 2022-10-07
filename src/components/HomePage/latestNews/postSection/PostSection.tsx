import { RichText } from "@graphcms/rich-text-react-renderer";
import { PostHygraph } from "../../../../@types/graphql/PostHygraph";
import { NextImage } from "../../../../ui/nextImage/NextImage";
import classes from "./postSection.module.css";
import { BandcampSection } from "../bandcampSection/BandcampSection";
import { Swiper, SwiperSlide } from "../../../../../node_modules/swiper/react";
import cx from "classnames";
import "swiper/css";
import { Autoplay } from "swiper";
import { InfoBandcampIframe } from "../../../../@types/SSG/ArrayIframesBandcamp";
import { OneBandcampIframData } from "../../../../@types/iframes/PropsHomepage";

export function PostSection({ newBandcampIframe }: { newBandcampIframe: OneBandcampIframData }) {
    return (
        <section className={classes.row}>
            <div className={classes.section}>
                <div>
                    <Swiper
                        className={cx("mySwiper", classes.overflow)}
                        autoplay={{ delay: 3000 }}
                        grabCursor
                        modules={[Autoplay]}
                    >
                        <SwiperSlide>
                            <NextImage
                                additionalClass={cx(classes.image)}
                                imgURL="/assets/home/micro.jpg"
                                coverMode
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <NextImage
                                additionalClass={cx(classes.image)}
                                imgURL="/assets/home/micro.jpg"
                                coverMode
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className={classes.text}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus accusant ium deserunt
                    nulla dolores delectus recusandae facere, porro, ducimus totam re prehenderit cumque non
                    similique quia, dicta a voluptatum atque ipsam quasi!
                </div>
            </div>
            <BandcampSection newBandcampIframe={newBandcampIframe} />
        </section>
    );
}
