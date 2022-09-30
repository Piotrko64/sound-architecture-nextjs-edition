interface ResourceId {
    kind: string;
    videoId: string;
}

export interface YoutubeVideoInterface {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;

    channelTitle: string;
    playlistId: string;
    position: number;
    resourceId: ResourceId;
    videoOwnerChannelTitle: string;
    videoOwnerChannelId: string;
}
