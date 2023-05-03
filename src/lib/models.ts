export type User_t = {
    uid: string,
    type: 'SPOTIFY' | 'APPLE',
    username: string,
    dp: string,
    accessToken: string,
    refreshToken: string,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null,
    lastLogin: Date | null,
    lastActivity: Date | null,
}