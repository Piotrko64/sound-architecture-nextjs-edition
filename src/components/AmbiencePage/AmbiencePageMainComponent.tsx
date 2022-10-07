import { ArrayYTDataIframe } from "../../@types/iframes/IframeYTDataType";
import { filterByTitleAndDescription } from "../../helpers/ytTools/filterByTitleAndDescription";
import { useSearchingStore } from "../../store/useSearchingStore";
import { ListYTIframes } from "./listYTIframes/ListYTIframes";
import { SearchAmbience } from "./searchAmbience/SearchAmbience";
import classes from "./ambiencePage.module.css";
import cx from "classnames";

type Props = { iframesData: ArrayYTDataIframe };

export function AmbiencePageMainComponent({ iframesData }: Props) {
    const { ambienceTitleSearch } = useSearchingStore();
    const filterList = filterByTitleAndDescription(iframesData, ambienceTitleSearch);

    return (
        <>
            <div className={cx(classes.mainContainer, "globalPadding")}>
                <SearchAmbience />
                <ListYTIframes listIframes={filterList} />
            </div>
        </>
    );
}
