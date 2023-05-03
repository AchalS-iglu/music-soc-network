import axios from 'axios';

// get user data
export const getUserData = async (accessToken: string) => {
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
};
