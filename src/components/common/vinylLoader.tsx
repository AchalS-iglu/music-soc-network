import React, { useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { colours } from '../../styles/colours';

const VinylLoader = () => {
  const rotation = new Animated.Value(0);

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();
  };

  const interpolateRotation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '359deg'],
  });

  const animatedStyles = {
    transform: [{ rotate: interpolateRotation }],
  };

  return (
    <View style={styles.container}>
      <View style={styles.plate}>
        <Animated.View style={[styles.black, animatedStyles]}>
          <View style={styles.border}>
            <View style={styles.white}>
              <View style={styles.center}></View>
            </View>
          </View>
        </Animated.View>
      </View>
      <View style={styles.player}>
        <View style={styles.rect}></View>
        <View style={styles.circ}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 175,
    height: 175,
    backgroundColor: colours.DustyBlue,
    borderRadius: 10,
    position: 'relative',
    shadowOffset: { width: 5, height: 5 },
    shadowColor: '#675D50',
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plate: {},
  black: {
    width: 150,
    height: 150,
    backgroundColor: '#675D50',
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  white: {
    width: 70,
    height: 70,
    backgroundColor: '#F3DEBA',
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    width: 20,
    height: 20,
    backgroundColor: '#675D50',
    borderRadius: 100,
  },
  border: {
    width: 111,
    height: 111,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopColor: '#F3DEBA',
    borderBottomColor: '#F3DEBA',
    borderLeftColor: '#675D50',
    borderRightColor: '#675D50',
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  player: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: 8,
    marginRight: 8,
    transform: [{ rotate: '-45deg' }],
  },
  circ: {
    width: 25,
    height: 25,
    backgroundColor: '#F3DEBA',
    borderRadius: 100,
    zIndex: 1,
  },
  rect: {
    width: 10,
    height: 55,
    backgroundColor: '#F3DEBA',
    position: 'absolute',
    bottom: 0,
    marginBottom: 5,
  },
});

export default VinylLoader;
