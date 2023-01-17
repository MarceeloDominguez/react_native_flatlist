import React from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export default function ListItems({ item, vItems }) {
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      vItems.value
        .filter((item) => item.isViewable)
        .find((vItem) => vItem.item.id === item.id)
    );

    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [{ scale: withTiming(isVisible ? 1 : 0.6) }],
    };
  }, []);

  return <Animated.View style={[styles.container, rStyle]} />;
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "90%",
    backgroundColor: "#C0EEE4",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 15,
    elevation: 5,
  },
});
