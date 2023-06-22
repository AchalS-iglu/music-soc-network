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