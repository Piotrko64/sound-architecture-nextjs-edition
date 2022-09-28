import { iframeBandcampData } from "../../../@types/IframeBandcampDataInterface";
import { ListIframes } from "./listIframes/ListIframes";

export function SoundsPageMainComponent({ iframesListData }: { iframesListData: Array<iframeBandcampData> }) {
    return (
        <>
            <ListIframes listIframesData={iframesListData} />
        </>
    );
}
