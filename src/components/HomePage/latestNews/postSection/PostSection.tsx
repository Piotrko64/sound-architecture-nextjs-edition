import { NextImage } from "../../../../ui/nextImage/NextImage";
import classes from "./postSection.module.css";
import { BandcampSection } from "../bandcampSection/BandcampSection";
import { Swiper, SwiperSlide } from "../../../../../node_modules/swiper/react";
import cx from "classnames";
import "swiper/css";
import { Autoplay } from "swiper";
import { OneBandcampIframData } from "../../../../@types/iframes/PropsHomepage";

type Props = { newBandcampIframe: OneBandcampIframData };

export function PostSection({ newBandcampIframe }: Props) {
    return (
        <div>
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
                </div>
                <BandcampSection newBandcampIframe={newBandcampIframe} />
            </section>
            <p className={"globalPadding"}>
                <div className={classes.text}>
                    One person team discovering field recording and sound design still expanding their sound
                    libraries and equipment. Listening is my hobby from buildings acoustics to making music
                    and recording sounds. I am using my own libraries to make various ambience type videos and
                    I always find interesting ways to implent them. I am working hard to achieve clean
                    samples.
                </div>
            </p>
        </div>
    );
}
