import type { NextPage } from "next";
import Head from "next/head";
import { Baner } from "../../ui/baner/Baner";

const Ambience: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Ambience</title>
            </Head>
            <Baner title="Ambience" imgURL="/assets/baners/ambience.webp" />
        </div>
    );
};

export default Ambience;
// export async function getStaticProps() {
//     Retu
// }
