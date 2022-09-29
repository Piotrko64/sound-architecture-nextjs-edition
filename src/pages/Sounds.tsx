import type { NextPage } from "next";
import Head from "next/head";
import { iframeBandcampDataInterface } from "../../@types/IframeBandcampDataInterface";
import { Baner } from "../../ui/baner/Baner";
import { SoundsPageMainComponent } from "../components/SoundsPage/SoundsPageMainComponent";
import { iframesBandcampDataParser } from "../helpers/domParser/iframesBandcampDataParser";
import { getBandcampDataDataForIframe } from "../utils/SSG/bandcamp/getBandcampDataForIframe";

const Sounds: NextPage<iframeBandcampDataInterface> = ({ iframeObjects }) => {
    console.log(iframeObjects);
    return (
        <div>
            <Head>
                <title>Sound Effects</title>
            </Head>
            <Baner
                imgURL="/assets/baners/sounds.webp"
                title="Sound Libraries"
                blurURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIACwAcwMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAADBAUGAAIB/8QAJRAAAQUAAgEEAgMAAAAAAAAAAAECAwRhEVEhBRMxQRIUFTJS/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIBEAAgIDAQACAwAAAAAAAAAAAAECEgMREyEEFDFBUf/aAAwDAQACEQMRAD8AlI9D21yE5JwrJtFcKFJjgzFJ0cujLJA6IKDzVCIooyQIkgdEPmxnk+KoH3NPDpdH0QUCPcAkegOSbRWWfR3E4BJXIKSvQDNY0SmtJ2O5LiMSPQXfIglLbTsWfbTsLkOJT9xDiT+4nZwXJqNpb0PHa0zLbWh4rWnn2Z6GkamKzo3HY0y8VvRyK3pO2UkjSssJ2FSwnZnmW9Cpb0NsfhcWxoJ9nSOtvQT7elrYvCnLZ0SmtfPkQltaIT2vnyWtkvQ9Pb4+ybYu8c+RGza+fJHt21RF8jbkjN6Kk/qCJ9iMvqfH2Z63eXzwpOfYkev9lQIxnL38Gba/RrP5TTjH+4//AEpxXKX9EbFLGhmWdJCOUI169nVwRzfZZbjtaNMt6Z9j17DsevYcIlL5LNAy5oVLmkFj3dhWuXsf14lLOy1+5p4da0l/kvZyuXspYIldmOyWefsTmn0E5VF5VUtYUJ5WeLM3z5JNlyv56G515UUkNFhijmllcnomzxqosrVQpSILPRCHhibwn4K8HB+EOJ4o0sf/2Q=="
            />
            {/* <SoundsPageMainComponent iframesListData={iframeObjects} /> */}
        </div>
    );
};

export default Sounds;
// export async function getStaticProps() {
// const iframeData = await getBandcampDataDataForIframe();
// const iframeObjects = iframesBandcampDataParser(iframeData);
// return {
//     props: { iframeObjects },
// };
// }
