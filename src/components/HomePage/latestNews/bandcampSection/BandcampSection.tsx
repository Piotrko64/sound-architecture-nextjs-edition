import classes from "./bandcampSection.module.css";

export function BandcampSection() {
    return (
        <div className={classes.containerIframe}>
            <iframe
                style={{ border: 0, height: "780px" }}
                className={classes.iframe}
                src="https://bandcamp.com/EmbeddedPlayer/album=3918256789/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/"
                seamless
            >
                <a href="https://soundarchitecture.bandcamp.com/album/sailing-ambience">
                    Sailing Ambience by Sound Architecture
                </a>
            </iframe>
        </div>
    );
}
