import React, { useRef } from "react";
import { Animated, PanResponder, StyleSheet, View } from "react-native";
import IT_Logo from './assets/IT_Logo.png';

export default function Gesture() {
  const pan = useRef(new Animated.ValueXY()).current;
  const scale = useRef(new Animated.Value(1)).current;
  
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      pan.setOffset({
        x: pan.x._value,
        y: pan.y._value,
      });
      pan.setValue({ x: 0, y: 0 });
    },
    onPanResponderMove: (evt, gestureState) => {
      const touches = evt.nativeEvent.touches;
      if (touches.length >= 2) {
        Animated.spring(scale, {
          toValue: 3,
          friction: 3,
          useNativeDriver: false,
        }).start();
      }
      Animated.event(
        [
          null,
          {
            dx: pan.x, // x,y are Animated.Value
            dy: pan.y,
          },
        ],
        { useNativeDriver: false }
      )
      (evt, gestureState);
    },
    onPanResponderRelease: () => {
      Animated.spring(scale, {
        toValue: 1,
        friction: 3,
        useNativeDriver: false,
      }).start();
      pan.flattenOffset();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.Image
            {...panResponder.panHandlers}
            style={[pan.getLayout(), {width:100,height:100,objectFit:'contain'}, { transform: [{ scale: scale }] }]}
            source={IT_Logo}
          />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
