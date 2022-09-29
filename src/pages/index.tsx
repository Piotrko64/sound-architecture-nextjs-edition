import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import { InstagramUserInterface } from "../../@types/SSG/InstagramUserInterface";
import { HomePageMainComponent } from "../components/HomePage/HomePageMainComponent";

const Home: NextPage = ({ posts }: any) => {
    return <HomePageMainComponent />;
};

export default Home;
export async function getStaticProps() {
    // const dataPosts: InstagramUserInterface = await axios({
    //     url: "https://api.zenrows.com/v1/?apikey=f0d260bdf121721ace1991d288f25add9b0ccd29&url=https%3A%2F%2Fwww.instagram.com%2Fsoundarchitecture_sa%2F&js_render=true&premium_proxy=true&autoparse=true",
    //     method: "GET",
    // })
    //     .then((response) => response.data)
    //     .catch((error) => console.log(error));

    return {
        props: {
            // imagesUrl: dataPosts.user.edge_owner_to_timeline_media.edges.map((post) => post.node.display_url),
        },
    };
}
