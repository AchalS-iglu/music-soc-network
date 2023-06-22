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

export const getPlaybackState = async (accessToken: string) => {
  try {
    const res = await axios(
      'https://api.spotify.com/v1/me/player',
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    // console.log(res.data)
    return {
      isPlaying: res.data.is_playing,
      progressMs: res.data.progress_ms,
      item: res.data.item,
    } as {
      isPlaying: boolean;
      progressMs: number;
      item: {
        album_type: "compilation";
        total_tracks: number;
        available_markets: string[];
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        images: {
          url: string;
          height: number;
          width: number;
        }[];
        name: string;
        release_date: string;
        release_date_precision: "year";
        restrictions: {
          reason: "market";
        };
        type: "album";
        uri: string;
        copyrights: {
          text: string;
          type: string;
        }[];
        external_ids: {
          isrc: string;
          ean: string;
          upc: string;
        };
        genres: string[];
        label: string;
        popularity: number;
        album_group: "compilation";
        artists: {
          external_urls: {
            spotify: string;
          };
          href: string;
          id: string;
          name: string;
          type: "artist";
          uri: string;
        }[];
      }
    }
  }
  catch (err) {
    console.log(`Error in getPlaybackState: ${err}`)
  }
}