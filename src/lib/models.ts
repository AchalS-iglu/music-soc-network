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
}