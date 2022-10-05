import { AboveMainFooter } from "./aboveMainFooter/AboveMainFooterComponent";
import { TheHeader } from "./header/TheHeader";
import { LatestNews } from "./latestNews/LatestNews";
import { PostHygraph } from "../../@types/graphql/PostHygraph";

export function HomePageMainComponent({ dataPost }: PostHygraph) {
    return (
        <>
            {/* <img src={dataProject.photoPost.url} />
            <RichText content={dataProject.textPost.raw} /> */}
            <TheHeader />
            <LatestNews dataPost={dataPost} />
            <AboveMainFooter />
        </>
    );
}
