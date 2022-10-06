import { RichText } from "@graphcms/rich-text-react-renderer";
import { PostHygraph } from "../../../../@types/graphql/PostHygraph";
import { NextImage } from "../../../../ui/nextImage/NextImage";
import classes from "./postSection.module.css";
import { BandcampSection } from "../bandcampSection/BandcampSection";
import { Swiper, SwiperSlide } from "../../../../../node_modules/swiper/react";
import cx from "classnames";
import "swiper/css";
import { Autoplay } from "swiper";

export function PostSection({ dataPost }: PostHygraph) {
    return (
        <section className={classes.row}>
            <div className={classes.section}>
                <div>
                    <Swiper className={cx("mySwiper")} autoplay={{ delay: 3000 }} modules={[Autoplay]}>
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
                    <RichText content={dataPost.textPost.raw} />
                </div>
            </div>
            <BandcampSection />
        </section>
    );
}
