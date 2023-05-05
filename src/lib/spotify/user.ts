import axios from 'axios';
import { Playlist_t } from '../models';

// get user data
export const getUserData = async (accessToken: string) => {
  try {
    const res = await axios.get('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return res.data as {
      country: string;
      display_name: string;
      email: string;
      explicit_content: { filter_enabled: boolean; filter_locked: boolean };
      external_urls: { spotify: string };
      followers: { href: string; total: number };
      href: string;
      id: string;
      images: [
        {
          url: string;
          height: number;
          width: number;
        }
      ];
      product: string;
      type: string;
      uri: string;
    };
  }
  catch (err) {
    console.log(`
      Error in getUserData: ${err}`);
    return;
  }
};

// get user playlists
export const getUserPlaylists = async (accessToken: string) => {
  try {
    let playlists: Playlist_t[] = [];
    let nextUrl = 'https://api.spotify.com/v1/me/playlists';

    while (nextUrl) {
      const res = await axios.get(nextUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      playlists = [...playlists, ...res.data.items];
      nextUrl = res.data.next;
    }

    return playlists;
  } catch (err) {
    console.log(`
      Error in getUserPlaylists: ${err}`);
    return;
  }
};