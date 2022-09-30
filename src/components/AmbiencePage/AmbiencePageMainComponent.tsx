import { ArrayYTDataIframe } from "../../@types/iframes/IframeYTDataType";
import { filterByTitleAndDescription } from "../../helpers/ytTools/filterByTitleAndDescription";
import { useSearchingStore } from "../../store/useSearchingStore";
import { Baner } from "../../ui/baner/Baner";
import { ListYTIframes } from "./listYTIframes/ListYTIframes";
import { SearchAmbience } from "./searchAmbience/SearchAmbience";
import classes from "./ambiencePage.module.css";
import cx from "classnames";

export function AmbiencePageMainComponent({ iframesData }: { iframesData: ArrayYTDataIframe }) {
    const { ambienceTitleSearch } = useSearchingStore((state) => state);
    const filterList = filterByTitleAndDescription(iframesData, ambienceTitleSearch).reverse();

    return (
        <>
            <Baner
                title="Ambience"
                imgURL="/assets/baners/ambience.webp"
                blurURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIACwAcwMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAADBAUGAAIB/8QAJRAAAQUAAgEEAgMAAAAAAAAAAAECAwRhEVEhBRMxQRIUFTJS/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIBEAAgIDAQACAwAAAAAAAAAAAAECEgMREyEEFDFBUf/aAAwDAQACEQMRAD8AlI9D21yE5JwrJtFcKFJjgzFJ0cujLJA6IKDzVCIooyQIkgdEPmxnk+KoH3NPDpdH0QUCPcAkegOSbRWWfR3E4BJXIKSvQDNY0SmtJ2O5LiMSPQXfIglLbTsWfbTsLkOJT9xDiT+4nZwXJqNpb0PHa0zLbWh4rWnn2Z6GkamKzo3HY0y8VvRyK3pO2UkjSssJ2FSwnZnmW9Cpb0NsfhcWxoJ9nSOtvQT7elrYvCnLZ0SmtfPkQltaIT2vnyWtkvQ9Pb4+ybYu8c+RGza+fJHt21RF8jbkjN6Kk/qCJ9iMvqfH2Z63eXzwpOfYkev9lQIxnL38Gba/RrP5TTjH+4//AEpxXKX9EbFLGhmWdJCOUI169nVwRzfZZbjtaNMt6Z9j17DsevYcIlL5LNAy5oVLmkFj3dhWuXsf14lLOy1+5p4da0l/kvZyuXspYIldmOyWefsTmn0E5VF5VUtYUJ5WeLM3z5JNlyv56G515UUkNFhijmllcnomzxqosrVQpSILPRCHhibwn4K8HB+EOJ4o0sf/2Q=="
            />
            <div className={cx(classes.mainContainer, "globalPadding")}>
                <SearchAmbience />
                <ListYTIframes listIframes={filterList} />
            </div>
        </>
    );
}
