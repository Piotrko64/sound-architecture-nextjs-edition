interface BiographyWithEntities {
    raw_text: string;
    entities: any[];
}

interface EdgeFollowedBy {
    count: number;
}

interface EdgeFollow {
    count: number;
}

interface EdgeMutualFollowedBy {
    count: number;
    edges: any[];
}

interface PageInfo {
    has_next_page: boolean;
    end_cursor: string;
}

interface Dimensions {
    height: number;
    width: number;
}

interface EdgeMediaToTaggedUser {
    edges: any[];
}

interface SharingFrictionInfo {
    should_have_sharing_friction: boolean;
    bloks_app_url?: any;
}

interface Owner {
    id: string;
    username: string;
}

interface DashInfo {
    is_dash_eligible: boolean;
    video_dash_manifest?: any;
    number_of_qualities: number;
}

interface Node2 {
    text: string;
}

interface Edge2 {
    node: Node2;
}

interface EdgeMediaToCaption {
    edges: Edge2[];
}

interface EdgeMediaToComment {
    count: number;
}

interface EdgeLikedBy {
    count: number;
}

interface EdgeMediaPreviewLike {
    count: number;
}

interface ThumbnailResource {
    src: string;
    config_width: number;
    config_height: number;
}

interface Node {
    __typename: string;
    id: string;
    shortcode: string;
    dimensions: Dimensions;
    display_url: string;
    edge_media_to_tagged_user: EdgeMediaToTaggedUser;
    fact_check_overall_rating?: any;
    fact_check_information?: any;
    gating_info?: any;
    sharing_friction_info: SharingFrictionInfo;
    media_overlay_info?: any;
    media_preview: string;
    owner: Owner;
    is_video: boolean;
    has_upcoming_event: boolean;
    accessibility_caption?: any;
    dash_info: DashInfo;
    has_audio: boolean;
    tracking_token: string;
    video_url: string;
    video_view_count: number;
    edge_media_to_caption: EdgeMediaToCaption;
    edge_media_to_comment: EdgeMediaToComment;
    comments_disabled: boolean;
    taken_at_timestamp: number;
    edge_liked_by: EdgeLikedBy;
    edge_media_preview_like: EdgeMediaPreviewLike;
    location?: any;
    nft_asset_info?: any;
    thumbnail_src: string;
    thumbnail_resources: ThumbnailResource[];
    felix_profile_grid_crop?: any;
    coauthor_producers: any[];
    pinned_for_users: any[];
    encoding_status?: any;
    is_published: boolean;
    product_type: string;
    title: string;
    video_duration: number;
}

interface Edge {
    node: Node;
}

interface EdgeFelixVideoTimeline {
    count: number;
    page_info: PageInfo;
    edges: Edge[];
}

interface PageInfo2 {
    has_next_page: boolean;
    end_cursor: string;
}

interface Dimensions2 {
    height: number;
    width: number;
}

interface EdgeMediaToTaggedUser2 {
    edges: any[];
}

interface SharingFrictionInfo2 {
    should_have_sharing_friction: boolean;
    bloks_app_url?: any;
}

interface Owner2 {
    id: string;
    username: string;
}

interface Node4 {
    text: string;
}

interface Edge4 {
    node: Node4;
}

interface EdgeMediaToCaption2 {
    edges: Edge4[];
}

interface EdgeMediaToComment2 {
    count: number;
}

interface EdgeLikedBy2 {
    count: number;
}

interface EdgeMediaPreviewLike2 {
    count: number;
}

interface Location {
    id: string;
    has_public_page: boolean;
    name: string;
    slug: string;
}

interface ThumbnailResource2 {
    src: string;
    config_width: number;
    config_height: number;
}

interface DashInfo2 {
    is_dash_eligible: boolean;
    video_dash_manifest?: any;
    number_of_qualities: number;
}

