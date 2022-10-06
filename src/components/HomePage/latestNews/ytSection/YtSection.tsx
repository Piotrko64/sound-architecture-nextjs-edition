import classes from "./ytSection.module.css";

export function YtSection() {
    return (
        <div>
            <iframe
                className={classes.iframe}
                src="https://www.youtube.com/embed/-nIWTWAoiGg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}
