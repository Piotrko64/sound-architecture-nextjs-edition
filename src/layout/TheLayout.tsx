import { Footer } from "./footer/Footer";
import { Navigation } from "./navigation/Navigation";

export function TheLayout({ children }: { children: JSX.Element }) {
    return (
        <>
            <Navigation />
            {children}
            <Footer />
        </>
    );
}
