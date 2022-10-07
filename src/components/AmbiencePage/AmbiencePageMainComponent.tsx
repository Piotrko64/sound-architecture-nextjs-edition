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
            <div className={cx(classes.mainContainer, "globalPadding")}>
                <SearchAmbience />
                <ListYTIframes listIframes={filterList} />
            </div>
        </>
    );
}
