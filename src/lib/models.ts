export type User_t = {
    uid?: string,
    type?: 'SPOTIFY' | 'APPLE',
    providerId?: string,
    username?: string,
    dp?: string,
    createdAt?: number,
    updatedAt?: number,
    deletedAt?: number | null,
    lastLogin?: number | null,
    lastActivity?: number | null,
    tagline?: string,
    profilePlaylists?: {
        display: boolean,
        playlists: Playlist_t[]
    },
    following?: {
        [uid: string]: boolean
    },
    followers?: {
        [uid: string]: boolean
    },
    pendingIncomingFollowRequests?: {
        [uid: string]: boolean
    },
    pendingOutgoingFollowRequests?: {
        [uid: string]: boolean
    },
    topArtists?: Artist_t[],
    topTracks?: Track_t[],
}

export type Playlist_t = {
    collaborative: boolean,
    description: string,
    external_urls: {
        spotify: string
    },
    href: string,
    id: string,
    images: {
        height: number | null,
        width: number | null,
        url: string,
    }[],
    name: string,
    owner: {
        external_urls: {
            spotify: string
        },
        href: string,
        id: string,
        type: string,
        uri: string
        display_name: string,
    },
    public: boolean,
    snapshot_id: string,
    tracks: {
        href: string,
        total: number
    },
    type: string,
    uri: string,
}

export type Message_T = {
    id: string,
    text: string,
    createdAt: number,
    updatedAt?: number,
    deletedAt?: number,
    readAt?: number,
    type: 'TEXT' | 'IMAGE' | 'VIDEO' | 'AUDIO' | 'FILE',
    media?: {
        url: string,
        type: string,
        size: number,
        duration: number,
        height: number,
        width: number,
    },
    reactions?: {
        [uid: string]: {
            type: string,
            createdAt: number,
        }[]
    },
    sender: string,
    reciever: string
}

export type Artist_t = {
    id: string;
    name: string;
    genres: string[];
    images: Array<{
        height: number | null;
        url: string;
        width: number | null;
    }>;
    popularity: number;
    href: string;
    type: string;
};

export type Track_t = {
    id: string;
    name: string;
    artists: Array<{
        external_urls: {
            spotify: string;
        };
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
    }>;
    album: {
        id: string;
        name: string;
        images: Array<{
            height: number;
            url: string;
            width: number;
        }>;
        release_date_precision: string;
        total_tracks: number;
        type: string;
        href: string;
    };
    duration_ms: number;
    explicit: boolean;
    href: string;
    popularity: number;
    type: string;
};