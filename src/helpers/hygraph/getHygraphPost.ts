import { GraphQLClient } from "graphql-request";
import { getMainPosts } from "../../graphql/queries/getMainPosts";
export async function getHygraphPost() {
    const hygraph = new GraphQLClient(process.env.HYGRAPHURL!, {
        headers: {
            Authorization: `Bearer ${process.env.KEYHYGRAPH}`,
        },
    });

    const QUERY = getMainPosts;

    const dataProjects = await hygraph.request(QUERY);
    return dataProjects.mains[0];
}
