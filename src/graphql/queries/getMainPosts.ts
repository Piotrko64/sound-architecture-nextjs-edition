import { gql } from "graphql-request";
export const getMainPosts = gql`
    query {
        mains {
            id
            photoPost {
                url
            }
            textPost {
                raw
            }
        }
    }
`;
