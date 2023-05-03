import * as Crypto from 'expo-crypto';
import { Buffer } from 'buffer'

export function generateRandomString(length: number) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

export function base64encode(string: string): string {
    const buffer = Buffer.from(string, 'utf-8');
    const base64 = buffer.toString('base64');
    const base64url = base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    return base64url;
}

export async function sha256(s: string) {
    const digest = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        s
    );
    return digest;
}

export async function generateCodeChallenge(codeVerifier: string) {
    const hashed = await sha256(codeVerifier);
    const base64encoded = base64encode(hashed);
    return base64encoded;
}

export const getSearchParamFromURL = (url: string, param: string) => {
    const include = url.includes(param)

    if (!include) return null

    const params = url.split(/([&,?,=])/)
    const index = params.indexOf(param)
    const value = params[index + 2]
    return value
}