interface Node3 {
    __typename: string;
    id: string;
    shortcode: string;
    dimensions: Dimensions2;
    display_url: string;
    edge_media_to_tagged_user: EdgeMediaToTaggedUser2;
    fact_check_overall_rating?: any;
    fact_check_information?: any;
    gating_info?: any;
    sharing_friction_info: SharingFrictionInfo2;
    media_overlay_info?: any;
    media_preview: string;
    owner: Owner2;
    is_video: boolean;
    has_upcoming_event: boolean;
    accessibility_caption?: any;
    edge_media_to_caption: EdgeMediaToCaption2;
    edge_media_to_comment: EdgeMediaToComment2;
    comments_disabled: boolean;
    taken_at_timestamp: number;
    edge_liked_by: EdgeLikedBy2;
    edge_media_preview_like: EdgeMediaPreviewLike2;
    location: Location;
    nft_asset_info?: any;
    thumbnail_src: string;
    thumbnail_resources: ThumbnailResource2[];
    coauthor_producers: any[];
    pinned_for_users: any[];
    dash_info: DashInfo2;
    has_audio?: boolean;
    tracking_token: string;
    video_url: string;
    video_view_count?: number;
    felix_profile_grid_crop?: any;
    product_type: string;
    clips_music_attribution_info?: any;
}

interface Edge3 {
    node: Node3;
}

interface EdgeOwnerToTimelineMedia {
    count: number;
    page_info: PageInfo2;
    edges: Edge3[];
}

interface PageInfo3 {
    has_next_page: boolean;
    end_cursor?: any;
}

interface EdgeSavedMedia {
    count: number;
    page_info: PageInfo3;
    edges: any[];
}

interface PageInfo4 {
    has_next_page: boolean;
    end_cursor?: any;
}

interface EdgeMediaCollections {
    count: number;
    page_info: PageInfo4;
    edges: any[];
}

interface EdgeRelatedProfiles {
    edges: any[];
}

interface User {
    biography: string;
    bio_links: any[];
    biography_with_entities: BiographyWithEntities;
    blocked_by_viewer: boolean;
    restricted_by_viewer?: any;
    country_block: boolean;
    external_url: string;
    external_url_linkshimmed: string;
    edge_followed_by: EdgeFollowedBy;
    fbid: string;
    followed_by_viewer: boolean;
    edge_follow: EdgeFollow;
    follows_viewer: boolean;
    full_name: string;
    group_metadata?: any;
    has_ar_effects: boolean;
    has_clips: boolean;
    has_guides: boolean;
    has_channel: boolean;
    has_blocked_viewer: boolean;
    highlight_reel_count: number;
    has_requested_viewer: boolean;
    hide_like_and_view_counts: boolean;
    id: string;
    is_business_account: boolean;
    is_eligible_to_view_account_transparency: boolean;
    is_professional_account: boolean;
    is_supervision_enabled: boolean;
    is_guardian_of_viewer: boolean;
    is_supervised_by_viewer: boolean;
    is_supervised_user: boolean;
    is_embeds_disabled: boolean;
    is_joined_recently: boolean;
    guardian_id?: any;
    business_address_json?: any;
    business_contact_method: string;
    business_email?: any;
    business_phone_number?: any;
    business_category_name?: any;
    overall_category_name?: any;
    category_enum?: any;
    category_name: string;
    is_private: boolean;
    is_verified: boolean;
    edge_mutual_followed_by: EdgeMutualFollowedBy;
    profile_pic_url: string;
    profile_pic_url_hd: string;
    requested_by_viewer: boolean;
    should_show_category: boolean;
    should_show_public_contacts: boolean;
    state_controlled_media_country?: any;
    location_transparency_country?: any;
    transparency_label?: any;
    transparency_product: string;
    username: string;
    connected_fb_page?: any;
    pronouns: any[];
    edge_felix_video_timeline: EdgeFelixVideoTimeline;
    edge_owner_to_timeline_media: EdgeOwnerToTimelineMedia;
    edge_saved_media: EdgeSavedMedia;
    edge_media_collections: EdgeMediaCollections;
    edge_related_profiles: EdgeRelatedProfiles;
}

export interface InstagramUserInterface {
    user: User;
}
