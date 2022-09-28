export async function getYoutubeVideoID() {
    fetch(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=500&playlistId=PLfVf1eElYE11Rf0xV7bZBUd9xZOhqhOJ9&key=${process.env.YOUTUBEAPIKEY}`
    )
        .then((e) => e.json())
        .then((data: any) => console.log(data.items.map((el: any) => el.resourceId.videoId)));
}
