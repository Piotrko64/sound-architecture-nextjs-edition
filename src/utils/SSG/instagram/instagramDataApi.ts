import Insta from "scraper-instagram";
const InstaClient = new Insta();

export function getInstaImages() {
    InstaClient.authBySessionId(process.env.SESSIONIDINSTA)
        .then((account: any) => console.log(account))
        .catch((err: any) => console.error(err));
}
