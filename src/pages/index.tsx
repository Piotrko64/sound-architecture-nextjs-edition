import type { NextPage } from "next";
import { HomePageMainComponent } from "../components/HomePage/HomePageMainComponent";
import { getHygraphPost } from "../helpers/hygraph/getHygraphPost";

const Home: NextPage = ({ dataProject }: any) => {
    return <HomePageMainComponent dataProject={dataProject} />;
};

export default Home;
export async function getStaticProps() {
    const postData = await getHygraphPost();

    return {
        props: {
            dataProject: postData,
        },
    };
}
