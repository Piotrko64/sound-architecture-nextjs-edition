import type { NextPage } from "next";
import { PostHygraph } from "../@types/graphql/PostHygraph";
import { HomePageMainComponent } from "../components/HomePage/HomePageMainComponent";
import { getHygraphPost } from "../helpers/hygraph/getHygraphPost";

const Home: NextPage<PostHygraph> = ({ dataPost }) => {
    return <HomePageMainComponent dataPost={dataPost} />;
};

export default Home;
export async function getStaticProps() {
    const postData = await getHygraphPost();

    return {
        props: {
            dataPost: postData,
        },
    };
}
