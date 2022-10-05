import { RichTextContent } from "@graphcms/rich-text-types";

export interface PostHygraph {
    dataPost: {
        id: string;
        photoPost: { url: string };
        textPost: { raw: RichTextContent };
    };
}
