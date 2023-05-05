import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { commonStyles } from '../../../styles/common';
import { colours } from '../../../styles/colours';
import { Playlist_t } from '../../../lib/models';
import { getUserPlaylists } from '../../../lib/spotify/user';
import { AuthContext } from '../../../lib/auth/context';
import { useRouter } from 'expo-router';

const selectedReducer = (
  state: { [key: string]: boolean },
  action: {
    type: string;
    payload: {
      key: string;
      value: boolean;
    };
  }
) => {
  switch (action.type) {
    case 'set':
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case 'toggle':
      return {
        ...state,
        [action.payload.key]: !state[action.payload.key],
      };
    default:
      return state;
  }
};

const playlists = () => {
  const [playlistsList, setPlaylistsList] = useState<Playlist_t[]>([]);
  const [selected, dispatchSelected] = useReducer(selectedReducer, {});
  const [loadingPlaylists, setLoadingPlaylists] = useState<boolean>(true);
  const { accessToken, updateUser, user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    // fetch playlists
    console.log(accessToken);
    if (!accessToken) return;
    getUserPlaylists(accessToken).then((res) => {
      console.log('playlists', res?.length);
      setPlaylistsList(res ?? []);
      res?.forEach((playlist) => {
        dispatchSelected({
          type: 'set',
          payload: {
            key: playlist.id,
            value:
              user.profilePlaylists?.playlists?.some(
                (p) => p.id === playlist.id
              ) ?? false,
          },
        });
      });
      setLoadingPlaylists(false);
    });
  }, []);

  const handleSubmit = () => {
    const selectedPlaylists = playlistsList.filter(
      (playlist) => selected[playlist.id]
    );
    updateUser({
      profilePlaylists: {
        display: user.profilePlaylists?.display ?? true,
        playlists: selectedPlaylists,
      },
    });
    router.push('/editProfile');
  };

  return (
    <View
      style={{
        ...commonStyles.standardContainer,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
      }}
    >
      <View
        style={{
          marginTop: 48,
          width: '100%',
          flexDirection: 'column',
          paddingHorizontal: 24,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: colours.GreenDark,
          }}
        >
          Select Playlists to Display
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          height: '80%',
        }}
      >
        {loadingPlaylists ? (
          <View
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: colours.GreenDark,
              }}
            >
              Loading Playlists...
            </Text>
          </View>
        ) : (
          <FlatList
            data={playlistsList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                key={item.id}
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 24,
                  paddingVertical: 12,
                  borderBottomWidth: 1,
                  borderBottomColor: colours.GreenNice,
                }}
              >
                <Image
                  source={{
                    uri: item.images[0]?.url ?? 'https://picsum.photos/300',
                  }}
                  style={{
                    height: 48,
                    width: 48,
                    marginHorizontal: 16,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    width: '65%',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: colours.GreenDark,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: colours.GreenDark,
                    }}
                  >
                    {item.description}
                  </Text>
                </View>
                <Switch
                  style={{
                    marginLeft: 'auto',
                  }}
                  trackColor={{
                    false: colours.GreenDark,
                    true: colours.GreenDark,
                  }}
                  thumbColor={colours.GreenNice}
                  ios_backgroundColor={colours.GreenDark}
                  onValueChange={() => {
                    dispatchSelected({
                      type: 'toggle',
                      payload: {
                        key: item.id,
                        value: selected[item.id],
                      },
                    });
                  }}
                  value={selected[item.id]}
                />
              </View>
            )}
          />
        )}
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <TouchableHighlight
          style={{
            width: '90%',
            paddingHorizontal: 24,
            paddingVertical: 12,
            backgroundColor: '#E5E5E5',
            borderRadius: 8,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 24,
          }}
          underlayColor={'#D1D1D1'}
          onPress={handleSubmit}
        >
          <Text
            style={{
              fontSize: 24,
            }}
          >
            Submit
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default playlists;

const styles = StyleSheet.create({
  playlistsList: {
    width: '100%',
    flexDirection: 'column',
  },
});
