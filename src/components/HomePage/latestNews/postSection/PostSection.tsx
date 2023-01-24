import { NextImage } from "../../../../ui/nextImage/NextImage";
import classes from "./postSection.module.css";
import { BandcampSection } from "../bandcampSection/BandcampSection";
import { Swiper, SwiperSlide } from "../../../../../node_modules/swiper/react";
import cx from "classnames";
import "swiper/css";
import { Autoplay } from "swiper";
import { OneBandcampIframData } from "../../../../@types/iframes/PropsHomepage";
import { TextAbout } from "./textAbout/TextAbout";

type Props = { newBandcampIframe: OneBandcampIframData };

export function PostSection({ newBandcampIframe }: Props) {
    return (
        <div>
            <section className={classes.row}>
                <div className={classes.section}>
                    <div className={classes.relative}>
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
                        <TextAbout isMobileVersion />
                    </div>
                </div>
                <BandcampSection newBandcampIframe={newBandcampIframe} />
            </section>
            <TextAbout />
        </div>
    );
}
